import React from 'react';
import {Link} from 'react-router-dom';
const Red = ()=>(
    <div style = {{backgroundColor:"red"}}>
        <h2> I am Color Red</h2>
        <p>Am i not beautiful??</p>
        <Link to='/back' style={{color:'white'}}>Go Back</Link>
    </div>
)
export default Red;