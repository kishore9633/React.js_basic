import React from "react";


const Userinput = (props) => {

const UserInputstyle = {

color: 'blue',
border : '2px solid red',
width : '15%'

};

    return(
    
<div>
    <input type = "text" 
    onChange={props.changed}
    value={props.currentname}
    style={UserInputstyle}
    ></input>
</div>

)
}

export default Userinput;