import { Video, TrendingUp, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing tailored for maximum impact across all platforms.',
    features: [
      'Short-form content (Reels, TikTok, Shorts)',
      'Social media ads',
      'YouTube videos',
      'Brand content & commercials',
      'Motion graphics & animation',
      'Visual effects & color grading',
    ]
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven advertising campaigns that deliver measurable results and ROI.',
    features: [
      'Meta Ads',
      'TikTok Ads',
      'Google Ads',
      'Campaign strategy & optimization',
      'Audience targeting & analytics',
      'A/B testing & performance tracking'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Content Strategy & Brand Growth',
    description: 'Strategic content planning that aligns with your business goals and drives growth.',
    features: [
      'Content strategy development',
      'Brand positioning',
      'Social media growth',
      'Performance analysis',
      'Creative direction'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-4">Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              What I Do <span className="text-yellow-500">Best</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Providing video editing and digital marketing expertise to support business objectives and team performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 group"
              >
                <div className="bg-yellow-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-yellow-500 group-hover:text-black transition-all duration-300" />
                </div>

                <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h4>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-yellow-500 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
