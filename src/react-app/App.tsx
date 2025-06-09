import "./App.css"
import Profile from './assets/Profile.jpg'
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import SkillsSection from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"

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
                <p className="mt-6 text-gray-500 text-justify">
  I'm a dedicated full-stack software engineer with hands-on experience in building scalable web and Android applications. I specialize in Python (Django), JavaScript (React), and Kotlin (Jetpack Compose), and enjoy crafting clean, efficient code that powers real-time, user-friendly systems. Whether it’s deploying Dockerized backends, integrating WebSocket communication, or building admin dashboards and mobile apps, I focus on delivering practical solutions that improve people's lives.
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
        <SkillsSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
