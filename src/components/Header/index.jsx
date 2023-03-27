import { Container } from './style'
import logo  from '../../asserts/logo-vans-4096.png'
import {BsSearch, BsBag} from 'react-icons/bs'
const Header = () => {
    return(
        <Container>
            <img src={logo} alt="Vans Logo" />
            <div>
                <BsSearch size={25} color='black'/>
                <BsBag size={25} color='black'/>
            </div>
        </Container>
    )
}

export default Header