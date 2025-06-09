import { Code, ExternalLink, Github, Mail } from "lucide-react"
import "./App.css"
import Profile from './assets/Profile.jpg'
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

function App() {


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <h1 className="text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">
                  Hi, I'm Behzad Najafzadeh
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  I'm a passionate software developer with expertise in web development. I love creating beautiful,
                  functional, and user-friendly applications that solve real-world problems.
                </p>
                <div className="mt-8 flex space-x-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
                  >
                    Contact Me
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    View Projects
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-5/12 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Skills & Technologies</h2>
              <p className="mt-4 text-lg text-gray-500">Here are some of the languages and frameworks I work with</p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {/* Frontend */}
                <div className="col-span-2 sm:col-span-1">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900">Frontend</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>HTML/CSS</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>JavaScript</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>React</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Tailwind CSS</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Backend */}
                <div className="col-span-2 sm:col-span-1">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900">Backend</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Node.js</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>PHP</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Python</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Java</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Database */}
                <div className="col-span-2 sm:col-span-1">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900">Database</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>MongoDB</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>PostgreSQL</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>MySQL</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Firebase</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tools */}
                <div className="col-span-2 sm:col-span-1">
                  <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-lg font-medium text-gray-900">Tools</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Git</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Docker</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>AWS</span>
                      </li>
                      <li className="flex items-center">
                        <Code className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Vercel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">My Projects</h2>
              <p className="mt-4 text-lg text-gray-500">Check out some of my recent work</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="h-48 w-full relative">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Project 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">E-commerce Platform</h3>
                  <p className="mt-2 text-gray-500">
                    A full-featured online store with product catalog, shopping cart, and payment processing.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      React
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Node.js
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      MongoDB
                    </span>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="h-48 w-full relative">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Project 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Task Management App</h3>
                  <p className="mt-2 text-gray-500">
                    A productivity application for managing tasks, projects, and team collaboration.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      React
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Firebase
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Tailwind
                    </span>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="h-48 w-full relative">
                  <img
                    src="/placeholder.svg?height=192&width=384"
                    alt="Project 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Weather Dashboard</h3>
                  <p className="mt-2 text-gray-500">
                    A weather application that provides real-time forecasts and historical weather data.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      JavaScript
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      API
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      CSS
                    </span>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
              <p className="mt-4 text-lg text-gray-500">Interested in working together? Feel free to contact me!</p>
            </div>

            <div className="mt-12 max-w-lg mx-auto">
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                <a
                  href="mailto:behzadnjf22@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
                <a
                  href="https://github.com/behzad-njf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
