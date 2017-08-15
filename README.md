<!-- TOC -->

- [Activity Map](#activity-map)
  - [Basics](#basics)
    - [Vector tiles vs Raster Tiles](#vector-tiles-vs-raster-tiles)
    - [Possible to host vector and raster tiles yourself?](#possible-to-host-vector-and-raster-tiles-yourself)
    - [Leaflet vs Mapbox GL JS](#leaflet-vs-mapbox-gl-js)
    - [Styling raster vs vector tiles](#styling-raster-vs-vector-tiles)
  - [Descision](#descision)
  - [Technologies, Frameworks, Libraries](#technologies-frameworks-libraries)
  - [Tutorials, Documentation](#tutorials-documentation)
  - [Implementation](#implementation)
    - [react-leaflet vs react-map-gl](#react-leaflet-vs-react-map-gl)
      - [Leaflet](#leaflet)
      - [Map-GL](#map-gl)

<!-- /TOC -->
# Activity Map

## Basics

![concept](/doc/anatomy.png)

### Vector tiles vs Raster Tiles
Raster tiles are images that are generated on the server and then sent to the client. Vector tiles are rendered on the fly, clientside. Which makes them faster, through WebGL. 

Why we still should try a raster version?
Vector tiles  require OpenGL/WebGL/DirectX which can be an issue on mobile devices. So a raster tile version is good to have.


### Possible to host vector and raster tiles yourself?

Yes. In 
[these docs](#https://openmaptiles.org/docs/) you can find implementation examples for both. 
link

### Leaflet vs Mapbox GL JS

For now Leaflet should be used for raster tiles, because it is not possible yet to serve vector styles to a leaflet vector grid component. And the leaflet-mabox-gl-js library is still experimental.

Mapbox GL JS has no distinction between baselayers and overlay layers. This means that map details like labels and icons and elements like streets and buildings can be modified with JavaScript, just like overlays in earlier mapping libraries. Each layer provides rules about how certain data should be drawn in the browser, and the renderer uses these layers to actually draw the map on the screen.


### Styling raster vs vector tiles



## Descision

Prefer to go both ways. Make a prototype of each one. 

* Leaflet with hosting remote raster tiles
* Mapbox GL JS with hosting own vector tiles

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
works great with openmaptiles (free open source vector tiles provider)

tbc.