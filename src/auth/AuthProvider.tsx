import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import jwtDecode from 'jwt-decode';

interface DecodedToken {
  exp: number;
}

interface AuthProviderProps {
  children: ReactNode;
}

const tokenStorageKey = 'token'
const refreshTokenStorageKey = 'refresh_token'
const baseURL = 'https://icpsknowledgenetwork.com/api'

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoadingLogInInfo, setIsLoadingLogInInfo] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem(tokenStorageKey);
    const refreshToken = localStorage.getItem(refreshTokenStorageKey);

    if (token && refreshToken) {
      const decoded: DecodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        refreshTokens();
      } else {
        setIsLoggedIn(true);

        const timeoutId = setTimeout(() => {
          refreshTokens();
        }, (decoded.exp - currentTime - 60) * 1000);

        return () => clearTimeout(timeoutId);  // Clear the timer when the component unmounts
      }
    }
    setIsLoadingLogInInfo(false)
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, refresh_token } = data;

        localStorage.setItem(tokenStorageKey, token);
        localStorage.setItem(refreshTokenStorageKey, refresh_token);

        setIsLoggedIn(true);
      } else {
        signout();
        throw new Error('Login failed');
      }
    } catch (error) {
      console.log(error)
      signout();
      throw error;
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phone: string,
    organisation: string,
    role: string
  ) => {
    try {
      const response = await fetch(`${baseURL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email,
          password,
          phone,
          organisation,
          position: role,
          // Fields not provided are left blank
          country: "",
          birthdate: "",
          profileName: "",
          profileTitle: "",
          isNewsletterSubscribe: true,
          isProfileRestricted: true,
          interests: [],
          skills: [],
          biography: "",
          profileImage: ""
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, refreshToken } = data;

        localStorage.setItem(tokenStorageKey, token);
        localStorage.setItem(refreshTokenStorageKey, refreshToken);

        setIsLoggedIn(true);
      } else if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData["hydra:description"] || 'Error signing up. Please try again.';
        signout();
        alert(errorMessage);
      }
    } catch (error) {
      signout();
      alert('Error signing up: ' + error);
    }
  };

  const signout = () => {
    localStorage.removeItem(tokenStorageKey);
    localStorage.removeItem(refreshTokenStorageKey);
    setIsLoggedIn(false);
  };

  const refreshTokens = async () => {
    // Implement the logic to refresh the token using the refresh token
    // Update localStorage with the new token and refresh token
    // Update the isLoggedIn state if necessary
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoadingLogInInfo, setIsLoggedIn, login, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

/****************************************
 * MARK: Custom Hook to use the auth context
 ****************************************/

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthContextProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  isLoadingLogInInfo: boolean;
  login: (username: string, password: string) => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string, phone: string, organisation: string, role: string) => Promise<void>;
  signout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
