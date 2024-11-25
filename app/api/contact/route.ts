import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error("Discord webhook URL is not configured");
    }

    const timestamp = new Date().toISOString();

    const embed = {
      title: "Nouveau message du site: hugo-damion.me",
      color: 0x3b82f6, // Couleur bleue primary
      fields: [
        {
          name: "Nom de l'utilisateur",
          value: name,
          inline: true,
        },
        {
          name: "Email de l'utilisateur",
          value: email,
          inline: true,
        },
        {
          name: "Sujet",
          value: subject,
        },
        {
          name: "Message",
          value: message,
        },
      ],
      footer: {
        text: "Portfolio - Formulaire de contact",
      },
      timestamp,
    };

    const discordMessage = {
      embeds: [embed],
    };

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });

    if (!response.ok) {
      throw new Error("Failed to send Discord webhook");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
