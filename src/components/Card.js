import './Card.css';

const Card = (props) => {
  const classes = props.main ? 'card main' : 'card';

  return (
    <div className={classes}>
      <h2>{props.plan}</h2>
      <h3>
        <span>$</span>
        {props.price}
      </h3>
      <p>{props.storage} Storage</p>
      <p>{props.users} Users Allowed</p>
      <p>Send up to {props.sendup} GB</p>
      <button onClick={props.onButtonClick} onMouseLeave={props.onButtonLeave}>
        Learn more
      </button>
      <p id="tooltip">{props.details}</p>
    </div>
  );
};

export default Card;
