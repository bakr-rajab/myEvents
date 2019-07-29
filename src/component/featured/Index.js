import React from 'react';
import Carrousel from "../carrousel/Carrousel";
import Timer from "./Timer";

const Featured =()=> {


        return (
            <div style={{position: 'relative'}}>
                <Carrousel />

                <Timer/>

            </div>


        );

};

export default Featured;
