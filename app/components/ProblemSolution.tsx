// src/app/components/ProblemSolution.tsx

export default function ProblemSolution() {
    return (
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Problem */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Problem</h2>
            <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
              <li>Remote teams feel disconnected and isolated.</li>
              <li>New hires struggle to integrate and build trust.</li>
              <li>Cross-functional collaboration is limited by silos.</li>
              <li>Company culture becomes vague and unmeasurable.</li>
            </ul>
          </div>
  
          {/* Right: Our Solution */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <ul className="text-lg text-gray-700 space-y-4 list-disc list-inside">
              <li>Weekly 1:1 smart matches across teams and levels.</li>
              <li>Lightweight conversations that build human connection.</li>
              <li>Calendar invites and Slack integrations included.</li>
              <li>Real data on culture engagement and adoption.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  