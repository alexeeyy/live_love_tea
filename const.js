const commands = `
/start - Перезапустити бот
`;

const adminList = ["558982454"];

const shuList = [
	{
		cb_id: "shu-1",
		src: "./images/fest.jpg",
		title: `<b>Lorem ipsum dolor</b>
    
`,
		description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto quam eligendi omnis voluptatem dicta veniam debitis adipisci nemo laborum enim, blanditiis quidem odio ut, quo modi.

`,
		price: "💰 5.10₴ за грамм, от 50 гр.",
	},
	{
		cb_id: "shu-2",
		src: "./images/Anna.jpg",
		title: `<b>Lorem ipsum dolor</b>
     
`,
		description: `Test-2

`,
		price: "💰 5.10₴ за грамм, от 50 гр.",
	},
];

const teaSend = {
	src: "./images/tea.jpg",
	text: `Привіт Друже! 

Я твій Чайний Майстер і я запрошую тебе в твою першу Чайну Мандрівку. Моя мета - показати тобі Світ Справжнього чаю. 

Пропоную почати нашу спільну подорож з Чайної Підписки. 

Чайна підписка - це можливість щотижня отримувати один із перевіренних чаїв з моєї колекції. 

4 різних чая, листівка з описом його властивостей і особливостей, мої рекомендації тобі щодо заварювання кожного з них. І так цілий місяць 🙌 

Я відкрию для тебе Світ справжнього крутого чаю. Зі мною ти зрозумієш - Чайна традиція - це просто, смачно і захоплююче! 

Для цього паралельно я запускаю чайний ютуб канал, де ти зможешь більше дізнатись про чай та про чайну культуру взагалом
і разом зі мною подолати шлях від чайного новачка, який заварює чай в пакетику в стакані, до майстра зі своїм супер чайним набором. 

По поредньому замовленню ти отримаєшь підписку на 20% дешевше. Так я зможу віддячити тобі за довіру! 🙌`,
};

const teaTypes = ["Шу"];

module.exports.commands = commands;
module.exports.adminList = adminList;
module.exports.shuList = shuList;
module.exports.teaTypes = teaTypes;
module.exports.teaSend = teaSend;
