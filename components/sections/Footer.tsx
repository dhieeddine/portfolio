export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
          © {new Date().getFullYear()} Dhia Eddine Barhoumi — Built with Next.js · Deployed on Vercel
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/dhieeddine" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-500 transition-colors text-sm font-mono">
            GitHub
          </a>
          <a href="https://linkedin.com/in/dhiaeddine-barhoumi" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-500 transition-colors text-sm font-mono">
            LinkedIn
          </a>
          <a href="mailto:dhiaeddine.barhoumi@etudiant-enit.utm.tn"
            className="text-gray-400 hover:text-teal-500 transition-colors text-sm font-mono">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
