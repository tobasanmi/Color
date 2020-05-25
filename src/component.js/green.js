import React from 'react';
import {Link} from 'react-router-dom';
const Green = ()=>(
    <div style = {{backgroundColor:"green"}}>
        <h2> I am Color Green</h2>
        <p>Am i not beautiful??</p>
        <Link to='/back' style={{color:'white'}}>Go Back</Link>
    </div>
)
export default Green;