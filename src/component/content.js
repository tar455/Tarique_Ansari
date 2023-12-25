import React from 'react';
// import file_loc from "/assets/Img/BackgroundImg.png";
export default function Content() {
  const file_loc = "/assets/Img/BackgroundImg.png";
  return (
    <>

      <div className="content-main" >
       <div className="content-des" style={{backgroundImage:`url(${process.env.PUBLIC_URL}${file_loc}')`,width:"100%",height:"100%"}}>
        <p> 
          <span style={{ fontSize: "22px" ,color:"rgb(12,23,34)"}}>
            <span style={{ fontFamily: "Verdana" }}>Hey, I am MD Tarique Ansari.</span>
          </span>
        </p>
        </div>
      </div>
    </>
  );
}
