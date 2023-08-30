import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { username, password } = req.body;

  // Dummy check for username and password. In a real-world application, validate against a database.
  if (username === 'user' && password === 'pass') {
    // Generate a token (in a real application, you'd generate a secure token here)
    const token = 'your-secure-token-here';

    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
};

export default handler;
