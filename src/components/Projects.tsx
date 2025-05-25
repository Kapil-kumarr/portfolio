
const projects = [
  {
    title: 'NexChat',
    description: 'A real-time WhatsApp-like chat app built with React, Node.js, MongoDB, and WebSockets.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    link: '#'
  },
  {
    title: 'Code Warriors',
    description: 'A competitive coding platform with leaderboard and challenge engine.',
    tech: ['TypeScript', 'PostgreSQL', 'Prisma', 'NestJS'],
    link: '#'
  },
  {
    title: 'E-Commerce Assistant',
    description: 'AI-powered virtual assistant with voice interface for product search and support.',
    tech: ['PHP (Laravel)', 'AWS', 'React', 'NestJS'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-16 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-blue-600 font-medium mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-blue-50 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
