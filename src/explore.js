require('dotenv').config({ path: './config/.env' });

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

async function deleteAllMessages() {
  const messages = await client.messages.list();
  for (message of messages) {
    console.warn(`Deleting ${message.sid}`);
    message.remove();
  }
} 

console.log("Starting program");
deleteAllMessages()
  .then(() => console.log("DONE"))
  .catch((err) => console.error(err));