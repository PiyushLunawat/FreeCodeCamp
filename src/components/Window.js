import React, {useState, useEffect} from "react";
import './window.css'
import './navbar.css'
import { createRoutesFromElements } from "react-router-dom";


    const Window =() =>{
        const[quotes, setQuotes]=useState("");
        
        const getQuote = () =>{
            fetch("https://type.fit/api/quotes")
            .then((res)=>res.json())
            .then((data)=>{
                let randomNum=Math.floor(Math.random()*data.length);
                setQuotes(data[randomNum]);
            });
        };

        useEffect(()=>{
            getQuote();
        }, []);

        const[data, setData]=useState([]);
        useEffect(()=>{
            fetch("http://localhost:8000/courses")
            .then((result)=>{
                result.json().then((resp)=>{
                    setData(resp)
                })
            })
        },[])


    
    return(
        <div>
            <div className='navbar'>
               <div><input className="search"
                    name="search"
                    placeholder="Search 8,000+ tutorials" />
                </div>
                <div className="heading"><a href="/Window">freeCodeCamp</a></div>
                <div className="action">
                <div ><button className="menu1">Menu</button></div>
                <div ><button className="logout"><a href="/">^</a></button></div>
                </div>
            </div>


            <div className="padd3"></div>
            <div className="window">
              <h1>Welcome to freeCodeCamp.org</h1>
              <div className="blockquote" >
              <q>{quotes.text}</q>
              <div>&#8210; &nbsp;{quotes.author}</div>
              </div>
              <div className="content">
              <b>{courses.title} - {courses.duration}</b>
              </div>
            </div>
            
        </div>
        
     
    );
}

export default Window;