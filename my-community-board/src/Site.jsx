function Site({ name, location, date_of_inclusion, image, menuLink }) {
  return (
    <div className="site">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{date_of_inclusion}</p>

      <a href={menuLink} target="_blank" rel="noopener noreferrer">
        <button className="menu-button">Details</button>
      </a>

    </div>
  );
}

export default Site;