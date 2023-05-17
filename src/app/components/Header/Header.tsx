import './Header.css';
import { Props } from './Header.type';

const Header = (props: Props) => {
    const { handleSearchedName } = props;
    const handleSearched = (e: any)=>{
        e.preventDefault();
        handleSearchedName(e.target.name.value)
    }
    return (
        <header className='header'>
            <form onSubmit={handleSearched}>
            <input placeholder='Buscar Pokemon' type='text' name="name" />
            <button type='submit'>Buscar</button>
            </form>
        </header>
    );
};

export default Header;