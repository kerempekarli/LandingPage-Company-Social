export default function Testimonials() {
  const quotes = [
    {
      headline: "Fast, Real, Intentional",
      quote:
        "Company Social felt like speed-dating for company culture. Fast, intentional, and actually enjoyable.",
      name: "Emily R.",
      title: "People Ops @ Growthly",
    },
    {
      headline: "Unexpected Reconnection",
      quote:
        "I met someone I hadn’t worked with in 2 years. That 20-minute chat changed our team dynamics.",
      name: "Jason T.",
      title: "Engineering Lead @ Flowwave",
    },
    {
      headline: "Measurable Culture",
      quote:
        "It’s the first time culture felt measurable — and people actually wanted to participate.",
      name: "Sofia K.",
      title: "HR Director @ Nexa",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-16">
          “We Finally Felt Connected — Without More Meetings”
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {/* LEFT: One Big Block */}
          <div className="md:col-span-2 bg-white p-10 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all flex flex-col justify-between">
            <h3 className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-4">
              {quotes[0].headline}
            </h3>
            <blockquote className="text-gray-800 italic text-lg leading-relaxed mb-6 border-l-4 border-indigo-500 pl-4">
              “{quotes[0].quote}”
            </blockquote>
            <div className="pt-4 border-t border-gray-100 text-sm text-gray-600 font-medium">
              {quotes[0].name} <br />
              <span className="text-xs text-gray-500">{quotes[0].title}</span>
            </div>
          </div>

          {/* RIGHT: 2 stacked quotes */}
          <div className="flex flex-col gap-6">
            {quotes.slice(1).map((q, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between h-full"
              >
                <h3 className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
                  {q.headline}
                </h3>
                <blockquote className="text-gray-800 italic text-base leading-relaxed mb-4 border-l-4 border-indigo-500 pl-4">
                  “{q.quote}”
                </blockquote>
                <div className="pt-3 border-t border-gray-100 text-sm text-gray-600 font-medium">
                  {q.name} <br />
                  <span className="text-xs text-gray-500">{q.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
