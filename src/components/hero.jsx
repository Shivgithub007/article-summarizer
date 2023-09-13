import React from 'react'
import {logo} from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="w-full flex justify-between mt-3">
            <img src={logo}/>
            <button  className="black_btn" onClick={()=>{window.open('https://github.com/Shivgithub007')}}>
            Github
            </button>
            
        </nav>
        <h1 className="head_text">
                Summarize article with 
                <br className="max-md:hidden"/> OpenAI GPT-4
         
        </h1>
        <h2 className="mt-3 text-center desc">
            Simplify your reading with Summarize, an open source article summarizer that transform lenthy article into clear and consice summary
        </h2>
        
    </header>
  )
}

export default Hero