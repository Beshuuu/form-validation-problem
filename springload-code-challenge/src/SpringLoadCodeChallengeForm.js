import './App.css';
import React, { Component } from 'react';
import { validateEmail, validatePassword, validateField } from './FormValidation.js';

class SpringLoadCodeChallengeForm extends Component {
  state = {
    email: null,
    password: null,
    colour: null,
    animals: null,
    tigerType: null
  };

  onChangeEmail = email => {
    this.setState({ email });
  };

  onChangePassword = password => {
    this.setState({ password });
  };

  onChangeColour = colour => {
    this.setState({ colour });
  };

  onChangeTigerType = tigerType => {
    this.setState({ tigerType });
  };

  onChangeAnimals = value => {
    let clonedAnimals = this.state.animals === null ? [] : this.state.animals;
    const hasAnimalBeenSelected = clonedAnimals.some(animal => animal === value);
    if (hasAnimalBeenSelected) {
      const animals = clonedAnimals.filter(animal => animal !== value);
      return this.setState({ animals });
    }
    clonedAnimals.push(value);
    this.setState({ animals: clonedAnimals });
  };

  render() {
    const { password, colour, email, animals, tigerType } = this.state;
    const isTigerSelected = animals !== null && this.state.animals.some(animal => animal === 'tiger');

    // Have prioritized core logic - next step would be to add error messages
    return (
        <form>
          <h1>Contact form</h1>
          <fieldset>
            <h3>Your details</h3>
            <p className={validateEmail(email) ? '' : 'error'}>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input
                type='text'
                id='email'
                name='email'
                onChange={e => { this.onChangeEmail(e.target.value) }}
              />
            </p>
            <p className={validatePassword(password) ? '' : 'error'}>
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                onChange={e => { this.onChangePassword(e.target.value) }}
              />
            </p>
          </fieldset>

          <fieldset>
            <h3>Your animal</h3>

            <p className={validateField(colour) ? '' : 'error'}>
              <label className='label' htmlFor='colour'>
                Colour
              </label>
              <select name='colour' id='colour' onChange={e => { this.onChangeColour(e.target.value) } }>
                <option value=''>Choose colour</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
                <option value='black'>Black</option>
                <option value='brown'>Brown</option>
              </select>
            </p>

            <p>
              <span className="label">
                Animal
              </span>
              <input type='checkbox' name='animal' value='bear' id='bear' onChange={e => this.onChangeAnimals(e.target.value)} />
              <label htmlFor='bear'>
                Bear
              </label>
              <input type='checkbox' name='animal' value='tiger' id='tiger' onChange={e => this.onChangeAnimals(e.target.value)} />
              <label htmlFor='tiger'>
                Tiger
              </label>
              <input type='checkbox' name='animal' value='snake' id='snake' onChange={e => this.onChangeAnimals(e.target.value)} />
              <label htmlFor='snake'>
                Snake
              </label>
              <input type='checkbox' name='animal' value='donkey' id='donkey' onChange={e => this.onChangeAnimals(e.target.value)} />
              <label htmlFor='donkey'>
                Donkey
              </label>
            </p>

            {
              isTigerSelected && <p className={validateField(tigerType) ? '' : 'error'}>
                <label className='label' htmlFor='tigerType'>
                  Type of tiger
                </label>
                <input type='text' name='tigerType' id='tigerType' onChange={e => this.onChangeTigerType(e.target.value)} />
              </p>
            }

          </fieldset>
          <fieldset>
            <p>
              <input type='submit' value='Create account' />
            </p>
          </fieldset>
        </form>
    );
  }
}

export default SpringLoadCodeChallengeForm;
