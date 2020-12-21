import React from 'react';
import '../../styles/Main.css'
import couchImage from '../../assets/photo-couch.jpg';

const Main = () => {
    return (
        <div className="main_wrapper">
            <img src={couchImage} width={'100%'} alt={'Couch background'} />
            <div className="main_content_wrapper">
                <span className="main_content_title">New Games & Accessories</span>
                <span className="main_content_tagline">
                    Monthly packages.
                    <br />
                    Excitement delivered daily.
                </span>
                <span className="main_content_text">
                    What's the nest way to shop for the latest video games<br />
                    and peripherals? How about never shopping at all?<br />
                    You'll get new stuff on your doorstep - every month.
                </span>
                <button>GET STARTED</button>
            </div>
        </div>
    )
}

export default Main;