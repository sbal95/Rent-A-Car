// import React, { useState } from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// const Carousel = (carImages) => {
//   const imgList = ["/images/A6.png", "/images/C-RV.png", "/images/F150.png"];
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeIndexUp = () => {
//     if (activeIndex < imgList.length - 1) {
//       setActiveIndex(activeIndex + 1);
//     } else {
//       setActiveIndex(0);
//     }
//   };
//   const activeIndexDown = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     } else {
//       setActiveIndex(imgList.length - 1);
//     }
//   };
//   return (
//     <div className="relative">
//       {imgList.map((img, i) => (
//         <div className={`${activeIndex === i ? "flex" : "hidden"}`} key={i}>
//           <img
//             src={img}
//             alt="react logo"
//             className="w-full h-full ease-in duration-300 transition-all"
//           />
//         </div>
//       ))}
//       <button
//         className="bg-slate-300 bg-opacity-75  cursor-pointer p-3 text-2xl absolute left-0 top-[50%]"
//         onClick={() => activeIndexUp()}
//       >
//         <AiOutlineLeft />
//       </button>
//       <button
//         className="bg-slate-300 bg-opacity-75  cursor-pointer p-3 text-2xl  absolute right-0 top-[50%]"
//         onClick={() => activeIndexDown()}
//       >
//         <AiOutlineRight />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
