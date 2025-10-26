import{A as e}from"./assets.UFCzKsUC.js";const d=(n,...o)=>{const i={...n};return Object.keys(i).forEach(r=>{o.includes(r)&&delete i[r]}),i},p=`Svelte is a free and open-source component-based front-end software framework, and language created by Rich Harris and maintained by the Svelte core team members.  
<br>
Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.  
<br>
The compiler itself is written in JavaScript. Its source code is licensed under MIT License and hosted on GitHub. Among comparable frontend libraries, Svelte has one of the smallest bundle footprints at merely 2KB.  
<br>
&emsp;— Wikipedia  
<br>
Note: I am not a web developer and have minimal experience with this framework.`,u=`React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.  
<br>
&emsp;— Wikipedia  
<br>
Note: I am not a web developer and have minimal experience with this framework.`,m=`### *The Zen of Python* by Tim Peters

* Beautiful is better than ugly.
* Explicit is better than implicit.
* Simple is better than complex.
* Complex is better than complicated.
* Flat is better than nested.
* Sparse is better than dense.
* Readability counts.
* Special cases aren't special enough to break the rules.
* Although practicality beats purity.
* Errors should never pass silently.
* Unless explicitly silenced.
* In the face of ambiguity, refuse the temptation to guess.
* There should be one-- and preferably only one --obvious way to do it.
* Although that way may not be obvious at first unless you're Dutch.
* Now is better than never.
* Although never is often better than *right* now.
* If the implementation is hard to explain, it's a bad idea.
* If the implementation is easy to explain, it may be a good idea.
* Namespaces are one honking great idea -- let's do more of those!`,h=`Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool built on top of the Python programming language. — pandas.pydata.org  
<br>
But Polars is better. 🐻‍❄️ > 🐼`,y=`"C++ is a general-purpose programming language with a bias toward systems programming, [and] 
C++ is a general-purpose programming language providing a direct and efficient model of 
hardware combined with facilities for defining lightweight abstractions." — Bjarne Stroustrup`,f=`"C is a general-purpose programming language with features economy of expression, modern flow control
and data structures, and a rich set of operators. C is not a 'very high level' language, nor a 'big' one,
and is not specialized to any particular area of application. But its absence of restrictions and its
generality make it more convenient and effective for many tasks than supposedly more powerful
languages. C was originally designed for and implemented on the UNIX operating system on the DEC PDP-11, by
Dennis Ritchie." — Brian Kernighan & Dennis Ritchie  
<br>
"Nothing better than C." — Linus Torvalds`,b=`"JavaScript is a scripting or programming language that allows you to implement complex features on web pages." — Mozilla Developer Network  
<br>
"Dynamic typing: The belief that you can't explain to a computer why your code works, but you can keep track of it all in your head." — Chris Martin`,v=`### Performance
Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages.

### Reliability
Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — enabling you to eliminate many classes of bugs at compile-time.

### Productivity
Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more.  
<br>
&emsp;— rust-lang.org  
<br>`,t=n=>n,w=[t({name:"Main Programming Languages",slug:"main-pro-lang"}),t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Engines",slug:"engine"}),t({name:"Libraries",slug:"library"}),t({name:"Markup, Style, & Framework",slug:"markup-style-framework"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"testing"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft-skills"})],a=n=>{const o=d(n,"category");return n.category&&(o.category=w.find(i=>i.slug===n.category)),o},C=(...n)=>l.filter(o=>n.length===0?!0:n.includes(o.slug)),T=n=>{const o=[],i=[];return l.forEach(r=>{if(n.trim()&&!r.name.toLowerCase().includes(n.trim().toLowerCase()))return;if(!r.category){i.push(r);return}let s=o.find(g=>{var c;return g.category.slug===((c=r.category)==null?void 0:c.slug)});s||(s={items:[],category:r.category},o.push(s)),s.items.push(r)}),i.length!==0&&o.push({category:{name:"Others",slug:"others"},items:i}),o},S="Skills",l=[a({slug:"python",color:"yellow",description:m,logo:e.Python,name:"Python",category:"main-pro-lang"}),a({slug:"cpp",color:"dodgerblue",description:y,logo:e.Cpp,name:"C++",category:"main-pro-lang"}),a({slug:"c",color:"dodgerblue",description:f,logo:e.C,name:"C",category:"pro-lang"}),a({slug:"csharp",color:"purple",description:`The C# language is the most popular language for the .NET platform, a free, cross-platform, open source development environment.
			C# programs can run on many different devices, from Internet of Things (IoT) devices to the cloud and everywhere in between.
			You can write apps for phone, desktop, and laptop computers and servers.
			C# is a cross-platform general purpose language that makes developers productive while writing highly performant code.
			With millions of developers, C# is the most popular .NET language. C# has broad support in the ecosystem and all .NET workloads.
			Based on object-oriented principles, it incorporates many features from other paradigms, not least functional programming.
			Low-level features support high-efficiency scenarios without writing unsafe code. Most of the .NET runtime and libraries are written in C#,
			and advances in C# often benefit all .NET developers. C# is in the C family of languages. C# syntax is familiar if you used C, C++,
			JavaScript, TypeScript, or Java. Like C and C++, semi-colons (;) define the end of statements. C# identifiers are case-sensitive.
			C# has the same use of braces, { and }, control statements like if, else and switch, and looping constructs like for, and while.
			C# also has a foreach statement for any collection type. — Microsoft`,logo:e.Csharp,name:"C#",category:"pro-lang"}),a({slug:"sql",color:"orange",description:`Structured query language (SQL) is a programming language for storing and processing information in a relational database.
			A relational database stores information in tabular form, with rows and columns representing different data attributes and
			the various relationships between the data values. You can use SQL statements to store, update, remove, search, and retrieve
			information from the database. You can also use SQL to maintain and optimize database performance. — Amazon Web Services`,logo:e.SQL,name:"SQL",category:"pro-lang"}),a({slug:"blueprint-visual-scripting",color:"cyan",description:`The Blueprint Visual Scripting system in Unreal Engine is a complete gameplay scripting system based on the concept of using a node-based
			interface to create gameplay elements from within Unreal Editor. As with many common scripting languages, it is used to define object-oriented (OO)
			classes or objects in the engine. This system is extremely flexible and powerful as it provides the ability for designers to use virtually the full
			range of concepts and tools generally only available to programmers. In addition, Blueprint-specific markup available in Unreal Engine's C++
			implementation enables programmers to create baseline systems that can be extended by designers. — Epic Games`,logo:e.BlueprintVisualScripting,name:"Blueprint Visual Scripting",category:"pro-lang"}),a({slug:"ts",color:"blue",description:`TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
			— typescriptlang.org`,logo:e.TypeScript,name:"TypeScript",category:"pro-lang"}),a({slug:"js",color:"yellow",description:b,logo:e.JavaScript,name:"JavaScript",category:"pro-lang"}),a({slug:"rust",color:"sienna",description:v,logo:e.Rust,name:"Rust",category:"pro-lang"}),a({slug:"zig",color:"goldenrod",description:"Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software. — ziglang.org",logo:e.Zig,name:"Zig",category:"pro-lang"}),a({slug:"unreal",color:"black",description:`Unreal Engine (UE) is a 3D computer graphics game engine developed by Epic Games, first showcased in the 1998 first-person shooter video game Unreal.
			Initially developed for PC first-person shooters, it has since been used in a variety of genres of games and has been adopted by other industries,
			most notably the film and television industry. Unreal Engine is written in C++ and features a high degree of portability, supporting a wide range of desktop,
			mobiles, console, and virtual reality platforms. The latest generation, Unreal Engine 5, was launched in April 2023. Its source code is available on GitHub,
			and commercial use is granted based on a royalty model, with Epic charging 5% of revenues over US $1 million, which is waived for games published exclusively
			on the Epic Games Store. Epic has incorporated features in the engine from acquired companies such as Quixel, which is seen as benefiting from Fortnite's revenue.
			In 2014, Unreal Engine was named the world's "most successful videogame engine" by Guinness World Records. — Wikipedia`,logo:e.Unreal,name:"Unreal Engine",category:"engine"}),a({slug:"unity",color:"white",description:`Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a
			Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console, augmented reality, and virtual reality platforms.
			It is particularly popular for iOS and Android mobile game development, is considered easy to use for beginner developers, and is popular for indie game development.
			The engine can be used to create three-dimensional (3D) and two-dimensional (2D) games, as well as interactive simulations. The engine has been adopted by industries
			outside video gaming including film, automotive, architecture, engineering, construction, and the United States Armed Forces. — Wikipedia`,logo:e.Unity,name:"Unity",category:"engine"}),a({slug:"pandas",color:"pink",description:h,logo:e.Pandas,name:"Pandas",category:"library"}),a({slug:"plotly",color:"deepskyblue",description:"Plotly is an open source graphing library for python. Dash is an open source framework for building data apps in Python.",logo:e.Plotly,name:"Plotly | Dash",category:"library"}),a({slug:"html",color:"orange",description:`Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.
			It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS)
			and scripting languages such as JavaScript, a programming language. — Wikipedia`,logo:e.HTML,name:"HTML",category:"markup-style-framework"}),a({slug:"css",color:"blue",description:`Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written
			in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology
			of the World Wide Web, alongside HTML and JavaScript. — Wikipedia`,logo:e.CSS,name:"CSS",category:"markup-style-framework"}),a({slug:"svelte",color:"orange",description:p,logo:e.Svelte,name:"Svelte",category:"markup-style-framework"}),a({slug:"react",color:"cyan",description:u,logo:e.ReactJs,name:"React",category:"markup-style-framework"})],M={title:S,items:l};export{M as S,C as a,T as g};
