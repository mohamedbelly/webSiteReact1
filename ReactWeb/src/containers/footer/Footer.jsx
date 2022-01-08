import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/GPT-3.svg';

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Doyou want to learn web 3.0</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Crechterwoord K12 145 DK Alknhikcb. All Rights Reserved</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='gpt3__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Crechterwood K12 189 DK Alknjk</p>
                    <p>085132567</p>
                    <p>email@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>2022 GPT-3 . All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
