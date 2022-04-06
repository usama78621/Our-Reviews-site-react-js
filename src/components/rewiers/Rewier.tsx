import React, { useState } from "react";
import { Data } from "../api/Api";
import { FcNext, FcPrevious } from 'react-icons/fc'
import { FaQuoteRight } from 'react-icons/fa'



const Rewier = () => {
  const [index, setIndex] = useState<number>(0);
  const { name, job, info, img } = Data[index];

  const checkNumber = (number: number) => {
    if (number > Data.length - 1) {
      return 0;
    } 
     if (number < 0) {
       return Data.length - 1;
    } 
      return number;
  }
  const Nextbtn = () => {
      setIndex((index)=>{      
        return checkNumber(index + 1)
      })
  }
  const PreBtn = () => {
    setIndex((index)=>{
      return checkNumber(index - 1)

    })
  }
  const RedomBtn =()=>{
     let randonNumber =Math.floor(Math.random() * Data.length);
    if(randonNumber === index){
       randonNumber = index + 1
    }
    setIndex(checkNumber(randonNumber))
  }
  return (
    <article className="reiwers">
      <div className="image-container">
        <img src={img} alt={name} className="person-img" />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{info}</p>
      <div className="btn-container">
        <button className="pre-btn" onClick={PreBtn}>
          <FcPrevious />
        </button>
        <button className="next-btn" onClick={Nextbtn}>
          <FcNext />
        </button>
        <button className="random-btn" onClick={RedomBtn}>supries</button>
      </div>
    </article>
  );
};

export default Rewier;
