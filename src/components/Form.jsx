import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
      // hasTrunfo
    return (
      <div>
        <form>

          <label htmlFor="name-input">
            Nome
            <p />
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição
            <p />
            <input
              type="textarea"
              name="cardDescription"
              data-testid="description-input"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />

          </label>

          <label htmlFor="attr1-input">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />

          </label>
          <br />
          <br />

          <label htmlFor="attr2-input">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <br />

          <label htmlFor="attr3-input">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />

          </label>
          <br />
          <br />

          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />

          </label>
          <br />
          <br />

          <label htmlFor="rare-input">
            Raridade
            <p />
            <select
              data-testid="rare-input"
              id="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <br />
          <br />

          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              id="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo Trybe
          </label>

          <br />
          <br />
          <button
            type="button"
            data-testid="save-button"
            id="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
