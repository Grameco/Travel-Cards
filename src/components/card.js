// import { useState } from "react"

// export default function Card({props, notInterested}) {
//     const [readmore, setReadMore] = useState(false);

//     function handleReadMore() {
//         setReadMore(!readmore);
//     }

//     const desc = readmore ? props.info : `${props.info.substring(0,200)}`;
    

//     return (
//         <div className="flex flex-col h-max w-full md:w-[45%] lg:w-[30%] rounded-xl gap-4 p-3 shadow-md justify-between hover:scale-105 duration-200 ease-in-out">
//             <img src={props.image} alt="image" className="h-[300px]" />
//             <div>
//                 <h1 className="text-[1.3rem] font-bold text-[#349860]">{props.price}</h1>
//                 <h1 className="text-[2.5rem] font-bold">{props.name}</h1>
//             </div>
//             <div>
//                 {desc}
//                 <span onClick={handleReadMore} className="cursor-pointer text-blue-400 ">
//                     {readmore ? " Read Less" : " ...Read More"}
//                 </span>
//             </div>
//             <button onClick={() => notInterested(props.id)} type="submit" className="mt-10 mb-4 rounded-lg py-3 border-[1px] border-[#c48f81] bg-[#ead8d3] font-bold">Not Interested</button>
//         </div>
//     )
// }


import React, { useState } from "react";

export default function Card({ props, notInterested }) {
  const [readmore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readmore);
  }

  const desc = readmore ? props.info : `${props.info.substring(0, 200)}...`;

  return (
    <div className="flex flex-col h-fit w-full md:w-[45%] lg:w-[30%] rounded-xl p-3 gap-4 shadow-md justify-between hover:scale-105 duration-200 ease-in-out">
      <img src={props.image} alt="image" className="h-[300px] object-cover" />
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-[1.3rem] font-bold text-[#349860]">{props.price}</h1>
          <h1 className="text-[2.5rem] font-bold">{props.name}</h1>
          <p onClick={handleReadMore} className={`mt-4 ${readmore ? 'overflow-auto max-h-[300px]' : 'overflow-hidden h-[80px]'} cursor-pointer text-sm text-gray-600`}>
            {desc}
          </p>
        </div>
        <div className="flex items-center justify-end">
          <span onClick={handleReadMore} className="cursor-pointer text-blue-400">
            {readmore ? " Read Less" : " ...Read More"}
          </span>
        </div>
        <button onClick={() => notInterested(props.id)} type="submit" className="mt-10 rounded-lg py-3 border-[1px] border-[#c48f81] bg-[#ead8d3] font-bold">
          Not Interested
        </button>
      </div>
    </div>
  );
}
