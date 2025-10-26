import Assets from './assets';
import type { Education } from './types';
import gameProgrammingCertMd from './md/game_programming_cert.md?raw';

const title = 'Education';

const items: Array<Education> = [
	{
		name: "Bachelor of Science in Computer Science",
		description: `I graduated magna cum laude from the University of North Texas with a
			Bachelor of Science in Computer Science and a Certificate in Game Programming.`,
		location: 'Denton',
		logo: Assets.UNT,
		color: 'green',
		organization: 'University of North Texas',
		period: { from: new Date("2017-08-28"), to: new Date("2022-05-13") },
		shortDescription: 'Magna Cum Laude',
		slug: 'bachelor-computer-science',
		subjects: ['Software Engineering', 'Algorithms and Data Structures',
			'Systems Programming', 'Automata Theory', 'Calculus II', 'General Chemistry II',
			'Physics II - Mechanics, Electricity, and Magnetism',
			 'etc.',
		],
	},
	{
		name: 'Certificate in Game Programming',
		description: gameProgrammingCertMd,
		location: 'Denton',
		logo: Assets.UNT,
		color: 'green',
		organization: 'University of North Texas',
		period: { from: new Date("2017-08-28"), to: new Date("2022-05-13") },
		shortDescription: '',
		slug: 'certificate-game-programming',
		subjects: ['Game Programming I', 'Game Programming II',
			'Topics in Game Development', 'Programming Math and Physics for Games']
	},
	{
		name: 'AI/ML Practitioner Certificate',
		description: 
			`This program was split into two phases. Phase I lasted 5 months and involved coursework to learn AI/ML fundamentals.
			Phase II was a 6 week long project of your choosing in which participants were paired with a mentor.
			For my project, I created an object detection model.`,
		location: 'Fort Worth',
		logo: Assets.Lockheed,
		color: 'dodgerblue',
		organization: 'Lockheed Martin Aeronautics',
		period: { from: new Date("2024-09-12"), to: new Date("2025-04-07") },
		shortDescription: '',
		slug: 'ai-ml-practitioner',
		subjects: ['AI/ML Fundamentals', 'Object Detection']
	},
	{
		name: 'Strategic Management MBA',
		description:
			`I am currently pursuing a master's in business administration with a concentration in strategic management 
			to help compliment my more technical experience, as well as provide new learning opportunities outside of work.`,
		location: 'Denton',
		logo: Assets.UNT,
		color: 'green',
		organization: 'University of North Texas',
		period: { from: new Date("2025-01-13"), to: new Date("2026-12-31") },
		shortDescription: '',
		slug: 'strategic-management-mba',
		subjects: ['Strategic Management', 'Business Administration']
	},
];

const EducationData = { title, items };

export default EducationData;
