import acordeon from './../assets/images/instruments/acordeon.png'
import bajo from './../assets/images/instruments/bajo.png'
import bateria from './../assets/images/instruments/bateria.png'
import guitarraElectrica from './../assets/images/instruments/guitarra-electrica.png'
import guitarra from './../assets/images/instruments/guitarra.png'
import microfono from './../assets/images/instruments/karaoke.png'
import pandereta from './../assets/images/instruments/pandereta.png'
import teclado from './../assets/images/instruments/piano-electrico.png'
import saxofon from './../assets/images/instruments/saxofon.png'
import trompeta from './../assets/images/instruments/trompeta.png'
import violin from './../assets/images/instruments/violin.png'

export const getInstruments = (instruments) => {
    switch (instruments) {
        case "Acordeón":
            return <img className='instrumentsImg' src={acordeon} alt="" />

        case "Bajo":
            return <img className='instrumentsImg' src={bajo} alt="" />

        case "Bateria":
            return <img className='instrumentsImg' src={bateria} alt="" />

        case "Guitarra eléctrica":
            return <img className='instrumentsImg' src={guitarraElectrica} alt="" />

        case "Cantante":
            return <img className='instrumentsImg' src={microfono} alt="" />

        case "Guitarra":
            return <img className='instrumentsImg' src={guitarra} alt="" />

        case "Percusión":
            return <img className='instrumentsImg' src={pandereta} alt="" />

        case "Teclado":
            return <img className='instrumentsImg' src={teclado} alt="" />

        case "Saxofón":
            return <img className='instrumentsImg' src={saxofon} alt="" />

        case "Trompeta":
            return <img className='instrumentsImg' src={trompeta} alt="" />

        case "Violín":
            return <img className='instrumentsImg' src={violin} alt="" />

    }


}

export const getUpdatedInstruments = (checked, value, instruments) => {

    const instrumentsCopy = [...instruments];

    if (checked) {
        instrumentsCopy.push(value);
    } else {
        const index = instrumentsCopy.indexOf(value);
        if (index !== -1) {
            instrumentsCopy.splice(index, 1);
        }
    }

    return instrumentsCopy
}