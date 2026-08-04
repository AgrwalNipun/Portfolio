const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Gravity Engineering Services",
    period: "2026 January - 2026 July",
    description:
      "Built and maintained full-stack web applications, improving performance and developer experience.",
    tags: ["React", "Spring Boot"],
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "Technolitics India",
    period: "June 2025 - September 2025",
    description:
      "Developed responsive user interfaces and collaborated with designers to ship features. Led the end-to-end development of a community mobile app, handling architecture, implementation, and feature delivery independently.",
    tags: ["React", "Flutter", "Tailwind CSS", "Figma"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary"> Experience </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A timeline of my professional journey, where I've turned ideas into
          products and learned something new every step of the way.
        </p>

        <div className="relative border-l-2 border-primary/20 pl-8 space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-card rounded-lg p-6 shadow-xs card-hover"
            >
              <span className="absolute -left-[41px] top-8 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />

              <div className="flex flex-wrap items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                  {exp.period}
                </span>
              </div>

              <p className="text-left text-primary font-medium mb-2">{exp.company}</p>
              <p className="text-left text-muted-foreground text-sm mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
