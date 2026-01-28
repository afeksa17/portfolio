import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase">About Me</h2>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Creativity Meets <span className="text-yellow-500">Performance</span>
          </h3>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I am a Video Editor and Digital Marketing Specialist with 6 years of professional experience supporting brands and businesses in creating impactful digital content and performance-driven marketing strategies.
            </p>

            <p>
              My background includes producing high-quality video content for social media and digital campaigns ranging from short-form content for Instagram, TikTok, and Facebook Ads to long-form YouTube videos while aligning creative execution with business objectives.
            </p>

            <p>
              I don't just create beautiful videos; I create <span className="text-white font-semibold">content that converts</span>. Whether it's running high-performance ad campaigns on Facebook, Instagram, Google, or TikTok, or developing content strategies that boost brand growth, I bring both <span className="text-yellow-500 font-semibold">creative vision</span> and <span className="text-yellow-500 font-semibold">analytical precision</span> to every project.
            </p>

            <p className="text-xl text-white font-semibold pt-4">
              Motivated to deliver creative solutions that support business goals and team success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}