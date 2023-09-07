import { Card, Button, Col, Form } from "react-bootstrap";
import { getInstruments } from "../../utils/instruments.util";
import "./../UserCard/UserCard.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import userservice from "../../services/user.service";
import { AuthContext } from "../../contexts/auth.context";

const UserCard = ({ _id, username, avatar, instruments, loadUsers }) => {
  const { loggedUser } = useContext(AuthContext);
  const [isFriend, setIsFriend] = useState(false);

  const handleAddFriend = (e) => {
    e.preventDefault();

    userservice
      .updateFriend(loggedUser._id, { _id }).then(() => loadUsers());
  };

  const handleDeleteFriend = (e) => {
    e.preventDefault();

    userservice.deleteFriend(loggedUser._id, { _id }).then(() => loadUsers());
  };

  useEffect(() => {
    userservice
      .getUserDetails(loggedUser._id)
      .then(({ data }) => {
        if (data.friends.includes(_id)) {
          setIsFriend(true);
        } else {
          setIsFriend(false);
        }
      })
      .catch((err) => console.log(err));
  });

  return (
    <Col lg={{ span: 3 }} md={{ span: 6 }}>
      <Card className="custom-card" style={{ border: "2px solid black" }}>
        <Card.Img variant="top" className="userImg" src={avatar} />
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text>{instruments.map((elm) => getInstruments(elm))}</Card.Text>
          <Link className="btn btn-outline-dark" to={`/user/profile/${_id}`}>
            Detalles
          </Link>
          {isFriend ? (
            <Form onSubmit={handleDeleteFriend}>
              <Button variant="outline-danger" type="submit">
                Eliminar amigo
              </Button>{" "}
            </Form>
          ) : (
            <Form onSubmit={handleAddFriend}>
              <Button variant="outline-success" type="submit">
                Añadir como amigo
              </Button>{" "}
            </Form>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserCard;
