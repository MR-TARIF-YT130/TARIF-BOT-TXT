 module.exports = {
 config: {
  name: 'ping',
  aliases: [],
  version: '1.0',
  role: 0,
  countDown: 5,
  author: 'Vincenzo/Max-Rambo',
  shortDescription: 'Measures the bot response time.',
  longDescription: 'Sends a message and then edits it to show the time taken for the bot to respond.',
  category: 'utility',
  guide: {
   en: 'Use /ping to measure the bot response time.\nExample: /ping'
  }
 },
 onStart: async function ({ message, api }) {
  // Record the start time
  const startTime = Date.now();
  
  // Send the initial message
  const initialMessage = await message.send("Pinging...");
  
  // Calculate the response time
  const responseTime = Date.now() - startTime;
  
  // Edit the initial message to show the response time
  await api.editMessage(`Ping: ${responseTime} ms`, initialMessage.messageID);
 }
};
