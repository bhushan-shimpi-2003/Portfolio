// This is a representative Serverless Function (e.g., for Vercel/Netlify Functions)
// Filename: /api/contact.ts

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: any, res: any) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message }: ContactRequest = req.body;

  // 1. Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // 2. Rate Limiting (Simple In-Memory Placeholder)
  // In production, use Redis or database
  // const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  // if (isRateLimited(ip)) return res.status(429).json({ error: 'Too many requests' });

  try {
    // 3. Email Integration (SendGrid/Nodemailer Placeholder)
    console.log(`Sending email from ${email}: ${message}`);
    
    // await sendEmail({ to: 'shimpibhushan2503@gmail.com', subject: `New Contact from ${name}`, body: message });

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}