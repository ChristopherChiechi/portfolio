import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'lockheed-martin-software-engineer',
		company: 'Lockheed Martin Aeronautics',
		description: `I work on the Integrated System Evaluation team and develop tools to analyze aircraft performance. 
		My team's work involves data engineering, data science, and software engineering. 
		I have developed and contributed to projects that cover a wide range of aircraft capabilities. 
		Customers of these projects are both internal and external and facilitate multi-million dollar, mission critical decisions.`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Fort Worth',
		period: { from: new Date('2023-06-05') },
		skills: getSkills('python', 'pandas', 'plotly'),
		name: 'Software Engineer',
		color: 'dodgerblue',
		links: [],
		logo: Assets.Lockheed,
		shortDescription: ''
	},
];

const ExperienceData = { title, items };

export default ExperienceData;
