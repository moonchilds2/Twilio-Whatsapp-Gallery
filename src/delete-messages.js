import dotenv from 'dotenv';
import twilio from 'twilio';

// Carregar as variáveis de ambiente
dotenv.config({ path: './config/.env' });
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

console.log(accountSid, authToken);

async function deleteAllMessages() {
  try {
    const messages = await client.messages.list();
    for (const message of messages) {
      console.warn(`Deleting ${message.sid}`);
      await message.remove(); // Aguarde a remoção da mensagem
    }
  } catch (error) {
    console.error('Erro ao deletar mensagens:', error);
  }
}

console.log("Starting program");
deleteAllMessages()
  .then(() => console.log("DONE"))
  .catch((err) => console.error(err));
