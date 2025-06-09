import React, { JSX } from "react";
import { motion } from "framer-motion";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
    SiPython, SiDjango, SiExpress, SiNodedotjs,
    SiPostgresql, SiMongodb, SiSqlite,
    SiDocker, SiGit, SiGithub, SiLinux,
    SiPhp,
    SiMysql,
} from "react-icons/si";
import JavaIcon from '../assets/java.svg';

type Skill = {
    name: string;
    icon: JSX.Element;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

const skillsData: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "React", icon: <SiReact className="text-cyan-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Python", icon: <SiPython className="text-yellow-500" /> },
            { name: "Django", icon: <SiDjango className="text-green-700" /> },
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
            { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },
    { name: "Java", icon: <img src={JavaIcon} alt="Java" className="h-6 w-6" /> },  // use <img> here
        ],
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
            { name: "SQLite", icon: <SiSqlite className="text-gray-600" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        ],
    },
    {
        title: "DevOps & Tools",
        skills: [
            { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
            { name: "Git", icon: <SiGit className="text-red-500" /> },
            { name: "GitHub", icon: <SiGithub className="text-black" /> },
            { name: "Linux", icon: <SiLinux className="text-black" /> },
        ],
    },
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-12 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Skills & Technologies
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Here are some of the languages and frameworks I work with
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="bg-white shadow rounded-lg p-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {category.skills.map((skill) => (
                                    <motion.li
                                        key={skill.name}
                                        className="flex items-center space-x-2 hover:scale-105 transition-transform"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <span className="text-xl">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
