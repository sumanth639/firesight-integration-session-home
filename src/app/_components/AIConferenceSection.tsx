import Link from 'next/link';

export default function AIConferenceSection() {
  return (
    <section className="relative w-full text-white px-4 md:px-14 py-20 overflow-hidden">
      {/* Background Blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-green-500 rounded-full opacity-10 blur-[180px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16 items-stretch">
          {/* About Column - 60% width */}
          <div className="md:col-span-3 p-8 rounded-[20px] shadow-xl text-center flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10">
            <div className="relative z-10">
              <h3 className="text-[28px] font-bold mb-4 gradient-text">
                ABOUT
              </h3>
              <h2 className="font-extrabold text-white text-5xl mb-10">
                AI-NATIVE CONFERENCE PLATFORM
              </h2>
              <p className="text-gray-300  text-base leading-relaxed mb-6">
                Sessions is a next-generation, browser-based conferencing
                solution that combines intuitive collaboration tools with the
                power of embedded AI Agents. In addition to seamless integration
                with platforms like Zoom and Google Meet, Sessions empowers you
                to host and manage your calls directly in a single interface.
                From the moment a meeting begins, intelligent AI agents work
                behind the scenes to transcribe conversations, generate
                real-time summaries, pinpoint action items - even analyse
                conversation sentiment. Sessions helps you stay focused on
                high-value discussions rather than routine admin. <b>By unifying
                live video calls and AI-driven intelligence in one place,
                Sessions transforms the way teams brainstorm, plan & make
                decisions.</b>
              </p>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Hosts can easily switch user roles, invite new participants on
                the fly, and tag important moments for quick review. Sessions
                can be stopped & started - pause a meeting today, continue it
                next week and pick up right where you left off. Once the session
                stops, all recordings, chat logs, and transcripts are
                automatically saved to your library, making them easy to search,
                reference, or export (manually or by AI Agents), forming a
               <b> continuously growing, AI-powered knowledge base.</b> Never lose
                track of the "why" behind decisions, nor waste time digging for
                meeting notes. Extract more value from calls and <b>build momentum,
                not memory gaps.</b>
              </p>
            </div>
            <div className=" z-10">
              <Link href="#" passHref>
                <button className="px-12 py-3 text-white bg-transparent rounded-full button-gradient">
                  Try for Free
                </button>
              </Link>
            </div>
          </div>

          {/* Pricing & Use Cases Column - 40% width */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex-1 p-8 rounded-[20px] shadow-xl text-center bg-white/5 backdrop-blur-md border border-white/10">
              <div className="relative z-10">
                <h3 className="text-[28px] font-bold mb-7 gradient-text">
                  PRICING
                </h3>
                <p className="text-gray-200 mb-7 text-2xl font-semibold ">
                  $0 - $99.95 P/M
                </p>
                <p className="text-base  text-gray-300 leading-relaxed">
                  Firesight | Sessions offers a Freemium model with core
                  features available at no charge. Scale up with paid tiers to
                  unlock advanced AI capabilities and expanded team features.
                  Seamlessly grow your conferencing toolkit without breaking the
                  bank.
                </p>
              </div>
            </div>

            <div className="flex-1 p-8 rounded-[20px] shadow-xl text-center bg-white/5 backdrop-blur-md border border-white/10">
              <div className="relative z-10">
                <h3 className="text-[28px] font-bold mb-4 gradient-text">
                  USE CASES
                </h3>
                <div>
                  <p className="text-base text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">
                      Brainstorming & Team Sync:
                    </span>{' '}
                    Generate action items and summaries in real time for faster
                    alignment.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">
                      Client & Customer Meetings:
                    </span>{' '}
                    Enhance professionalism with AI Agent co-pilots who know the
                    customer & objective.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">
                      Webinars & Virtual Events:
                    </span>{' '}
                    Host large-scale sessions with high-fidelity streaming and
                    dynamic AI assistance.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    <span className="font-bold text-white">
                      AI-Augmented Collaboration:
                    </span>{' '}
                    Offload routine tasks to embedded agents, freeing you to
                    focus on other things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
