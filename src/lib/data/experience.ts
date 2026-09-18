import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'lockheed-martin-software-engineer',
		company: 'Lockheed Martin Aeronautics',
		description: `I have experience working on a cross-functional team developing many 
		concurrent projects that span the full development lifecycle, collaborating with teams 
		across labs and flight test to meet the critical needs of aeronautics programs. 
		My team's work involves software engineering, data engineering, data science, and analysis. 
		I have developed and contributed to projects that cover a wide range of aircraft capabilities. 
		and facilitate multi-million dollar, mission critical decisions.`,
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
