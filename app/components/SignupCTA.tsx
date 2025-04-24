export default function SignupCTA() {
  return (
    <section
      id="signup"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] text-white py-28 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Build a culture that scales
        </h2>
        <p className="text-lg text-neutral-300 mb-12 max-w-xl mx-auto">
          Join early access and help shape the future of internal culture.
          Invite-only, early features, real impact.
        </p>

        <form
          action="https://docs.google.com/forms/d/e/1FAIpQLSfvY7hRQ0cVgSGHhhYevTJZFo-ug1jmgQBCUb779rZRdWBhdw/formResponse"
          method="POST"
          target="_blank"
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl max-w-xl mx-auto grid gap-6"
        >
          <input
            name="entry.963359079"
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            name="entry.575962739"
            type="email"
            placeholder="Work Email"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="entry.782313045"
              placeholder="Company"
              className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              name="entry.1636390174"
              placeholder="Role / Department"
              className="w-full p-3 rounded-md bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-semibold text-base rounded-xl shadow-lg hover:brightness-110 hover:scale-[1.015] transition-transform transition-shadow duration-200 ease-in-out"
          >
            Request Early Access →
          </button>
        </form>
      </div>
    </section>
  );
}
