import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as mapboxgl from 'mapbox-gl';
//import mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';
//import MarkerClusterer from 'markerclusterer';
import { ASSET_LIST } from 'src/app/shared/contants/constants';
// import { DataserviceService } from '../../../dataservice.service';
import { datadetails } from '../../datajson/json';
//import MapboxMarkerCluster from '@mapbox/markercluster';
import { MAT_DATEPICKER_VALUE_ACCESSOR } from '@angular/material/datepicker';
import Supercluster from 'supercluster';
//import { Feature, Geometry, GeoJsonProperties } from '@types/geojson'
// import { MarkerClusterer } from '@ng-maps/marker-clusterer';
// import Supercluster from '@supercluster/core';

// interface datadetails [
//   dutyType: string;
//   color: string;
//   duration: number;
// ]
interface GeoJSONFeature {
  type: 'Feature';
}
export interface datadetails {
  marker: mapboxgl.Marker;
}

interface Marker {
  color: string;
}
const geojson: any = {
  type: 'FeatureCollection',
  features: [],
};

const markers: Marker[] = [];

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public map: mapboxgl.Map;
  public markers: mapboxgl.Marker[];
  private supercluster: Supercluster;
  //public cluster: mapboxgl.Cluster[];
  //public markerCluster: MarkerCluster;
  public lastKnownLocations: any[];
  public assetId: any[];
  public asset: any[];
  public datadetails = datadetails;
  private MarkerClusterer: any;
  private push: any;
  // public geojson: any = {
  //   type: 'FeatureCollection',
  //   features: [],
  // };

  //private markers: any[] = [];

  // private markerClusterGroup: any;

  // constructor(private dataservice: DataserviceService) {}

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken =
      'pk.eyJ1IjoibGlnaHRtZXRyaWNzIiwiYSI6ImNsZXIzNjJmeDBvZHIzd3AyZzRxeTlybXkifQ.bkvbQRH0c2P3chHj04cXeQ';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [145.30205123, -38.14274538],
      zoom: 5,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    let clusterCount: 121;
    let dutyType: string;

    // this.datadetails.map((device) => {
    //   this.addMarker(device);
    // });
    // this.datadetails.forEach((device) => {
    //   this.addMarkerToDevice(device);
    // });

    datadetails.forEach((device) => {
      this.addMapSourceAndLayers(device);
      //this.addMarkerToDevice(device);
      //this.displayMarkers(clusterCount, dutyType);
    });

    // datadetails.forEach((device)  => {
    //   this.map.loadImage(feature.properties.imageUrl, (error, image) => {
    //     if (error) {
    //       console.error('Error loading image:', error);
    //       return;
    //     }

    //     if (image) {
    //       this.map.addImage(feature.properties.imageUrl, image);
    //     }
    //   });
    // })

    // //this.addClusters();
  }

  public addMapSourceAndLayers(device: any) {
    //const dutyType = ['heavy', 'medium'];
    // const heavy = ['==', ['get', 'dutyType'], 'heavy'];
    // const medium = ['==', ['get', 'dutyType'], 'medium'];

    this.map.on('load', () => {
      //const dutyType = 'heavy';

      // Get the circle color based on dutyType
      //const circleColor = this.createMarkerColor(dutyType);

      // this.map.on('load', () => {
      //   //const imageURL = '../assets/images/marker.png';
      //   // const imageName = 'done';
      //   const imageURL = this.createMarkerImageURL(device.asset.dutyType);
      //   // const geojson: any = {
      //   //   type: 'FeatureCollection',
      //   //   features: [], // Add marker features here
      //   // };
      //   // const geojson: any = {
      //   //   type: 'FeatureCollection',
      //   //   features: this.addMarkerToDevice(device), // Add marker features here
      //   // };
      //   // const geojson: any = {
      //   //   type: 'FeatureCollection',
      //   //   features: [],
      //   // };
      //   // const feature = {
      //   //   type: 'Feature',
      //   //   properties: {},
      //   //   geometry: {
      //   //     type: 'markers',
      //   //     coordinates: [
      //   //       device.lastKnownLocation.longitude,
      //   //       device.lastKnownLocation.latitude,
      //   //     ],
      //   //   },
      //   // }

      //   // const feature = {
      //   //   type: 'Feature',
      //   //   geometry: {
      //   //     type: 'Point',
      //   //     coordinates: [
      //   //       device.lastKnownLocation.longitude,
      //   //       device.lastKnownLocation.latitude,
      //   //     ],
      //   //   },
      //   // };
      //   // geojson.features.push(feature);
      // this.map.addSource('markers', {
      //     const datadetails :this.datadetails.map((device) => {
      //   const imageURL = this.createMarkerImageURL(device.asset.dutyType);
      //   return {
      //     type: 'Feature',
      //     properties: {
      //       device,
      //       imageUrl: imageURL,
      //     },
      //     geometry: {
      //       type: 'Point',
      //       coordinates: [
      //         device.lastKnownLocation.longitude,
      //         device.lastKnownLocation.latitude,
      //       ],
      //     },
      //   };
      //data: this.geojson,
      // data: {
      //   type: 'FeatureCollection',
      //   features: geojson,

      //   // this.datadetails.map((data) => ({
      //   //   type: 'Feature',
      //   //   properties: { data },
      //   //   geometry: {
      //   //     type: 'Point',
      //   //     coordinates: [
      //   //       data.lastKnownLocation.longitude,
      //   //       data.lastKnownLocation.latitude,
      //   //     ],
      //   //   },
      //   // })),
      // },
      // data: {
      //   type: 'FeatureCollection',
      //   features: geojson,
      // },

      // data: {
      //   type: 'FeatureCollection',
      //   features: datadetails(device),
      // },
      // type: 'geojson',
      // data: {
      //   type: 'FeatureCollection',
      //   features: this.datadetails.map((device) => ({
      //     imageURL: this.createMarkerImageURL(device.asset.dutyType),
      //     type: 'Feature',
      //     properties: {
      //       //dutyType: 'heavy
      //       device,
      //       dutyType,
      //       imageUrl: imageURL,
      //     },
      //     // imageUrl: imageURL
      //     geometry: {
      //       type: 'Point',
      //       coordinates: [
      //         device.lastKnownLocation.longitude,
      //         device.lastKnownLocation.latitude,
      //       ],
      //     },
      //   })),
      // },
      this.map.addSource('markers', {
        type: 'geojson',

        data: {
          type: 'FeatureCollection',
          features: this.datadetails.map((device) => {
            const dutyType = device.asset.dutyType;
            const circleColor = this.createMarkerColor(dutyType);
            //const squareColor = this.createMarkerImageURL(dutyType);
            //const squareColor = this.createMarkerColor(dutyType);

            return {
              type: 'Feature',
              properties: {
                device,
                circleColor,
                //squareColor,
                //fillColor,
                //ImageURL,
              },
              // dutyType,
              //   imageUrl: imageURL,
              geometry: {
                type: 'Point',
                coordinates: [
                  device.lastKnownLocation.longitude,
                  device.lastKnownLocation.latitude,
                ],
              },
            };
          }),
        },

        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      this.map.addLayer({
        id: 'clusters-large',
        type: 'circle',
        source: 'markers',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': 'transparent',
          'circle-radius': 15, // Slightly larger radius
          'circle-stroke-width': 9,
          'circle-stroke-color': '#FFFFFF', // First stroke color
        },
      });

      // Add a smaller circle layer with the second stroke color
      this.map.addLayer({
        id: 'clusters-small',
        type: 'circle',
        source: 'markers',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': 'transparent',
          'circle-radius': 20, // Smaller radius
          'circle-stroke-width': 9,
          'circle-stroke-color': '#b5179e',
          //#b5179e', // Second stroke color
        },
      });

      this.map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'markers',
        filter: ['has', 'point_count'],

        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#f28cb1',
            50,
            '#f1f075',
            100,
            '#51bbd6',
            150,
            '#003399',
          ],

          'circle-radius': 15,
          // 'circle-stroke-width': 9, // Adding an outline
          // 'circle-stroke-color': 'white',
          //'circle-stroke-pattern': 'twoToneStroke',
        },
      });

      this.map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'markers',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',

          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 20,
        },

        paint: {
          'text-color': '#000000',
        },
      });

      // const squareColor = this.createMarkerImageURL(device.asset.dutyType);
      // this.map.loadImage(squareColor, (error, image) => {
      //   if (error) {
      //     console.error('Error loading image:', error);
      //     return;
      //   }

      //   if (image) {
      //     this.map.addImage(squareColor, image);
      //   }

      //   this.map.addLayer({
      //     id: 'unclustered-point',
      //     type: 'symbol',
      //     source: 'markers',
      //     //   //filter: ['has', 'point_count'],
      //     filter: ['!', ['has', 'point_count']],
      //     layout: {
      //       //'icon-image': imageName,
      //       'icon-size': 0.1,
      //       'icon-image': squareColor,
      //       // Other image properties like width, height, etc., can be specified here if needed
      //     },
      //   });
      // });
      this.map.addLayer({
        id: 'circle-layer',

        // type: 'circle',
        //id: 'line-layer',
        type: 'circle',
        //shapes: 'polygons',

        source: 'markers',
        filter: ['!', ['has', 'point_count']],
        // paint: {
        //   'circle-color': '#11b4da',
        //   'circle-radius': 4,
        //   'circle-stroke-width': 1,
        //   'circle-stroke-color': '#fff',
        // },

        paint: {
          'circle-color': ['get', 'circleColor'],
          'circle-radius': 8,
          // 'circle-opacity': 0.1,
          'circle-stroke-width': 10, // Adding an outline
          'circle-stroke-color': 'white', // Color of the outline
          //'line-width': 2,
        },
        layout: {
          visibility: 'visible',
        },
      });

      this.map.on('click', 'circle-layer', (e: any) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        // const clickedFeature = e.features[0];

        // const assetId = datadetails[0].asset.assetId;
        // const deviceId = datadetails[0].device.deviceId;
        datadetails.forEach((data) => {
          const assetId = data.asset.assetId;
          const deviceId = data.device.deviceId;

          const htmlContent = `<h3>DeviceId:</h3><strong>${deviceId}</strong><br><h3>Asset ID:</h3><strong>${assetId}</strong>`;

          new mapboxgl.Popup()
            .setLngLat(coordinates)

            .setHTML(htmlContent)
            // .setHTML(`<h3>Asset ID:</h3><strong>${assetId}</strong>`)
            .addTo(this.map);
        });
      });

      // Assuming datadetails is an array of objects containing asset and device information

      // this.map.on('click', 'markers-layer', (e) => {
      //   const device = e.features[0].properties.device;
      //   const dutyType = device.asset.dutyType;
      //   const assetId = device.asset.assetId;

      //   new mapboxgl.Popup()
      //     .setLngLat(e.lngLat)
      //     .setHTML(`<h3>Duty Type: ${dutyType}</h3><p>Asset ID: ${assetId}</p>`)
      //     .addTo(this.map);
      // });
      //     this.map.addLayer({
      //       id: 'icon-layer',
      //       type: 'symbol',
      //       source: 'markers',
      //       //   //filter: ['has', 'point_count'],
      //       filter: ['!', ['has', 'point_count']],
      //       layout: {
      //         //'icon-image':['get', 'iconImage'], ,
      //         'icon-size': 0.1,
      //         'icon-image': imageURL,
      //         // Other image properties like width, height, etc., can be specified here if needed
      //       },

      //   const imageURL = this.createMarkerImageURL(device.asset.dutyType);
      //   this.map.loadImage(imageURL, (error, image) => {
      //     if (error) {
      //       console.error('Error loading image:', error);
      //       return;
      //     }

      //     if (image) {
      //       this.map.addImage(imageURL, image);
      //     }

      //     this.map.addLayer({
      //       id: 'unclustered-point',
      //       type: 'symbol',
      //       source: 'markers',
      //       //   //filter: ['has', 'point_count'],
      //       filter: ['!', ['has', 'point_count']],
      //       layout: {
      //         //'icon-image': imageName,
      //         'icon-size': 0.1,
      //         'icon-image': imageURL,
      //         // Other image properties like width, height, etc., can be specified here if needed
      //       },
      //       // this.map.addLayer({
      //       //   id: 'markers',
      //       //   type: 'symbol',
      //       //   source: {
      //       //     type: 'geojson',
      //       //     data: {
      //       //       type: 'FeatureCollection',
      //       //       features: [
      //       //         {
      //       //           type: 'Feature',
      //       //           geometry: {
      //       //             type: 'Point',
      //       //             coordinates: [
      //       //               features.properties.longitude,
      //       //               features.properties.latitude,
      //       //             ],
      //       //           },
      //       //           properties: {},
      //       //         },
      //       //       ],
      //       //     },
      //       //   },

      //       //   layout: {
      //       //     //'icon-image': imageName,
      //       //     //'icon-size': 1.0,
      //       //     'icon-image': imageUrl,
      //       //     // Other image properties like width, height, etc., can be specified here if needed
      //       //   },
      //       // });
      //     });
      //   });
      // });

      //   this.map.loadImage(features.properties.imageURL, (error, image) => {
      //     if (error) {
      //       console.error('Error loading image:', error);
      //       return;
      //     }

      //     if (image) {
      //       this.map.addImage(features.properties.imageURL, image);
      //     }
      //   });
      // });

      // this.map.addLayer({
      //   id: 'icon-layer',
      //   type: 'symbol',
      //   source: 'markers',
      //   //filter: ['!', ['has', 'point_count']],
      //   layout: {
      //     //'icon-image': imageURL,
      //     'icon-image': ['get', 'imageURL'],
      //     'icon-size': 0.2,
      //   },
      // });
    });
  }

  // this.map.addLayer({
  //   id: 'unclustered-point',
  //   type: 'circle',
  //   source: 'markers',
  //   //filter: ['has', 'point_count'],
  //   filter: ['!', ['has', 'point_count']],
  //   paint: {
  //     'circle-radius': 10,
  //     'circle-stroke-width': 1,
  //     'circle-stroke-color': '#fff',

  //     'circle-color': [
  //       'case',
  //       ['==', ['get', 'dutyType'], 'heavy'],
  //       '#ff0000',
  //       ['==', ['get', 'dutyType'], 'medium'],
  //       '#ffa500',
  //       '#11b4da',
  //     ],
  //   },
  // });

  // id: `marker-layer-${imageURL}`, // Unique ID for each marker layer
  //               type: 'symbol',
  //               source: {
  //                 type: 'geojson',
  //                 data: {
  //                   type: 'Feature',
  //                   geometry: {
  //                     type: 'Point',
  //                     coordinates: [
  //                       //features.properties.longitude,
  //                       //features.properties.latitude,
  //                       device.lastKnownLocation.longitude,
  //                       device.lastKnownLocation.latitude,
  //                     ],
  //                   },
  //                   properties: {
  //                     //   title: features.properties.title,
  //                   },
  //                 },
  //               },

  // private createMarkerImageURL(dutyType: string) {
  //   let markerImageURL = 'default_image_url.png';

  //   if (dutyType === 'heavy') {
  //     markerImageURL = '../assets/images/imagesmap.png';
  //     console.log('medium duty type encountered');
  //   } else if (dutyType === 'medium') {
  //     markerImageURL = '../assets/images/marker.png';
  //     console.log('heavy duty type encountered');
  //   }
  //   // const mergedMarkers = JSON.stringify(markerImageURL);
  //   return markerImageURL;
  // }

  private createMarkerImageURL(dutyType: string) {
    let markerImageURL = 'default_image_url.png';

    if (dutyType === 'heavy') {
      markerImageURL = '../assets/images/imagesmap.png';
      console.log('medium duty type encountered');
    } else if (dutyType === 'medium') {
      markerImageURL = '../assets/images/marker.png';
      console.log('heavy duty type encountered');
    }
    // const mergedMarkers = JSON.stringify(markerImageURL);
    return markerImageURL;
  }

  private createMarkerColor(dutyType: string) {
    let markerColor = 'black';

    if (dutyType === 'heavy') {
      markerColor = 'red';
      //console.log('medium duty type encountered');
    } else if (dutyType === 'medium') {
      markerColor = 'green';
      //console.log('heavy duty type encountered');
    }
    // const mergedMarkers = JSON.stringify(markerImageURL);
    return markerColor;
  }
}

//based on the duty type return the marker colour
