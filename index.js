const express = require('express')
const app = express()

const nycPlaces = [
    {
      "username": "travelNYClover",
      "placeName": "Central Park",
      "location": "Manhattan, NY",
      "description": "A massive urban park offering scenic landscapes, walking trails, and recreational activities.",
      "storesAndRestaurants": "Tavern on the Green, The Loeb Boathouse",
      "imageURL": "Park-Aerial_20190604_04-1-scaled.jpg"
    },
    {
      "username": "explorebigapple",
      "placeName": "Times Square",
      "location": "Midtown Manhattan, NY",
      "description": "A world-famous commercial and entertainment hub known for its bright lights and Broadway theaters.",
      "storesAndRestaurants": "M&M’s World, Junior’s Cheesecake",
      "imageURL": "image"
    },
    {
      "username": "wanderlustny",
      "placeName": "Brooklyn Bridge",
      "location": "Brooklyn-Manhattan, NY",
      "description": "An iconic suspension bridge offering breathtaking views of the NYC skyline.",
      "storesAndRestaurants": "Grimaldi’s Pizzeria, Shake Shack",
      "imageURL": "brooklyn-bridge-adobestock-176054572-jpeg_header-15620519.jpg"
    },
    {
      "username": "localfoodie",
      "placeName": "Chelsea Market",
      "location": "Chelsea, Manhattan, NY",
      "description": "A trendy indoor food and retail market with a variety of unique eateries and boutiques.",
      "storesAndRestaurants": "Lobster Place, Los Tacos No.1",
      "imageURL": "explore-chelsea-market-in-new-york-307526697.jpg"
    },
    {
      "username": "urbanadventurer",
      "placeName": "The High Line",
      "location": "Chelsea, Manhattan, NY",
      "description": "An elevated linear park built on a historic freight rail line with gardens, art, and city views.",
      "storesAndRestaurants": "Artichoke Basille’s Pizza, Chelsea Market",
      "imageURL": "The-Highline_2018_1407-High-Line-At-The-Rail-Yards---Photo-By-Iwan-Baan_1411215715.jpg"
    },
    {
      "username": "skylineviews",
      "placeName": "Top of the Rock",
      "location": "Rockefeller Center, Manhattan, NY",
      "description": "An observation deck offering stunning panoramic views of New York City.",
      "storesAndRestaurants": "Del Frisco’s Grille, Magnolia Bakery",
      "imageURL": "bc785783a9d768bd0062289b476d25e9-617-new-york-top-of-the-rock-observation-deck-tickets-01.jpg"
    },
    {
      "username": "historybuff",
      "placeName": "Statue of Liberty",
      "location": "Liberty Island, NY",
      "description": "A historic symbol of freedom and democracy, accessible via ferry.",
      "storesAndRestaurants": "Statue of Liberty Crown Café, Ellis Island Café",
      "imageURL": "66c16a8b9bb54de4aa05de73_statue of liberty side (1).jpg"
    },
    {
      "username": "museumlover",
      "placeName": "The Met",
      "location": "Upper East Side, Manhattan, NY",
      "description": "The Metropolitan Museum of Art, one of the largest and most prestigious museums in the world.",
      "storesAndRestaurants": "The Met Dining Room, Café Sabarsky",
      "imageURL": "The_MET.jpg"
    },
    {
      "username": "nightlifeenthusiast",
      "placeName": "Williamsburg",
      "location": "Brooklyn, NY",
      "description": "A vibrant neighborhood known for its street art, music scene, and hipster culture.",
      "storesAndRestaurants": "Smorgasburg, Peter Luger Steak House",
      "imageURL": "images"
    },
    {
      "username": "seasideexplorer",
      "placeName": "Coney Island",
      "location": "Brooklyn, NY",
      "description": "A historic amusement district featuring beaches, rides, and boardwalk entertainment.",
      "storesAndRestaurants": "Nathan’s Famous, Totonno’s Pizzeria",
      "imageURL": "F41434E0-65B5-4780-82D1-A6B84E493EED-1.png"
    }
  ]
  
  app.set("view engine", "ejs")

  app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })
  
 
  app.listen(3000, () => {
    console.log("Server running")
  })