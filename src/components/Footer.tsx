
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} Kapil Kumar. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/kapildev" target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com/in/kapildev" target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
