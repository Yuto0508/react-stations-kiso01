// @ts-check
import React, { useState } from 'react'

// import {  } from './⇒<></>のフォーマット'

export const Threader = () => {
    const [Url, setUrl] = useState(
        fetch('2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com')
        .then(response => response.json())
        .then(data => {
          setUrl(data.message)
        })
    )

    // // return ( 
    // //     <>
    // //     <p>スレッドをたてる</p>
    // //     </>
    // );
    };