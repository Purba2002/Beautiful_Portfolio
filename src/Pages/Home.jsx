import { useState } from "react";
import emailjs from "@emailjs/browser";

import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "@/components/Footer";

export const Home = () => {
    const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("Send Message");

    const handleSubmit = (e) => {
      e.preventDefault();
      setStatus("Sending...");

      emailjs.send(
        "service_61iiyco", // EmailJS se milega
        "template_esdnw7u", // EmailJS se milega  
        formData,
        "vzIQ16-8XlqxiU2Vi" // EmailJS se milega
      ).then(() => {
        setStatus("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("Send Message"), 3000);
      }).catch(() => {
        setStatus("Failed to send");
        setTimeout(() => setStatus("Send Message"), 3000);
      });
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-foreground/70">Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full mt-1 p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm text-foreground/70">Your Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full mt-1 p-3 rounded-lg bg-background border border-border focus:border-primary outline-none"
            required
          />
        </div>
        <div>
          <label className="text-sm text-foreground/70">Your Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full mt-1 p-3 rounded-lg bg-background border border-border h-32 resize-none focus:border-primary outline-none" // <-- yahan border add kiya
            required
          />
        </div>
        <button type="submit" className="cosmic-button w-full">
          {status}
        </button>
      </form>
    );
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <div className="fixed top-5 right-5 z-50 cursor-pointer">
       <ThemeToggle />
      </div>
      <ThemeToggle />
      <Navbar /> 

      <main className="relative z-10 pt-20">

        {/* ================= HERO SECTION with PHOTO ================= */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
              
              {/* Left: Text */}
              <div className="flex-1 text-center md:text-left animate-fade-in">
                <p className="text-primary font-medium text-lg mb-4">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">Purba Mondal</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">AI/ML Student</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  I am passionate about Data Analytics, Gen AI, Machine Learning, 
                  Python, React, and building modern applications that solve real-world problems.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a href="#projects" className="cosmic-button">View My Projects</a>
                  <a href="#contact" className="px-6 py-2 rounded-full border border-border transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105">
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="flex-1 flex justify-center animate-float">
                <div className="gradient-border p-1 rounded-full">
                  <img 
                    src="/purba.jpg"  // <-- YAHAN APNI PHOTO KA NAAM DALO
                    alt="Purba Mondal" 
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-glow">About Me</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
               I am a motivated and curious learner currently pursuing my studies in B.Tech in Computer Science and Engineering.I'm eager to explore opportunities in AI development , Software Development ,and I love new technologies.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                My interests include Python, AI/ML, SQL, and building practical 
                projects that solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">My Skills</h2>
              <p className="text-foreground/70">Technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {["Python","Artificial Intelligence","PowerBi","PowerQuery","SQL","Pandas","NumPy","Machine Learning","Gen AI","Git & GitHub","LangChain"].map(skill => (
                <div key={skill} className="gradient-border card-hover p-6 text-center">
                  <h3 className="font-semibold text-lg">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS SECTION with LINKS ================= */}
        <section id="projects" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">My Projects</h2>
              <p className="text-foreground/70">Some of the projects I have worked on</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Project 1 */}
              <div className="gradient-border card-hover p-6 text-left">
                <h3 className="text-2xl font-bold mb-4">Mental Health Score Predictor</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  A machine learning project that predicts mental health scores based on user-provided information.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Python</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Machine Learning</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Pandas</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/Purba2002/Mental-Health-Score-Predictor" target="_blank" className="cosmic-button inline-block">GitHub</a>
                  <a href="https://mental-health-score-predictor-jbcnmcjksyz5n3napdc5xm.streamlit.app/" target="_blank" className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground">Live Demo</a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="gradient-border card-hover p-6 text-left">
                <h3 className="text-2xl font-bold mb-4">Multi-Agent AI Research System</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  An AI research platform powered by multiple specialized agents that work together. One agent searches the web, another analyzes data, and another writes the final report.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Python</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Groq</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Tavily</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">LangChain</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/Purba2002/multi-agent-system" target="_blank" className="cosmic-button inline-block">GitHub</a>
                  <a href="https://multi-agent-system-9zphquqds9gfdgjvrdbfkk.streamlit.app/" target="_blank" className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground">Live Demo</a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="gradient-border card-hover p-6 text-left">
                <h3 className="text-2xl font-bold mb-4">AI Meeting Assistant</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  An AI-powered meeting assistant that performs transcription, summarization, action-item extraction, and transcript-based conversations.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Python</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">LangChain</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-sm">Whisper</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/yourusername/ai-meeting-assistant" target="_blank" className="cosmic-button inline-block">GitHub</a>
                  <a href="https://your-demo-link.com" target="_blank" className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground">Live Demo</a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= EXPERIENCE & EDUCATION SECTION ================= */}
        <section id="experience" className="py-24 px-6 bg-card/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">Experience & Education</h2>
              <p className="text-foreground/70">My learning journey</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Education */}
              <div className="gradient-border card-hover p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 className="text-2xl font-bold">B.Tech in Computer Science & Engineering with specialization in AI/ML</h3>
                  <span className="text-primary font-medium">2023 - 2027</span>
                </div>
                <p className="text-primary/80 font-semibold mb-3">Brainwar</p>
                <p className="text-foreground/70 leading-relaxed">
                  Currently pursuing B.Tech with focus on AI/ML, Data Analytics, and Software Development. Actively working on real-world projects.
                </p>
              </div>

              {/* Project Experience */}
              <div className="gradient-border card-hover p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                  <h3 className="text-2xl font-bold">AI/ML Project Developer</h3>
                  <span className="text-primary font-medium">2024 - Present</span>
                </div>
                <p className="text-primary/80 font-semibold mb-3">Personal & Academic Projects</p>
                <p className="text-foreground/70 leading-relaxed">
                  Built and deployed 3+ AI/ML projects including Mental Health Predictor and Multi-Agent Research System. Gained hands-on experience in Python, LangChain, and Streamlit deployment.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section id="testimonials" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">Testimonials</h2>
              <p className="text-foreground/70">What people say about my work</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Testimonial 1 */}
              <div className="gradient-border card-hover p-6">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "Purba has excellent problem-solving skills. Her ML projects are well-structured and deployed perfectly. Very dedicated learner."
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/50?u=prof1" alt="mentor" className="w-12 h-12 rounded-full"/>
                  <div>
                    <p className="font-semibold">Dr. Sharma</p>
                    <p className="text-sm text-foreground/60">College Professor</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="gradient-border card-hover p-6">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "Great teammate! She delivered the AI project ahead of deadline and explained complex concepts very clearly."
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/50?u=peer1" alt="peer" className="w-12 h-12 rounded-full"/>
                  <div>
                    <p className="font-semibold">Aryan</p>
                    <p className="text-sm text-foreground/60">Project Teammate</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="gradient-border card-hover p-6">
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "Purba's passion for AI and Data Analytics is inspiring. She built an amazing dashboard that helped us understand data better."
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/50?u=peer2" alt="peer" className="w-12 h-12 rounded-full"/>
                  <div>
                    <p className="font-semibold">Priya</p>
                    <p className="text-sm text-foreground/60">Classmate</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-glow mb-4">Get In <span className="text-primary">Touch</span></h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Left: Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Email</p>
                      <a href="mailto:mondalpurba2005@gmail.com" className="font-semibold hover:text-primary">mondalpurba2005@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Phone</p>
                      <a href="tel:+918967950696" className="font-semibold hover:text-primary">+91 8967950696</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">Location</p>
                      <p className="font-semibold">Barasat, West Bengal, India</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-10 mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Purba2002" target="_blank" className="p-3 rounded-full border-border hover:bg-primary hover:text-primary-foreground">GitHub</a>
                  <a href="https://linkedin.com/in/your-linkedin" target="_blank" className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground">LinkedIn</a> {/* <-- yahan border add kiya */}
                </div>
              </div>

              {/* Right: Send a Message Form */}
              <div className="gradient-border p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="relative z-10 border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-foreground/60">© {new Date().getFullYear()} Purba Mondal. All rights reserved.</p>
            <p className="text-sm text-foreground/50 mt-2">Built with React, Tailwind CSS & ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
 
