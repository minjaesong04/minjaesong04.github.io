import icon from "../assets/icon.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8 text-[#d4d4d4]">
      {/* Logo + Section Links */}
      <div className="flex items-center gap-8">
        <img
          className="w-10 h-10 rounded-full border border-[#d4d4d4]"
          src={icon}
          alt="Logo"
        />

        <div className="hidden md:flex gap-6 font-medium">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-white transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-white transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/minjaesong04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0077b5] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/minjaesong04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/minjae_spng"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
