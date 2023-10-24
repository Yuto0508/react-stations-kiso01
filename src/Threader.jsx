// @ts-check
import React, { useState, useEffect } from 'react'
// import { BreedsSelect } from './BreedsSelect'

// import {  } from './⇒<></>のフォーマット'

  export const Threader = () => {
    const [Url, setUrl] = useState([]);
    const [selected, setSelected] = useState()
      
    
   const handleGet = selected => {
    setSelected(selected)
   }

  return (
      <header className="CssComponent2">
        <div className="submit">
          <button id="ThreadIbent" onClick={handleGet}>
            スレッドを立てる
          </button>
        </div>      
      </header>

      
  );
};
