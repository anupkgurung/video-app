import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: "Wo5dMEP_BbI",
    title: "Awesome Video about Coding",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    creator: "Soham Shah",
  },
  {
    _id: "F_Riqjdh2oM",
    title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
    creator: "Sentdex",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  },
  {
    _id: "",
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/BEF2vPFo7aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/BEF2vPFo7aU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqCzpCZae2HoZVPQSxrn1UL82FSA',
    creator:'Go4x4'
  },
  {
    _id: uuid(),
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/MdCna5anHNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumbnail : 'https://i.ytimg.com/vi/MdCna5anHNo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApuokB8fTLivsNvdp-5VVZ14HrrQ',
    creator : 'Mantavya'
  },
  {
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/IytKxMDflwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumnail : 'https://i.ytimg.com/an_webp/IytKxMDflwQ/mqdefault_6s.webp?du=3000&sqp=CPjHjZQG&rs=AOn4CLDmh-v66KX5leVx6TWTPGLpcT6wRg',
    creator : 'MSK',
    title : 'The Day I Lost my Cool',
  },
  {
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/zHf9VwWEW48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumnail : 'https://i.ytimg.com/vi/zHf9VwWEW48/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAeUd_IyO7RpWh-hi1KFiLhvs1kMQ',
    creator: 'fakirariders',
    title : 'Ladakh 2022 with fakira'
  },
  {
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/8FM0Qubms1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumnail : 'https://i.ytimg.com/an_webp/8FM0Qubms1o/mqdefault_6s.webp?du=3000&sqp=CODEjZQG&rs=AOn4CLDv-FdG9fomo0g45g1vtA98dsot4A',
    title : 'Zanskar Ride Main Hui Tabiyat Kharab',
    creator : 'riding with peace'
  },
  {
    title : '3,000 Miles Solo on a Triumph Bonneville',
    video : '<iframe width="560" height="315" src="https://www.youtube.com/embed/2IUxCoqIf18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    thumnail : 'https://i.ytimg.com/an_webp/2IUxCoqIf18/mqdefault_6s.webp?du=3000&sqp=CK_kjZQG&rs=AOn4CLB5nN53WSjtsVM6V9bknwqvZ9Kyxw',
    creator : 'ChrisIronhardt'
  }
];
