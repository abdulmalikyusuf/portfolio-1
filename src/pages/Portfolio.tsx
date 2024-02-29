import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { ReactComponent as BootstrapIcon} from "../assets/svg/icons8-bootstrap-96.svg"
import { ReactComponent as TypeScriptIcon} from "../assets/svg/icons8-typescript-50.svg"
import { ReactComponent as ReactIcon} from "../assets/svg/icons8-react-64.svg"
import { ReactComponent as TailwindcssIcon} from "../assets/svg/icons8-tailwindcss-96.svg"

import "../App.css"
import { projects } from "../data/projects";
import { Contact } from "../components/Contact";


function Portfolio() {
	return (
	<div className="max-w-screen-2xl md:px-16 lg:px-32 space-y-28">
		<header className="md:ml-40 lg:ml-80 md:-mr-16 lg:-mr-32">
			<div className="flex flex-col px-10 pt-8 space-y-16 bg-grey-D8 md:pt-12 lg:pt-16 lg:pr-32">
				<nav className="flex justify-end space-x-4 font-medium uppercase md:space-x-8 lg:space-x-16">
					<a href="#work" className="px-5 py-1 hover:bg-grey-2E hover:text-grey-99">Work</a>
					<a href="#projects" className="px-5 py-1 hover:bg-grey-2E hover:text-grey-99">Project</a>
					<a href="#about" className="px-5 py-1 hover:bg-grey-2E hover:text-grey-99">About</a>
				</nav>
				<div className="relative w-3/4 ml-auto text-3xl md:text-5xl lg:text-7xl font-bold text-right space-y-[60px]">
					<div className="absolute space-y-2 right-4 md:right-0 top-16 md:top-20 lg:top-24 lg:space-y-4">
						<a href="https://github.com/abdulmalikyusuf" target="_blank" rel="noreferrer">
							<FaGithub className="w-4 h-4 cursor-pointer md:w-8 lg:w-10 md:h-8 lg:h-10 text-grey-6D"/>
						</a>
						<a href="https://www.linkedin.com/in/abdulmalik-yusuf-986494195/" target="_blank" rel="noreferrer">
							<FaLinkedin className="w-4 h-4 cursor-pointer md:w-8 lg:w-10 md:h-8 lg:h-10 text-grey-6D"/>
						</a>
						<a href="https://twitter.com/_Abdulmalik_Y"  target="_blank" rel="noreferrer">
							<FaTwitter className="w-4 h-4 cursor-pointer md:w-8 lg:w-10 md:h-8 lg:h-10 text-grey-6D"/>
						</a>
					</div>
					<h2 className="text-grey-99 mr-14">Hello! I'm Abdulmalik Yusuf</h2>
					<p className="text-base font-light text-center lg:text-lg lg:leading-9 text-grey-6D">A Nigerian based frontend developer. I love bringing ideas to life, from developing simple, fast, user-centric webpages to solving complex problems. Download my CV to know more about my work.</p>
				</div>
				<div className="flex justify-end w-full space-x-4 md:space-x-8 lg:space-x-16">
					<div className="flex flex-col items-center text-xs font-medium text-center md:text-sm lg:text-lg text-grey-99">
						<ReactIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"/>
						ReactJs
					</div>
					<div className="flex flex-col items-center text-xs font-medium text-center md:text-sm lg:text-lg text-grey-99">
						<TypeScriptIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"/>
						TypeScript
					</div>
					<div className="flex flex-col items-center text-xs font-medium text-center md:text-sm lg:text-lg text-grey-99">
						<BootstrapIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"/>
						Bootstrap
					</div>
					<div className="flex flex-col items-center text-xs font-medium text-center md:text-sm lg:text-lg text-grey-99">
						<TailwindcssIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"/>
						Tailwindcss
					</div>
				</div>
				<div className="-ml-10 translate-y-1/2 lg:ml-0 lg:-translate-x-20">
					<a href={process.env.PUBLIC_URL+"resume.pdf"} type="button" className="px-5 py-2 font-medium leading-9 tracking-widest uppercase bg-pink md:text-lg lg:text-2xl md:py-3 lg:py-5 md:px-8 lg:px-10">
						Download CV
					</a>
				</div>
			</div>
		</header>
		
		<div id="work" className="flex flex-col px-4 space-y-8 md:space-y-12 lg:space-y-16 lg:px-0">
			<h1 className="text-3xl font-bold md:text-5xl lg:text-7xl text-grey-99">Work</h1>
			<div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
				<div className="flex flex-col font-medium md:space-y-2">
					<a href="https://vuetifysolutions.netlify.app" className="text-xl md:text-2xl lg:text-3xl text-grey-6D">Vuetify Solutions</a>
					<h6 className="text-sm md:text-base lg:text-lg text-grey-7E">February &middot; 2022</h6>
				</div>
				<div className="flex flex-col space-y-2">
					<p className="text-sm md:text-base lg:text-lg text-grey-6D">Startup dedicated to providing technology solutions to customers.</p>
					<div className="flex space-x-4 text-xs font-medium">
						<p className="px-2 py-1 rounded-full lg:px-4 lg:py-2 bg-grey-ED text-grey-66">ReactJs</p>
						<p className="px-2 py-1 rounded-full lg:px-4 lg:py-2 bg-grey-ED text-grey-66">Bootstrap</p>
						<p className="px-2 py-1 rounded-full lg:px-4 lg:py-2 bg-grey-ED text-grey-66">Tailwindcss</p>
					</div>
				</div>
			</div>
		</div>

		<div id="projects" className="flex flex-col px-4 space-y-8 md:space-y-12 lg:space-y-16 lg:px-0">
			<h1 className="text-3xl font-bold md:text-5xl lg:text-7xl text-grey-99">Projects</h1>
			{projects.map((project) => (
					<div key={project.title} className={`flex group odd:md:justify-start even:md:justify-end flex-col-reverse even:md:flex-row-reverse odd:md:flex-row md:items-center space-y-reverse space-y-5`}>
						<div className="lg:w-3/5">
							<img src={project.imgUrl} alt={project.detail} className="w-full max-w-md duration-100 transform group-even:ml-auto hover:scale-150"/>
						</div>
						<div className="lg:w-2/5">
							<a href={project.url} className="mb-2 text-xl font-medium lg:font-bold md:text-2xl lg:text-3xl text-grey-99 md:mb-4 lg:mb-8">{project.title}</a>
							<p className="text-sm md:text-base lg:text-lg text-grey-6D">{project.detail}</p>
						</div>
					</div>
				))
			}
		</div>

		<div id="about" className="flex flex-col px-4 space-y-8 md:space-y-12 lg:space-y-16 lg:px-0">
			<h1 className="text-3xl font-bold md:text-5xl lg:text-7xl text-grey-99">About</h1>
			<div className="space-y-4 text-sm md:text-base lg:text-lg text-grey-6D">
				<p>
				Adventous, Enthusiastic, Skilled in developing and testing multiple web-based applications incorporating a range of technologies.
				Aspiring to combine broad background with strong technical skills to excel as a Frontend Developer. I am interested in IT and everything that revolves around it.
				I love solving problems, bringing ideas to life and threading on the edge of the seemingly impossible, and leveraging the power of computers to tackle the almost-impossible tasks.
				</p>
				<p>
				I understand both the visual, experimental, and functional aspects of creating for the web.
				I like building well tested web applications.
				</p>
				<p>
				I am keen to gain more experience of working in a bigger and more challenging environment.
				For this reason, I am looking for a company willing to offer me a placement among their developers.
				In return I would offer my full commitment, and be a pleasant, harworking addition to your team.
				</p>
				{/* I have always been fasinated by computers, their ability to do the semingly impossible. */}
				{/* It is this passion, that led me to pursue a dream of . */}
			</div>
			
			<Contact/>
			
			{/* <div className="space-y-4 lg:space-y-10">
				<div className="p-4 space-y-5 bg-pink lg:p-10 lg:w-96 lg:ml-auto lg:mr-20">
					<div>
						<h6 className="text-sm font-medium uppercase text-grey-7E -tracking-tighter">Email</h6>
						<p className="text-sm lg:text-lg text-grey-2E">johndoe@example.com</p>
					</div>
					<div>
						<h6 className="text-sm font-medium uppercase text-grey-7E -tracking-tighter">Role</h6>
						<p className="text-sm lg:text-lg text-grey-2E">johndoe@example.com</p>
					</div>
					<div>
						<h6 className="text-sm font-medium uppercase text-grey-7E -tracking-tighter">phone</h6>
						<p className="text-sm lg:text-lg text-grey-2E">johndoe@example.com</p>
					</div>
				</div>
				<p>Nec feugiat in fermentum posuere urna nec tincidunt. Vitae suscipit tellus mauris a diam. Ultrices mi tempus imperdiet nulla malesuada. Suspendisse ultrices gravida dictum fusce ut placerat orci. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Tristique sollicitudin nibh sit amet commodo. Et odio pellentesque diam volutpat commodo. Aliquam etiam erat velit scelerisque in dictum non consectetur. Rhoncus urna neque viverra justo. Urna cursus eget nunc scelerisque viverra mauris. Odio euismod lacinia at quis. Eu nisl nunc mi ipsum faucibus vitae aliquet.  Lectus arcu bibendum at varius vel pharetra vel turpis nunc. </p>
			</div> */}
		</div>

		<div className="flex flex-col items-center py-4 text-sm md:-mx-16 lg:-mx-32 bg-grey-D8 lg:py-8 lg:space-y-4 text-grey-6D md:text-base lg:text-lg">
			<p>Built with React&Tailwind.</p>
			<p className="italic">Abdulmalik Yusuf &middot; {new Date().getFullYear()}</p>
		</div>
	</div>
	);
}

export default Portfolio;
