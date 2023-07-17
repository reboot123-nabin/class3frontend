import React,{createContext} from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC';
const data=createContext();
const data2=createContext();

const ChildA = () => {

    //consumer, provider, data
const name="nabin"
const title="dance"
    return (
    <div>
        <data.Provider value={name}>
        <data2.Provider value={title}>
        <ChildC/>
        </data2.Provider>
        </data.Provider>
      
    </div>
  )
}
export {data}
export {data2}
export default ChildA
