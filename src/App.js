import { useState } from "react";
import Tours from "./components/tours";
import data from "./data";

export default function App() {
  const [tours, setTour] = useState(data);

  function notInterested(id) {
    setTour(tours.filter((tour) => tour.id !== id))
  }

  if (tours.length === 0) {
    return (
      <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-[#e0d9e6]">
        <h1 className="text-[2rem] md:text-[3rem] ">No Tours Left</h1>
        <button onClick={() => setTour(data)} className="text-[1.5rem[ font-bold bg-white px-14 py-2 rounded-lg mt-3">Refresh</button>
      </div>
    )
  }

  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center p-4 md:p-10">
      <Tours tours={tours} notInterested={notInterested} />
    </div>
  );
}
