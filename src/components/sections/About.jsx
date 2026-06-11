import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: "2022",
      title: "Research Assistant & Web3 Outreach Specialist | Markee’s Media",
      description:
        "Conducted deep research into blockchain project fundamentals and crypto payment flows. Advised on website content structure, feature explanations, and wallet transaction usability to optimize end-user experiences.",
    },
    {
      year: "2024",
      title: "Software Engineering Intern | Femtech Information Technology Ltd",
      description:
        "Built and maintained responsive web applications using core web technologies. Collaborated with core engineering teams to implement interactive features, troubleshoot UI bugs, and master real-world production development workflows.",
    },
    {
      year: "2025",
      title: "Contract Web Developer | Upwork",
      description:
        "Engineered and deployed custom web ecosystems for Web3 and blockchain startups. Designed interactive project dashboards tracking live token metrics, utility roadmaps, and dynamic community links, while optimizing performance and accessibility across all devices.",
    },
    {
      year: "2026",
      title: "Advanced Frontend Development",
      description:
        "Scaled up to high-performance frontend development, building modern, responsive web applications with React, TypeScript, Tailwind CSS, and Vite. Experienced in crafting fluid user experiences through advanced animation libraries such as GSAP, Framer Motion, and SwiperJS, with a strong focus on performance optimization, scalability, and intuitive interface design.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading pb-3 text-gray-800 dark:text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Column */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mr-3 max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="https://i.pinimg.com/736x/5c/16/fd/5c16fd714bc640089900c8b1eb37c878.jpg"
                alt="About me"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary-600">Engineering graduate</span>{" "}
              &amp; Web Developer
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am an Engineering graduate who transitioned into software
              engineering, driven by a passion for creating engaging, scalable,
              and user-centric web experiences. My engineering background
              developed a disciplined analytical approach to problem-solving,
              which I leverage to build structured, maintainable, and
              high-performance frontend applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              With hands-on experience in Web3 development, decentralized
              dashboards, and advanced interface animations using technologies
              such as React, Framer Motion, GSAP, and SwiperJS, I specialize in
              translating complex UI designs into fluid, production-ready
              experiences. I am passionate about optimizing frontend
              architectures, enhancing performance, and building scalable
              solutions. I am currently seeking software and web development
              opportunities where I can contribute immediately while continuing
              to grow as a developer.
            </p>

            {/* Timeline */}
            {/* <div className="relative border-l-2 border-primary-500 pl-8 mt-4 space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                >
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-10 top-1.5"></div>
                  <div className="mb-1 text-sm text-primary-600 font-semibold">
                    {milestone.year}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
