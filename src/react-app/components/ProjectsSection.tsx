import React from "react";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Dong",
    description:
      "A modern web app built with React and Django, featuring clean UI and responsive design to showcase full-stack development skills.",
    imageUrl: "/dong.svg?height=192&width=384", // Replace with your actual image path
    techStack: ["React", "Django", "PostgreSQL"],
    link: "https://github.com/behzad-njf/dong",
  },
  {
    title: "TrixCounter",
    description:
      "A web-based score tracking tool for the Trix card game, using React for state management and a user-friendly interface.",
    imageUrl: "/trixcounter.svg?height=192&width=384", // Replace with your actual image path
    techStack: ["React", "JavaScript", "CSS"],
    link: "https://github.com/behzad-njf/TrixCounter",
  },
  {
    title: "Shelem Shomar (شلم شمار)",
    description:
      "An Android app built with Kotlin and Jetpack Compose to track scores for the Shelem card game, implementing Clean Architecture and Room database.",
    imageUrl: "/shelemshomar.svg?height=192&width=384", // Replace with your actual image path
    techStack: ["Kotlin", "Jetpack Compose", "Room", "Hilt"],
    link: "#", // Add GitHub link once hosted
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
    <div className="h-48 w-full relative">
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
