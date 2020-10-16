/// <reference types="cypress" />
/* eslint-disable react/jsx-filename-extension */
import { mount } from 'cypress-react-unit-test'
import React from 'react'
import {I18nContextProvider} from './../../components'
import { LanguageSelect } from "../LanguageSelect";


describe('cypress-react-unit-test', () => {
  it('shows LanguageSelection', () => {
    mount(<I18nContextProvider><LanguageSelect /></I18nContextProvider>)
    cy.contains('div', 'deu')//.should('be.visible')
    cy.contains('div', 'eng')//.should('be.visible')
    cy.get('#lang-eng').click()
    cy.get('#lang-eng').should('have.css', 'background-color', 'rgb(221, 221, 221)')
    cy.get('#lang-deu').click()
    cy.get('#lang-deu').should('have.css', 'background-color', 'rgb(221, 221, 221)')
})

})