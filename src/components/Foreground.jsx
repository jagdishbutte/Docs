import React, { useState, useRef } from 'react';
import Cards from './Cards';

function Foreground() {
    const ref = useRef(null);

    const data = [
        {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Download now",  tagColor: "green"},
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
            filesize: ".9mb",
            close: true,
            tag: {isOpen: false, tagTitle: "Download now",  tagColor: "blue"},
        },

        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
            filesize: ".9mb",
            close: false,
            tag: {isOpen: true, tagTitle: "Download now",  tagColor: "green"},
        },
    ];
  
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full  h-full flex gap-10 felx-wrap p-5'>
        {data.map((item, index)=>(
            <Cards data={item} reference={ref} />
        ))}
    </div>
 
  )
}

export default Foreground