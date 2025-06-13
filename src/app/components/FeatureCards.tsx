export default function FeatureCards() {
    const features = [
      {
        title: "Universal Bug Reporting",
        description: "Report bugs with screenshots, logs, and environment details.",
        icon: "🐞"
      },
      {
        title: "AI-Powered Triage",
        description: "Automatically categorize and prioritize reports.",
        icon: "🤖"
      },
      {
        title: "Solve-to-Earn",
        description: "Earn rewards for fixing critical issues.",
        icon: "💰"
      }
    ];
  
    return (
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }