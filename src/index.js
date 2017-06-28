import React from 'react';
import ReactDOM from 'react-dom';

// Enable which component to use by un/commenting here

import App from './leaflet/Map';
//import App from './map-gl/Map';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import gardenIconUrl from './images/garden.png';
import eventIconUrl from './images/event.png';

const fnProps = {
  user: {
    name: 'FN-DAVE',
    userPosition: {
      lat: 48.241653,
      lng: 16.329558799999973
    },
  },
  events: [
    { name: 'Event_1', position: ['48.241', '16.328'], iconUrl: eventIconUrl },
    { name: 'Event_2', position: ['48.242', '16.330'], iconUrl: eventIconUrl },
  ],
  pointsOfInterest: [
    { name: 'Garten Eden', position: ['48.243', '16.329'], iconUrl: gardenIconUrl },
  ]
}

ReactDOM.render(<App fnData={fnProps} />, document.getElementById('root'));
registerServiceWorker();