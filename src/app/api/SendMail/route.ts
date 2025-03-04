import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Charger les variables d’environnement
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, phoneNumber, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ message: 'Veuillez remplir tous les champs obligatoires' }, { status: 400 });
    }

    // Configuration du transporteur SMTP (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser, 
        pass: emailPass 
      }
    });

    // Options de l'email
    const mailOptions = {
      from: email,
      to: 'nadiabakrim06@gmail.com',
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: `Entreprise: ${company || 'Non renseigné'}\nTéléphone: ${phoneNumber || 'Non renseigné'}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}
