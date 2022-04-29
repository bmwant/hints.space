

export default function Header() {
  return (
    <div className="relative bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt=""/>
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">

            <a href="#" className="text-sm font-medium text-gray-800 hover:text-gray-900">Overview</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-gray-900">Registry</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-gray-900">Docs</a>
            <a href="#" className="text-sm font-medium text-gray-800 hover:text-gray-900">Community</a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap border rounded-sm border-gray-400 px-4 py-1.5 text-base font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-200 hover:border-gray-200">
              Sign in
            </a>
            <a href="#" className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-1.5 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
