import React from 'react'
import { Learnjsx } from "./assets/Component/Learnjsx"
import { Learncomp } from "./assets/Component/Learncomp"
import { Learnprops } from "./assets/Component/Learnprops";
import LearnLiftingSetup from "./assets/Component/LearnLiftingSetup";
import LearnState from "./assets/Component/LearnState";
import CounterApp from "./assets/Component/CounterApp";
import LearnuseState from "./assets/Component/LearnuseState";
function ReactLearnApp() {
  let price=10;
  const getData=(data)=>{
    console.log(data);
  }
  return (
    <>
      <h1>Hello Prince</h1>
      <Learnjsx/>{/*This is a component*/}
      <Learncomp/>{/*This is a component with variable*/}
      <Learnprops name="Prince" price={price}/>
      <LearnLiftingSetup myClick={getData}/>
      <LearnState/>
      <CounterApp/>
      <LearnuseState/>
    </>
  )
}

export default ReactLearnApp
