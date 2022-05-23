import React from 'react';
import { useNavigate } from 'react-router-dom';
// import  './land.css'

const Landing = () => {
    let navigate = useNavigate ();
     const routeChange = () => {
         let path = `TicTacToe`;
         navigate(path);
     }
    return (
        <>
            <div className='container App'>
                <div className='row'>
                    <div className='col content'>
                        <div className='text'>
                            <h1>Be Young, Have Fun, <br/> <span>Drink Pepsi</span> <br/> OR cold Zobo.</h1>
                            {/* <p>Pepsi is a carbonated soft drink manufactured by PepsiCo. <br/>Originally created and developed in 1893 by Caleb Bradham <br/>and introduced as Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961.</p> */}
                            <button onClick={routeChange} className='btn3'>Play Now</button>  
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
};

export default Landing;
