export default function Footer() {
    return (
      <footer className="bg-gray-50 text-gray-500 py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm">
            © {new Date().getFullYear()} Company Social. All rights reserved.
          </div>
  
          <div className="flex gap-6 text-sm">
            <a
              href="mailto:team@companysocial.io"
              className="hover:text-gray-800 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="hover:text-gray-800 transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://twitter.com/companysocial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    );
  }
  