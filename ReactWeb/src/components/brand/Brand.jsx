
import './brand.css';
import React from 'react';
import {google,shopify,slack,atlassian,dropbox,} from './import';
const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <div>
                <img src={google} alt="Google" />
                <img src={shopify} alt="shopify" />
                <img src={slack} alt="slack" />
                <img src={atlassian} alt="atlassian" />
                <img src={dropbox} alt="dropbox" />

            </div>
        </div>
    )
}

export default Brand

