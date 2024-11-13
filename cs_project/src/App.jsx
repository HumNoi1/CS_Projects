import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  const [FileName, setFileName] = useState("");
  const handleFile = (file) => {
    setFileName(file.name);
  };
  return (
    <>
      <Navbar />
      <div className = 'flex justify-center items-center h-screen bg-gray-100'>
        {/* File uploads component UI */}
      </div>
    </>
  );
}

