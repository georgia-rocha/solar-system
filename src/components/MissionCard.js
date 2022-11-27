import React from 'react';
import PropTypes from 'prop-types';
import ano from '../ano.png';
import destino from '../destino.png';
import local from '../local.png';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name">{name}</p>
        <hr />
        <div className="div-geral-infos">
          <div className="div-infos-missions">
            <div className="divs">
              <img src={ ano } alt="vector-ano" className="vector-ano" />
              <p data-testid="mission-year">{ year }</p>
            </div>
            <div className="divs">
              <img src={ local } alt="vector-local" className="vector-local" />
              <p data-testid="mission-country">{ country }</p>
            </div>
            <div className="div-destination">
              <img src={ destino } alt="vector-destino" className="vector-destino" />
              <p data-testid="mission-destination">{ destination }</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
