"use client";
import React, { useState } from "react";
import ReportTable from './ReportTable'

export default function Form() {
  const [locationInput, setLocationInput] = useState("");
  const [minInput, setminInput] = useState("");
  const [maxInput, setMaxInput] = useState("");
  const [avgInput, setAvgInput] = useState("");
  const [data, setData] = useState("");

  const locationChange = (e) => {
    setLocationInput(e.target.value);
  };

  const minChange = (e) => {
    setminInput(e.target.value);
  };

  const maxChange = (e) => {
    setMaxInput(e.target.value);
  };

  const avgChange = (e) => {
    setAvgInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      Location: locationInput,
      MinInput: minInput,
      MaxInput: maxInput,
      AvgInput: avgInput,
    };

    setData([...data, userData]);
  };

  return (
    <>
      <section className="px-40 py-3 h-full ">
        <h1 className=" font-bold text-3xl mb-2">
          Enter Data
        </h1>
        <form onSubmit={handleSubmit} className = "flex items-center border-b border-teal-500 py-2">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Enter Store Location"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            onChange={locationChange}
          />
          <div >
            <input
              id="minCustomerPerHour"
              name="minCustomerPerHour"
              type="text"
              placeholder="Minimum Customers Per Hour"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={minChange}
            />
            <input
              id="maxCustomerPerHour"
              name="maxCustomerPerHour"
              type="text"
              placeholder="Maximum Customers Per Hour"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={maxChange}
            />
            <input
              id="avgCookiesPerSale"
              name="avgCookiesPerSale"
              type="text"
              placeholder="Average Cookies Per Sale"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              onChange={avgChange}
            />
          </div>
          <button
            className="rounded font-medium text-black bg-green-300 px-3 py-2 hover:bg-green-100"
            type="submit"
          >
            Add Record
          </button>
        </form>
      </section>
      

      

      <section className="px-40 py-3 flex flex-wrap justify-center gap-3">
      {data.length === 0 && (
          <div className="min-h-screen">
            
            <h2 className=" font-bold text-3xl">No Cookie Stands Available</h2>
            </div>
            )}
        
        {/*data.length > 0 &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/4 p-7 rounded bg-green-300"
              >
                <h3 className="font-bold text-3xl">{item.Location}</h3>
                <p>Minimum Customers Per Hour: {item.MinInput}</p>
                <p>Maximum Customers Per Hour: {item.MaxInput}</p>
                <p>Average Cookies Per Sale: {item.AvgInput}</p>
              </div>
            );
          })*/} 
         
         
         
         
         
         {data.length > 0 && (
          <div >
            
            <ReportTable
            data ={data}
            
            />
            </div>
            )}
      </section>
    </>
  );
}