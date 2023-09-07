import { Col, Button, Form, Row } from "react-bootstrap";
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

  const isCurrentUser = loggedUser._id === userInformation._id

  return (
    <Col
      md={{ offset: 3, span: 6 }}
      className="userCard"

    >
      <h1>Perfil de <strong>{userInformation.username}</strong> </h1>
      <Row>
        <Col md={7} >
          <hr />
          <img className="userAvatar" src={userInformation.avatar} alt="" />
        </Col>
        <Col md={5}>
          <h2 className="fs-5 mt-4"><strong>Email:</strong> {userInformation.email}</h2>

          <h2 className="fs-5 mt-4"><strong>Descripción:</strong> {userInformation.description}</h2>
        </Col>
      </Row>
      <h2 className="mt-4"><strong>Instrumentos:</strong></h2>
      <div className="instrumentsDiv" style={{ justifyContent: "space-between" }}>
        {userInformation.instruments.map((elm) => getInstruments(elm))}
      </div>
      <div>
        <Row className="mt-4">
          <h2><strong>Amigos:</strong></h2>

          {userInformation.friends.map((elm) => (
            <Col md={4} >
              <FriendsAvatar friendId={elm} />
            </Col>
          ))}

        </Row>
      </div>
      <hr />

      {(isCurrentUser || loggedUser.role === 'ADMIN') && (
        <>
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to={`/user/edit/${userInformation.id}`}>
              <Button variant="success">Editar</Button>{" "}
            </Link>
            <Form onSubmit={handleFormSubmit}>
              <Button variant="danger" type="submit">
                Eliminar
              </Button>{" "}
            </Form>
          </div>
        </>
      )}
    </Col>
  );
};

export default UserDetails;
