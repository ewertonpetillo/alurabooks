import './estilos.css'
import logo from '../../images/logo.svg'

function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='logo' className = 'logo-image'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo