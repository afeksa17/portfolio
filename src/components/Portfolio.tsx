import { Play } from "lucide-react";
import { useState } from "react";

import productThumb from "../assets/thumbnails/product.jpeg";
import youtubeThumb from "../assets/thumbnails/youtube.jpeg";
import reelsThumb from "../assets/thumbnails/reels.jpeg";
import metaThumb from "../assets/thumbnails/meta.jpeg";
import motionThumb from "../assets/thumbnails/motion.jpeg";
import vfxThumb from "../assets/thumbnails/vfx.jpeg";

const projects = [
  {
    title: "Product Campaign",
    category: "Social Media Ads",
    thumbnail: productThumb,
    videoId: "rCPvr_NM2AY",
    description: "30-second ad that increased conversions by 240%",
  },
  {
    title: "For Your Channel",
    category: "YouTube Content",
    thumbnail: youtubeThumb,
    videoId: "FefBII-oT5Q",
    description: "Brand story video with 500K+ views",
  },
  {
    title: "Reels Series",
    category: "Reels & TikTok",
    thumbnail: reelsThumb,
    videoId: "8cOrBHz77DE",
    description: "Viral short-form content series",
  },
  {
    title: "E-commerce Expansion",
    category: "Meta Ads",
    thumbnail: metaThumb,
    videoId: "OzVDYAq6OrU",
    description: "Multi-platform campaign with 5x ROAS",
  },
  {
    title: "Animation Showcase",
    category: "Motion Graphics",
    thumbnail: motionThumb,
    videoId: "j7_5VvKmxQc",
    description: "Dynamic animations boosting engagement",
  },
  {
    title: "VFX Video",
    category: "Visual Effects",
    thumbnail: vfxThumb,
    videoId: "cDXw7i6UyS4",
    description: "Animated explainer driving 180% more signups",
  },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-4">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-yellow-500">Work</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of projects that showcase creativity, strategy, and results
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(project.videoId)}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-black" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-yellow-500 text-sm font-semibold block">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* MORE BUTTON */}
          <div className="mt-20 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1nKKqN3jqz6z45CCgVDs2vbQ5IJtId2qe?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border-2 border-yellow-500 
                         px-10 py-4 text-yellow-500 font-semibold
                         hover:bg-yellow-500 hover:text-black transition-all"
            >
              <Play className="w-5 h-5" />
              More Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&mute=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
