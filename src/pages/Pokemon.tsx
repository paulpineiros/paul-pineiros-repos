import React from 'react';
import { useParams} from 'react-router-dom';

interface PokemonProps {
    
}

const Pokemon: React.FC<PokemonProps> = () => {
    const { name } = useParams();
    return (
        <div>
            {name}
        </div>
    );
};

export default Pokemon;