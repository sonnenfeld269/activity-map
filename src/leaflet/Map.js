import React from 'react';
import { Map, Marker, Popup, TileLayer, Circle, Rectangle } from 'react-leaflet';
import { Icon } from 'leaflet';
import VectorGridLayer from './VectorGridLayer';
import homeIconUrl from '../images/home.png';
import gardenJson from '../data/garden.json';
import 'isomorphic-fetch';

const homeIcon = new Icon({
  iconUrl: homeIconUrl,
  iconSize: [55, 55], // size of the icon
});

export default class SimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: props.fnData.user.userPosition.lat,
      lng: props.fnData.user.userPosition.lng,
      zoom: 14
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const gardens = gardenJson.map((garden) =>
      (
        <Marker
          position={[garden.location_lat, garden.location_lng]}
          icon={new Icon({
            iconUrl: this.props.fnData.pointsOfInterest[0].iconUrl,
            iconSize: [30, 30],
          })}>
          <Popup><span>{garden.name}</span></Popup>
        </Marker>
      )
    );
    
    return (
      <div>
        <Map style={{ height: '400px', width: '400px' }} center={position} zoom={this.state.zoom} attributionControl={true} ref="map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://api.mapbox.com/styles/v1/sonnenfeld269/cj4zk91ut0sjo2rnfn9plcuq0/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic29ubmVuZmVsZDI2OSIsImEiOiJjajQwMmlvaTEwOXFzMnF0MTM3MjZuY2U0In0.T1X3PSCiYOI87qNi6AYBYw'
          />
          {/*<TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />*/}
          <Marker
            position={this.props.fnData.events[0].position}
            icon={new Icon({
              iconUrl: this.props.fnData.events[0].iconUrl,
              iconSize: [30, 30],
            })}>
            <Popup>
              <span>{this.props.fnData.events[0].name}</span>
            </Popup>
          </Marker>
          <Marker
            position={this.props.fnData.events[1].position}
            icon={new Icon({
              iconUrl: this.props.fnData.events[1].iconUrl,
              iconSize: [30, 30],
            })}>
            <Popup>
              <span>{this.props.fnData.events[1].name}</span>
            </Popup>
          </Marker>
          <Marker
            position={this.props.fnData.pointsOfInterest[0].position}
            icon={new Icon({
              iconUrl: this.props.fnData.pointsOfInterest[0].iconUrl,
              iconSize: [30, 30],
            })}>
            <Popup>
              <span>{this.props.fnData.pointsOfInterest[0].name}</span>
            </Popup>
          </Marker>
          {gardens}
          <MyCircle data={this.state} />
          <Rectangle bounds={[[this.state.lat-0.01,this.state.lng-0.01],[this.state.lat+0.01,this.state.lng+0.01]]} fillColor="red" />
          <Marker position={position} icon={homeIcon}>
            <Popup>
              <span>{this.props.fnData.user.name}</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

class MyCircle extends React.Component {
  componentDidMount() {
    // here we can get the bounds of the circle
    let b = this.circ.leafletElement.getBounds();
    //this.props.passBoundsToParent(b);
  }

  render() {
    return <Circle center={[this.props.data.lat, this.props.data.lng]} radius={600} fillColor="blue" ref={(elem) => { this.circ = elem }} />
  }
}