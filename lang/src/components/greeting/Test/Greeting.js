/// <reference types="Cypress" />

const { Given, Then } = require('cypress-cucumber-preprocessor/steps')
const { mount } = require('cypress-react-unit-test')
const React = require('react')
import {Greeting} from '../index'

const App = () => <div className="App">Hello from App</div>

Given('component is mounted', () => {
  mount(<Greeting />)
})

Then('has text {string}', string => {
  cy.contains('div', string)//.should('be.visible')
})