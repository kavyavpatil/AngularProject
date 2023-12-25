export const sidemenulist = ['home', 'assets', 'mapbox'];

export const DURATION_LIST = [
  {
    title: 'Last Week',
    days: 7,
  },
  { title: 'Last Month', days: 30 },
  { title: 'Last Three Month', days: 30 * 3 },
  { title: 'Last Six Month', days: 30 * 6 },
];

export const SELECT_TAGS = [
  {
    location: 'Mandya',
  },
  {
    location: 'Mysore',
  },
  {
    location: 'North-n',
  },
];
export const SELECT_TERMINAL = [
  {
    attributeName: 'Location',
    tag: [
      {
        tagName: 'Mandya',
        tagId: 1,
      },
      {
        tagName: 'Mysore',
        tagId: 2,
      },
    ],
  },
  {
    attributeName: 'Terminal',
    tag: [
      {
        tagName: 'East',
        tagId: 3,
      },
      {
        tagName: 'West',
        tagId: 4,
      },
    ],
  },
];

export const STATS_DETAILS_7 = [
  {
    subtitle: 'TRIPS',
    title: 39,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const STATS_DETAILS_30 = [
  {
    subtitle: 'TRIPS',
    title: 40,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];

export const STATS_DETAILS_90 = [
  {
    subtitle: 'TRIPS',
    title: 50,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const STATS_DETAILS_180 = [
  {
    subtitle: 'TRIPS',
    title: 119,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const SELECTEDTAG_LOCATION = [
  {
    tagName: 'MYSORE',
    tagId: 1,
  },
  {
    tagName: 'DAVANGERE',
    tagId: 2,
  },
  {
    tagName: 'GOKARNA',
    tagId: 3,
  },
  {
    tagName: 'HAVERI',
    tagId: 4,
  },
];

export const SELECT_LOCATION_1 = [
  {
    subtitle: 'TRIPS',
    title: 113,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const SELECT_LOCATION_2 = [
  {
    subtitle: 'TRIPS',
    title: 11,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const SELECT_LOCATION_3 = [
  {
    subtitle: 'TRIPS',
    title: 0,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const SELECT_LOCATION_4 = [
  {
    subtitle: 'TRIPS',
    title: 10,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];

export const SELECT_1 = [
  {
    subtitle: 'TRIPS',
    title: 11,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const SELECT_2 = [
  {
    subtitle: 'TRIPS',
    title: 111,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 189,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 30.17,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 17,
  },
];
export const SELECT_3 = [
  {
    subtitle: 'TRIPS',
    title: 0,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 0,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 0,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 0,
  },
];
export const SELECT_4 = [
  {
    subtitle: 'TRIPS',
    title: 0,
  },
  {
    subtitle: 'DISTANCE(mi)',
    title: 0o0,
  },
  {
    subtitle: 'EVENTS PER 100 MILES',
    title: 0o0,
  },
  {
    subtitle: 'DURATION (hours)',
    title: 0o0,
  },
];
//TOP_DRIVERS

export const ASSET_LIST = [
  // {assetid:'asset123', tags:[],defaultdeviceid:'John Doe', derviceid:'johndoe123',dutytype:'Light',id:1 },
  {
    basic_info: {
      derviceId: 'johndoe123',
      assetId: 'asset123',
      dutyType: 'Light',
      defaultDeviceId: 'John Doe',
      installer: 'Janeo Doe',
      installationTimeStamp: '20/10/2023',
      installationDuration: '15minutes',
    },
    advanced_info: {
      sdkVersion: 'v1.15',
      firmwareVersion: 'v1.2.3',
      alertVolume: 10,
      driverSideSelection: 'Right',
      tags: '-',
    },
    storage_details: {
      numberofsdcards: 2,
      totalStorage: '128GB',
      sdCard1: '5 GB used/128GB',
      sdCard2: '0gbused/128GB',
    },
    diagonstics: {
      totalIssues: 2,
      totalIssuesFixed: 2,
      issues: 'DVR Writing,Power Cut Alert',
    },
    mounting_details: {
      roadfacingMountingImage: '../assets/images/download.jpeg',
      insidefacingMountingImage: '../assets/images/inside car image.jpeg',
    },
    lastKnownLocation: {
      latitude: -38.07193441,
      longitude: 145.26985972,
    },
  },
  {
    basic_info: {
      derviceId: '861451040663901',
      assetId: 'KrishnaSX4',
      dutyType: 'Medium',
      defaultDeviceId: 'john',
      installer: 'Janeo Doe',
      installationTimeStamp: '20/10/2023',
      installationDuration: '15minutes',
    },
    advanced_info: {
      sdkVersion: 'v1.15',
      firmwareVersion: 'v1.2.3',
      alertVolume: 10,
      driverSideSelection: 'Right',
      tags: ['south', 'east'],
    },
    storage_details: {
      numberofsdcards: 2,
      totalStorage: '128GB',
      sdCard1: '5 GB used/128GB',
      sdCard2: '0gbused/128GB',
    },
    diagonstics: {
      totalIssues: 2,
      totalIssuesFixed: 2,
      issues: 'DVR Writing,Power Cut Alert',
    },
    mounting_details: {
      roadfacingMountingImage: '../assets/images/image1.jpeg',
      insidefacingMountingImage: '../assets/images/image inside.jpg',
    },
  },
  {
    basic_info: {
      derviceId: '864281048713065',
      assetId: 'SOUMIK-110',
      installer: 'Janeo Doe',
      installationTimeStamp: '20/10/2023',
      installationDuration: '15minutes',
    },
    advanced_info: {
      sdkVersion: 'v1.15',
      firmwareVersion: 'v1.2.3',
      alertVolume: 10,
      driverSideSelection: 'Right',
      tags: ['south', 'north'],
    },
    storage_details: {
      numberofsdcards: 2,
      totalStorage: '128GB',
      sdCard1: '5 GB used/128GB',
      sdCard2: '0gbused/128GB',
    },
    diagonstics: {
      totalIssues: 2,
      totalIssuesFixed: 2,
      issues: 'DVR Writing,Power Cut Alert',
    },
    mounting_details: {
      roadfacingMountingImage: '../assets/images/image1.jpeg',
      insidefacingMountingImage: '../assets/images/image inside.jpg',
    },
  },
  {
    basic_info: {
      derviceId: '864281048715000',
      assetId: 'Sreedhar-120',
      dutyType: 'Heavy',
      defaultDeviceId: 'John Doe',
      installer: 'Janeo Doe',
      installationTimeStamp: '20/10/2023',
      installationDuration: '15minutes',
    },
    advanced_info: {
      sdkVersion: 'v1.15',
      firmwareVersion: 'v1.2.3',
      alertVolume: 10,
      driverSideSelection: 'Right',
      tags: ['north'],
    },
    storage_details: {
      numberofsdcards: 2,
      totalStorage: '128GB',
      sdCard1: '5 GB used/128GB',
      sdCard2: '0gbused/128GB',
    },
    diagonstics: {
      totalIssues: 2,
      totalIssuesFixed: 2,
      issues: 'DVR Writing,Power Cut Alert',
    },
    mounting_details: {
      roadfacingMountingImage: '../assets/images/mqdefault.jpg',
      insidefacingMountingImage: '../assets/images/inside car image.jpeg',
    },
  },
  {
    basic_info: {
      derviceId: 'johndoe123',
      assetId: 'testMDVRS',
      defaultDeviceId: 'John Doe',
      installer: 'Janeo Doe',
      installationTimeStamp: '20/10/2023',
      installationDuration: '15minutes',
    },
    advanced_info: {
      sdkVersion: 'v1.15',
      firmwareVersion: 'v1.2.3',
      alertVolume: 10,
      driverSideSelection: 'Right',
      tags: ['north'],
    },
    storage_details: {
      numberofsdcards: 2,
      totalStorage: '128GB',
      sdCard1: '5 GB used/128GB',
      sdCard2: '0gbused/128GB',
    },
    diagonstics: {
      totalIssues: 2,
      totalIssuesFixed: 2,
      issues: 'DVR Writing,Power Cut Alert',
    },
    mounting_details: {
      roadfacingMountingImage: '../assets/images/download.jpeg',
      insidefacingMountingImage: '../assets/images/inside car image.jpeg',
    },
  },
];

// export const lastKnownLocation = {
//   latitude: -38.07193441,
//   longitude: 145.26985972,
// };

export const COACHABLE_DRIVERS = [
  { position: 1, name: 'toptopCoachableDrivers', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
