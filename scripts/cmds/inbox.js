 module.exports = {

  config: {

    name: "inbox",

    aliases: ["in"],

    version: "1.0",

    author: "ArYan",

    countDown: 10,

    role: 0,

    shortDescription: {

      en: "hello goatbot inbox no prefix file enjoy the cmmand @ArYan"

    },

    longDescription: {

      en: ""

    },

    category: "fun",

    guide: {

      en: ""

    }

  },

  langs: {

    en: {

      gg: ""

    },

    id: {

      gg: ""

    }

  },

  onStart: async function({ api, event, args, message }) {

    try {

      const query = encodeURIComponent(args.join(' '));

      message.reply("✅ SUCCESSFULLY SEND MSG\n\n🔰তোর ইনবক্স চেক কর ,  cute একটা মেছেজ দিছি🫶❤️‍🩹😘", event.threadID);

      api.sendMessage("✅ SUCCESSFULLY ALLOW\n🔰 হ্যাঁ জান বলো  ,  ইনবক্স এ কেনো আসতে বললে 🫣🫶❤️‍🩹😘", event.senderID);

    } catch (error) {

      console.error("Error bro: " + error);

    }

  }

}
