import { useState, useRef, useEffect } from 'react';
import getTheUsers from './getTheUsers';
import PageStructure from './PageStructure';
import waves from 'nice-waves';
import './App.css';

function App() {
  //waves background
  const wavesReference = useRef();
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
  useEffect(() => {
    waves(opts).mount(wavesReference.current);
  }, []);

  //Sort the users by score
  const order = (a, b) => {
    return b.score - a.score;
  };
  //Get the initial user's data
  const [users, setUsers] = useState(getTheUsers().sort(order));
  //Handle score click
  const handleClick = id => {
    const foundUser = users.find(user => user.id === id);
    foundUser.score += 1;
    foundUser.lastUpdate = new Date().toLocaleString();
    users.sort(order);
    setUsers([...users]);
  };
  return (
    <>
      <PageStructure
        imageUrl="weneedyou.jpg"
        users={users}
        onClick={handleClick}
      />
      <div id="waves" ref={wavesReference}></div>
    </>
  );
}

export default App;
