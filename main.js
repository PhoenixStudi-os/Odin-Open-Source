const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 

const prefix = 'AllFather.';

client.once('ready',() => {
	console.log('Odin is online!');
	client.user.setActivity("Eatin' Beans"); 
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ + /)
	const command = args.shift().toLowerCase();

	const wisdom = ["pineapple doesnt belong on pizza", "a hot dog is not a sandwich. Its a hot dog.", "soup is a liquid dish, typically made by boiling meat, fish, or vegetables, etc., in stock or water. Therefore cereal is not soup.",
	]
	const randomWisdom = wisdom[Math.floor(Math.random() * wisdom.length)];
	
	const bibleVerse = ["https://www.biblestudytools.com/proverbs/passage/?q=proverbs+3:5-6", 
	"https://www.biblestudytools.com/ecclesiastes/7-9.html", 
	"https://www.biblestudytools.com/psalms/passage/?q=psalm+3:2-6", 
	"https://www.biblestudytools.com/romans/8-31.html", 
	"https://www.biblestudytools.com/1-peter/passage/?q=1+peter+3:3-4"]
	const randomVerse = bibleVerse[Math.floor(Math.random() * bibleVerse.length)];

	const dog = ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
	"https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg",
	"https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg",
	"https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
	"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_18/3469748/210430-frankie-al-1227_0.jpg",
	"https://static.onecms.io/wp-content/uploads/sites/20/2021/04/21/dog-nose.jpg",
	"https://pbs.twimg.com/profile_images/1478141668159148033/IOD8SZvx_400x400.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ps8TZRyIWb6SoQdrElDc0BWnkwI9p0TiSQ&usqp=CAU",]
	const randomDog = dog[Math.floor(Math.random() * dog.length)];

	const cat = ["https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
	"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-girl-cat-names-1606245046.jpg?crop=0.668xw:1.00xh;0.126xw,0&resize=640:*",
	"https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80",
	"https://www.petmd.com/sites/default/files/styles/article_image/public/orange-tabby-kitten-walking-across-floor.jpg?itok=ApRxY9_r",
	"https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg?im=Resize=(1230,900)",
	"https://www.countrysideveterinaryclinic.org/sites/default/files/interesting-cat-facts.jpg",
	"https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg",
	"https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
	"https://cdn.thewirecutter.com/wp-content/media/2021/03/adopting-a-cat-2048px-06052.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",]
	const randomCat = cat[Math.floor(Math.random() * cat.length)];
	
	const d4 = ["1", "2", "3", "4"]
	const randomD4 = d4[Math.floor(Math.random() * d4.length)];
	const d6 = ["1", "2", "3", "4", "5", "6"]
	const randomD6 = d6[Math.floor(Math.random() * d6.length)];
	const d8 = ["1", "2", "3", "4", "5", "6", "7", "8"]
	const randomD8 = d8[Math.floor(Math.random() * d8.length)];
	const d10 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
	const randomD10 = d10[Math.floor(Math.random() * d10.length)];
	const d12 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
	const randomD12 = d12[Math.floor(Math.random() * d12.length)];
	const d20 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
	const randomD20 = d20[Math.floor(Math.random() * d20.length)];

	if (command === 'wisdom'){
	message.channel.send(randomWisdom)
	}else if (command === 'bibleverse'){
	message.channel.send(randomVerse)
	}	else if (command === 'd4'){
	message.channel.send("```you rolled a...```" +"<:d4:892216120591929364>"+ " | " + randomD4)
	}	else if (command === 'd6'){
	message.channel.send("```you rolled a...```" +"<:d6:892216144897904660>"+ " | " + randomD6)
	}	else if (command === 'd8'){
	message.channel.send("```you rolled a...```" +"<:d8:892216165143834635>"+ " | " + randomD8)
	}	else if (command === 'd10'){
	message.channel.send("```you rolled a...```" +"<:d10:892394467850616842>"+ " | " + randomD10)
	}	else if (command === 'd12'){
	message.channel.send("```you rolled a...```" +"<:d12:892216213856477235>"+ " | " + randomD12)
	}	else if (command === 'd20'){
	message.channel.send("```you rolled a...```" +"<:d20:895356776046788728>"+ " | " + randomD20)
	}	else if (command === 'dog'){
	message.channel.send(randomDog)
	}	else if (command === 'cat'){
	message.channel.send(randomCat)
	}	else if (command === 'dice'){
	message.channel.send("you can roll d4, d6, d8, d10, d12, d20")
	}	else if(command === 'ping'){
		message.channel.send('pong')
	}	else if (command == 'sussybaka'){
		message.channel.send('no u')
	}	else if (command == 'unoreverse'){
		message.channel.send('https://ih1.redbubble.net/image.831880770.7140/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg')
	}else if (command == 'obama'){
		message.channel.send('https://tenor.com/view/obama-gaming-sphere-gif-14514677')
	}	else if (command == 'help'){

	const { MessageEmbed } = require('discord.js');

	const exampleEmbed = new MessageEmbed()
		.setColor('#FFCC00')
		.setTitle('Command List')
		.setAuthor({ name: 'The All Father'})
		.setDescription('-Assistance for the Odin discord bot')
		.setThumbnail('https://mythologysource.com/wp-content/uploads/2020/11/Odin.png')
		.addFields(
			{ name: 'The prefix is AllFather:', value: '-for example: AllFather.help', inline: true },
			{ name: 'dice', value: '-d4, d6, d8, d10, d12, d20' },
			{ name: 'wisdom', value: '-request wisdom from the all father' },
			{ name: 'bibleverse', value: '-request a bible verse' },
			{ name: 'cat', value: '-request a cat picture' },
			{ name: 'dog', value: '-request a dog picture' },
		)
		.setImage('https://static2.srcdn.com/wordpress/wp-content/uploads/2020/01/Odin-1.jpg')
		.setTimestamp()
		.setFooter({ text: 'Developed by Hollow Nexus Studios', iconURL: 'https://cdn.discordapp.com/attachments/938968602525200396/940670973726847048/1.png'});

		message.channel.send({ embeds: [exampleEmbed] });
	}else {
		message.channel.send('```Your command is not recongized, type AllFather.help for a list of starting commands. If you think is a mistake or you need further help, you can join our discord server:```' + 'https://discord.gg/swDmtR8J7D')
	}
});

client.login(token here);