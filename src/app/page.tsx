'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#111111] to-[#1a1a1a] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 md:p-8">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-4xl font-bold">
            <span className="text-white">22</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 md:px-8 py-20 md:py-32">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              In progress
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-fade-in-up">
              TWENTWO
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Building the future, one project at a time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a 
                href="mailto:jason@twentwo.com"
                className="px-8 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a 
                href="#about"
                className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Stats/Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-gray-800 backdrop-blur-sm animate-fade-in-up animation-delay-600">
            <div className="text-3xl font-bold text-white mb-2">2025</div>
            <div className="text-gray-400">Founded</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-gray-800 backdrop-blur-sm animate-fade-in-up animation-delay-800">
            <div className="text-3xl font-bold text-white mb-2">Tech</div>
            <div className="text-gray-400">Focused</div>
          </div>
          <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-gray-800 backdrop-blur-sm animate-fade-in-up animation-delay-1000">
            <div className="text-3xl font-bold text-white mb-2">Build</div>
            <div className="text-gray-400">First</div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="relative z-10 px-6 md:px-8 py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">About Twentwo</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Twentwo is a pragmatic technology company focused on 
            building innovative solutions and meaningful products.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 px-6 md:px-8 py-12 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TWENTWO</h3>
              <p className="text-gray-400">Technology company</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:jason@twentwo.com" 
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  jason@twentwo.com
                </a>
                <a 
                  href="https://www.linkedin.com/company/twentwo/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/twentwohq" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://twitter.com/jason_ganub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  X
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Founder</h3>
              <p className="text-gray-400">Jason Ganub</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Twentwo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
