import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "./../../services/auth.services";
import uploadServices from "../../services/upload.services";
import { useNavigate } from "react-router-dom"
import { getUpdatedInstruments } from "../../utils/instruments.util";
import { AuthContext } from "../../contexts/auth.context";
import userservice from "../../services/user.service";
import InstrumentsForm from "../InstrumentsForm/InstrumentsForm";


// import InstrumentsForm from "../InstrumentsForm/InstrumentsForm";

const SignupForm = () => {

    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        if (loggedUser) {
            userservice
                .getUserDetails(loggedUser._id)
                .then(({ data }) => setSignupData(data))
                .catch(err => console.log(err));
        }
    }, [loggedUser]);

    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
        avatar: "",
        instruments: [],
        description: ""
    })


    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const action = loggedUser ? userservice.updateUser(loggedUser._id, signupData) : authService.signup(signupData)
        const path = loggedUser ? `/user/profile/${signupData._id}` : '/'

        action
            .then(() => navigate(path))
            .catch(err => console.log(err))
    }

    const handleFileUpload = (e) => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de usuario </Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>
            {
                !loggedUser &&
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
                </Form.Group>
            }
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <InstrumentsForm signupData={signupData} setSignupData={setSignupData} />

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción </Form.Label>
                <Form.Control type="text" value={signupData.description} onChange={handleInputChange} name="description" />
            </Form.Group>
            {
                !loggedUser &&
                <Button variant="dark" type="submit">
                    Resgistrase
                </Button>
            }
            {
                loggedUser &&
                <Button variant="dark" type="submit">
                    Actualizar
                </Button>
            }
        </Form>
    )
}

export default SignupForm