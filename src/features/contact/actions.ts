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

    // 2. Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 3. Logic to send email (Mocked for now)
    try {
        console.log('--- New Contact Form Submission ---');
        console.log('To: santibon12345@gmail.com');
        console.log('From:', validatedFields.data.email);
        console.log('Name:', validatedFields.data.name);
        console.log('Subject:', validatedFields.data.subject);
        console.log('Message:', validatedFields.data.message);
        console.log('-----------------------------------');

        // Note: You can easily integrate Resend here:
        // const { data, error } = await resend.emails.send({ ... });

        return { success: true };
    } catch (error) {
        console.error('Failed to send email:', error);
        return {
            error: 'Failed to send message. Please try again later.',
        };
    }
}
