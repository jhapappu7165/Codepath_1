import './App.css'
import Card from './Card'

function App() {
  const trucks = [
    {
      name: "Birria-Landia",
      cuisine: "Mexican",
      image: "https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg",
      menuLink: "https://birrialandia.com/"
    },
    {
      name: "Mysttik Masala",
      cuisine: "Indian",
      image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42",
      menuLink: "https://www.urbanhawker.com/mysttik-masaala"
    },
    {
      name: "The Halal Guys",
      cuisine: "Middle Eastern",
      image: "https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&amp;strip=all&amp;w=1024",
      menuLink: "https://thehalalguys.com/"
    },
    {
      name: "NY Dosas",
      cuisine: "Vegetarian",
      image: "https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg",
      menuLink: "https://www.yelp.com/biz/ny-dosas-new-york"
    },
    {
      name: "Jerk Pan",
      cuisine: "Jamaican",
      image: "https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg",
      menuLink: "https://manna-biscus.com/products/authentic-jamaican-jerk-chicken-full-size-pan"
    },
    {
      name: "Tong",
      cuisine: "Bangladeshi",
      image: "https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg",
      menuLink: "https://www.facebook.com/Bangladeshistreetfoods/"
    },
    {
      name: "King Souvlaki of Astoria",
      cuisine: "Greek",
      image: "https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg",
      menuLink: "https://www.yelp.com/biz/king-souvlaki-astoria-astoria-2"
    },
    {
      name: "Ling's Sweet Mini Cakes",
      cuisine: "Chinese",
      image: "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg",
      menuLink: "https://www.yelp.com/biz/lings-sweet-mini-cakes-new-york"
    },
    {
      name: "Uncle Gussy's",
      cuisine: "Greek",
      image: "https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg",
      menuLink: "https://www.yelp.com/biz/uncle-gussys-new-york"
    },
    {
      name: "Patacon Pisao",
      cuisine: "Venezuelan",
      image: "https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg",
      menuLink: "https://www.pataconpisaonyc.com/"
    }
  ]

  return (
    <div className="App">
      <h1>Food Truck Favorites</h1>
      <div className="card-grid">
        {trucks.map((truck, index) => (
          <Card key={index} name={truck.name} cuisine={truck.cuisine} image={truck.image} menuLink={truck.menuLink} />
        ))}
      </div>
    </div>
  )
}

export default App