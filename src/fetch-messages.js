import dotenv from 'dotenv';
import twilio from 'twilio';


dotenv.config({ path: './config/.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function fetchGalleryData() {
    const galleryData = [];
    try {
        const messages = await client.messages.list({ to: 'whatsapp:+14155238886' });

        for (const message of messages) {
            const imgs = await message.media().list();
            for (const img of imgs) {
                galleryData.push({
                    src: "https://api.twilio.com" + img.uri.replace(".json", ""),
                    description: message.body,
                    alt: message.body,
                    thumbnailWidth: "200px",
                });
            }
        }
    } catch (error) {
        console.error('Erro ao buscar mensagens do Twilio:', error);
    }
    return galleryData; 
}
