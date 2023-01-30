import React, { Component } from 'react';

class Arithmetic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstNumber: '',
            secondNumber: ''
        };

        this.handleFirstNumber = this.handleFirstNumber.bind(this);
        this.handleSecondNumber = this.handleSecondNumber.bind(this);
    }


    handleFirstNumber(event) {
        this.setState({ firstNumber: event.target.value });
    }

    handleSecondNumber(event) {
        this.setState({ secondNumber: event.target.value });
    }

    handleAdd(){
        const { firstNumber, secondNumber } = this.state;
        this.displayResult(parseInt(firstNumber) + parseInt(secondNumber))
    }

    handleSubtract(){
        const { firstNumber, secondNumber } = this.state;
        this.displayResult(parseInt(firstNumber) - parseInt(secondNumber))

    }

    displayResult(result){
        alert(result);
    }

    render() {
        const { firstNumber, secondNumber } = this.state;
        const { operator } = this.props;
        return (
            <form className='form-group'>
                <fieldset className='form-group'>
                    <label className='form-label'>
                        First Number:
                    </label>
                    <input type="text" id="number1" className='form-input' value={firstNumber} onChange={this.handleFirstNumber}/>
                </fieldset>
                <fieldset className='form-group'>
                    <label className='form-label'>
                        Second Number:
                    </label>
                    <input type="text" id="number2" className='form-input' value={secondNumber} onChange={this.handleSecondNumber}/>
                </fieldset>
                <div className='form-group'>
                    {operator === '+' &&
                    <button data-testid='formButtonAdd' className='btn' type="button" onClick={() => this.handleAdd()}>Add</button>
                    }
                    {operator === '-' &&
                    <button data-testid='formButtonSubtract' className='btn' type="button" onClick={() => this.handleSubtract()}>Subtract</button>
                    }
                </div>
            </form>
        );
    }

}

export default Arithmetic;