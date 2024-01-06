import React, { useState } from "react";
import data from "../data";
import { get } from "mongoose";

function Main() {
  const [selected, setselected] = useState(null);
  const [enableMultiSelection, setenableselection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function clickHandler(getcurrentid) {
    setselected(getcurrentid === selected ? null : getcurrentid);
  }

  function Handlermultipleselection(getcurrentid) {
    let cpymultiple = [...multiple];
    const findIndexOfId = cpymultiple.indexOf(getcurrentid);
    if (findIndexOfId === -1) {
      cpymultiple.push(getcurrentid);
    } else {
      cpymultiple.splice(findIndexOfId, 1);
    }
    setmultiple(cpymultiple);
  }

  console.log(selected, multiple);
  return (
    <div>
      <h2>PROJECT-2</h2>
      <div>
        <button onClick={() => setenableselection(!enableMultiSelection)}>
          Select multiple button
        </button>
      </div>
      <div>
        {data && data.length > 0 ? (
          data.map((dataitems) => (
            <div>
              <div
                onClick={
                  enableMultiSelection
                    ? () => Handlermultipleselection(dataitems.id)
                    : () => clickHandler(dataitems.id)
                }
              >
                <h3>{dataitems.question}</h3>
                <span>+</span>
              </div>
              <div>
                {
                  enableMultiSelection ?
                  multiple.indexOf(dataitems.id) !==-1 &&
                  <div>{dataitems.answer}</div>:
                  selected===dataitems.id && <div>{dataitems.answer}</div>
                }
                
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Main;
