import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
{
  title: "DEO (Data Entry Operations)",
  description: "Foundation of logistics automation, enabling accurate and efficient data entry for customs filings.",
  tech: ["Angular", "TypeScript", "SCSS", "RxJS"],
  image: "/api/placeholder/400/250",
  github: "#",
  live: "#"
},
{
  title: "CERTA",
  description: "Centralized platform for customs brokers to manage in-bond requests, ISF submissions, and real-time shipment tracking.",
  tech: ["Angular", "TypeScript", "Material UI", "RxJS"],
  image: "/api/placeholder/400/250",
  github: "#",
  live: "#"
},
{
  title: "Form Builder",
  description: "Versatile tool for gathering client and internal requirements with intuitive forms and validation.",
  tech: ["Angular", "TypeScript", "Reactive Forms", "SCSS"],
  image: "/api/placeholder/400/250",
  github: "#",
  live: "#"
}

    // {
    //   title: "Task Management Tool",
    //   description: "Collaborative project management with advanced features",
    //   tech: ["Angular", "NestJS", "PostgreSQL"],
    //   image: "/api/placeholder/400/250",
    //   github: "#", 
    //   live: "#"
    // },
    // {
    //   title: "Crypto Tracker",
    //   description: "Real-time cryptocurrency tracking with portfolio management",
    //   tech: ["React", "GraphQL", "Redis"],
    //   image: "/api/placeholder/400/250",
    //   github: "#",
    //   live: "#"
    // },
    // {
    //   title: "Learning Platform",
    //   description: "Interactive online learning platform with video streaming",
    //   tech: ["Next.js", "Prisma", "AWS"],
    //   image: "/api/placeholder/400/250",
    //   github: "#",
    //   live: "#"
    // }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional  <span className="text-neon">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Some of the professional projects I’ve worked on, showcasing my role in development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-primary opacity-20" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ opacity: 0.8 }}
                  >
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-background"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-background"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded-full border border-accent-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="neon"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;