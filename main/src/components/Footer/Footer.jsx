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

    if (footerData.length) {
        footerData.sort((a, b) => parseInt(a.stepNumber, 10) - parseInt(b.stepNumber, 10));
        footerData.map((data) => data.versionContent.sort((a, b) => new Date(b.effectiveDate) - new Date(a.effectiveDate)));
    }

    return (
        <div className="footer_wrapper">
            <div className="section_title">How It Works</div>
            <div className="footer_content_wrapper">
                {footerData.length > 0 &&
                    footerData.map((data) => (
                        <div className="footer_data">
                            <span className="footer_data_stepNumber">{'0' + data.stepNumber}</span>
                            <span><hr /></span>
                            <span className="footer_data_title">{data.versionContent[0].title.toUpperCase()}</span>
                            <span className="footer_data_body">{data.versionContent[0].body}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Footer;