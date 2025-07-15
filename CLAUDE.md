# Professional Development Network - Database & Authentication Guide

## Overview

This application uses a dual authentication and user management system built with Supabase Auth and a custom public users table. This document explains how the system works, why it's structured this way, and how to maintain it.

## Architecture

### Supabase Auth (`auth.users`)
- Handles authentication, password management, and sessions
- Stores user metadata in `raw_user_meta_data` field
- Managed entirely by Supabase Auth service
- Primary source of truth for login credentials

### Public Users Table (`public.users`)
- Queryable user profiles for application features
- Normalized structure for efficient queries
- Used for user listings, search, and business logic
- Connected to auth via foreign key relationship

## Database Schema

### Auth Users (Supabase managed)
```sql
auth.users {
  id: uuid (primary key)
  email: text
  raw_user_meta_data: jsonb  -- Contains all custom user fields
  created_at: timestamptz
  -- Other Supabase auth fields
}
```

### Public Users Table
```sql
public.users {
  id: uuid (foreign key to auth.users.id)
  email: text (unique)
  firstname: text
  lastname: text
  phone: text
  country: text
  birthdate: text
  biography: text
  position: text
  organisation: text
  profile_image: text
  role: text (default: 'user')
  created_at: timestamptz (default: now())
  updated_at: timestamptz (default: now())
}
```

## User Creation Flow

### 1. Frontend Registration
When a user registers via the frontend:
```typescript
// AuthProvider.tsx - createUser function
const createUser = async (userData: CreateUserData): Promise<boolean> => {
  // Step 1: Create auth user with metadata
  const {data, error} = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
    options: {
      data: createCustomUserData(userData)  // Stores in raw_user_meta_data
    }
  });

  // Step 2: Create queryable profile record
  const {error: profileError} = await supabase
    .from('users')
    .insert([createUserDataForDB(data.user?.id, userData)]);
}
```

### 2. Admin User Creation
For admin-created users (via `/api/users`):
```typescript
// Uses supabaseAdmin to create both auth and profile records
// Bypasses email confirmation for admin-created accounts
```

## Data Flow & Synchronization

### User Metadata Storage
- **Auth metadata**: Stored in `auth.users.raw_user_meta_data` as JSON
- **Public profile**: Normalized in `public.users` for efficient querying
- **Synchronization**: Manual via application code (no automatic triggers)

### Why This Architecture?

1. **Performance**: Direct queries on `public.users` are faster than JSON operations on auth metadata
2. **Flexibility**: Can add indexes, constraints, and relationships to public table
3. **Business Logic**: Easier to implement features like user search, filtering, admin panels
4. **Separation of Concerns**: Auth logic separate from business logic

## Important: No Automatic Triggers

**Critical**: This database does NOT use automatic triggers to sync auth.users with public.users. This is intentional to match the electoral database setup and ensure consistent behavior.

### Why No Triggers?
- Prevents race conditions during user creation
- Allows explicit control over data flow
- Matches existing electoral codebase architecture
- Avoids duplicate key violations

## Data Models

### CreateUserData
Used when creating new users:
```typescript
interface CreateUserData extends BaseUserData {
  password: string;
}
```

### MutableUserData  
Used for user updates and profiles:
```typescript
interface MutableUserData extends BaseUserData {
  id: string;
}
```

### UserTable
Database representation:
```typescript
interface UserTable {
  id: string | undefined;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  country: string;
  birthdate: string;
  biography: string;
  position: string;
  organisation: string;
  profile_image: string;  // Note: snake_case for DB
  role: string | undefined;
  created_at: string;
  updated_at: string;
}
```

## Key Functions

### createCustomUserData()
Transforms user data for auth metadata storage:
```typescript
// Strips password and formats for JSON storage in auth.users
```

### createUserDataForDB()
Transforms user data for public.users insertion:
```typescript
// Converts to snake_case, adds timestamps, handles defaults
```

### createMutableUserData()
Extracts user data from Supabase auth user object:
```typescript
// Reads from user.user_metadata for client-side operations
```

## User Roles

- **admin**: Full system access, can manage users and content
- **user**: Standard user access (default)

Roles are stored in both:
- `auth.users.raw_user_meta_data.role`
- `public.users.role`

## Security Considerations

### Row Level Security (RLS)
- Enabled on `public.users` table
- Users can read their own records
- Admins can read/modify all records

### API Security
- `/api/users/*` endpoints require proper authentication
- Admin functions protected by role checks
- Password verification required for sensitive operations

## Environment Variables

Required for proper operation:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# MongoDB (for events/articles)
MONGODB_URI=mongodb+srv://...

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Database Maintenance

### User Updates
User profile updates go through the API:
```typescript
// PUT /api/users/[id] 
// Updates both auth metadata and public.users record
```

### User Deletion
Properly cleans up both auth and public records:
```typescript
// DELETE /api/users/[id]
// Removes from auth.users (cascades to public.users via FK)
```

### Data Consistency
To ensure data consistency between auth and public tables:
1. Always update both records when modifying user data
2. Use transactions where possible
3. Handle errors gracefully with rollbacks

## Common Operations

### Getting User Profile
```typescript
const user = await authProvider.getUser();
// Returns data from public.users table
```

### Updating User Profile
```typescript
const updatedUser = await authProvider.updateUser(userData, userId);
// Updates both auth metadata and public.users
```

### Admin User Management
```typescript
// Create user without signup
await authProvider.createUserWithoutSignup(userData);

// Delete user (admin)
await authProvider.deleteUserWithoutPassword(userId);
```

## Troubleshooting

### Common Issues

1. **User creation fails**: Check that both auth and public.users inserts succeed
2. **Profile data missing**: Verify metadata is properly stored in auth.users
3. **Permission errors**: Check RLS policies and user roles
4. **Sync issues**: Ensure both auth and public records are updated together

### Data Verification
```sql
-- Check auth user has metadata
SELECT id, email, raw_user_meta_data FROM auth.users WHERE email = 'user@example.com';

-- Check public profile exists
SELECT * FROM public.users WHERE email = 'user@example.com';

-- Verify foreign key relationship
SELECT a.id, a.email, p.firstname, p.lastname 
FROM auth.users a 
LEFT JOIN public.users p ON a.id = p.id 
WHERE a.email = 'user@example.com';
```

## Migration Notes

This system is designed to be consistent with the electoral database architecture. Any changes should maintain compatibility with the shared codebase patterns.

---

*Last updated: July 15, 2025*
*Database: professional-network-db*
