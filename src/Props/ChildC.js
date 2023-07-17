import React from 'react'

import {data,data2} from "./ChildA";
const ChildC = ({name}) => {


  return (
    <div>
        <data.Consumer>
            {
                (name)=>{
                   return(
                    <>
                    <data2.Consumer>
                        {
                            (title)=>{
                                return(
                                    <>
                                    my name{name}
                                    my title{title}
                                    </>
                                )
                            }
                        }
                    </data2.Consumer>
                    </>
                   ) 
                }
            }
        </data.Consumer> 
      
    </div>
  )
}

export default ChildC
