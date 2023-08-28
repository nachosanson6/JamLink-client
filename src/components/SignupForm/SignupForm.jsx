import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import authService from "./../../services/auth.services";
import uploadServices from "../../services/upload.services";
import { useNavigate } from "react-router-dom"
// import InstrumentsForm from "../InstrumentsForm/InstrumentsForm";

const SignupForm = () => {

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

        authService
            .signup(signupData)
            .then(() => navigate('/login'))
            .catch(err => console.log(err))

    }

    const handleInstrumentChange = (e) => {
        const { checked, value } = e.target;

        // Copia el array actual de instrumentos del estado
        const updatedInstruments = [...signupData.instruments];

        if (checked) {
            // Si la casilla está marcada, agrega el instrumento al array
            updatedInstruments.push(value);
        } else {
            // Si la casilla está desmarcada, quita el instrumento del array
            const index = updatedInstruments.indexOf(value);
            if (index !== -1) {
                updatedInstruments.splice(index, 1);
            }
        }
        // Actualiza el estado con el nuevo array de instrumentos
        setSignupData({ ...signupData, instruments: updatedInstruments });
    };

    const handleFileUpload = (e) => {
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignupData({ ...signupData, avatar: res.data.cloudinary_url })
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

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            {/* <InstrumentsForm /> */}

            {
                ['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3 ">
                        <Form.Check
                            inline
                            label="Cantante"
                            type={type}
                            id={`inline-${type}-1`}
                            value='Cantante'
                            checked={signupData.instruments.includes('Cantante')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Guitarra"
                            type={type}
                            id={`inline-${type}-2`}
                            value='Guitarra'
                            checked={signupData.instruments.includes('Guitarra')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Guitarra eléctrica"
                            type={type}
                            id={`inline-${type}-3`}
                            value='Guitarra eléctrica'
                            checked={signupData.instruments.includes('Guitarra eléctrica')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Bajo"
                            type={type}
                            id={`inline-${type}-4`}
                            value='Bajo'
                            checked={signupData.instruments.includes('Bajo')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Batería"
                            type={type}
                            id={`inline-${type}-5`}
                            value='Bateria'
                            checked={signupData.instruments.includes('Bateria')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Teclado"
                            type={type}
                            id={`inline-${type}-6`}
                            value='Teclado'
                            checked={signupData.instruments.includes('Teclado')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Saxofón"
                            type={type}
                            id={`inline-${type}-7`}
                            value='Saxofón'
                            checked={signupData.instruments.includes('Saxofón')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Percusión"
                            type={type}
                            id={`inline-${type}-8`}
                            value='Percusión'
                            checked={signupData.instruments.includes('Percusión')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Acordeón"
                            type={type}
                            id={`inline-${type}-9`}
                            value='Acordeón'
                            checked={signupData.instruments.includes('Acordeón')}
                            onChange={handleInstrumentChange}
                        />
                        <Form.Check
                            inline
                            label="Violín"
                            type={type}
                            id={`inline-${type}-10`}
                            value='Violín'
                            checked={signupData.instruments.includes('Violín')}
                            onChange={handleInstrumentChange}
                        />
                    </div>
                ))
            }
            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción </Form.Label>
                <Form.Control type="text" value={signupData.description} onChange={handleInputChange} name="description" />

            </Form.Group>

            <Button variant="primary" type="submit">
                Resgistrase
            </Button>
        </Form>
    )
}

export default SignupForm