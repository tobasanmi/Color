import React from 'react';
import {Link} from 'react-router-dom';

const Purple = ()=>(
    <div style= {{backgroundColor: "purple"}}>
        <h2> I am Color Purple</h2>
        <p>Am i not beautiful??</p>
        <Link to='/back' style={{color:'white'}}>Go Back</Link>
    </div>
)
export default Purple;