class PIMPage {
  navigateToPIM() {
    cy.get('.oxd-sidepanel-body').contains('PIM').click();
  }

  clickAddEmployee() {
    cy.contains('Add Employee').click();
  }

  fillEmployeeDetails(firstName, middleName = '', lastName) {
    cy.get('input[name="firstName"]').type(firstName);
    if (middleName) {
      cy.get('input[name="middleName"]').type(middleName);
    }
    cy.get('input[name="lastName"]').type(lastName);
    
    // Limpiar el Employee ID para evitar duplicados
    cy.get('.oxd-grid-2 input.oxd-input').clear();
  }

  enableLoginDetails() {
    cy.get('.oxd-switch-input').click();
  }

  fillLoginDetails(username, password) {
    // Esperar un momento para que aparezcan los campos
    cy.wait(1000);
    
    // Buscar el campo username por el texto del label
    cy.contains('label', 'Username')
      .parent()
      .parent()
      .find('input')
      .clear()
      .type(username);
    
    cy.get('input[type="password"]').first().type(password);
    cy.get('input[type="password"]').last().type(password);
  }

  saveEmployee() {
    cy.get('button[type="submit"]').click();
  }

  verifySuccessMessage() {
    cy.get('.oxd-text--toast-title').should('contain', 'Success');
  }
}

export default new PIMPage();