import { useRef } from "react";

export const FileUploader = ({ handleFile }) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <>
      <button className="button-upload" onClick={handleClick}>Uploads File</button>
      <input type="file" onChange={handleChange} ref={hiddenFileInput} style={{ display: "none" }} // Make the file input element invisible
      />
    </>
  );
};