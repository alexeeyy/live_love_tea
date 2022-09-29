require("dotenv").config();
const { Telegraf, Markup } = require("telegraf");
const base = require("./const");

const bot = new Telegraf(process.env.BOT_TOKEN);

//======= START =======//
bot.start(async (ctx) => {
	try {
		return ctx.replyWithHTML("Головне меню:", {
			reply_markup: {
				keyboard: [[{ text: "📗  Асортимент" }], [{ text: "⬇️  Підменю" }]],
				resize_keyboard: true,
			},
		});
	} catch (e) {
		console.error(e);
	}
});

bot.hears("⬇️  Підменю", async (ctx) => {
	try {
		return ctx.replyWithHTML("Підменю:", {
			reply_markup: {
				keyboard: [[{ text: "📜  Мої замовлення" }, { text: "🛒  Кошик" }], [{ text: "📞  Контакти" }, { text: "❗  Інформація" }], [{ text: "🆘  Повідомити про помилку" }], [{ text: "🔙  На головну" }]],
				resize_keyboard: true,
			},
		});
	} catch (e) {
		console.error(e);
	}
});

bot.hears("🔙  На головну", async (ctx) => {
	try {
		return ctx.replyWithHTML("Головне меню:", {
			reply_markup: {
				keyboard: [[{ text: "📗  Асортимент" }], [{ text: "⬇️  Підменю" }]],
				resize_keyboard: true,
			},
		});
	} catch (e) {
		console.error(e);
	}
});

bot.hears("📗  Асортимент", async (ctx) => {
	try {
		return ctx.replyWithHTML("Ассортимент:", {
			reply_markup: {
				inline_keyboard: [[Markup.button.callback("Шу пуер", "shu")], [Markup.button.callback("Шен пуер", "shu")], [Markup.button.callback("Червоний", "shu")], [Markup.button.callback("Білий", "shu")], [Markup.button.callback("Зелений", "shu")], [Markup.button.callback("Улун", "shu")]],
				resize_keyboard: true,
			},
		});
	} catch (e) {
		console.error(e);
	}
});
bot.action("shu", async (ctx) => {
	try {
		await ctx.answerCbQuery();
		await ctx.deleteMessage();
		return ctx.replyWithPhoto(
			{
				source: base.shuList.first.src,
			},
			{
				caption: base.shuList.first.title + base.shuList.first.description + base.shuList.first.price,
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [[Markup.button.callback("Придбати", "buy")], [Markup.button.callback("🛒 0.00₴", "buy")], [Markup.button.callback("⬅️", "backward"), Markup.button.callback("1/2", "number"), Markup.button.callback("➡️", "forward")], [Markup.button.callback("↩️  назад", "backToTeas")]],
				},
			}
		);
	} catch (e) {
		console.error(e);
	}
});
// bot.hears("✨  Категоріям", async (ctx) => {
// 	try {
// 		return ctx.replyWithHTML("Категорії:", {
// 			reply_markup: {
// 				keyboard: [[{ text: "🧘  Йога" }, { text: "🍃  Чай" }], [{ text: "☯️  Цігун" }, { text: "🕉️  Медитація" }], [{ text: "🏠  На головну" }]],
// 				resize_keyboard: true,
// 			},
// 		});
// 	} catch (e) {
// 		console.error(e);
// 	}
// });
// bot.hears("🍃  Чай", async (ctx) => {
// 	try {
// 		return ctx.replyWithHTML("Чайні івенти:", {
// 			reply_markup: {
// 				keyboard: [[{ text: "🍃 Чай та дзадзен" }, { text: "🍵  Чаювання по домашньому" }], [{ text: "🏠  На головну" }]],
// 				resize_keyboard: true,
// 			},
// 		});
// 	} catch (e) {
// 		console.error(e);
// 	}
// });

// base.events.forEach((event) => {
// 	eventButtonAction(event.name, event.photo, event.text, event.master);
// });

// base.days.forEach((day) => {
// 	bot.hears(day, async (ctx) => {
// 		try {
// 			if (day === "ВТ") {
// 				return ctx.replyWithHTML("Події вівторка:", {
// 					reply_markup: {
// 						keyboard: [[{ text: "🧘  Йога" }, { text: "☯️  Цігун" }], [{ text: "🏠  На головну" }]],
// 						resize_keyboard: true,
// 					},
// 				});
// 			}

// 			if (day === "СР") {
// 				return ctx.replyWithHTML("Події середи:", {
// 					reply_markup: {
// 						keyboard: [[{ text: "🕉️  Медитація" }], [{ text: "🏠  На головну" }]],
// 						resize_keyboard: true,
// 					},
// 				});
// 			}

// 			if (day === "ЧТ") {
// 				return ctx.replyWithHTML("Події Четверга:", {
// 					reply_markup: {
// 						keyboard: [[{ text: "🧘  Йога" }, { text: "☯️  Цігун" }], [{ text: "🏠  На головну" }]],
// 						resize_keyboard: true,
// 					},
// 				});
// 			}

// 			// if (day === "СБ") {
// 			// 	return ctx.replyWithHTML("Події суботи:", {
// 			// 		reply_markup: {
// 			// 			keyboard: [[{ text: "Теплий Indoor Live Love Festival" }], [{ text: "🏠  На головну" }]],
// 			// 			resize_keyboard: true,
// 			// 		},
// 			// 	});
// 			// }

// 			if (day === "НД") {
// 				return ctx.replyWithHTML("Події неділі:", {
// 					reply_markup: {
// 						keyboard: [[{ text: "🍁  Теплий Indoor Live Love Festival" }, { text: "🍵  Чаювання по домашньому" }], [{ text: "🏠  На головну" }]],
// 						resize_keyboard: true,
// 					},
// 				});
// 			}
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	});
// });

//======= FUNCTIONS =======//
// function eventButtonAction(name, src, text, master) {
// 	bot.hears(name, async (ctx) => {
// 		try {
// 			if (src !== false) {
// 				return ctx.replyWithPhoto(
// 					{
// 						source: src,
// 					},
// 					{
// 						caption: text,
// 						reply_markup: {
// 							inline_keyboard: [[Markup.button.url("Записатися", master)]],
// 						},
// 					}
// 				);
// 			} else {
// 				return ctx.replyWithHTML(text);
// 			}
// 		} catch (e) {
// 			console.error(e);
// 		}
// 	});
// }

// bot.hears("💌  Контакти", async (ctx) => {
// 	try {
// 		return ctx.replyWithHTML("<b>Анна Паніна</b> - мама спейсу, та наш викладач з йоги.", Markup.inlineKeyboard([[Markup.button.url("Зв'язатися", "t.me/annaliveloveyoga")]]));
// 	} catch (e) {
// 		console.error(e);
// 	}
// });
// bot.hears("🏠  На головну", async (ctx) => {
// 	try {
// 		return ctx.replyWithHTML("Головне меню:", {
// 			reply_markup: {
// 				keyboard: [[{ text: "🎉  Розклад подій" }, { text: "💌  Контакти" }]],
// 				resize_keyboard: true,
// 			},
// 		});
// 	} catch (e) {
// 		console.error(e);
// 	}
// });

bot.launch();
