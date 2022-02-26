import './PlansBox.css';
import Card from './Card';

const data = [
  {
    plan: 'Basic',
    storage: '500 GB',
    users: '2',
    sendup: '3',
    price: {
      monthly: 19.99,
      annually: 199.99,
    },
    main: false,
    details:
      'The best for the start. Choose this solution if you do not plan big projects and cooperation in big team.',
  },
  {
    plan: 'Proffesional',
    storage: '1 TB',
    users: '5',
    sendup: '10',
    price: {
      monthly: 24.99,
      annually: 249.99,
    },
    main: true,
    details:
      'Most recommended solution, most optimal. Choose this solution if you will cooperate in bigger team and plan regular updates.',
  },
  {
    plan: 'Master',
    storage: '2 TB',
    users: '10',
    sendup: '20',
    price: {
      monthly: 39.99,
      annually: 399.99,
    },
    main: false,
    details:
      'Useful for bigger projects. Choose this solution if you work with bigger organization and need more space.',
  },
];

const PlansBox = (props) => {
  const onButtonClickHandler = (event) => {
    if (window.outerWidth < 992) {
      event.target.closest('div').classList.toggle('visible');
      setTimeout(() => {
        event.target.closest('div').classList.remove('visible');
      }, 8000);
      return;
    }
    event.target.closest('div').classList.toggle('visible');
  };

  const onButtonLeaveHandler = (event) => {
    event.target.closest('div').classList.remove('visible');
  };

  return (
    <section className="plans-box" period={props.monthly}>
      {data.map((item) => (
        <Card
          key={item.plan}
          plan={item.plan}
          price={props.monthly ? item.price.monthly : item.price.annually}
          storage={item.storage}
          users={item.users}
          sendup={item.sendup}
          key={item.plan}
          main={item.main}
          details={item.details}
          onButtonClick={onButtonClickHandler}
          onButtonLeave={onButtonLeaveHandler}
        />
      ))}
    </section>
  );
};

export default PlansBox;
