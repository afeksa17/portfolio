import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* AVAILABLE BADGE */}
          <button
            onClick={() => scrollToSection("services")}
            className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20
                       rounded-full px-6 py-2 mb-8 cursor-pointer
                       hover:bg-yellow-500/20 transition
                       hover:scale-105 active:scale-95 animate-pulse"
          >
            <Play className="w-4 h-4 text-yellow-500" fill="currentColor" />
            <span className="text-yellow-500 font-medium text-sm tracking-wide">
              AVAILABLE FOR PROJECTS
            </span>
          </button>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Video Editor &<br />
            <span className="text-yellow-500">Digital Marketing</span><br />
            Specialist
          </h1>

          {/* DESCRIPTION */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Video Editor and Digital Marketing Specialist with experience supporting brands through
            creative content and analytics-driven strategies.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="group bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg
                         hover:bg-yellow-400 transition-all duration-300
                         flex items-center gap-2 hover:gap-4
                         shadow-lg shadow-yellow-500/20"
            >
              View Portfolio
              <ArrowRight className="w-5 h-5 transition-all" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="group bg-transparent border-2 border-white text-white
                         px-8 py-4 rounded-full font-bold text-lg
                         hover:bg-white hover:text-black transition-all duration-300
                         flex items-center gap-2"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
