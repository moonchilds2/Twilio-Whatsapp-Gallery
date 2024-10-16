import dotenv from 'dotenv';
import twilio from 'twilio';

// Carregar as variáveis de ambiente
dotenv.config({ path: './config/.env' });
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function fetchGalleryData() {
    const galleryData = [];
    
    try {
        const messages = await client.messages.list({ to: 'whatsapp:+14155238886' });

        for (const message of messages) {
            // Verifica se a mensagem tem mídia
            const imgs = await message.media().list();
            if (imgs.length === 0) continue; // Pula mensagens sem imagens

            for (const img of imgs) {
                // Certificando que o URL da imagem é válido
                if (img.uri) {
                    galleryData.push({
                        src: `https://api.twilio.com${img.uri.replace(".json", "")}`,
                        description: message.body || 'Imagem sem descrição', 
                        alt: message.body || 'Imagem sem descrição', 
                        thumbnailWidth: "200px",
                    });
                }
            }
        }
    } catch (error) {
        console.error('Erro ao buscar mensagens do Twilio:', error);
    }
    
    return galleryData; // Retorna a galeria 
}
