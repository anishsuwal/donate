const fetch = require('node-fetch');

export default async function handler(req, res) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDGRID_EMAIL = 'anishbsuwal@gmail.com';

  const requestBody = JSON.stringify({
    personalizations: [{
      to: [{ email: SENDGRID_EMAIL }]
    }],
    from: { email: SENDGRID_EMAIL },
    subject: "Liquidation occurred!",
    content: [{ type: "text/plain", value: JSON.stringify(req.body, null, 4) }]
  });

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: requestBody
    });

    if (!response.ok) {
      console.error(`Failed to send email: ${response.status} - ${response.statusText}`);
      return res.status(response.status).send('');
    }

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
