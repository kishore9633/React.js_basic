import React from "react";
import './UserOutpu.css'
const Useroutput = (Props) => {

return(
    <div className='UserOutput'>
        <p>this is {Props.username}</p>
        <p>this is second</p>
    </div>
)
}

export default Useroutput;