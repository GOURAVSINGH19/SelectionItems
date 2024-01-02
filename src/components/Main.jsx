import React, { useState } from 'react';
import data from '../data'
import { get } from 'mongoose';

function Main(){
    const[selected,setselected]=useState(null);

    function clickHandler(getcurrentid){
        setselected(getcurrentid ===selected?null:getcurrentid)
    }

console.log(selected)
    return(
        <div>
            <h2>PROJECT-2</h2>
            <div>
                {
                    data && data.length>0?(
                        data.map((dataitems)=>(
                           <div>
                             <div onClick={()=>clickHandler(dataitems.id)}>
                                <h3>{dataitems.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected===dataitems.id?(
                                    <div>{dataitems.answer}</div>
                                ):null
                            }
                            </div>
                        ))
                    )
                    :
                    (<div>
                        No data found
                    </div>)}
            </div>
        </div>
    )
}

export default Main

