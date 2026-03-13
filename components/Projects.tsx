import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    title: "Billing Department Application",
    description: "Modernized billing systems with Spring Boot microservices, Angular 15, and Real-time Kafka streaming.",
    tags: ["Angular 15", "Spring Boot", "Kafka", "Redis"],
    link: "#"
  },
  {
    title: "Insurance Claims System",
    description: "Scalable web modules to automate claim validation workflows, integrating robust RESTful APIs and analytics.",
    tags: ["Java", "Spring", "AngularJS", "Hibernate"],
    link: "#"
  },
  {
    title: "Healthcare Management Portal",
    description: "Comprehensive interfaces enabling hospital staff to manage patient data, appointments, and billing with role-based access.",
    tags: ["React", "Spring Boot", "MySQL", "JWT"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Key Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx}
            className="group relative flex flex-col p-8 rounded-2xl bg-neutral-900/50 border border-white/10 hover:bg-neutral-800/50 transition-colors"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                {/* @ts-ignore */}
                <Github className="w-6 h-6 text-white" />
              </div>
              <a href={project.link} className="text-neutral-500 hover:text-white transition-colors">
                {/* @ts-ignore */}
                <ExternalLink className="w-5 h-5 pointer-events-none" />
              </a>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-neutral-400 leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono text-neutral-300 bg-white/5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
