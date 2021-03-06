const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");

composer.command(`contribute`, async (ctx) => {
	await ctx.replyWithHTML(message.contribute, {
		parse_mode: "HTML",
		reply_markup: keyboard.contribute,
	});
});

middleware(composer);
consoles.module(__filename);
