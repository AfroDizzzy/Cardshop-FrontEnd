export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white h-[10vh] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full min-h-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 items-center min-h-0">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-4 md:w-5 h-4 md:h-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-xs md:text-sm font-bold truncate">
                MTG Marketplace
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center space-x-3 md:space-x-4 text-xs">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end space-y-1 md:space-y-0 md:space-x-3">
            <div className="flex space-x-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-3 md:w-4 h-3 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-3 md:w-4 h-3 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg
                  className="w-3 md:w-4 h-3 md:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-400 text-xs hidden md:block">
              © {currentYear} MTG Marketplace
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
