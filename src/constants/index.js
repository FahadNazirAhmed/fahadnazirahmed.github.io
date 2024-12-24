import {
	astro,	
	css,
	flutter,
	git,
	html,
	javascript,
	qwik,
	reactjs,
	tailwind,
	threejs,
	typescript,
	vite,
	webpack,
	//Tech
	python,
	unity,
	unreal,
	cplus,
	csharp,


	//companies 
	alten,
	bim,
	freelance,
	//projects
	bmw_ar_ride,
	virtua_prime,
	virtua_web,
	virtua_ios,
	virtua_android,
	escape_room,

	//socials
	github_alt,
	linkedin,
	discord,

	
} from '../assets';

const githubUser = import.meta.env.VITE_APP_GITHUB_USER || 'FahadNazirAhmed';
const linkedinUser = import.meta.env.VITE_APP_LINKEDIN_USER || 'fahadnazirahmed';
const discordUser = import.meta.env.VITE_APP_DISCORD_USER;

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [


	{
		name: 'HTML5',
		icon: html,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'Unity',
		icon: unity,
	},

	{
		name: 'csharp',
		icon: csharp,
	},
	{
		name: 'cplus',
		icon: cplus,
	},
	{
		name: 'unreal',
		icon: unreal,
	},
	{
		name: 'python',
		icon: python,
	},

];

