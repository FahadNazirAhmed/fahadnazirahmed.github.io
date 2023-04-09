import {
	astro,
	cns_portfolio,
	css,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	freelance,
	game_2048,
	git,
	github_alt,
	html,
	javascript,
	linkedin,
	qwik,
	reactjs,
	space_invaders,
	tailwind,
	threejs,
	typescript,
	vite,
	webpack,
} from '../assets';

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
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	{
		name: 'Qwik',
		icon: qwik,
	},
	{
		name: 'Astro',
		icon: astro,
	},
	// {
	// 	name: 'HTML5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	// {
	// 	name: 'Tailwind',
	// 	icon: tailwind,
	// },
	// {
	// 	name: 'git',
	// 	icon: git,
	// },
	{
		name: 'Webpack',
		icon: webpack,
	},
	{
		name: 'Vite',
		icon: vite,
	},
];

const experiences = [
	{
		title: 'Frontend Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork1,
		iconBg: '#383E56',
		date: 'February 2022 - Present',
		points: [
			'Developing and maintaining web applications using React, Astro, Qwik, TailwindCSS and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Doctor At Work',
		icon: doctoratwork,
		iconBg: '#E6DEDD',
		date: 'September 2021 - February 2022',
		points: [
			'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Freelancer Web Developer',
		company_name: 'Freelance',
		icon: freelance,
		iconBg: '#383E56',
		date: 'January 2020 - September 2021',
		points: [
			'Developing and maintaining websites using JavaScript, HTML5, CSS3, SASS and other related technologies.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
];

const projects = [
	{
		name: '2048-Game',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'algorithms',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: game_2048,
		source_code_link: 'https://github.com/exslym/2048-Game/',
		website_link: 'https://exslym.github.io/2048-Game/',
	},
	{
		name: 'D-Creative Studio',
		description:
			'An outstanding animate-on-scroll landing for Creative Studio - a team of innovative designers, developers, videographs and artists who specialize in crafting unique and engaging digital experiences for their clients.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'animate-on-scroll',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: dcreative,
		source_code_link: 'https://github.com/exslym/D-Creative-Studio/',
		website_link: 'https://exslym.github.io/D-Creative-Studio/',
	},
	{
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'canvas',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
		],
		image: space_invaders,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},

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

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: 'https://www.linkedin.com/in/exslym/',
	},
	{
		name: 'github',
		icon: github_alt,
		link: 'https://github.com/exslym/',
	},
	{
		name: 'discord',
		icon: discord,
		link: 'https://discordapp.com/users/794645643518803978/',
	},
];

export { experiences, projects, socials, technologies };
