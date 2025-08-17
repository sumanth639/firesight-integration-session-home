import { useState } from 'react';

const pricingPlans = [
  {
    key: 'instant',
    title: 'INSTANT',
    price: '$0.00',
    buttonText: 'Free Forever',
    ctaText: 'Start Session Now',
    description:
      'Zero setup. Secure encrypted video meetings, instantly in your browser.',
    features: [
      'One-click access',
      'Shareable room link',
      'Live video & chat',
      'Guest name entry',
      'End-to-end encryption',
      '50 participants',
      'Unlimited duration',
    ],
  },
  {
    key: 'basic',
    title: 'BASIC',
    price: '$0.00',
    buttonText: 'Try for Free',
    description:
      'Upgrade meetings with real-time AI assistance and productivity tools.',
    features: [
      'Everything in INSTANT',
      'Personal AI copilot',
      'AI Agents (Solara)',
      '45 min Agent time/month',
      'Call recordings & transcripts',
      '100 participants',
    ],
  },
  {
    key: 'pro',
    title: 'PRO',
    price: '$19.99',
    buttonText: '14 Day Trial | Start Now',
    description:
      'Unlock advanced agents, workflow integrations and bigger calls. Built for power users.',
    features: [
      'Everything in BASIC',
      'Adaptive AI agents',
      '5 hours Agent time/month',
      'Workflow integrations',
      '250 participants',
      'Meeting insights',
    ],
  },
  {
    key: 'platinum',
    title: 'PLATINUM',
    price: '$99.99',
    buttonText: '14 Day Trial | Start Now',
    description:
      'Enterprise-grade automation, support & scale. Maximum power for teams.',
    features: [
      'Everything in PRO',
      '20 hours Agent time/month',
      '1,000 participants',
      'Dedicated onboarding',
      '10hr WorldShare access',
      'Priority support',
    ],
  },
];

// Hexagon menu/feature icon
function Feature({ text }) {
  return (
    <li className="flex items-center gap-2">
      <span
        className="inline-block w-4 h-4 mr-1"
        style={{
          background: 'rgba(255,255,255,0.8)',
          clipPath:
            'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
        }}
      />
      <span className="text-white/90 font-lekton text-base">{text}</span>
    </li>
  );
}

function PricingCard({ plan, isFirst }) {
  return (
    <div
      className={`${
        isFirst ? 'gradient-bg' : 'glass-bg'
      } rounded-xl p-8 flex flex-col min-h-[445px] shadow-lg border`}
      style={{ borderColor: '#252832' }}
    >
      <div className="mb-6 text-center">
        <span className="text-white/60 text-sm font-lekton font-bold tracking-wide mb-1 block">
          Firesight | Sessions
        </span>
        <h3 className="text-white font-lekton text-xl font-bold uppercase mb-2">
          {plan.title}
        </h3>
        <div className="text-white font-lekton text-3xl font-bold mb-3">
          {plan.price}
        </div>
        <button className=" button-gradient text-white font-lekton font-bold rounded-md py-2 px-6 text-base mb-2 ">
          {plan.buttonText}
        </button>
      </div>
      <div className="mb-5 text-center">
        <p className="text-white/75 text-base">{plan.description}</p>
      </div>
      {plan.ctaText && (
           <div key={plan.ctaText} className="main-small-box relative cursor-pointer">
              <div className=" p-[16px] opacity-80">
                <h3 className=" text-white text-2xl font-semibold">
                  {plan.ctaText}
                </h3>
              
                <div className="green-polygon-piece absolute bottom-0 right-0 pointer-events-none" />
              </div>
            </div>
      )}
      <ul className="mt-2 space-y-3">
        {plan.features.map((feature, idx) => (
          <Feature key={idx} text={feature} />
        ))}
      </ul>
    </div>
  );
}

export default function Pricing() {
  const [isIndividual, setIsIndividual] = useState(true);

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-14 ">
      <div className="max-w-[1440px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="gradient-text text-2xl font-bold uppercase tracking-wide mb-8">
            Pricing
          </h1>
          <h2 className="text-white text-center font-lekton font-bold text-4xl md:text-6xl lg:text-[80px] uppercase tracking-wide mb-12">
            The perfect plan
            <br /> for your needs
          </h2>
          {/* Individual/Team Toggle */}
          <div className="flex items-center justify-center gap-7 mb-16">
            <span className="text-white font-lekton text-3xl font-bold">
              Individual
            </span>
            <button
              onClick={() => setIsIndividual(!isIndividual)}
              className="relative w-[51px] h-[31px] rounded-full bg-gray-700 border border-gray-400 transition-all duration-300"
              aria-label="Toggle Individual or Team"
            >
              <div
                className={`absolute top-0.5 w-7 h-7 bg-white rounded-full shadow transition-transform duration-300 ${
                  isIndividual ? 'left-0.5' : 'left-[22px]'
                }`}
              />
            </button>
            <span className="text-white font-lekton text-3xl font-normal">
              Team
            </span>
          </div>
        </div>
        {/* Subtitle */}
        <div className="text-center mb-12">
          <h3 className="text-white font-lekton text-2xl font-bold leading-[140%] max-w-4xl mx-auto">
            <span className="font-bold">
              Freelancers, Consultants & Independent Professionals
            </span>
            <br />
            <span className="font-normal">
              Sessions isn't just for meetings – it's for motion. Built for solo
              knowledge workers navigating complexity alone, Sessions transforms
              every call into progress.
              <span className="font-bold">
                {' '}
                Your AI Agent team works beside you in real time
              </span>
              <span className="font-normal">
                , streamlining every call into focused, productive output.
              </span>
            </span>
          </h3>
        </div>
        {/* Pricing Cards */}
        <div className="rounded-2xl px-4 py-10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {pricingPlans.map((plan, idx) => (
              <PricingCard key={plan.key} plan={plan} isFirst={idx === 0} />
            ))}
          </div>
        </div>
        {/* Gradient Blur Effect */}
        <div className="relative">
          <div className="absolute inset-0 w-full h-[230px] rounded-full opacity-10 bg-gradient-to-r from-gray-200 to-gray-400 blur-[139px] -translate-y-32"></div>
        </div>
      </div>
    </div>
  );
}
