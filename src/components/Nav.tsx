export default function Nav() {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800">
        <div className="container p-6 mx-auto">
          <a className="block text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">
          Melody Gear
          </a>

          <div className="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
            <a href="#" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
              home
            </a>

            <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              Store
            </a>

            <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              News
            </a>

            <a href="#" className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}