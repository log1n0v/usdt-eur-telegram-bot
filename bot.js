const TelegramBot = require('node-telegram-bot-api');

// Вставьте сюда токен, полученный от BotFather:
const token = '7713586737:AAGQp2ERpdgL8KyAcaRg1OKyynf8YXy_w0E';

// Создаем экземпляр бота с долгим опросом (polling)
const bot = new TelegramBot(token, {polling: true});

// URL вашего веб-приложения на Render:
const webAppUrl = 'https://usdt-eur-webapp.onrender.com'; // Замените на свой URL

// Когда пользователь отправляет любое сообщение боту, мы ответим ему клавиатурой с кнопкой WebApp
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    
    // Создаем клавиатуру, на которой будет кнопка с web_app
    const keyboard = {
        reply_markup: {
            keyboard: [
                [{ 
                    text: "Открыть калькулятор", 
                    web_app: { url: webAppUrl }
                }]
            ]
        }
    };

    bot.sendMessage(chatId, 'Нажмите кнопку ниже, чтобы открыть веб-приложение:', keyboard);
});
