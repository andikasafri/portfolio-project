export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="space-x-4">
            <a href="/about" className="hover:text-blue-400">
              About
            </a>
            <a href="/projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="/contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-300 mb-8">
          Hi, I’m [Your Name], a passionate developer learning and building cool
          things!
        </p>
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View My Projects
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 mt-auto">
        <div className="container mx-auto text-center text-gray-300">
          &copy; {new Date().getFullYear()} [Your Name]. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
