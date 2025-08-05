import { useNavigate } from "react-router-dom";


const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

export default function NotFound() {

  const navigate = useNavigate();
  return (
    <div className="bg-white text-green-900 min-h-screen flex flex-col items-center justify-center font-sans p-4">
      <div className="text-center">

        <h1 className="text-8xl md:text-9xl font-bold animate-pulse">404</h1>
        

        <h2 className="text-3xl md:text-4xl font-semibold mt-4">Oops! Page Not Found.</h2>
        
     
        <p className="mt-4 text-lg md:text-xl text-green-700">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
      
        <button
          onClick={()=>{navigate('/')}}
          className="mt-8 px-6 py-3 bg-green-900 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition-colors duration-300 flex items-center justify-center mx-auto"
        >
          <HomeIcon />
          <span>Go Back to Homepage</span>
        </button>
      </div>
         <div className="absolute bottom-8 text-green-300 text-sm">
        You've discovered a secret garden... of nothingness.
      </div>
    </div>
  );
}
