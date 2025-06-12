import React from "react";
import { ExternalLink } from "lucide-react";
import DONG_IMAGE from "../assets/dong.png"
import TRIX from "../assets/trix.png"
import SHELEM from "../assets/shelem.png"
import MAFIA from "../assets/mafia.png"

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Dong (دنگ)",
    description:
      "An Android Application for Calculation and accounting of group expenses",
    imageUrl: DONG_IMAGE, // Replace with your actual image path
    techStack: ["Kotlin", "MVVM", "Coroutines","RoomDB","LiveData"],
    link: "https://github.com/behzad-njf/dong",
  },
  {
    title: "TrixCounter",
    description:
      "An android application written in kotlin Jetpack Compose score tracking tool for the Trix card game.",
    imageUrl: TRIX,
    techStack: ["Kotlin", "Jetpack Compose", "Dagger Hilt","RoomDB","Multi Language","LiveData"],
    link: "https://github.com/behzad-njf/TrixCounter",
  },
  {
    title: "Shelem Shomar (شلم شمار)",
    description:
      "An Android app built with Kotlin and Jetpack Compose to track scores for the Shelem card game, implementing Clean Architecture and Room database.",
    imageUrl: SHELEM, 
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt"],
    link: "https://cafebazaar.ir/app/com.behrad.hib.chelem",
  },
  {
    title: "Mafia",
    description:
      "This app offers a fully digital version of the classic party game, letting players take on roles like Mafia, Doctor, Detective, and more. Designed for gatherings, the app manages role distribution, night phases, and voting—all with a sleek, intuitive interface.",
    imageUrl: MAFIA,
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt","Coroutines","ViewModel","LiveData"],
    link: "https://cafebazaar.ir/app/ir.mrhib.mafia",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">Check out some of my recent work</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <div className="h-128 w-full relative">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
      <p className="mt-2 text-gray-500">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          View Details
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
