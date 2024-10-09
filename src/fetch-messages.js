require('dotenv').config({ path: './config/.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function fetchGalleryData() {
    const galleryData = [];
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
    return galleryData;
}

console.log("Starting program");
fetchGalleryData()
    .then(data => {
        console.log("Fetched Gallery Data:", data);
    })
    .catch(err => {
        console.error('Error fetching messages:', err);
    });
