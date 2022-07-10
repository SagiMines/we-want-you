import Cards from './Cards';
import './DataStructure.css';
function PageStructure(props) {
  const users = props.users;
  return (
    <div className="container-fluid">
      <section className="image">
        <img src={props.imageUrl}></img>
      </section>

      <section className="user-cards">
        {users.map(user => (
          <Cards
            avatar={user.avatar}
            name={user.name}
            description={user.description}
            lastUpdate={user.lastUpdate}
            score={user.score}
            onClick={props.onClick}
          />
        ))}
      </section>
    </div>
  );
}

export default PageStructure;
