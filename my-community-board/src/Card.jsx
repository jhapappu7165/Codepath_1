function Card({ name, cuisine, image, menuLink }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{cuisine}</p>
      <a href={menuLink} target="_blank" rel="noopener noreferrer">
        <button className="menu-button">View Menu</button>
      </a>
    </div>
  );
}

export default Card;
