import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

// Set SendGrid API Key
sgMail.setApiKey('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');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    const msg = {
      to: 'professional@parlicentre.org',
      from: 'jack.vanderpump@publicpolicyexchange.co.uk',
      subject: 'New Contact Form Submission',
      text: message,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Email not sent:', error);
      res.status(400).json({ message: `Email not sent ${error}` });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
