import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { connect } from "react-redux";
import { removeFromFavoAction } from "../redux/actions";
import SingleJob from "./SingleJob";
const mapDispatchToProps = (disapatch) => ({
  removeFromFavorites: (f) => {
    disapatch(removeFromFavoAction(f));
  },
});
const Favourites = ({ favourite, removeFromFavorites }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5">Favourite Companies</h1>
          <ListGroup className="mt-5">
            {favourite.favoCompany.map((f) => (
              <ListGroupItem>
                <AiFillHeart
                  color="red"
                  size={26}
                  className=" mr-3"
                  onClick={() => removeFromFavorites(f)}
                />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect((s) => s, mapDispatchToProps)(Favourites);
