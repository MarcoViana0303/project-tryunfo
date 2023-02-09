import React from 'react';
import PropTypes from 'prop-types';

export default class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className='card'>
        <div className="card2">

        <section data-testid="name-card">
          {cardName}
        </section>

        <img src={ cardImage } alt={ cardName } data-testid="image-card" />

        <section data-testid="description-card">
          {cardDescription}
        </section>

        <section data-testid="attr1-card">
          {cardAttr1}
        </section>

        <section data-testid="attr2-card">
          {cardAttr2}
        </section>

        <section data-testid="attr3-card">
          {cardAttr3}
        </section>

        <section data-testid="rare-card">
          {cardRare}
        </section>

        {cardTrunfo && (
          <section data-testid="trunfo-card">
            Super Trunfo
          </section>
        )}
        </div>

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
