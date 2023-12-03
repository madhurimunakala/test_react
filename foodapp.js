import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from './user_circle_icon.png'; 
const Header = () => {
    return(
        <>
        <div className="header">
        <div >
                <img className='logo'
                src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search anything you want..."/>
                </div>
                <div>
                <img className='right'
                src={img}/>
            </div>

        </div>
        </>
    )
}
const htmlRoot = document.getElementById("root");
const rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<Header/>);
