import React from "react";
import { Store } from "./Store";

const Hero = () => {
  return (
    <div>
      <div className="p-4  w-full flex flex-wrap gap-10 justify-around">
        {Store.map((d, i) => (
          <div className="  px-3 py-2 rounded-lg  hover:-translate-y-2 duration-500  my-6" key={i}>
            <div className="flex flex-col ">
              <div className="h-72 rounded-xl overflow-hidden ">
                <img
                  src={d.img}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center text-center justify-center">
                <p>{d.title}</p>
                <p>{d.price}</p>
                <p>{d.rating}</p>
              </div>
              <div className="flex justify-center">

              <button className="hover:bg-indigo-900 bg-indigo-400 duration-700 rounded-lg w-5/6 p-2 ">
                Buy Now
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
