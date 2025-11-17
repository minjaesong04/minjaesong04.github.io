import { useEffect, useState } from "react"

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full bg-purple-900 px-4 py-3 text-white shadow-lg transition-all duration-200 hover:bg-purple-800 hover:scale-110
        ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTopButton
