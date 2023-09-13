import React from 'react'
import {useState,useEffect} from 'react'
import { copy,loader,linkIcon,tick } from '../assets'
import axios from 'axios'
const Demo = () => {
    const[url,setUrl]=useState('');
    const[summary,setSummary]=useState([])
    const options = {
        method: 'GET',
        url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
        params: {
          url: url,
          length: '3'
        },
        headers: {
          'X-RapidAPI-Key': 'c7454bca6amsh50b9d1fce96bd78p173603jsnd93b391947e3',
          'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
        }
      };

    // Function to handle the input
    function handleChange(e){
        let urlVal=e.target.value
        setUrl(urlVal)
        console.log(url);
    }

    // Function to fetch data of the url from the api
    async function fetchingData(e){
        e.preventDefault();
        try{
            let response=await axios.request(options);
            console.log(response.data);
            let sumObj={...response.data};
            let summArray=[];
            summArray.push(sumObj);
            setSummary(summArray);
        }
        catch(error){
            console.log(error);
        }
        
    }
  return (
    <section className="mt-8 overflow-hidden">
        {/* div for search */}
        <div  className=" w-screen flex justify-center mb-5">
            <form className="flex border justify-center  w-2/4 bg-white relative ">
                <img src={linkIcon} className="bg-white ps-1  absolute top-1.5 left-1.5"  />
                <input type="text" onChange={handleChange} required placeholder="Enter the url" className="h-9 w-full ps-10 bg-white peer focus:outline-none focus:border-blue-500"/>
                <button onClick={fetchingData} className="bg-white me-3 ps-3 focus:outline-none focus:ring-2 focus:ring-blue-500">↵</button>
            </form>
        </div>

        {/* Div for displaying the summary */}
        <div className="mt-5">
            <ul className="w-full flex justify-center">
                {
                    summary.map((value,i)=>(
                        <li key={i}  className="w-9/12">{value.summary}</li>
                    ))
                }
            </ul>
        </div>
    </section>
  )
}

export default Demo