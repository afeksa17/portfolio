import { Mail, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something <span className="text-yellow-500">Amazing</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to elevate your brand with powerful video content and marketing strategies?
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <a
                href="mailto:afeksa17@gmail.com"
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="bg-yellow-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-all duration-300">
                  <Mail className="w-7 h-7 text-yellow-500 group-hover:text-black transition-all duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-2">Email Me</h4>
                <p className="text-gray-400 mb-3">For project inquiries and collaboration</p>
                <span className="text-yellow-500 font-semibold group-hover:underline">
                  afeksa17@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/6282125810815"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <div className="bg-yellow-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-all duration-300">
                  <MessageCircle className="w-7 h-7 text-yellow-500 group-hover:text-black transition-all duration-300" />
                </div>
                <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
                <p className="text-gray-400 mb-3">Quick response for urgent projects</p>
                <span className="text-yellow-500 font-semibold group-hover:underline">
                  Chat on WhatsApp
                </span>
              </a>
            </div>

            <div className="text-center">
              <button
               onClick={() =>
                 window.open(
                   "https://wa.me/6282125810815?text=Hi%20I%20found%20your%20portfolio.%0AI'm%20interested%20in%20starting%20a%20project.%0ACan%20we%20discuss%20the%20details?",
                   "_blank"
                 )
               }
               className="group bg-yellow-500 text-black px-10 py-5 rounded-full font-bold text-lg
                          hover:bg-yellow-400 transition-all duration-300 flex items-center
                          gap-3 hover:gap-5 mx-auto shadow-lg shadow-yellow-500/20"
             >
                Start Your Project
                <Send className="w-5 h-5 transition-all" />
              </button>

              <p className="text-gray-500 mt-6 text-sm">
                Typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
