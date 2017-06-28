<!-- TOC -->

- [Activity Map](#activity-map)
    - [Technologies, Frameworks, Libraries](#technologies-frameworks-libraries)
    - [Tutorials, Documentation](#tutorials-documentation)
    - [Implementation](#implementation)
        - [react-leaflet vs react-map-gl](#react-leaflet-vs-react-map-gl)
            - [Leaflet](#leaflet)
            - [Map-GL](#map-gl)

<!-- /TOC -->
# Activity Map

## Technologies, Frameworks, Libraries
* react
* react-map-gl or react-leaflet

## Tutorials, Documentation
<https://www.mapbox.com/help/#guides-to-getting-started>

## Implementation

![concept](/doc/concept.jpg)

### react-leaflet vs react-map-gl

#### Leaflet
* doesn’t support vector tiles out of the box, need to use vector-grid plugin
* vector-grid cannot (yet) handle vector tile GL styles, need to manually integrate all styles from mapbox

#### Map-GL
* supports vector tiles
* can use simple style url for integrating styles
works great with openmaptiles (another free open source vector tiles provider)

tbc.