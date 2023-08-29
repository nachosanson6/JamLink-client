import { Col } from "react-bootstrap"
import { getInstruments } from "../../utils/instruments.util"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import SpinnerComponent from "../Spinner/Spinner"
import userservice from "../../services/user.service"


const UserCard = () => {
    const { loggedUser } = useContext(AuthContext)

    const [userInformation, setUserInformation] = useState(null)

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = () => {
        userservice
            .getUserDetails(loggedUser._id)
            .then(({ data }) => setUserInformation(data))
            .catch(err => console.log(err))
    }

    if (!userInformation) {
        return (
            <SpinnerComponent />
        );
    }


    return (
        <Col md={{ offset: 3, span: 6 }} className='userCard'>

            <h1>Perfil de {userInformation.username} </h1>

            <hr />
            <img src={userInformation.avatar} alt="" />

            <h2>{userInformation.description}</h2>

            {
                userInformation.instruments.map(elm => getInstruments(elm))
            }

        </Col>

    )
}

export default UserCard