import { useState } from 'react';

import Pricing from './components/Pricing';
import PlansBox from './components/PlansBox';

function App() {
  const [monthly, setMonthly] = useState(true);

  const switchHandler = () => {
    setMonthly((prevState) => !prevState);
  };

  return (
    <div className="App">
      <Pricing onClickHandler={switchHandler} />
      <PlansBox monthly={monthly} />
    </div>
  );
}

export default App;
