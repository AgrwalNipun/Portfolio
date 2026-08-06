import { ArrowRight, ExternalLink, Github, Terminal } from "lucide-react";
// import {rolbolImage} from "../public/assets/rolbol.png";


const projects = [

  {
    id: 1,
    title: "API Change Notifier",
    description:
      "A GitHub workflow that extracts API endpoints from any Spring Boot project and notifies users about changes.",
    image: "/projects/gh_actions_v2.png",
    tags: ["Github Actions", "Spring Boot", "React.js"],
    githubUrl: "https://github.com/AgrwalNipun/api_change_notifier",
  },

{
  id: 2,
  title: "Movie Watchlist Backend",
  description:
    "A Node.js and Express REST API featuring JWT authentication and CRUD endpoints for managing users' personal movie watchlists.",
  tags: ["Node.js", "Express.js", "PostgreSQL", "JWT"],
  githubUrl: "https://github.com/AgrwalNipun/MovieBackend",
},
{
  id: 3,
  title: "Public Issue Reporting System",
  description:
    "A full-stack platform that enables citizens to report public issues, track complaint status, and helps authorities manage and resolve them efficiently.",
  tags: ["React.js", "Spring Boot", "Java", "PostgreSQL"],
  githubUrl: "https://github.com/AgrwalNipun/public_issue",
},

  {
    id: 4,
    title: "AI Roadmap Generator",
    description:
      "A personalized roadmap generator that uses AI to create structured learning or project plans based on user prompts.",
    image: "/projects/ai_roadmap.png",
    tags: ["Spring Boot", "Gemini APIs", "React.js"],
    demoUrl: "https://roadmap-ai-frontend-eta.vercel.app/",
    githubUrl: "https://github.com/AgrwalNipun/AI_Roadmap_Backend",
  },

  {
    id: 5,
    title: "Rolbol Mobile Frontend",
    description: "A beautiful frontend for Rolbol, A community app.",
    image: "/projects/rolbol.png",
    tags: ["Flutter", "Android Studio", "Firebase"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.technolitics.rolbol",
    githubUrl: "https://github.com/AgrwalNipun/rolbol",
  },

  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 text-primary/70">
                    <Terminal className="h-12 w-12" />
                    <span className="text-sm font-medium text-muted-foreground px-4 text-center">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                  

                    {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    )}

                   
                    
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AgrwalNipun"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
