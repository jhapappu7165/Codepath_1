import './App.css'
import Site from './Site'

function App() {
  const sites = [
    {
      name: "Pashupatinath Temple",
      location: "Kathmandu",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/download.jfif?updatedAt=1749691098649",
      menuLink: "https://en.wikipedia.org/wiki/Pashupatinath_Temple"
    },
    {
      name: "Boudhanath Stupa",
      location: "Kathmandu",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/download%20(1).jfif?updatedAt=1749691329681",
      menuLink: "https://en.wikipedia.org/wiki/Boudhanath_Stupa"
    },
    {
      name: "Swayambhunath Stupa",
      location: "Kathmandu",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/download%20(2).jfif?updatedAt=1749691329575",
      menuLink: "https://en.wikipedia.org/wiki/Swayambhunath"
    },
    {
      name: "Kathmandu Durbar Square",
      location: "Kathmandu",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/download%20(3).jfif?updatedAt=1749691329820",
      menuLink: "https://en.wikipedia.org/wiki/Kathmandu_Durbar_Square"
    },
    {
      name: "Patan Durbar Square",
      location: "Lalitpur (Patan)",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/images.jfif?updatedAt=1749691329773",
      menuLink: "https://en.wikipedia.org/wiki/Patan_Durbar_Square"
    },
    {
      name: "Bhaktapur Durbar Square",
      location: "Bhaktapur",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/images.jfif?updatedAt=1749691329773",
      menuLink: "https://en.wikipedia.org/wiki/Bhaktapur_Durbar_Square"
    },
    {
      name: "Changu Narayan Temple",
      location: "Bhaktapur",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/changu-narayan.jpg?updatedAt=1749691330813",
      menuLink: "https://en.wikipedia.org/wiki/Changu_Narayan"
    },
    {
      name: "Lumbini (Birthplace of Buddha)",
      location: "Rupandehi District",
      date_of_inclusion: 1997,
      image: "https://ik.imagekit.io/oulavalfq/download%20(4).jfif?updatedAt=1749691329735",
      menuLink: "https://en.wikipedia.org/wiki/Lumbini"
    },
    {
      name: "Chitwan National Park",
      location: "Chitwan District",
      date_of_inclusion: 1984,
      image: "https://ik.imagekit.io/oulavalfq/download%20(5).jfif?updatedAt=1749691329828",
      menuLink: "https://en.wikipedia.org/wiki/Chitwan_National_Park"
    },
    {
      name: "Sagarmatha National Park",
      location: "Solukhumbu District",
      date_of_inclusion: 1979,
      image: "https://ik.imagekit.io/oulavalfq/images%20(1).jfif?updatedAt=1749691329611",
      menuLink: "https://en.wikipedia.org/wiki/Sagarmatha_National_Park"
    }
  ]

  return (
    <div className="App">
      <h1>World Heritage Sites in Nepal</h1>
      <div className="site-grid">
        {sites.map((site, index) => (
          <Site key={index} name={site.name} location={site.location} date_of_inclusion = {site.date_of_inclusion} image={site.image} menuLink={site.menuLink} />
        ))}
      </div>
    </div>
  )
}

export default App