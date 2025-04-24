import {
    CalendarDaysIcon,
    UserGroupIcon,
    ChartBarIcon,
  } from "@heroicons/react/24/outline";
  
  const features = [
    {
      title: "Smart Matching Engine",
      description:
        "Connect employees weekly based on department, seniority, and engagement goals.",
      icon: UserGroupIcon,
    },
    {
      title: "Calendar + Slack Integration",
      description:
        "Automatically sends invites and reminders through tools your team already uses.",
      icon: CalendarDaysIcon,
    },
    {
      title: "Track Cultural Engagement",
      description:
        "See how team participation evolves with actionable metrics.",
      icon: ChartBarIcon,
    },
  ];
  
  export default function Features() {
    return (
      <section className="bg-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Invisible Automation. Visible Results.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Company Social works behind the scenes to power culture without creating more admin or meetings.
          </p>
  
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3 text-left">
            {features.map((f, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <f.icon className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition" />
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition">
                    {f.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-base">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  