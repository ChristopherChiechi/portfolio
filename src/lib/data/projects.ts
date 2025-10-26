import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import { base } from '$app/paths';
import shmupMd from './md/shmup.md?raw';
import rubeGoldbergMd from './md/rube_goldberg.md?raw';

const url = (file: string) => `${base}/images/${file}`;

const items: Array<Project> = [
	{
		slug: 'parkinsons-research-study',
		color: 'white',
		description:
			`A Florida State Univesity PhD research study to evaluate video games as a method of testing patients for Parkinson's disease.
			The project was made in Unity and the results were presented at local conferences.
			It was a video game test to evaluate patients for mild cognitive impairment (MCI), which is common in patients with Parkinson's disease (PD).
			A research study was conducted at Florida State University to evaluate 90 participants (30 with PD and MCI, 30 with PD and without MCI, and 30 without PD)
			using both traditional and video game modalities. The study aims to determine the potential video games present as an effective tool for future clinical
			examinations to detect early signs of MCI in individuals with PD.`,
		shortDescription:
			"PhD Parkinson's Research Study",
		links: [
			{ to: 'https://www.researchgate.net/publication/369938939_The_Investigation_of_a_Novel_Video_Game_for_Identifying_Mild_Cognitive_Impairment_in_Individuals_with_Parkinsonism', label: 'ResearchGate' },
			{ to: 'https://github.com/ChristopherChiechi/ParkinsonsGame', label: 'GitHub' },
		],
		logo: Assets.Unity,
		name: "Parkinson's Research Study",
		period: {
			from: new Date("2022-04-18"), to: new Date("2023-06-20")
		},
		skills: getSkills('csharp', 'unity'),
		type: 'Video game',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: url("perfect_decision.png"),
			},
		]
	},
	{
		slug: 'movement-shooter',
		color: 'lawngreen',
		description:
			`Color Runner is a first-person shooter with advanced movement. The player will sprint, slide, wall run, and double jump through a timed obstacle course.
			The player can switch between four weapon types (projectile, full-auto hitscan, burst hitscan, and shotgun hitscan), each with a different color.
			The player must shoot targets of the same color as their weapon, and three seconds are added to their time for every target missed.
			Their best time is saved and displayed in the top-right of the screen. The game was developed in Unreal Engine with Blueprint visual scripting.`,
		shortDescription:
			'FPS with Advanced Movement',
		links: [{ to: 'https://github.com/ChristopherChiechi/ColorRunner', label: 'GitHub' }],
		logo: Assets.Unreal,
		name: 'Movement Shooter',
		period: {
			from: new Date("2022-01-18"), to: new Date("2022-05-13")
		},
		skills: getSkills('unreal'), // blueprint visual scripting
		type: 'Video game',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: url("color_runner.png"),
			},
		]
	},
	{
		slug: 'audio-game-experiment',
		color: 'black',
		description:
			`This game is an experiment to determine how effective audio cues are in guiding the player. Half of the levels will be played with visuals only,
			while the other half will be played with audio only. The results will help to evaluate the effectiveness of audio cues in both normal games
			and audio games for the blind. Results are posted to a Firebase database for comparison. Made with Unity.`,
		shortDescription:
			'Inspired by research studies for the blind and visually impaired',
		links: [{ to: 'https://github.com/ChristopherChiechi/BlindMazeGame', label: 'GitHub' }],
		logo: Assets.Unity,
		name: 'Audio Game Experiment',
		period: {
			from: new Date("2022-01-18"), to: new Date("2022-05-13")
		},
		skills: getSkills('csharp', 'unity'),
		type: 'Video game',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: url("blind_maze_game.png"),
			},
		]
	},
	{
		slug: 'rube-goldberg-machine',
		color: 'dodgerblue',
		description: rubeGoldbergMd,
		shortDescription:
			'2D Physics Simulation',
		links: [{ to: 'https://github.com/ChristopherChiechi/BlindMazeGame', label: 'GitHub' }],
		logo: Assets.Box2D,
		name: 'Rube Goldberg Machine',
		period: {
			from: new Date("2021-11-26"), to: new Date("2021-12-10")
		},
		skills: getSkills('cpp'),
		type: 'Video game',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: url("rube_goldberg.png"),
			},
		]
	},
	{
		slug: 'shmup',
		color: 'red',
		description: shmupMd,
		shortDescription:
			`2D Shoot 'em up`,
		links: [{ to: 'https://github.com/ChristopherChiechi/BlindMazeGame', label: 'GitHub' }],
		logo: Assets.LARC,
		name: "SHMUP",
		period: {
			from: new Date("2020-10-11"), to: new Date("2020-12-10")
		},
		skills: getSkills('cpp'),
		type: 'Video game',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: url("uchugun.png"),
			},
		]
	},
	{
		slug: 'abet-accreditation',
		color: 'dodgerblue',
		description:
			`A full stack application that will be used by computer science and engineering students and staff at the University of North Texas
			to maintain the university's ABET accreditation. Students can submit course surveys. Instructors and coordinators can submit reports
			for their courses. Admins can edit semesters, assigned courses, course outcomes, course lists, faculty lists, major lists, and survey
			questions. Admins can also generate student surveys, section reports, outcome mappings, and full reports.`,
		shortDescription:
			`University of North Texas College of Engineering ABET Accreditation Website`,
		links: [{ to: 'https://github.com/ChristopherChiechi/BlindMazeGame', label: 'GitHub' }],
		logo: Assets.ReactJs,
		name: "ABET Accreditation Site",
		period: {
			from: new Date("2021-08-23"), to: new Date("2022-05-13")
		},
		skills: getSkills('js', 'react'),
		type: 'Website',
		screenshots: [
			{
				label: 'Screenshot 1',
				src: url("abet.png"),
			},
		]
	},
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
