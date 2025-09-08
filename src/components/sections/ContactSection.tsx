import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Youtube, Instagram, Briefcase } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'text-foreground' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vasanth-kumar-2b97931b5', color: 'text-accent-blue' },
      { name: 'Naukri', icon: NaukriIcon, url: 'https://www.naukri.com', color: 'text-blue-600' },
    // { name: 'Twitter', icon: Twitter, url: 'https://twitter.com', color: 'text-accent-cyan' },
    // { name: 'YouTube', icon: Youtube, url: 'https://youtube.com', color: 'text-red-500' },
    // { name: 'Instagram', icon: Instagram, url: 'https://instagram.com', color: 'text-accent-pink' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'vasanthkumarp252@gmail.com' },
    { icon: Phone, label: 'Phone', value: '9344868984' },
    { icon: MapPin, label: 'Location', value: 'Madurai' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="text-neon">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="glass border-accent-purple/30 focus:border-accent-purple"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="glass border-accent-purple/30 focus:border-accent-purple"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="glass border-accent-purple/30 focus:border-accent-purple min-h-32"
                      required
                    />
                  </motion.div>
                  
                  <Button
                    type="submit"
                    className="w-full"
                    variant="neon"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon">Contact Info</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-neon">Follow Me</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, 5, -5, 0],
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center p-4 rounded-lg glass hover:bg-accent/10 transition-colors"
                    >
                      <social.icon className={`w-8 h-8 ${social.color} mb-2`} />
                      <span className="text-sm font-medium text-foreground">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export const NaukriIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <rect width="512" height="512" fill="#0073e6" />
    <circle cx="256" cy="120" r="40" fill="#fff" />
    <path
      d="M200 200 L312 512 L240 512 L128 240 Z"
      fill="white"
    />
  </svg>
);
export default ContactSection;