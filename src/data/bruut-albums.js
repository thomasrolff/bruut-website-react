import goSurfingImage from '../images/album-go-surfing-lp.jpg';
import vImage from '../images/album-v.jpg';
import superjazzImage from '../images/album-superjazz.jpg';
import madpackImage from '../images/album-madpack.jpg';
import fireImage from '../images/album-fire.jpg';
import bruutImage from '../images/album-bruut.jpg';

const albums = [
  { 
      id: 0,
      title: "Go Surfing",
      releaseDate: "November 22, 2019",
      musicians: [
        {
          name: "Anton Goudsmit",
          instrument: "Guitar"
        },
        {
          name: "Maarten Hogenhuis",
          instrument: "Alto & Tenor Saxophones"
        },
        {
          name: "Folkert Oosterbeek",
          instrument: "Hammond Organ"
        },
        {
          name: "Thomas Rolff",
          instrument: "Double Bass"
        },
        {
          name: "Felix Schlarmann",
          instrument: "Drums"
        },
      ],
      producer: "BRUUT!",
      image: goSurfingImage,
      imageALT: "Go Surfing albumcover 2019",
      buyURL: "https://www.platomania.nl/album/7207144/go-surfing/bruut-anton-goudsmit",
      spotifyURL: "https://open.spotify.com/album/4JAZLSX5O3Ls78FQF88vqs",
      deezerURL: "https://www.deezer.com/nl/album/156126752",
      appleMusicURL: "https://music.apple.com/nl/album/go-surfing/1519718483",
      tidalURL: "https://listen.tidal.com/album/146012880",
      availability: [
        "VINYL",
        "CD",
        "DIGITAL",
      ],
      info: "2019 | vinyl, cd, digital",
      infoSub: "Feat. Anton Goudsmit"
  },
  { 
      id: 1,
      title: "V",
      releaseDate: "November 30, 2018",
      musicians: [
        {
          name: "Maarten Hogenhuis",
          instrument: "Alto & Tenor Saxophones",
        },
        {
          name: "Folkert Oosterbeek",
          instrument: "Hammond Organ, Farfisa Compact, Vox Continental, Korg Polysix, Mellotron, Piano and Harmonium",
        },
        {
          name: "Thomas Rolff",
          instrument: "Double Bass",
        },
        {
          name: "Felix Schlarmann",
          instrument: "Drums",
        }
      ],
      producer: "BRUUT! & Paul Willemsen",
      image: vImage,
      imageALT: "V albumcover 2018",
      buyURL: "https://bruut.bandcamp.com/album/v",
      spotifyURL: "https://open.spotify.com/album/63IC8S5kciU4LZOtBIOoT8",
      deezerURL: "https://www.deezer.com/nl/album/75396712",
      appleMusicURL: "https://music.apple.com/nl/album/v/1438794692",
      tidalURL: "https://listen.tidal.com/album/96538241",
      availability: [
        "VINYL",
        "CD",
        "DIGITAL",
      ],
      info: "2017 | vinyl, cd, digital"
  },
  {
      id: 2,
      title: "Superjazz",
      releaseDate: "February 3, 2017",
      musicians: [
        {
          name: "Maarten Hogenhuis",
          instrument: "Alto & Tenor Saxophones",
        },
        {
          name: "Folkert Oosterbeek",
          instrument: "Hammond Organ & Mellotron",
        },
        {
          name: "Thomas Rolff",
          instrument: "Double Bass",
        },
        {
          name: "Felix Schlarmann",
          instrument: "Drums",
        }
      ],
      producer: "BRUUT!",
      image: superjazzImage,
      imageALT: "Superjazz albumcover 2017",
      buyURL: "https://bruut.bandcamp.com/album/superjazz",
      spotifyURL: "https://open.spotify.com/album/7xfUhNsWnbCUZql4FCrX21",
      deezerURL: "https://www.deezer.com/nl/album/15260829",
      appleMusicURL: "https://music.apple.com/nl/album/superjazz/1192739707?uo=4&app=music&at=1010l8J",
      tidalURL: "https://listen.tidal.com/album/69359339",
      availability: [
        "VINYL",
        "CD",
        "DIGITAL",
      ],
      info: "2017 | vinyl, cd, digital"
  },
  {
      id: 3,
      title: "Mad Pack",
      releaseDate: "March 6, 2015",
      musicians: [
        {
          name: "Maarten Hogenhuis",
          instrument: "Alto Saxophone, Tenor Saxophone & Tambourine",
        },
        {
          name: "Folkert Oosterbeek",
          instrument: "Hammond Organ, Mannborg Suitcase Harmonium & Vox Continental Organ",
        },
        {
          name: "Thomas Rolff",
          instrument: "Double Bass",
        },
        {
          name: "Felix Schlarmann",
          instrument: "Drums & Tambourine",
        }
      ],
      producer: "BRUUT!",
      image: madpackImage,
      imageALT: "Mad Pack albumcover 2015",
      buyURL: "https://bruut.bandcamp.com/album/mad-pack",
      spotifyURL: "https://open.spotify.com/album/6oy4Q1z9nvjzv0lCuHyJJA",
      deezerURL: "https://www.deezer.com/nl/album/9574630",
      appleMusicURL: "https://music.apple.com/nl/album/mad-pack/961666565",
      tidalURL: "https://listen.tidal.com/album/69359339",
      availability: [
        "VINYL",
        "CD",
        "DIGITAL",
      ],
      info: "2015 | vinyl, cd, digital"
  },
  { 
      id: 4,
      title: "Fire",
      releaseDate: "November 8, 2013",
      musicians: [
        {
          name: "Maarten Hogenhuis",
          instrument: "Alto & Tenor Saxophone",
        },
        {
          name: "Folkert Oosterbeek",
          instrument: "Hammond Organ",
        },
        {
          name: "Thomas Rolff",
          instrument: "Double Bass",
        },
        {
          name: "Felix Schlarmann",
          instrument: "Drums",
        }
      ],
      producer: "BRUUT!",
      image: fireImage,
      imageALT: "Fire albumcover 2013",
      buyURL: "https://bruut.bandcamp.com/album/fire",
      spotifyURL: "https://open.spotify.com/album/4xOvYzf7dXZlrUetjDUS4i",
      deezerURL: "https://www.deezer.com/nl/album/7087177",
      appleMusicURL: "https://music.apple.com/nl/album/fire/736020969",
      tidalURL: "https://listen.tidal.com/album/23369061",
      availability: [
        "VINYL",
        "CD",
        "DIGITAL",
      ],
      info: "2013 | vinyl, cd, digital"
  },
  {
      id: 5,
      title: "BRUUT!",
      releaseDate: "January 10, 2012",
      musicians: [
        {
          name: "Maarten Hogenhuis",
          instrument: "Alto & Tenor Saxophone",
        },
        {
          name: "Folkert Oosterbeek",
          instrument: "Hammond Organ, Farfisa Compact, Vox Continental, Korg Polysix, Mellotron, Piano and Harmonium",
        },
        {
          name: "Thomas Rolff",
          instrument: "Double Bass",
        },
        {
          name: "Felix Schlarmann",
          instrument: "Drums",
        }
      ],
      producer: "BRUUT!",
      image: bruutImage,
      imageALT: "Bruut! albumcover 2012",
      buyURL: "https://bruut.bandcamp.com/album/bruut-2",
      spotifyURL: "https://open.spotify.com/album/0AbW7sIaO5G8IIjxm1J84a",     
      deezerURL: "https://www.deezer.com/nl/album/6796215",
      appleMusicURL: "https://music.apple.com/nl/album/bruut/678259594",
      tidalURL: "https://listen.tidal.com/album/21535534",
      availability: [
        "CD",
        "DIGITAL",
      ],
      info: "2012 | cd, digital"
  }
]

export default albums;