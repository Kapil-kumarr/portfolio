
const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4 text-sm font-medium text-gray-700">
        <div className="text-xl font-bold text-blue-600">Kapil</div>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
