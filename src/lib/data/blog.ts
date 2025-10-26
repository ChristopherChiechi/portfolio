import Assets from './assets';
import { getSkills } from './skills'; // TODO: Possibly change to tags
import type { Blog } from './types';
import { base } from '$app/paths';
import theWitnessMd from './md/the_witness.md?raw';
import demonsSoulsMd from './md/demons_souls.md?raw';

const url = (file: string) => `${base}/images/${file}`;

const items: Array<Blog> = [
	{
		slug: 'the-witness',
		color: 'pink',
		description: theWitnessMd,
		shortDescription:
			"Understanding the Universe",
		links: [
			// { to: '', label: '' },
		],
		logo: Assets.TheWitness,
		name: "The Witness Analysis",
		period: {
			from: new Date("2022-06-02"),
		},
		skills: [], // TODO: Update this to tags and add video game
		type: 'Video game analysis',
        screenshots: [
			{
				label: 'Cover',
				src: url("the_witness.jpg"),
			},
		]
	},
	{
		slug: 'demons-souls',
		color: 'darkblue',
		description: demonsSoulsMd,
		shortDescription:
			"Contrarian to Conventions",
		links: [
			// { to: '', label: '' },
		],
		logo: Assets.DemonsSouls,
		name: "Demon's Souls Analysis",
		period: {
			from: new Date("2022-06-02"),
		},
		skills: [], // TODO: Update this to tags and add video game
		type: 'Video game analysis',
        screenshots: [
			{
				label: 'Cover',
				src: url("demons_souls.jpg"),
			},
		]
	},
];

const title = 'Blog';

const BlogData = { title, items };

export default BlogData;
