import { Form } from "react-bootstrap";
import { getUpdatedInstruments } from "../../utils/instruments.util";


const InstrumentsForm = ({ signupData, setSignupData }) => {

    const handleInstrumentChange = (e) => {
        const { checked, value } = e.target
        const instruments = getUpdatedInstruments(checked, value, signupData.instruments)

        setSignupData({ ...signupData, instruments });
    };

    return (


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
                <Form.Check
                    inline
                    label="Trompeta"
                    type={type}
                    id={`inline-${type}-11`}
                    value='Trompeta'
                    checked={signupData.instruments.includes('Trompeta')}
                    onChange={handleInstrumentChange}
                />
            </div>
        ))
    )
}

export default InstrumentsForm