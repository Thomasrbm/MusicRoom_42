const steps = [
  {
    step: "01",
    title: "Create a room",
    description:
      "Open MusicRoom and create a new event. Set it as public or private and choose who can vote or edit.",
  },
  {
    step: "02",
    title: "Invite your crowd",
    description:
      "Share the room link or let people find it by location. Friends join instantly with their account.",
  },
  {
    step: "03",
    title: "Vote & vibe together",
    description:
      "Everyone suggests and votes for tracks in real-time. The most popular songs rise to the top automatically.",
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-24 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3">
            How it works
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Up and running in minutes
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative flex flex-col items-center text-center">
              {index < steps.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-1/2 top-10 hidden h-0.5 w-full translate-x-8 bg-gradient-to-r from-purple-600/50 to-transparent md:block"
                />
              )}
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600/10 border border-purple-500/30 text-purple-400 text-2xl font-bold">
                {item.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HowItWorksSection };
