import { useState } from 'react';
import getTheUsers from './getTheUsers';
import PageStructure from './PageStructure';
import waves from 'nice-waves';
import './App.css';

function App() {
  //waves background
  const opts = {
    fills: ['rgba(29, 169, 30, 0.65)', 'rgba(75, 187, 91, 0.5)'],
    flowRate: 5,
    swayRate: 2.95,
    wavelength: 10,
    curviness: 0.57,
    randomHeight: 0.42,
    randomSwayRate: 0.31,
    randomOffset: 0.51,
  };

  waves(opts).mount();
  //Sort the users by score
  const order = (a, b) => {
    return b.score - a.score;
  };
  //Get the initial user's data
  const [users, setUsers] = useState(getTheUsers().sort(order));
  const handleClick = name => {
    let temp = users;
    for (const user of temp) {
      if (user.name === name) {
        user.score += 1;
        user.lastUpdate = new Date().toLocaleString();
        break;
      }
    }
    temp.sort(order);
    setUsers([...temp]);
  };
  return (
    <>
      <PageStructure
        imageUrl="weneedyou.jpg"
        users={users}
        onClick={handleClick}
      />
    </>
  );
}

export default App;
