
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Hi, I'm Kapil 👋
      </h1>
      <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
        Full Stack Developer | React & Node.js Expert
      </h2>
      <p className="text-gray-700 max-w-xl mb-8">
        I build scalable web apps with clean code, modern UI, and backend performance. I specialize in React, Node.js, PHP, and full-stack systems.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
        <a
          href="/Kapil_Resume.pdf"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
