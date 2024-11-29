import { Resend } from 'resend';
import { EmailTemplate } from '@/components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';

interface ErrorResponse {
    success: boolean;
    error: string;
}
  
interface SuccessResponse {
    success: boolean;
    data: {
      message: string;
    };
}

interface CloudflareTurnstileResponse {
  success: boolean;
  "error-codes": string[];
  challenge_ts: string;
  hostname: string;
}

import { z } from 'zod';

const emailSchema = z.object({
  fullname: z.string().min(2).max(50),
  email: z.string().email().min(5).max(50),
  company: z.string().min(2).max(50),
  message: z.string().min(10).max(500),
});

const resend = new Resend(process.env.RESEND_API_KEY);
  
  export async function POST(req: NextRequest): Promise<NextResponse<ErrorResponse | SuccessResponse>> {
    try {
        const { token, ...formData }  = await req.json();

        // Validar token de Turnstile
        const turnstileRequest = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            method: "POST",
            body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(token)}`,
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
          }
        );

        const turnstileResponse = await turnstileRequest.json() as CloudflareTurnstileResponse;

        if (!turnstileResponse.success) {
          return NextResponse.json(
            { success: false, error: "Verificación de captcha fallida" },
            { status: 400 }
          );
        }
        
        const validatedData = emailSchema.parse(formData);
      
        await resend.emails.send({
            from: 'no-reply@grupo-met.com',
            to: ['info@grupo-met.com'],
            subject: 'Nuevo mensaje de contacto',
            replyTo: validatedData.email,
            react: EmailTemplate(validatedData),
        });
  
        return NextResponse.json({ 
            success: true, 
            data: { message: 'Email enviado correctamente' } 
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
          return NextResponse.json(
            { success: false, error: 'Datos inválidos', details: error.errors },
            { status: 400 }
          );
    }
    return NextResponse.json(
        { success: false, error: 'Error al enviar el mensaje' },
        { status: 500 }
    );
  }
}