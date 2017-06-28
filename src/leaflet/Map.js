import React from 'react';
import { Map, Marker, Popup } from 'react-leaflet';
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
      zoom: 16,
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
          <Popup><span>gortn</span></Popup>
        </Marker>
      )
    );
    return (
      <div>
        <Map style={{ height: '400px', width: '400px' }} center={position} zoom={this.state.zoom} attributionControl={true}>
          <VectorGridLayer />
          {/*<TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />*/}
          <Marker position={position} icon={homeIcon}>
            <Popup>
              <span>{this.props.fnData.user.name}</span>
            </Popup>
          </Marker>
          <Marker
            position={this.props.fnData.events[0].position}
            icon={new Icon({
              iconUrl: this.props.fnData.events[0].iconUrl,
              iconSize: [40, 40],
            })}>
            <Popup>
              <span>{this.props.fnData.events[0].name}</span>
            </Popup>
          </Marker>
          <Marker
            position={this.props.fnData.events[1].position}
            icon={new Icon({
              iconUrl: this.props.fnData.events[1].iconUrl,
              iconSize: [40, 40],
            })}>
            <Popup>
              <span>{this.props.fnData.events[1].name}</span>
            </Popup>
          </Marker>
          <Marker
            position={this.props.fnData.pointsOfInterest[0].position}
            icon={new Icon({
              iconUrl: this.props.fnData.pointsOfInterest[0].iconUrl,
              iconSize: [40, 40],
            })}>
            <Popup>
              <span>{this.props.fnData.pointsOfInterest[0].name}</span>
            </Popup>
          </Marker>
          {gardens}
        </Map>
      </div>
    );
  }
}