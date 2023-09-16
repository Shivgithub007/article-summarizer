import React from "react";
import { useState, useEffect } from "react";
import { copy, loader, linkIcon, tick } from "../assets";
import axios from "axios";
import { dataArray } from "../demoData";
const Demo = () => {
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState([]);
  const [summaryy, setSummaryy] = useState([...dataArray]);
  const [full, setFull] = useState(true);
  const [upDown, setUpDown] = useState(["a", "a"]);
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: url,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": "c7454bca6amsh50b9d1fce96bd78p173603jsnd93b391947e3",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  // Function to handle the input
  function handleChange(e) {
    let urlVal = e.target.value;
    setUrl(urlVal);
  }

  // Function to fetch data of the url from the api
  async function fetchingData(e) {
    e.preventDefault();
    try {
      let response = await axios.request(options);
    //   console.log(response.data);
      let sumObj = { ...response.data,button:"a" };
      let summArray = [sumObj,...summary];
    //   summArray.unshift(sumObj);
      console.log(summArray)
      setSummary(summArray);
      
    } catch (error) {
      console.log(error);
    }
  }


  // Function to handle load more button

  function handleButton(i, e) {
    if (e == "a") {
      let newArr = [...summary];
      newArr[i].button = "b";
      setSummary(newArr);
    }else{
        let newArr = [...summary];
        newArr[i].button = "a";
        setSummary(newArr);
    }
  }
//   console.log(summary);

  return (
    <>
      <section className="mt-8 flex flex-col justify-center align-middle width-3/4">
        {/* div for search */}
        <div className=" w-screen flex justify-center mb-5">
          <form className="flex border justify-center  w-2/4 bg-white relative ">
            <img
              src={linkIcon}
              className="bg-white ps-1  absolute top-1.5 left-1.5"
            />
            <input
              type="text"
              onChange={handleChange}
              required
              placeholder="Enter the url"
              className="h-9 w-full ps-10 bg-white peer focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={fetchingData}
              className="bg-white me-3 ps-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ↵
            </button>
          </form>
        </div>
      </section>
      {/* Div for displaying the summary */}
      <div className="flex flex-col justify-center items-center ">
        <h2 className="font-satoshi font-bold text-lg">Previous Articles</h2>
        <ul className="text-justify flex flex-col align-middle items-center">
          {summary.map((value, index) => (
            <>
              <li key={index} className="my-5 article p-6 rounded-md">
                {value.button == "a"
                  ? <div className="font-bold">{value.summary.substring(0, 230)}...</div>
                  : <div>{value.summary}...</div>}
                <div className="text-center">
                  <button
                    className="arrow"
                    onClick={() => {
                      handleButton(index,value.button);
                    }}
                    key={index}
                  >
                    {value.button}
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Demo;
