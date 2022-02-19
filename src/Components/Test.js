import React,{useRef} from 'react'
import Userpage from './Userpage';
import {useReactToPrint} from "react-to-print"


const Example=()=>{
    const c = useRef();
    const h = useReactToPrint({
        content:()=> c.current,
    });

    return(
        <div>
            <Userpage ref={c} />
            <button onClick={h}>Print this out</button>
        </div>
    );

};
