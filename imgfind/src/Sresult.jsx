import React from "react";
import './index.css';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/random/150*150/?${props.name}`;
    return (
        <>
        <div>
        <img  src= {img} alt = "search" />
        <br />
        <img  src= {img} alt = "search" />
        </div>
        </>
    );
};

export default Sresult;