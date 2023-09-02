import { Col, Button, Form } from "react-bootstrap";
import { getInstruments } from "../../utils/instruments.util";
import { Link, useNavigate } from "react-router-dom";
import FriendsAvatar from "../FriendsAvatar/FriendsAvatar.util";
import userservice from "../../services/user.service";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth.context";

const UserDetails = ({ userInformation }) => {
  const { loggedUser, logout } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    userservice
      .deleteUser(loggedUser._id)
      .then(() => logout())
      .catch((err) => console.log(err));
  };

  return (
    <Col
      md={{ offset: 3, span: 6 }}
      className="userCard"
      style={{ border: "2px solid black" }}
    >
      <h1>Perfil de {userInformation.username} </h1>

      <hr />
      <img className="userAvatar" src={userInformation.avatar} alt="" />

      <h2>{userInformation.email}</h2>

      <h2>Descripción: {userInformation.description}</h2>
      <h2>Instrumentos:</h2>

      {userInformation.instruments.map((elm) => getInstruments(elm))}
      <h2>Amigos:</h2>

      {userInformation.friends.map((elm) => (
        <FriendsAvatar friendId={elm} />
      ))}

      <hr />
      <Link to={`/user/edit/${userInformation.id}`}>
        <Button variant="outline-success">Editar</Button>{" "}
      </Link>
      <Form onSubmit={handleFormSubmit}>
        <Button variant="outline-danger" type="submit">
          Eliminar
        </Button>{" "}
      </Form>
    </Col>
  );
};

export default UserDetails;
