const SingleMenu = ({ title, price, img, desc }) => {
  return (
    <div className="singleMenu">
      <img src={img} alt={title} />
      <span className="title">
        <h2>{title}</h2>
        <h3>$ {price}</h3>
      </span>
      <p>{desc}</p>
    </div>
  );
};

export default SingleMenu;
