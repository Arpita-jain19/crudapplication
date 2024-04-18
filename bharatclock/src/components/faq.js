import React from 'react'
import faq from '../components/faq.module.css';
import { useState } from 'react';
import { questions } from '../data/faqquesions';
const Faq = () => {
    const [showans, setshowans] = useState(questions[0].id)
  return (
    <>
    {/* <div className={faq.faq}>
    <h1>Frequently asked questions...(FAQs)</h1>
   
    <div className={faq.outer}>
       {questions.map((faqitems,i)=>{
        return(<div className={faq.faqitems}>
            
            <h2 onClick={()=>{setshowans(faqitems.id)}}>{faqitems.question}</h2>
            <p className={showans==faqitems.id?faq.activeans:''}>{faqitems.answer}</p>

        </div>);
       })}
        </div>
       </div> */}
       <h1>Frequently asked questions (FAQs)</h1>
       <div className="faqouter"></div>
    </>
  )
}

export default Faq;