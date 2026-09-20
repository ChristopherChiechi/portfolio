import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description:
		`I graduated magna cum laude from the University of North Texas with a Bachelor of Science
		in Computer Science and a certificate in game programming. I also earned a Master's in 
		Business Administration with a concentration in strategic management from the University 
		of North Texas with summa cum laude honors. I am currently pursuing a Master's in 
		Computer Science with concentrations in both AI and data science from the University of 
		Illinois Urbana-Champaign. I am a software engineer at Lockheed Martin Aeronautics.
		`,
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/christopher-chiechi/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'GitHub', href: 'https://github.com/ChristopherChiechi', icon: 'i-carbon-logo-github' },
		{ label: 'Email', href: 'mailto:chiechichris@gmail.com', icon: 'i-carbon-at' },
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
