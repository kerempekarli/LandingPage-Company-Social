export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-[#f9fafb] to-white py-36 px-6">
            <div className="max-w-5xl mx-auto text-center">
                {/* EYEBROW TEXT */}
                <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-6">
                    Introducing Company Social
                </p>

                {/* HEADLINE */}
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                    Create Real Connection <br className="hidden md:inline" />
                    Inside Remote Teams.
                </h1>

                {/* SUBHEAD */}
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                    Smart weekly matches. Lightweight conversations.
                    Real cultural momentum — fully automated.
                </p>

                {/* CTA BUTTONS */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#signup"
                        className="inline-block bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-md
             hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out"
                    >
                        Request Early Access →
                    </a>

                    <a
                        href="#features"
                        className="inline-block border border-gray-300 text-gray-800 bg-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition"
                    >
                        How it Works
                    </a>
                </div>
            </div>
        </section>
    );
}
