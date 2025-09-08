import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const interests = [
    {
      icon: Code2,
      title: "Front-End Developmen",
      description: "Building responsive and dynamic applications using Angular, TypeScript, and modern web technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design", 
      description: "Designing simple, intuitive, and user-friendly interfaces that enhance user experience"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Exploring and implementing cutting-edge frameworks, libraries, and tools to deliver innovative solutions."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Improving speed, scalability, and efficiency of applications for the best user experience."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-neon">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Front-End Developer with 2+ years of experience building modern web applications using Angular and related technologies. I focus on creating clean, scalable, and efficient solutions that combine strong functionality with intuitive design. I enjoy learning new tools and improving both my coding and communication skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass card-hover h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-primary mb-4"
                  >
                    <interest.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-neon">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
               I started my journey as a curious student who loved solving problems with code. Over time, I developed strong skills in Angular and RxJS, and contributed to projects focused on delivering efficient web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I’m not coding, I spend time learning new technologies, sharpening my English skills, and sharing knowledge with others.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Experience</span>
                <span className="text-accent-cyan">2+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Projects Completed</span>
                <span className="text-accent-pink">2+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Technologies Mastered</span>
                <span className="text-accent-purple">Angular, RxJS, TypeScript, HTML, SCSS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Coffee Consumed</span>
                <span className="text-neon">☕ Endless</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;