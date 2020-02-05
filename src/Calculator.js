import React from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num1:0,
            num2:0,
            result:0
        }
    }
    render(){

        return (<React.Fragment>
            <h1>Calculator!!</h1>
            <input type="number" value={this.state.num1} onChange={(event)=> {this._updateNumber('num1',event.target.value)}} />
            <input type="number" value={this.state.num2} onChange={(event)=> {this._updateNumber('num2',event.target.value)}} />
            <br /><br />
            <button onClick={this._add}>+</button>
            <button onClick={this._subract}>-</button>
            <button onClick={this._mult}>*</button>
            <button onClick={this._divide}>/</button>
            <h1>{this.state.result}</h1>
            <button onClick={this._clearNums}>Reset</button>
            <br />
        
        </React.Fragment>)
    }

    _updateNumber = (key, newNumber) => {
        this.setState({
            [key]:parseInt(newNumber)
        })
    };

    _add = () => {
        let result = this.state.num1 + this.state.num2;
        this.setState({result});};
    _subract = () => {
        let result = this.state.num1 - this.state.num2;
        this.setState({result});};
    _mult = () => {
        let result = this.state.num1 * this.state.num2;
        this.setState({result});};
    _divide = () => {
        let result = this.state.num1 / this.state.num2;
        this.setState({result});};
    _clearNums = () => {
        this.setState({num1:0,num2:0});};
}

export default Calculator;