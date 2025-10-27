"use client";
import "./globals.css";
import { useState } from "react";
import { useRef } from "react";
import Image from "./components/Image";

export default function Page() {
  const [active, setActive] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null)
  const handleFileChange = (event) => {
  const files = Array.from(event.target.files);
  const newImages = files.map((file) => URL.createObjectURL(file));
  setSelectedImages((prev) => [...prev, ...newImages]); // add to existing list
};
const handleButtonClick = () => {
  fileInputRef.current.click(); // opens file explorer
};


  const boxRef = useRef(null);
  const leftFunc = () => {
    if (boxRef.current) {
      boxRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const rightFunc = () => {
    if (boxRef.current) {
      boxRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  
  return (
    <div className=" bg-linear-to-r from-[#373E44] to-[#191B1F] h-[920px]  w-[1720px]">
      <div className="absolute left-[976px] top-[805px]">
        <img src="/bottom_line.png" alt="Bottom line" />
      </div>
      <div className="absolute left-[976px] top-[433px]">
        <img src="/between_line.png" alt="Between line" />
      </div>
      <div className="z-10 absolute left-[1621px] top-[207px]">
        <img src="right_side.png" alt="Right side" />
      </div>
      <div className="z-10 w-6 absolute left-[934px] top-[473px]">
        <img className="w-6 object-contain" src="/side_bar.png" alt="Side bar" />
      </div>
      <div className="z-10 w-6 absolute left-[934px] top-[116px]">
        <img className="w-6 object-contain" src="/side_bar.png" alt="Side bar" />
      </div>
        <div className="shadow-[5.67px_5.67px_3.78px_0_rgba(0,0,0,0.4)] w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] absolute top-24 left-[922px]">
         <div className="flex justify-center items-center w-[614px] h-[62px] bg-[#171717] relative top-[23px] left-[59px] rounded-[23px] shadow-[inset_0_4.96px_12.4px_2.48px_rgba(0,0,0,0.25)]">
          <div
            className="absolute top-[6.5px] left-2.5 w-[190px] h-[49px] bg-[#28292F] rounded-2xl shadow-[0_2px_4px_rgba(0,0,0,0.25),0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-200 ease-in-out"
            style={{
              transform: `translateX(${active * 200}px)`,
            }}
          ></div>
          <div className="flex gap-1.5 h-[49px]">

            <button
              onClick={() => {
                setActive(0);
                setClicked(true);
              }}
              className="cursor-pointer relative overflow-hidden group px-6 py-2.5 w-[195px] h-[49px] flex justify-center items-center rounded-2xl text-[18px] font-medium"
            >
              <span className="relative z-10">About Me</span>
              <span className={`absolute top-0 -left-full w-full h-full bg-white/5 transition-transform duration-200 ease-in-out group-hover:translate-x-full ${clicked ? "-left-full" : "opacity-100 hover:translate-x-full"}`}></span>
            </button>
            <button
              onClick={() => setActive(1)}
              className="cursor-pointer relative overflow-hidden group px-6 py-2.5 w-[195px] h-[49px] flex justify-center items-center rounded-2xl text-[18px] font-medium"
            >
              <span className="relative z-10">Experiences</span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/5 transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
            </button>
            <button
              onClick={() => setActive(2)}
              className="cursor-pointer relative overflow-hidden group px-6 py-2.5 w-[195px] h-[49px] flex justify-center items-center rounded-2xl text-[18px] font-medium"
            >
              <span className="relative z-10">Recommended</span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/5 transition-transform duration-700 ease-in-out group-hover:translate-x-full"></span>
            </button>
            
          </div>
         </div>
                   <div className="absolute top-[114px] left-[53px] w-[611px] h-[175px] font-[Plus Jakarta Sans] text-[20px] font-light text-[#969696] text-left">
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.</p>
            <p className="mt-2.5">I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
          </div>
        </div>
        
     
        
        <div className="w-[720px] h-[330px] rounded-[18.89px] bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0_rgba(0,0,0,0.4)] absolute top-[453px] left-[922px] overflow-visible">
          <div className=" absolute left-[50px] top-[20px] w-[149px] h-[62px] rounded-[20px] bg-[#171717] flex justify-center items-center"><p className="font-[Poppins] text-[20px] font-medium p-[0] m-[0]">Gallery</p></div>
          <div onClick={handleButtonClick} className=" shadow-[-0.5px_-0.5px_6.9px_0_rgba(255,255,255,0.25),_9px_10px_7.1px_0_rgba(0,0,0,0.4),_inset_0px_0px_48.91px_0_rgba(0,0,0,0.05),_inset_0px_3.26px_3.26px_0_rgba(0,0,0,0.15)]  cursor-pointer absolute left-[381px] top-[28px] flex justify-center items-center w-[132px] h-[46px] rounded-[104px] bg-[#ffffff0d]">
            <img src="/add.png" alt="" />
            <p className=" font-[Plus Jakarta Sans] text-[12px] font-extrabold text-[#FFFFFF] p-[0] m-[0]" >ADD IMAGE</p>
            <input type="file" accept="image/*" multiple ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }}/>

          </div>

           <div onClick={() => rightFunc()} className="absolute left-[518px]">
              <img src="/component_right.png" alt="Scroll right" />
           </div>
           <div onClick={() => leftFunc()} className="absolute left-[581px]">
              <img src="/component_left.png" alt="Scroll left" />
           </div>
           <div ref={boxRef} className="w-[670px] hide-scrollbar overflow-visible overflow-x-scroll overflow-y-visible flex gap-5 absolute top-[100px] left-10 p-6">
            <Image source ="/image_gri.jpg" alt="image"/>
            <Image source ="/image_gri.jpg" alt="image"/>
            <Image source ="/image_gri.jpg" alt="image"/>
            <Image source ="/image_gri.jpg" alt="image"/>
            <Image source ="/image_gri.jpg" alt="image"/>
            <Image source ="/image_gri.jpg" alt="image"/>

            
             {selectedImages.map((image, index) => (
    
            <Image key={index} source={image} alt='image'/>
    
              ))}


           </div>
        </div>
       
    </div>
  );
}
