import {
  BriefcaseIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    title: "Break Down Silos",
    description:
      "Connect people across departments who would never meet otherwise — enabling collaboration and empathy.",
    icon: GlobeAltIcon,
  },
  {
    title: "Boost Remote Belonging",
    description:
      "Give remote and hybrid employees a sense of inclusion and connection that scales beyond Zoom.",
    icon: SparklesIcon,
  },
  {
    title: "Accelerate Culture Onboarding",
    description:
      "Help new hires integrate into company culture through real people — not PDFs.",
    icon: BriefcaseIcon,
  },
  {
    title: "Measurable Engagement",
    description:
      "Track connections, frequency, sentiment and culture health over time.",
    icon: SparklesIcon,
  },
];

export default function Benefits() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits for Every Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Company Social is built to create real outcomes: for culture, onboarding, retention, and happiness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <benefit.icon className="h-10 w-10 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
