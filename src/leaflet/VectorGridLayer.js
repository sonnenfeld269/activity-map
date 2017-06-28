import L from 'leaflet';
import { } from 'leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.js'
import PropTypes from 'prop-types';
import { childrenType, GridLayer } from 'react-leaflet';

export default class VectorGridLayer extends GridLayer {
    static propTypes = {
        children: childrenType,
        opacity: PropTypes.number,
        url: PropTypes.string.isRequired,
        zIndex: PropTypes.number,
    };

    createLeafletElement(props: Object): Object {

        const { url, ...options } = props;
        console.log('url is ', url, ' and options are ', options);
        return L.vectorGrid.protobuf("https://{s}.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/{z}/{x}/{y}.vector.pbf?access_token={token}", {
            subdomains: "abcd",
            token: "pk.eyJ1Ijoic29ubmVuZmVsZDI2OSIsImEiOiJjajQwMmlvaTEwOXFzMnF0MTM3MjZuY2U0In0.T1X3PSCiYOI87qNi6AYBYw",
            maxNativeZoom: 14
        })
    }

    updateLeafletElement(fromProps: Object, toProps: Object) {
        super.updateLeafletElement(fromProps, toProps);
        if (toProps.url !== fromProps.url) {
            this.leafletElement.vectorGrid.protobuf(toProps.url);
        }
    }
}