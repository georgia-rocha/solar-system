import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="div-hr">
          <hr className="hr" />
          <ul className="ul-planet">
            { planets.map((planeta) => (<PlanetCard
              key={ planeta.name }
              planetName={ planeta.name }
              planetImage={ planeta.image }
            />))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
