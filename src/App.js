import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardTrunfo: false,
      cardImage: '',
      isSaveButtonDisabled: true,
      cardRare: 'normal',
      dados: [],
      hasTrunfo: false,
    };
  }

  zerarInput = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',

    });
  };

  onSaveButtonClick = (objeto) => {
    const { cardTrunfo } = this.state;
    this.setState((prevState) => ({
      dados: [...prevState.dados, objeto],
    }), this.zerarInput);

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  };

  validaBotao = () => {
    const { cardName, cardDescription, cardImage,
      cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const attr = 90;
    const min = 0;
    const limite = 210;
    const validaTeste = cardName.length > min
    && cardDescription.length > min
    && cardImage.length > min
    && cardRare.length > min
    && cardAttr1 >= min && cardAttr1 <= attr
    && cardAttr2 >= min && cardAttr2 <= attr
    && cardAttr3 >= min && cardAttr3 <= attr
    && soma <= limite;

    this.setState({
      isSaveButtonDisabled: !validaTeste,
    });
  };

  onInputChange = ({ target }) => {
    const { type, name } = target;
    const valor = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: valor,
    }, this.validaBotao);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardTrunfo, hasTrunfo,
      cardImage, isSaveButtonDisabled, cardRare, dados } = this.state;

    return (
      <div>
        <h1 className='title-cards'>Adicionar nova carta</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          cardImage={ cardImage }
        />
        {dados.map((element) => (
          <Card
            key={ element.cardImage }
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardTrunfo={ element.cardTrunfo }
            cardImage={ element.cardImage }
          />
        ))}
      </div>
    );
  }
}

export default App;
