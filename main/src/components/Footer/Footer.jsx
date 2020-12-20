import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/Footer.css'

const Footer = () => {
    let [footerData, setFooterData] = useState([]);

    useEffect(() => {
        axios.get(`https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`)
            .then(response => {
                if (response !== undefined) {
                    setFooterData(response.data)
                }
            })
    }, [setFooterData]);

    footerData.sort((a, b) => parseInt(a.stepNumber, 10) - parseInt(b.stepNumber, 10));

    return (
        <div className="footer_wrapper">
            <h1>How It Works</h1>
            <div className="footer_content_wrapper">
                {footerData.length > 0 &&
                    footerData.map((data) => (
                        <div className="footer_data">
                            <span>{data.stepNumber}</span>
                            <span><hr /></span>
                            <span>{data.versionContent[0].title}</span>
                            <span>{data.versionContent[0].body}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer;