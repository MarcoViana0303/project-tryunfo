import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>

          <label htmlFor="name-input">
            Descrição da Carta
            <p>
              <input type="text" data-testid="name-input" id="name-input" />
            </p>
          </label>

          <label htmlFor="description-input">
            <p>
              <textarea data-testid="description-input" id="description-input" />
            </p>

          </label>

          <label htmlFor="attr1-input">
            <p><input type="number" data-testid="attr1-input" id="attr1-input" /></p>

          </label>

          <label htmlFor="attr2-input">
            <p>
              <input type="number" data-testid="attr2-input" id="attr2-input" />
            </p>
          </label>

          <label htmlFor="attr3-input">
            <p><input type="number" data-testid="attr3-input" id="attr3-input" /></p>

          </label>

          <label htmlFor="image-input">
            <p><input type="text" data-testid="image-input" id="image-input" /></p>

          </label>

          <label htmlFor="rare-input">
            <p />
            <select data-testid="rare-input" id="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            <input type="checkbox" data-testid="trunfo-input" id="trunfo-input" />
          </label>

          <p>
            <button
              type="button"
              data-testid="save-button"
              id="save-button"
            >
              Salvar
            </button>
          </p>

        </form>
      </div>
    );
  }
}
