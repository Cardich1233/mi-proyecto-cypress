import LoginPage from '../pages/LoginPage'

Cypress.Commands.add('programmaticLogin', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  LoginPage.typeUsername('Admin')
  LoginPage.typePassword('admin123')
  LoginPage.clickLogin()
  cy.contains('Dashboard').should('be.visible')
})
