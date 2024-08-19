import { NextApiRequest, NextApiResponse } from 'next';
// import * as SibApiV3Sdk from 'sib-api-v3-sdk';
// const defaultClient = SibApiV3Sdk.ApiClient.instance;

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { name, email, phone, subject, message } = JSON.parse(req.body);

    const data = {
      sender: {
        name: 'Mailer',
        email: 'mailer@gass.id',
      },
      to: [
        {
          email: 'info@gass.id',
          name: 'Info Gass',
        },
        {
          email: 'aroal.badri@gass.id',
          name: 'Info Gass',
        },
      ],
      subject: `Mail from Web Visitor ${name}`,
      htmlContent: `
      <h3>Mail from Web Visitor</h3>
      <p>Name : ${name}</p>
      <p>Email : ${email}</p>
      <p>Phone/Whatsapp : ${phone}</p>
      <p>Subject : ${subject}</p>
      <p>Message: ${message}</p>
      <p>Please dont reply this message. Just response this by email or whatsapp data above asap!.
      `,
    };
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY_V3,
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    res.status(200).json({ message: 'mail success' });
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: 'Not found' });
  }
}
