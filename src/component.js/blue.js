import React  from 'react';
import {Link} from 'react-router-dom';

const Blue = ()=>(
    <div style = {{backgroundColor:'blue'}}>
        <h2> I am color Blue </h2>
        <p>Am i not beautiful</p>
        <Link to='/back' style={{color:'white'}}>Go Back</Link>
    </div>
)

export default Blue;