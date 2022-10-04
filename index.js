require("dotenv").config();
const { Telegraf, Markup, Telegram } = require("telegraf");
const base = require("./const");

const bot = new Telegraf(process.env.BOT_TOKEN);

//======= START =======//
bot.start(async (ctx) => {
	try {
		base.adminList.forEach((admin) => {
			if (ctx.from.id == admin) {
				return ctx.replyWithHTML("Головне меню:", {
					reply_markup: {
						keyboard: [[{ text: "🧧  Чайна розсилка" }], [{ text: "📗  Асортимент" }], [{ text: "⬇️  Підменю" }], [{ text: "Адмін меню" }]],
						resize_keyboard: true,
					},
				});
			} else {
				return ctx.replyWithHTML("Головне меню:", {
					reply_markup: {
						keyboard: [[{ text: "🧧  Чайна розсилка" }], [{ text: "📗  Асортимент" }], [{ text: "⬇️  Підменю" }]],
						resize_keyboard: true,
					},
				});
			}
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
				keyboard: [[{ text: "🧧  Чайна розсилка" }], [{ text: "📗  Асортимент" }], [{ text: "⬇️  Підменю" }]],
				resize_keyboard: true,
			},
		});
	} catch (e) {
		console.error(e);
	}
});

bot.hears(["📗  Асортимент"], async (ctx) => {
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

bot.hears(["🧧  Чайна розсилка"], async (ctx) => {
	try {
		return ctx.replyWithHTML("Опис чайної розсилки, якийсь текст, бла-бла-бла", {
			reply_markup: {
				inline_keyboard: [[Markup.button.url("Предзамовлення", "t.me/original_amet")]],
				resize_keyboard: true,
			},
		});
	} catch (e) {
		console.error(e);
	}
});

bot.action("backToTeas", async (ctx) => {
	try {
		await ctx.answerCbQuery();
		await ctx.deleteMessage();
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
				source: base.shuList[0].src,
			},
			{
				caption: base.shuList[0].title + base.shuList[0].description + base.shuList[0].price,
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [[Markup.button.callback("Придбати", "buy")], [Markup.button.callback("🛒 0.00₴", "buy")], [Markup.button.callback("⬅️", "backward"), Markup.button.callback(`1/${base.shuList.length}`, "number"), Markup.button.callback("➡️", `shu-2`)], [Markup.button.callback("↩️  назад", "backToTeas")]],
				},
			}
		);
	} catch (e) {
		console.error(e);
	}
});

base.shuList.forEach((shu, index) => {
	if (index !== base.shuList.length) {
		bot.action(shu.cb_id, async (ctx) => {
			try {
				await ctx.answerCbQuery();
				return ctx.editMessageCaption(
					{
						source: shu.src,
					},
					{
						caption: shu.title + shu.description + shu.price,
						parse_mode: "HTML",
						reply_markup: {
							inline_keyboard: [[Markup.button.callback("Придбати", "buy")], [Markup.button.callback("🛒 0.00₴", "buy")], [Markup.button.callback("⬅️", `shu-${index}`), Markup.button.callback(`${index + 1}/${base.shuList.length}`, "number"), Markup.button.callback("➡️", `shu-${index + 2}`)], [Markup.button.callback("↩️  назад", "backToTeas")]],
						},
					}
				);
			} catch (e) {
				console.error(e);
			}
		});
	}
});

//======= ADMIN =======//
bot.hears("Адмін меню", async (ctx) => {
	try {
		base.adminList.forEach((admin) => {
			if (ctx.from.id == admin) {
				return ctx.replyWithHTML("Адмін меню:", {
					reply_markup: {
						keyboard: [[{ text: "Додати позицію" }, { text: "Видалити позицію" }]],
						resize_keyboard: true,
					},
				});
			}
		});
	} catch (e) {
		console.error(e);
	}
});
bot.hears("Додати позицію", async (ctx) => {
	try {
		base.adminList.forEach((admin) => {
			if (ctx.from.id == admin) {
				return ctx.replyWithHTML("Який вид чаю треба додати?", {
					reply_markup: {
						inline_keyboard: [[Markup.button.callback("Шу пуер", "new_shu")], [Markup.button.callback("Шен пуер", "shu")], [Markup.button.callback("Червоний", "shu")], [Markup.button.callback("Білий", "shu")], [Markup.button.callback("Зелений", "shu")], [Markup.button.callback("Улун", "shu")]],
						resize_keyboard: true,
					},
				});
			}
		});
	} catch (e) {
		console.error(e);
	}
});
bot.action("new_shu", async (ctx) => {
	try {
		await ctx.answerCbQuery();
		await ctx.editMessageText("Вкажи назву нового чаю:");
	} catch (e) {
		console.error(e);
	}
});

bot.on("inline_query", (ctx) => {
	const result = [];
	// Explicit usage
	ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

	// Using context shortcut
	ctx.answerInlineQuery(result);
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
