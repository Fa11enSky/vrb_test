import React, { useEffect } from "react";

const Backdrop = ({ children, close }) => {
   const handleClick = (event) => {
     if (event.currentTarget === event.target) {
       close();
     }
   };
   useEffect(() => {
     const handleKeydown = (event) => {
       if (event.code === "Escape") {
         close();
       }
     };
     document.querySelector("body").classList.add("lock");
     window.addEventListener("keydown", handleKeydown);

     return () => {
       document.querySelector("body").classList.remove("lock");

       window.removeEventListener("keydown", handleKeydown);
     };
   }, [close]);
  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: "100vw",
        height:"100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00000065",
        overflowY: "auto",
        zIndex: 900,
      }}
    >
      {children}
    </div>
  );
};

export default Backdrop;
