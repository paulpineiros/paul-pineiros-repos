import './Header.css';
import { Props } from './Header.type';

const Header = (props: Props) => {
    return (
        <header className='header'>
            <input placeholder='Buscar un Pokemon' type='text' />
        </header>
    );
};

export default Header;