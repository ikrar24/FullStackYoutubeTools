import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-blue-500 mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved. Try going back to the homepage.
      </p>
      <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" >
     
          Go Back Home
        
      </Link>

      {/* Optional: Simple SVG illustration */}
      <svg
        className="mt-10 w-64 h-64"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="256" fill="#EFF6FF"/>
        <path d="M176 352L336 352L336 192L176 192Z" stroke="#3B82F6" strokeWidth="16"/>
        <path d="M176 352L336 352L336 192L176 192Z" fill="#3B82F6" fillOpacity="0.1"/>
      </svg>
    </div>
  );
}
