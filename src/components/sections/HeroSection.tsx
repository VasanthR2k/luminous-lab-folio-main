import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Scene3D from '@/components/3D/Scene3D';
import ParticlesBackground from '@/components/ParticlesBackground';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vasanth_Kumar_Resume.pdf"; // file path from public/
    link.download = "Vasanth_Kumar_Resume.pdf"; // file name for user
    link.click();
  };
  

  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-xl font-medium text-accent-cyan mb-2">Hello, I'm</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="text-neon">VASANTH</span>{' '}
                <span className="text-neon-pink">KUMAR</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Full-Stack Developer & UI/UX Designer creating beautiful, 
                interactive digital experiences with cutting-edge technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                variant="neon"
              >
                View Projects
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <a href='https://drive.google.com/file/d/11Xu0yc8BEOhqZwz6HUWfM27xYE93eXQs/view' download="Vasanth_Kumar_Resume.pdf" target='_blank' rel="noreferrer">  
              <Button
                variant="outline"
                size="lg"
                className="glass border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background px-8 py-3"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-accent-cyan transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[500px] lg:h-[600px] relative"
          >
            <Scene3D className="animate-float" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;