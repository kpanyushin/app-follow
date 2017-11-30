import heads_up from '../img/heads_up.png';
import monument_valley from '../img/monument_valley.png';
import kirakira from '../img/kirakira.png';
import plague_inc from '../img/plague_inc.png';
import minecraft from '../img/minecraft.png';
import rules_of_survival from '../img/rules_of_survival.png';
import youtube from '../img/youtube.png';
import messenger from '../img/messenger.png';
import facebook from '../img/facebook.png';
import snapchat from '../img/snapchat.png';
import insta from '../img/insta.png';
import hot_schedules from '../img/hot_schedules.png';
import amazon from '../img/amazon.png';
import bitmoji from '../img/bitmoji.png';
import clash_of_clans from '../img/clash_of_clans.png';
import facetune from '../img/facetune.png';
import gmail from '../img/gmail.png';
import hbo from '../img/hbo.png';
import monopoly from '../img/monopoly.png';
import pokemon_go from '../img/pokemon_go.png';
import poly_bridge from '../img/poly_bridge.png';
import spotify from '../img/spotify.png';
import tinder from '../img/tinder.png';
import uber from '../img/uber.png';
import whatsapp from '../img/whatsup.png';

const applications = [
  {
    device: 'iPhone',
    icon: heads_up,
    title: 'Heads Up!',
    descr: 'Its the game The New York Times called a',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/heads-up/id623592465?mt=8',
    price: 0.99,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPad',
    icon: monument_valley,
    title: 'Monument Valley 2',
    descr: 'Guide a mother and her child as they embark on a journey through magical architecture, discovering illusionary pathways and delightful puzzles as you learn the secrets of the Sacred Geometry.',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/monument-valley-2/id1187265767?mt=8',
    price: 1.99,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: kirakira,
    title: 'kirakira+',
    descr: 'With this app, you can add effects like a cross filter to attach to the camera lens. Light emitting materials and reflective object will shine even more.',
    category: 'Photo & Video',
    link: 'https://itunes.apple.com/us/app/kirakira/id955687901?mt=8',
    price: 0.99,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: plague_inc,
    title: 'Plague Inc.',
    descr: 'Can you infect the world? Plague Inc. is a unique mix of high strategy and terrifyingly realistic simulation.',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/plague-inc/id525818839?mt=8',
    price: 0.99,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: minecraft,
    title: 'Minecraft',
    descr: 'The Better Together update is here! Explore massive multiplayer servers directly from the game menu and play with friends on all different devices.',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/minecraft/id479516143?mt=8',
    price: 6.99,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: rules_of_survival,
    title: 'Rules of Survival',
    descr: 'Welcome to the arena of RULES OF SURVIVAL! You will be one out of 120 unarmed players who get air dropped into a vast, deserted island. Only the last one survives. it is not a game. You are writing RULES OF SURVIVAL!',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/rules-of-survival/id1307961750?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: youtube,
    title: 'Youtube',
    descr: 'Get the official YouTube app for iPhone and iPad. See what the world is watching in music, gaming, entertainment, news and more. Subscribe to channels, share with friends, edit and upload videos, and watch on any device',
    category: 'Photo & Video',
    link: 'https://itunes.apple.com/us/app/youtube-watch-listen-stream/id544007664?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: messenger,
    title: 'Messenger',
    descr: 'Instantly connect with the people in your life. Messenger is free, fast, and secure.',
    category: 'Social Networking',
    link: 'https://itunes.apple.com/us/app/messenger/id454638411?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: facebook,
    title: 'Facebook',
    descr: 'Keeping up with friends is faster than ever. ',
    category: 'Social Networking',
    link: 'https://itunes.apple.com/us/app/facebook/id284882215?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: snapchat,
    title: 'Snapchat',
    descr: 'Life\'s more fun when you live in the moment :) Happy Snapping!',
    category: 'Photo & Video',
    link: 'https://itunes.apple.com/us/app/snapchat/id447188370?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: insta,
    title: 'Instagram',
    descr: 'Instagram is a simple way to capture and share the world’s moments.',
    category: 'Photo & Video',
    link: 'https://itunes.apple.com/us/app/instagram/id389801252?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: hot_schedules,
    title: 'HotSchedules',
    descr: 'HotSchedules is the industry\'s leading employee scheduling app because it’s the fastest and easiest way to manage your schedule and communicate with your team. ',
    category: 'Business',
    link: 'https://itunes.apple.com/us/app/hotschedules/id294934058?mt=8',
    price: 2.99,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: amazon,
    title: 'Amazon – Shopping made easy',
    descr: 'Browse, search, get product details, read reviews, and purchase millions of products with Amazon International Shopping – now available in English, Spanish, German, and Simplified Chinese.',
    category: 'Shopping',
    link: 'https://itunes.apple.com/us/app/amazon-shopping-made-easy/id297606951?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: bitmoji,
    title: 'Bitmoji',
    descr: 'Bitmoji is your own personal emoji.',
    category: 'Utilities',
    link: 'https://itunes.apple.com/us/app/bitmoji/id868077558?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: clash_of_clans,
    title: 'Clash of Clans',
    descr: 'Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars!',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/clash-of-clans/id529479190?mt=8',
    price: 0.,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: facetune,
    title: 'Facetune',
    descr: 'Professional photographers and graphic designers constantly photoshop models to perfection, and now so can you! Without the expensive price tag or complicated tools, Facetune gives you the ability to retouch and add artistic flair to selfies and portraits with ease, from the convenience of your iPhone.',
    category: 'Photo & Video',
    link: 'https://itunes.apple.com/us/app/facetune/id606310581?mt=8',
    price: 3.99,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: gmail,
    title: 'Gmail - Email by Google',
    descr: 'The official Gmail app brings the best of Gmail to your iPhone or iPad with real-time notifications, multiple account support and search that works across all your mail.',
    category: 'Productivity',
    link: 'https://itunes.apple.com/us/app/gmail-email-by-google/id422689480?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: hbo,
    title: 'HBO NOW',
    descr: 'With HBO NOW you can watch big premieres as they air—plus every episode of HBO\'s addictive series such as Game of Thrones, Westworld, The Deuce, and so much more.',
    category: 'Entertainment',
    link: 'https://itunes.apple.com/us/app/hbo-now-stream-tv-movies/id971265422?mt=8',
    price: 0,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: monopoly,
    title: 'MONOPOLY',
    descr: 'Facebook fans from 185 different countries, the CAT mover is now available to play with in this latest update as well as in the classic board game version of MONOPOLY! ',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/monopoly-game/id337021781?mt=8',
    price: 0.99,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: pokemon_go,
    title: 'Pokémon GO',
    descr: 'Join Trainers across the globe who are discovering Pokémon as they explore the world around them.',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/pok%C3%A9mon-go/id1094591345?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: poly_bridge,
    title: 'Poly Bridge',
    descr: 'Poly Bridge, the hit indie bridge-building physics title with dozens of hours of gameplay.',
    category: 'Games',
    link: 'https://itunes.apple.com/us/app/heads-up/id623592465?mt=8',
    price: 1.99,
    purchases: false,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: spotify,
    title: 'Spotify',
    descr: 'Spotify is the best way to listen to music on mobile or tablet.',
    category: 'Music',
    link: 'https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: tinder,
    title: 'Tinder',
    descr: 'With 20 billion matches to date, Tinder is the world’s most popular app for meeting new people. ',
    category: 'Lifystyle',
    link: 'https://itunes.apple.com/us/app/tinder/id547702041?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: uber,
    title: 'Uber',
    descr: 'Uber is a ridesharing app for fast, reliable rides in minutes—day or night.',
    category: 'Travel',
    link: 'https://itunes.apple.com/us/app/uber/id368677368?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  },
  {
    device: 'iPhone',
    icon: whatsapp,
    title: 'WhatsApp',
    descr: 'WhatsApp Messenger is a FREE messaging app available for iPhone and other smartphones.',
    category: 'Social Networking',
    link: 'https://itunes.apple.com/us/app/whatsapp-messenger/id310633997?mt=8',
    price: 0,
    purchases: true,
    collection: {
      games: true
    }
  }
]

export default applications;
