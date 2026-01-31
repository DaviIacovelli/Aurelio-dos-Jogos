import { Gamepad2, Search, Sparkles, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
      <nav className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo e Nome */}
        <div className="flex items-center space-x-3 group">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl rotate-45 shadow-lg shadow-cyan-500/25"></div>
              <Gamepad2 className="absolute inset-0 m-auto text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Aurélio dos Jogos
              </span>
              <span className="text-xs text-gray-400 font-light">
                Reviews & Análises
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-1">
          {[
            { href: "/", label: "Início", icon: Sparkles },
            { href: "/reviews", label: "Reviews" },
            { href: "/lancamentos", label: "Lançamentos" },
            { href: "/top-jogos", label: "Top Jogos" },
            { href: "/sobre", label: "Sobre" },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 group"
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  )}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Search and User Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar jogos..."
                className="pl-10 pr-4 py-2.5 w-64 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Mobile Search */}
          <button className="lg:hidden p-2.5 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700/80 transition-all duration-300">
            <Search className="w-5 h-5" />
          </button>

          {/* Login Button */}
          <Link
            href="/login"
            className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95 group"
          >
            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Login</span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1.5 p-2.5 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-700/80 transition-colors duration-200 group">
            <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:from-cyan-300 group-hover:to-purple-300"></span>
            <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:from-cyan-300 group-hover:to-purple-300"></span>
            <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:from-cyan-300 group-hover:to-purple-300"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
