import logo from "./assets/rowix-logo.png";

export default function Footer() {
  return (
    <div>
      <footer className="py-16 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto">
          {/* Animated Line */}
          <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-10 animate-line"></div>

          <div className="flex justify-center mb-6">
            <a href="https://rowix.com" target="_blank">
              <img
                src={logo}
                alt="Rowix Logo"
                width={"100px"}
                height={"100px"}
              />
            </a>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-xl mb-4">
              Rowix - შენი წარმატების გარანტი
            </p>
            <div className="flex justify-center gap-6 text-slate-500">
              <span>© 2025 Rowix. ყველა უფლება დაცულია.</span>
              <span>•</span>
              <span>Created by Gabriel Giorgadze</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style>{`
        /* Swiper navigation buttons style */
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          background: rgba(255, 255, 255, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Pagination dots style */
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6);
        }

        .swiper-pagination-bullet-active {
          background: white;
          width: 30px;
          border-radius: 10px;
        }

        /* Footer line animation */
        @keyframes lineAnimation {
          0%, 100% {
            transform: scaleX(0.3);
          }
          50% {
            transform: scaleX(1);
          }
        }

        .animate-line {
          animation: lineAnimation 2s ease-in-out infinite;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
}
