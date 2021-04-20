/* eslint-disable no-undef */
/// <reference types="Cypress" />
import 'cypress-axe'

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
    // cy.checkA11y();
  });

  it("landing page loaded", () => {
    cy.url().should("contains", "/");
  });
});
