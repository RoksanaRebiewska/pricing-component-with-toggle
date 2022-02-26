import './Pricing.css';

const Pricing = (props) => {
  return (
    <>
      <header>
        <h1>Our Pricing</h1>
      </header>
      <section className="section__input">
        <p>Annually</p>
        <input type="checkbox" id="switch" onClick={props.onClickHandler} />
        <label htmlFor="switch" />
        <p>Monthly</p>
      </section>
    </>
  );
};

export default Pricing;
