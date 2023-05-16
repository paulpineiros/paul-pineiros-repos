import './Header.css';
import { Props } from './Header.type';

const Header = (props: Props) => {
    return (
        <header className='header'>
            <input placeholder='CNE' type='text' />
        </header>
    );
};

export default Header;