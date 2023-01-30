import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    //Ref created
    this.textInput = React.createRef();
    this.state = {
      value: ''
    }
  }

handleSubmit = e => {
  e.preventDefault();
  this.setState({ value: this.textInput.current.value})
};

render() {
  return (
    <div>
      <h1>React Ref - createRef</h1>
      <h3>User Entered : {this.state.value}</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" data-testid="refText" ref={this.textInput} />
        <button data-testid="refBtn">Submit</button>
      </form>
    </div>
  );
}
}

export default App;