import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <li>
        <div data-testid="planet-card" className="planet-card">
          <img
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
            className={ planetName }
          />
          <p data-testid="planet-name">{ planetName }</p>
        </div>
      </li>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
