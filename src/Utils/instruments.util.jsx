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

const instrumentsUtil = (instruments) => {
    switch (instruments) {
        case "Acordeón":
            return <img className='instrumentsImg' src={acordeon} alt="" />
            break
        case "Bajo":
            return <img className='instrumentsImg' src={bajo} alt="" />
            break
        case "Bateria":
            return <img className='instrumentsImg' src={bateria} alt="" />
            break
        case "Guitarra eléctrica":
            return <img className='instrumentsImg' src={guitarraElectrica} alt="" />
            break
        case "Cantante":
            return <img className='instrumentsImg' src={microfono} alt="" />
            break
        case "Guitarra":
            return <img className='instrumentsImg' src={guitarra} alt="" />
            break
        case "Pandereta":
            return <img className='instrumentsImg' src={pandereta} alt="" />
            break
        case "Teclado":
            return <img className='instrumentsImg' src={teclado} alt="" />
            break
        case "Saxofon":
            return <img className='instrumentsImg' src={saxofon} alt="" />
            break
        case "Trompeta":
            return <img className='instrumentsImg' src={trompeta} alt="" />
            break
        case "Violin":
            return <img className='instrumentsImg' src={violin} alt="" />
            break
    }

    return (
        <h1>hola</h1>
    )
}

export default instrumentsUtil