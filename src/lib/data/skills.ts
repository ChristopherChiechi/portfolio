import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';
import reactMd from './md/react.md?raw';
import pythonMd from './md/python.md?raw';
import pandasMd from './md/pandas.md?raw';
import cppMd from './md/cpp.md?raw';
import cMd from './md/c.md?raw';
import javascriptMd from './md/javascript.md?raw';
import rustMd from './md/rust.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Main Programming Languages', slug: 'main-pro-lang' }),
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Engines', slug: 'engine' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Markup, Style, & Framework', slug: 'markup-style-framework' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'testing' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft-skills' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	// Main programming languages
	defineSkill({
		slug: 'python',
		color: 'yellow',
		description: pythonMd,
		logo: Assets.Python,
		name: 'Python',
		category: 'main-pro-lang'
	}),
	defineSkill({
		slug: 'cpp',
		color: 'dodgerblue',
		description: cppMd,
		logo: Assets.Cpp,
		name: 'C++',
		category: 'main-pro-lang'
	}),
	// Programming languages
	defineSkill({
		slug: 'c',
		color: 'dodgerblue',
		description: cMd,
		logo: Assets.C,
		name: 'C',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'csharp',
		color: 'purple',
		description:
			`The C# language is the most popular language for the .NET platform, a free, cross-platform, open source development environment.
			C# programs can run on many different devices, from Internet of Things (IoT) devices to the cloud and everywhere in between.
			You can write apps for phone, desktop, and laptop computers and servers.
			C# is a cross-platform general purpose language that makes developers productive while writing highly performant code.
			With millions of developers, C# is the most popular .NET language. C# has broad support in the ecosystem and all .NET workloads.
			Based on object-oriented principles, it incorporates many features from other paradigms, not least functional programming.
			Low-level features support high-efficiency scenarios without writing unsafe code. Most of the .NET runtime and libraries are written in C#,
			and advances in C# often benefit all .NET developers. C# is in the C family of languages. C# syntax is familiar if you used C, C++,
			JavaScript, TypeScript, or Java. Like C and C++, semi-colons (;) define the end of statements. C# identifiers are case-sensitive.
			C# has the same use of braces, { and }, control statements like if, else and switch, and looping constructs like for, and while.
			C# also has a foreach statement for any collection type. — Microsoft`,
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'orange',
		description:
			`Structured query language (SQL) is a programming language for storing and processing information in a relational database.
			A relational database stores information in tabular form, with rows and columns representing different data attributes and
			the various relationships between the data values. You can use SQL statements to store, update, remove, search, and retrieve
			information from the database. You can also use SQL to maintain and optimize database performance. — Amazon Web Services`,
		logo: Assets.SQL,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'blueprint-visual-scripting',
		color: 'cyan',
		description:
			`The Blueprint Visual Scripting system in Unreal Engine is a complete gameplay scripting system based on the concept of using a node-based
			interface to create gameplay elements from within Unreal Editor. As with many common scripting languages, it is used to define object-oriented (OO)
			classes or objects in the engine. This system is extremely flexible and powerful as it provides the ability for designers to use virtually the full
			range of concepts and tools generally only available to programmers. In addition, Blueprint-specific markup available in Unreal Engine's C++
			implementation enables programmers to create baseline systems that can be extended by designers. — Epic Games`,
		logo: Assets.BlueprintVisualScripting,
		name: 'Blueprint Visual Scripting',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			`TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
			— typescriptlang.org`,
		logo: Assets.TypeScript,
		name: 'TypeScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'js',
		color: 'yellow',
		description:
			javascriptMd,
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rust',
		color: 'sienna',
		description: rustMd,
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'zig',
		color: 'goldenrod',
		description:
			`Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software. — ziglang.org`,
		logo: Assets.Zig,
		name: 'Zig',
		category: 'pro-lang'
	}),
	// Engines
	defineSkill({
		slug: 'unreal',
		color: 'black',
		description:
			`Unreal Engine (UE) is a 3D computer graphics game engine developed by Epic Games, first showcased in the 1998 first-person shooter video game Unreal.
			Initially developed for PC first-person shooters, it has since been used in a variety of genres of games and has been adopted by other industries,
			most notably the film and television industry. Unreal Engine is written in C++ and features a high degree of portability, supporting a wide range of desktop,
			mobiles, console, and virtual reality platforms. The latest generation, Unreal Engine 5, was launched in April 2023. Its source code is available on GitHub,
			and commercial use is granted based on a royalty model, with Epic charging 5% of revenues over US $1 million, which is waived for games published exclusively
			on the Epic Games Store. Epic has incorporated features in the engine from acquired companies such as Quixel, which is seen as benefiting from Fortnite's revenue.
			In 2014, Unreal Engine was named the world's "most successful videogame engine" by Guinness World Records. — Wikipedia`,
		logo: Assets.Unreal,
		name: 'Unreal Engine',
		category: 'engine'
	}),
	defineSkill({
		slug: 'unity',
		color: 'white',
		description:
			`Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a
			Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console, augmented reality, and virtual reality platforms.
			It is particularly popular for iOS and Android mobile game development, is considered easy to use for beginner developers, and is popular for indie game development.
			The engine can be used to create three-dimensional (3D) and two-dimensional (2D) games, as well as interactive simulations. The engine has been adopted by industries
			outside video gaming including film, automotive, architecture, engineering, construction, and the United States Armed Forces. — Wikipedia`,
		logo: Assets.Unity,
		name: 'Unity',
		category: 'engine'
	}),
	// Libraries
	defineSkill({
		slug: 'pandas',
		color: 'pink',
		description: pandasMd,
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'plotly',
		color: 'deepskyblue',
		description:
			`Plotly is an open source graphing library for python. Dash is an open source framework for building data apps in Python.`,
		logo: Assets.Plotly,
		name: 'Plotly | Dash',
		category: 'library'
	}),
	// Markup, style, and framework
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
			`Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.
			It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS)
			and scripting languages such as JavaScript, a programming language. — Wikipedia`,
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style-framework'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
			`Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written
			in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology
			of the World Wide Web, alongside HTML and JavaScript. — Wikipedia`,
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style-framework'
	}),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: svelteMd,
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'markup-style-framework'
	}),
	defineSkill({
		slug: 'react',
		color: 'cyan',
		description: reactMd,
		logo: Assets.ReactJs,
		name: 'React',
		category: 'markup-style-framework'
	}),
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
