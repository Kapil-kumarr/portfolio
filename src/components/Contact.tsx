
const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 text-center text-gray-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg mb-8">
          Got an opportunity, a freelance gig, or just want to say hello?
          Let’s talk.
        </p>
        <a
          href="mailto:kumar.kapil0905@gmail.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Email Me
        </a>

        <div className="flex justify-center gap-6 mt-8 text-xl text-blue-600">
          <a href="https://github.com/Kapil-kumarr" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/kapilkumarengineer/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
