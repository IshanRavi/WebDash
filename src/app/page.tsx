

// import { useState } from "react";

// export default function Dashboard() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   // Handle file selection
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   return (
//     <div className="grid grid-cols-3 gap-6 p-6 bg-black min-h-screen text-white">
//       <div>
//         <label
//           htmlFor="file-upload"
//           className="block p-6 w-full bg-white text-black text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 cursor-pointer text-center"
//         >
//           {selectedFile ? `Uploaded: ${selectedFile.name}` : "Upload File"}
//         </label>
//         <input
//           type="file"
//           id="file-upload"
//           className="hidden"
//           onChange={handleFileChange}
//         />
//       </div>
//       <button className="p-6 w-full bg-gray-900 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-700 hover:scale-105">
//         Action 2
//       </button>
//       <button className="p-6 w-full bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-600 hover:scale-105">
//         Action 3
//       </button>
//       <button className="p-6 w-full bg-gray-700 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-500 hover:scale-105">
//         Action 4
//       </button>
//       <button className="p-6 w-full bg-gray-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-400 hover:scale-105">
//         Action 5
//       </button>
//       <button className="p-6 w-full bg-gray-500 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-300 hover:scale-105">
//         Action 6
//       </button>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";

// export default function Dashboard() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setSelectedFile(file);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-white p-10">
//       <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-4xl">
//         <h1 className="text-center text-3xl font-semibold text-white mb-6">
//          Dashboard
//         </h1>

//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label
//               htmlFor="file-upload"
//               className="block p-6 bg-white text-black text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 cursor-pointer text-center"
//             >
//               {selectedFile ? `Uploaded: ${selectedFile.name}` : "Upload File"}
//             </label>
//             <input
//               type="file"
//               id="file-upload"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//           </div>

//           <button className="p-6 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105">
//             Action 2
//           </button>
//           <button className="p-6 bg-gray-800 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-600 hover:scale-105">
//             Action 3
//           </button>
//           <button className="p-6 bg-gray-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-500 hover:scale-105">
//             Action 4
//           </button>
//           <button className="p-6 bg-gray-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-400 hover:scale-105">
//             Action 5
//           </button>
//           <button className="p-6 bg-gray-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-300 hover:scale-105">
//             Action 6
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUpload, FaCog, FaChartBar, FaUser, FaShieldAlt, FaPowerOff, FaMoon, FaSun } from "react-icons/fa";

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      setTimeout(() => {
        setSelectedFile(file);
        setIsLoading(false);
      }, 1000);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
<div>
  <div className="absolute top-4 right-4">
    <Image src="/logo.jpg" alt="Logo" width={80} height={80} />
  </div>

  <div className={`${darkMode ? "bg-black" : "bg-white"} transition-colors min-h-screen flex justify-center items-center p-10`}>
      <div className={`${darkMode ? "bg-white/10 text-white" : "bg-black/10 text-black"} backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-full max-w-4xl relative`}>
        
        {/* <div className="absolute top-4 right-4">
          <Image 
            src="/logo.jpg" 
            alt="Dashboard Logo"
            width={80} 
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div> */}

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold"> Dashboard</h1>
          <button 
            onClick={toggleDarkMode} 
            className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all shadow-lg"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center gap-3 p-6 bg-white text-black text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 cursor-pointer"
            >
              {isLoading ? (
                <span className="animate-spin border-4 border-gray-500 border-t-transparent rounded-full w-6 h-6"></span>
              ) : (
                <FaUpload size={20} />
              )}
              {selectedFile ? `Uploaded: ${selectedFile.name}` : "Upload File"}
            </label>
            <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
          </div>

          <button className="flex items-center justify-center gap-3 p-6 bg-gray-900 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-700 hover:scale-105">
            <FaCog size={20} /> Settings
          </button>
          <button className="flex items-center justify-center gap-3 p-6 bg-gray-800 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-600 hover:scale-105">
            <FaChartBar size={20} /> Analytics
          </button>
          <button className="flex items-center justify-center gap-3 p-6 bg-gray-700 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-500 hover:scale-105">
            <FaUser size={20} /> Profile
          </button>
          <button className="flex items-center justify-center gap-3 p-6 bg-gray-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-400 hover:scale-105">
            <FaShieldAlt size={20} /> Security
          </button>
          <button className="flex items-center justify-center gap-3 p-6 bg-gray-500 text-white text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            <FaPowerOff size={20} /> Logout
          </button>
      </div>
    </div>
  </div>
  </div>
  );
}

