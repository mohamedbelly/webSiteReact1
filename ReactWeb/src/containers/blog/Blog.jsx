import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import {blog01, blog02,blog03,blog04,blog05 }from './imports';
const Blog = () => {
    return (
        <div className='gpt3__blog section__padding' id="blog">
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>Alot is happing. We are blogging about it.</h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className="gpt3__blog-container-groupA">
                    <Article imgUrl={blog01} date="Sep 30 2021" title="GPT-3 and Open AI is the future .Let us exlore how it is?"/>
                </div>
                <div className="gpt3__blog-container-groupB">
                <Article imgUrl={blog02}  date="Sep 30 2021" title="GPT-3 and Open AI is the future .Let us exlore how it is?"/>
                <Article imgUrl={blog03} date="Sep 30 2021" title="GPT-3 and Open AI is the future .Let us exlore how it is?"/>
                <Article imgUrl={blog04} date="Sep 30 2021" title="GPT-3 and Open AI is the future .Let us exlore how it is?"/>
                <Article imgUrl={blog05} date="Sep 30 2021" title="GPT-3 and Open AI is the future .Let us exlore how it is?"/>
                </div>
            </div>
        </div>
    )
}

export default Blog