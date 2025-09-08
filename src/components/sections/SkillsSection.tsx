import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Angular", level: 95 },
        { name: "TypeScript", level: 90 },
      ]
    },
    {
      title: "Backend", 
      skills: [
        { name: "Node.js", level: 90 },
        { name: "MySQL", level: 88 },
      ]
    },
    {
      title: "Tools & Cloud",
      skills: [
        { name: "AWS/Azure", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Figma", level: 90 },
        { name: "CI/CD", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-neon">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 text-center text-neon">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-accent-cyan">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.2 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-neon rounded-full shadow-neon"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div> */}

        {/* Floating Skill Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['Angular', 'TypeScript', 'Node.js','MySql'].map((tech, index) => (
              <motion.div
                key={tech}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, 5, -5, 0],
                  y: -5
                }}
                className="glass px-4 py-2 rounded-lg cursor-pointer"
              >
                <span className="text-sm font-medium text-accent-purple">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;