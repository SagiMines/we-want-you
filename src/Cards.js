import Card from 'react-bootstrap/Card';
import './Cards.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

function Cards(props) {
  const handleClick = () => {
    props.onClick(props.id);
  };
  return (
    <Card>
      <Card.Img src={props.avatar} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <section className="card-score">
          <FontAwesomeIcon onClick={handleClick} icon={faArrowCircleUp} />
          <span className="score">{props.score}</span>
        </section>
        <Card.Text>
          Last updated <span className="date">{props.lastUpdate}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
