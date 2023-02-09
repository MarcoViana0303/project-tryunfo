import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick, hasTrunfo } = this.props;

    return (
      <div className='div-form'>
      <div className='div-cards'>
        <form>

        <div className="div-desc-name">

        <label htmlFor="name-input">
            <p>Nome</p>

            <p />
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              id="name-input"
              value={ cardName }
              onChange={ onInputChange }
              className= 'input-effect'
            />
          </label>
          <label htmlFor="description-input">
           <p>Descrição</p>
            <p />
            <input
              type="textarea"
              name="cardDescription"
              data-testid="description-input"
              id="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              className= 'input-effect'
            />

          </label>
        </div>
         

          <div className='div-attr'>

          <label htmlFor="attr1-input">
              <p>Attr01</p>
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              className= 'effect-attr'
            />

          </label>
          <br />
          <br />

          <label htmlFor="attr2-input">
          <p>Attr02</p>
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              className= 'effect-attr'
            />
          </label>
          <br />
          <br />

          <label htmlFor="attr3-input">
          <p>Attr03</p>
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              className= 'effect-attr'
            />

          </label>
          </div>
         
          <br />
          <br />

          <label htmlFor="image-input">
             <p>Imagem</p>
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              id="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              className= 'input-effect'
            />

          </label>
          <br />
          <br />

          <label htmlFor="rare-input">
             <p>Raridade</p>
            <p />
            <select
              data-testid="rare-input"
              id="rare-input"
              name="cardRare"
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
          {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <label htmlFor="trunfo-input">
              <input
                type="checkbox"
                name="cardTrunfo"
                data-testid="trunfo-input"
                id="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              <p>Super Trunfo Trybe</p>
            </label>
          )}

          <br />
          <br />
          <div className='button-div'>

          <button
            type="button"
            data-testid="save-button"
            id="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            }) }
          >
            Salvar
          </button>

          </div>
          
        </form>
      </div>
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
