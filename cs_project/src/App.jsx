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
      <fileUploader handleFile={handleFile} />
      {FileName ? <p>Uploaded file: {FileName}</p> : null}
    </>
  );
}

