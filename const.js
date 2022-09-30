const commands = `
/start - Перезапустити бот
`;

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

module.exports.commands = commands;
module.exports.shuList = shuList;
