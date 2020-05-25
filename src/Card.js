import React from 'react';
import './style/card.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

function Card(props) {
    return(
        <article className = 'card'>
            <div>
                <Link to={'/video/' + props.id}>
                <img className='mediaimg' src={require('./images/'+props.media+'.jpg') } alt='medianame'/>
                </Link>
            </div>
             <div className='carddes'>
            <div > <img className = 'thumbnail' src={require('./images/channels/'+props.channelThumb+'.jpg')} alt='medianame'/>  </div>
            <div className='des'>
            <h1 className='title'> {props.title} </h1>
            <p className='channelname'> {props.channelName} </p>
            <p className='views'>Views: {props.views} </p>
            </div>
            </div>
       </article>
    )
}
export default Card