const experiences = [
	{
		title: 'Software Engineer, Unity AR',
		company_name: 'ALTEN',
		icon: alten,
		iconBg: '#383E56',
		date: 'April 2023 - April 2024',
		points: [
			'Developed AR Ride project for BMW Group, Highlight of CES 2024, Las Vegas.',
		],
	},
	{
		title: 'Software Engineer, Unity AR/VR',
		company_name: 'Big Immersive',
		icon: bim,
		iconBg: '#383E56',
		date: 'September 2021 - March 2023',
		points: [
			'Developed AR VR projects for Vitura.',

		],
	},
	{
		title: 'Software Engineer, Unity XR',
		company_name: 'Freelance | Self-employed',
		icon: freelance,
		iconBg: '#383E56',
		date: 'March 2020 - October 2021',
		points: [
			'Coded AR, XR and 3D Games. Tools: Unity Engine, C#.',
			
		],
	},
];
const projects = [

	{
		name: 'BMW AR Ride',
		description:
			"Generative AI, augmented reality, and remote-controlled parking – the digital experience in the BMW of the future at CES 2024. The potential of augmented reality glasses while driving as a passenger.",
		tags: [
			{
				name: 'Unity',
				color: 'blue-text-gradient',
			},
			{
				name: 'C#',
				color: 'green-text-gradient',
			},
			{
				name: 'Python',
				color: 'pink-text-gradient',
			},
			{
				name: 'C++',
				color: 'yellow-text-gradient',
			},
		],
		image: bmw_ar_ride,
		website_link: 'https://www.press.bmwgroup.com/deutschland/video/detail/PF0009627/ar-ride-concept',
	},
	{
		name: 'Virtua Prime',
		description:
			'A cross-platform multiplayer Metaverse to schowcase NFT collection. with coded implementations of In-Game Customizations, voice chatting, Artificial intelligence, DLC and Addressable asset system, REST APIS, Landsale, Multiple Wallet integrations, AWS Services, and Asset-Pooling.',
		tags: [
			{
				name: 'Unity',
				color: 'blue-text-gradient',
			},
			{
				name: 'C#',
				color: 'green-text-gradient',
			},
			{
				name: 'WebGL',
				color: 'pink-text-gradient',
			},
			{
				name: 'Javascript',
				color: 'yellow-text-gradient',
			},
		],
		image: virtua_prime,
		website_link: 'https://prime.virtua.com/',
	},
	{
		name: 'Virtua',
		description:
			'A web NFT Marketlplace where you can make see NFT in 3D and purchase in real-time.',
		tags: [
			{
				name: 'Unity',
				color: 'blue-text-gradient',
			},
			{
				name: 'C#',
				color: 'green-text-gradient',
			},
			{
				name: 'Javascript',
				color: 'pink-text-gradient',
			},
			{
				name: 'React',
				color: 'yellow-text-gradient',
			},
		],
		image: virtua_web,
		website_link: 'https://marketplace.virtua.com/',
	},
	{
		name: 'Virtua Metaverse iOS',
		description:
			'A mobile NFT Markplace, where users can visualize NFT in AR and 3D Space. Integrated AR Face Masks controlled with face gestures',
		tags: [
			{
				name: 'Unity',
				color: 'blue-text-gradient',
			},
			{
				name: 'C#',
				color: 'green-text-gradient',
			},
			{
				name: 'XCode',
				color: 'pink-text-gradient',
			},
			{
				name: 'ARKit',
				color: 'yellow-text-gradient',
			},
		],
		image: virtua_ios,
		website_link: 'https://apps.apple.com/gb/app/virtua-metaverse/id1597744060',
	},
	{
		name: 'Virtua Metaverse Android',
		description:
			'A mobile NFT Markplace, where users can visualize NFT in AR and 3D Space. Integrated AR Face Masks controlled with face regions',
		tags: [
			{
				name: 'Unity',
				color: 'blue-text-gradient',
			},
			{
				name: 'C#',
				color: 'green-text-gradient',
			},
			{
				name: 'Android Studio',
				color: 'pink-text-gradient',
			},
			{
				name: 'ARCore',
				color: 'yellow-text-gradient',
			},
		],
		image: virtua_android,
		website_link: 'https://play.google.com/store/apps/details?id=com.terravirtua.prod&hl=en_US',
	},
	{
		name: 'Escape Room Series',
		description:
			'VR Experience where player is inside a museum with airtight security and mind-numbing puzzles. Mission is to access different rooms to get the most valuable item in the museum.',
		tags: [
			{
				name: 'Unity',
				color: 'blue-text-gradient',
			},
			{
				name: 'C#',
				color: 'green-text-gradient',
			},
			{
				name: 'OpenXR',
				color: 'pink-text-gradient',
			},
			{
				name: 'Oculus',
				color: 'yellow-text-gradient',
			},
		],
		image: escape_room,
		website_link: 'https://www.meta.com/en-gb/experiences/pcvr/an-escape-room-series-robbery-at-the-museum/1460620137349867/',
	},
	// {
	// 	name: 'D-Creative Studio',
	// 	description:
	// 		'An outstanding animate-on-scroll landing for Creative Studio - a team of innovative designers, developers, videographs and artists who specialize in crafting unique and engaging digital experiences for their clients.',
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'html',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'animations',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	// 	image: dcreative,
	// 	source_code_link: 'https://github.com/exslym/d-creative-studio/',
	// 	website_link: 'https://exslym.github.io/d-creative-studio/',
	// },
	// {
	// 	name: 'Space Invaders [Game]',
	// 	description:
	// 		'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'html',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'canvas',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	// 	image: space_invaders,
	// 	source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
	// 	website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	// },
	// {
	// 	name: '2048 [Game]',
	// 	description:
	// 		'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'htnl',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'algorithms',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	// 	image: game_2048,
	// 	source_code_link: 'https://github.com/exslym/2048-Game/',
	// 	website_link: 'https://exslym.github.io/2048-Game/',
	// },
	// {
	// 	name: 'AI Article Summarizer',
	// 	description:
	// 		'This minimalistic cozy color app is an AI article summarizer that transforms lengthy articles into clear and concise summaries, using an article extractor and summarizer by RapidAPI, powered by openAI GPT-4.',
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'tailwindcss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai',
	// 			color: 'yellow-text-gradient',
	// 		},
	// 	],
	
	// 	source_code_link: 'https://github.com/exslym/AI-Summarizer/',
	// 	website_link: 'https://exslym.github.io/AI-Summarizer/',
	// },
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },
];

// const clients = [
// 	{
// 		name: 'JavaScript',
// 		icon: javascript,
// 	},
// ];
const socials = [
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/${githubUser}/`,
	},
	{
		name: 'linkedin',
		icon: linkedin,
		link: `https://www.linkedin.com/in/${linkedinUser}/`,
	},
	{
		name: 'discord',
		icon: discord,
		link: `https://discordapp.com/users/${discordUser}/`,
	},
];

export { experiences, projects, socials, technologies};
