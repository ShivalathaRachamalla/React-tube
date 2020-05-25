import React from 'react';
import Card from './Card.js';


const information = require('./information.json');
  const cards = information.map((item) =>
  <Card key={item.id} id={item.id} title = {item.title} channelName = {item.channelName} views = {item.views} media = {item.media} channelThumb = {item.channelThumb} />
  )
function HomePage() {
   return(<div className = 'home'> <img className = 'logo' src = {require('./images/logo/logo-light.svg')} />
     <header className="App-header">
   {cards}
</header></div>)
}
export default HomePage