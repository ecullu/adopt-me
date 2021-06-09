import { FunctionComponent} from 'react';

import Pet from "./Pet";
import { Pet as PetType } from './APIResponseTypes';

const Results: FunctionComponent<{pets: PetType[]}> = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map(({ name, animal, breed, images, id, city, state }) => (
          <Pet
            name={name}
            animal={animal}
            breed={breed}
            key={id}
            images={images}
            location={`${city}, ${state}`}
            id={id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
