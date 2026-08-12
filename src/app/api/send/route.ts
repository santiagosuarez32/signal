import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { nombre, empresa, email, telefono, mensaje, web } = await request.json();

    // Basic validation
    if (!nombre || !empresa || !email || !telefono || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben ser completados' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY environment variable is not defined.');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Build email HTML body
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #fafafa;">
        <h2 style="color: #0e1333; border-bottom: 2px solid #2dccd2; padding-bottom: 10px; margin-top: 0;">Nuevo lead de contacto</h2>
        <p style="font-size: 16px; color: #333;">Se ha recibido un nuevo formulario de contacto a través del sitio web:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold; width: 150px; color: #666;">Nombre:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: #000;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #666;">Empresa:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: #000;">${empresa}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #666;">Correo:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: #000;"><a href="mailto:${email}" style="color: #2dccd2; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #666;">Teléfono:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: #000;">${telefono}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; font-weight: bold; color: #666;">Sitio Web:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eaeaea; color: #000;">${web ? `<a href="${web.startsWith('http') ? web : 'https://' + web}" target="_blank" style="color: #2dccd2; text-decoration: none;">${web}</a>` : 'No especificado'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #666; vertical-align: top;">Mensaje:</td>
            <td style="padding: 10px; color: #000; line-height: 1.5; white-space: pre-wrap;">${mensaje}</td>
          </tr>
        </table>
        <div style="margin-top: 30px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eaeaea; padding-top: 15px;">
          Este correo fue enviado automáticamente desde el formulario de contacto de signalmarketing.site.
        </div>
      </div>
    `;

    // Make the request directly to the Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Signal Contacto <info@signalmarketing.site>',
        to: ['info@signalmarketing.site'],
        reply_to: email,
        subject: `Nuevo lead: ${nombre} - ${empresa}`,
        html: emailHtml,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Error from Resend API:', data);
      return NextResponse.json(
        { error: data.message || 'Error al enviar el correo a través de Resend' },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error inesperado al procesar la solicitud' },
      { status: 500 }
    );
  }
}
