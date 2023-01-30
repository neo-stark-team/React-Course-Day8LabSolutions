import React from 'react';
//set default props in React
class CustomText extends React.Component {
  render() {
    return (
      <label data-testid='label1' style={{color: this.props.color}}>Sample Label Text</label>
    );
  }
}

// default value for props as red
CustomText.defaultProps = {
  color: 'red'
};


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Check defaultProps</h1>
        <CustomText /> {/* props.color will be set to default red */}
        <CustomText color="blue"/> {/* props.color set to blue */}
        <CustomText color="green"/> {/* props.color set to green */}
        <CustomText /> {/* props.color will be set to default red */}
      </div>
    );
  }
}