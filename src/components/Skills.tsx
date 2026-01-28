import { Target, Zap, TrendingUp, } from 'lucide-react';

const skills = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'Every project is measured by real metrics views, engagement, conversions, and ROI.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising quality. Perfect for brands that move fast.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Deep understanding of paid advertising platforms and optimization strategies.'
  },
];

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '8.5x', label: 'Average ROAS' },
  { number: '99%', label: 'Client Satisfaction' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-4">Why Choose Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Built For <span className="text-yellow-500">Performance</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="bg-zinc-900 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-all duration-300">
                  <skill.icon className="w-10 h-10 text-yellow-500 group-hover:text-black transition-all duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-black/80 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
