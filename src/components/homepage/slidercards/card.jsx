const Card = ({ handlePointerEvent, name, img, cardStyle }) => {
    return (
      <article className={cardStyle}>
        <div
          className="card"
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <img src={img} alt={name} />

        </div>
        <div className="nombre">
          <h2>{name}</h2>
        </div>
      </article>
    );
  };
  
  export default Card;
  