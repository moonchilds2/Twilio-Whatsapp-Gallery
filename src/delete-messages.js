import dotenv from 'dotenv';
import twilio from 'twilio';

// Carregar as variáveis de ambiente
dotenv.config({ path: './config/.env' });
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function deleteAllMessages() {
    try {
        // Lista todas as mensagens
        const messages = await client.messages.list();
        
        if (messages.length === 0) {
            console.log("Nenhuma mensagem encontrada para deletar.");
            return;
        }

        for (const message of messages) {
            console.warn(`Deletando a mensagem com SID: ${message.sid}`);
            await message.remove(); // Aguarda a remoção da mensagem
        }

        console.log("Todas as mensagens foram deletadas com sucesso.");
    } catch (error) {
        console.error('Erro ao deletar mensagens:', error);
    }
}

// Inicia o programa
console.log("Iniciando o programa...");
deleteAllMessages()
    .then(() => console.log("Operação concluída."))
    .catch((err) => console.error('Erro ao executar a operação:', err));
