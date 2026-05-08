import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    const { name, phone, email, service, message } = await req.json();

    const { error } = await resend.emails.send({
        // from: "JGTS Imobiliária <noreply@jgtsimobiliaria.com>",
        from: "JGTS Imobiliária <onboarding@resend.dev>",
        to: "contacto@jgtsimobiliaria.com",
        subject: `Nova mensagem de ${name} — ${service || "Contacto geral"}`,
    html: `
      <h2>Nova mensagem do site</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Telefone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Serviço:</strong> ${service}</p>
      <hr />
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `,
    // Envia uma cópia de confirmação ao cliente
    replyTo: email,
    });

    if (error) {
        console.error("Erro ao enviar email:", error);
        return new Response(JSON.stringify({ success: false, error: "Erro ao enviar email" }), { status: 500 });
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
}