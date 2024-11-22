 module.exports = {
	config: {
			name: "hi",
			version: "1.0",
			author: "Max-Rambo", //খানকির পোলা author পরিবর্তন করিস না //
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hi") return message.reply("hello love, how can i help you?");
}
};
