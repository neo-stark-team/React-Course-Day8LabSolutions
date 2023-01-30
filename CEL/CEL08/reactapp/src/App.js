import * as React from 'react';

const App = () => (
  <div>
    <h1>US Dollar to Euro :</h1>
    <Amount toCurrency={(amount) => <Euro amount={amount} />} />

    <h1>US Dollar to INR :</h1>
    <Amount toCurrency={(amount) => <INR amount={amount} />} />
  </div>
);

const Amount = ({ toCurrency }) => {
  const [amount, setAmount] = React.useState(0);

  const handleIncrement = () => setAmount(amount + 1);
  const handleDecrement = () => setAmount(amount - 1);

  return (
    <div>
      <button type="button" data-testid="plus" onClick={handleIncrement}>
        +
      </button>
      <button type="button" data-testid="minus" onClick={handleDecrement}>
        -
      </button>

      <p>US Dollar: {amount}</p>
      {toCurrency(amount)}
    </div>
  );
};

const Euro = ({ amount }) => <p>Euro: {amount * 0.92}</p>;

const INR = ({ amount }) => <p>INR: {amount * 81.63}</p>;

export default App;