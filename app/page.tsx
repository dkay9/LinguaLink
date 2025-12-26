import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center space-y-10">
        {/* Logo / Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            LinguaLink
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Break language barriers instantly. Translate, explain, and converse
            across languages using AI — text or voice.
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Feature
            title="Real-Time Translation"
            desc="Translate messages across multiple languages with context-aware accuracy."
          />
          <Feature
            title="Explain Mode"
            desc="Understand meanings, slang, and cultural context — not just words."
          />
          <Feature
            title="Voice Input"
            desc="Speak naturally and let LinguaLink handle the rest."
          />
        </div>

        {/* CTA */}
        <div className="pt-6">
          <Link
            href="/chat"
            className="inline-block px-8 py-4 rounded-xl bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition"
          >
            Start Using LinguaLink
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-sm text-zinc-500 pt-8">
          Built for Hackathon ARC · No sign-up required
        </p>
      </div>
    </main>
  );
}

type FeatureProps = {
  title: string;
  desc: string;
};

function Feature({ title, desc }: FeatureProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
