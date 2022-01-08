
import './article.css';

import React from 'react'

const Article = ({imgUrl,date,title}) => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="Blog Image" />
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Articale</p>

            </div>
        </div>
    )
}

export default Article



