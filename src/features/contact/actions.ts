'use server';

import { contactSchema, type ContactFormData } from '@/lib/validations';

/**
 * Server Action to handle contact form submissions.
 * In a real-world scenario, you would use a service like Resend, SendGrid, or Nodemailer here.
 */
export async function sendEmail(data: ContactFormData) {
    // 1. Validate the data on the server side
    const validatedFields = contactSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            error: 'Invalid fields. Please check your input.',
        };
    }

    // 2. EmailJS Configuration from environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS credentials missing in environment variables');
        return {
            error: 'Lo sentimos, el servicio de contacto no está configurado correctamente.',
        };
    }

    // 3. Logic to send email using EmailJS REST API
    try {
        console.log('Attempting to send email via EmailJS...');
        console.log('Service ID:', serviceId);
        console.log('Template ID:', templateId);
        // Do not log the full public key for security, just first few chars
        console.log('Public Key (pre):', publicKey.substring(0, 4) + '...');

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                template_params: {
                    from_name: validatedFields.data.name,
                    from_email: validatedFields.data.email,
                    subject: validatedFields.data.subject,
                    message: validatedFields.data.message,
                    to_name: 'Santino Bondioni',
                },
            }),
        });

        const responseText = await response.text();
        console.log('EmailJS Response Status:', response.status);
        console.log('EmailJS Response Body:', responseText);

        if (!response.ok) {
            throw new Error(`EmailJS API Error: ${response.status} - ${responseText}`);
        }

        return { success: true };
    } catch (error) {
        console.error('Final Submission Error:', error);
        return {
            error: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde o contáctame directamente por mis redes sociales.',
        };
    }
}
