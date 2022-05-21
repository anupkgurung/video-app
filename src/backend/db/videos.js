import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: "Wo5dMEP_BbI",
    title: "Solo Adventure Ride through Namib Desert",
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lAdvYM_Wtek" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/lAdvYM_Wtek/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZ83usv5QHGg2lWZwQApS62ppV6w',
    alt :"onherbike",
    creator: "onherbike",
    category : 'motorcycling'
  },
  {
    _id: "F_Riqjdh2oM",
    title: "Epic off-road adventure in Eastern Europe Documentary",
    creator: "Nomad Sweden",
    thumbnail : 'https://i.ytimg.com/vi/MMCI07slheQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7kE0LespktHRD6bclBjniuWN4dw',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/C4ZrK8EJTnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    alt : 'nomadsweden',
    category : 'tour'
  },
  {
    _id: uuid(),
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/BEF2vPFo7aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/BEF2vPFo7aU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqCzpCZae2HoZVPQSxrn1UL82FSA',
    creator:'Go4x4',
    title :'Camping in cold',
    alt : 'Go4x4',
    category : 'camping'
  },
  {
    _id: uuid(),
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/MdCna5anHNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/MdCna5anHNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApuokB8fTLivsNvdp-5VVZ14HrrQ',
    creator : 'Mantavya',
    title : 'New ride',
    alt: 'Mantavya',
    category : 'motorcycling'
  },
  {
    _id: uuid(),
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/IytKxMDflwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/3Qy93gUKhvQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgt7o91GseUruOMXBniwd59iwxKg',
    creator : 'MSK',
    title : 'The Day I Lost my Cool',
    alt:'MSK',
    category : 'motorcycling'
  },
  {
    _id: uuid(),
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/zHf9VwWEW48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/zHf9VwWEW48/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeUd_IyO7RpWh-hi1KFiLhvs1kMQ',
    creator: 'fakirariders',
    title : 'Ladakh 2022 with fakira',
    alt :'fakirariders',
    category : 'camping'
  },
  {
    _id: uuid(),
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/8FM0Qubms1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/8FM0Qubms1o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUQNA-R0uNL6m3DF8h5O2OldXkxg',
    title : 'Zanskar Ride Main Hui Tabiyat Kharab',
    creator : 'riding with peace',
    alt : 'rwp',
    category : 'tour'
  },
  {
    _id: uuid(),
    title : '3,000 Miles Solo on a Triumph Bonneville',
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/2IUxCoqIf18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/fPaj10lHep4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfdxrMFta3ClgJzvtZQ5U-HfryLg',
    creator : 'ChrisIronhardt',
    alt:'ChrisIronhardt',
    category : 'motorcycling'
  },
  {
    _id: uuid(),
    title: 'Manali to Leh | Road Trip',
    thumbnail :'https://i.ytimg.com/vi/Ku71sEKeZAw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAd06Jc79pihNfy_TUKhSQD7MFhTQ',
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ku71sEKeZAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    creator : 'Born Idiots',
    alt : 'bornidiots',
    category : 'tour'
  } 
];
