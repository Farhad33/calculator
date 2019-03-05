import React, { Component } from 'react';
import styled from 'styled-components'

class Calculator extends Component {

  state = {
    first: '',
    second: '',
    sign: '',
    result: ''
  }

  numberOnClick = (num) => {
    const { first, second, sign } = this.state
    if (sign === '') {
      this.setState({
        first: first + num,
        result: first + num
      })
    } else {
      this.setState({
        second: second + num,
        result: second + num
      })
    }
  }

  signOnClick = (sign) => {
    this.setState({ sign: sign })
  }

  equalOnClick = () => {
    const { first, second, sign } = this.state
    let firstNum = Number(first)
    let secondNum = Number(second)
    switch (sign) {
      case '+':
        this.setState({
          first: firstNum + secondNum,
          result: firstNum + secondNum,
          second: ''
        })
        break;
      case '-':
        this.setState({
          first: firstNum - secondNum,
          result: firstNum - secondNum,
          second: ''
        })
        break;
      case '/':
        this.setState({
          first: firstNum / secondNum,
          result: firstNum / secondNum,
          second: ''
        })
        break;
      case 'X':
        this.setState({
          first: firstNum * secondNum,
          result: firstNum * secondNum,
          second: ''
        })
        break;
      default:
        break;
    }
  }

  clearOnClick = () => {
    this.setState({
      first: '',
      second: '',
      sign: '',
      result: ''
    })
  }

  render() {
    console.log('this.state => ', this.state)
    return (
      <Container>
        <Input
          type='text'
          defaultValue={ this.state.result }
          placeholder='0'
        />
        <Button
          onClick={ () => this.numberOnClick('9') }
          grid={ 'nine' }
        >9</Button>
        <Button
          onClick={ () => this.numberOnClick('8') }
          grid={ 'eight' }
        >8</Button>
        <Button
          onClick={ () => this.numberOnClick('7') }
          grid={ 'seven' }
        >7</Button>
        <Button
          onClick={ () => this.numberOnClick('6') }
          grid={ 'six' }
        >6</Button>
        <Button
          onClick={ () => this.numberOnClick('5') }
          grid={ 'five' }
        >5</Button>
        <Button
          onClick={ () => this.numberOnClick('4') }
          grid={ 'four' }
        >4</Button>
        <Button
          onClick={ () => this.numberOnClick('3') }
          grid={ 'three' }
        >3</Button>
        <Button
          onClick={ () => this.numberOnClick('2') }
          grid={ 'two' }
        >2</Button>
        <Button
          onClick={ () => this.numberOnClick('1') }
          grid={ 'one' }
        >1</Button>
        <Button
          onClick={ () => this.numberOnClick('0') }
          grid={ 'zero' }
        >0</Button>
        <Button
          onClick={ () => this.numberOnClick('.') }
          grid={ 'decimal' }
        >.</Button>
        <Button
          onClick={ () => this.signOnClick('+') }
          grid={ 'plus' }
        >+</Button>
        <Button
          onClick={ () => this.signOnClick('-') }
          grid={ 'subtraction' }
        >-</Button>
        <Button
          onClick={ () => this.signOnClick('/') }
          grid={ 'division' }
        >/</Button>
        <Button
          onClick={ () => this.signOnClick('X') }
          grid={ 'times' }
        >X</Button>
        <Button
          onClick={ this.equalOnClick }
          grid={ 'equal' }
        >=</Button>
        <Button
          onClick={ this.clearOnClick }
          grid={ 'clear' }
        >AC</Button>
      </Container>
    );
  }
}

const Input = styled.input`
  padding: 10px;
  grid-area: input;
`

const Button = styled.button`
  padding: 10px 15px;
  grid-area: ${({ grid }) => grid };
`

const Container = styled.div`
  display: grid;
  width: 400px;
  margin: 50px auto;
  grid-template-areas:
  'input input input input'
  'clear clear clear division'
  'seven eight nine times'
  'four five six subtraction'
  'one two three plus'
  'zero zero decimal equal';
  grid-gap: 10px;
`


export default Calculator;