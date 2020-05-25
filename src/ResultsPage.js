import React from 'react';
import { Link } from 'react-router-dom';


function ResultsPage(props) {
    const info = require('./information.json');
    const id = Number(props.match.params.id);
    const  video = info.find(i => i.id === id);
    
return(
    <div>
        <div className="video">
        <video controls>
          <source src={require('./videos/' + video.media + '.mp4')} type="video/mp4" />
        </video>
      </div>
    <Link to='/'>Back To Home</Link>
    </div>
)
}

export default ResultsPage;