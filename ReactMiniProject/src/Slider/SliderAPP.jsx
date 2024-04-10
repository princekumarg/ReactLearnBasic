import React, { useEffect, useState } from 'react'
import { FaQuoteRight} from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import data from './data';
import './slider.css';
function SliderAPP() {
    const [people,setPeople]=useState(data);
    const [index,setIndex]=useState(0);
    const nextSlide=()=>{
        setIndex((oldIndex)=>{
            const result=(oldIndex+1)%people.length;
            return result;
        })
    }
    const prevSlide=()=>{
        setIndex((oldIndex)=>{
            const result=(oldIndex-1+people.length)%people.length;
            return result;
        })
    }
    useEffect(()=>{
        let slider=setInterval(()=>{
            setIndex((oldIndex)=>{
                const result=(oldIndex+1)%people.length;
                return result;
            });
        },5000);
        return ()=>{
            clearInterval(slider);
        }
    },[index])
  return (
    <section className='section'>
        <div className='title'>
            <h2>
                <span>/</span>reviews
            </h2>
        </div>
        <div className='section-center'>
            {people.map((person,personIndex)=>{
                const {id,image,name,title,quote}=person;
                let position='nextSlide';
                if(personIndex===index){
                    position='activeSlide';
                }
                if(personIndex===index-1 || (index===0 && personIndex===people.length-1)){
                    position='lastSlide';
                }
                return(
                    <article className={position} key={id}>
                        <img src={image} alt={name} className='person-img'/>
                        <h4>{name}</h4>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                );
            })}
            <button className='prev' onClick={prevSlide}>
                <FiChevronLeft />
            </button>
            <button className='next' onClick={nextSlide}>
                <FiChevronRight/>
            </button>
        </div>
    </section>
  )
}

export default SliderAPP
