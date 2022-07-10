import { useState } from 'react';
import getTheUsers from './getTheUsers';
import PageStructure from './PageStructure';

function App() {
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
