require('dotenv').config({ path: './config/.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const mensagem = "MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU";

client.messages
    .create({
        from: 'whatsapp:+14155238886',
        body: mensagem,
        to: 'whatsapp:+558896815402'
    })
    .then(message => {
        console.log(`Mensagem enviada com SID: ${message.sid}`);
    })
    .catch(error => {
        console.error('Erro ao enviar mensagem:', error);
    });
