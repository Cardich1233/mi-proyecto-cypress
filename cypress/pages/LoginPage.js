class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  login(username, password) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }

  // Nuevos métodos para casuísticas
  attemptLogin(username, password) {
    if (username && username !== '""') {
      cy.get('input[name="username"]').type(username);
    } else {
      cy.get('input[name="username"]').clear();
    }
    
    if (password && password !== '""') {
      cy.get('input[name="password"]').type(password);
    } else {
      cy.get('input[name="password"]').clear();
    }
    
    cy.get('button[type="submit"]').click();
  }

  verifyDashboard() {
    cy.url().should('include', '/dashboard');
    cy.get('.oxd-topbar-header-breadcrumb').should('contain', 'Dashboard');
  }

  verifyInvalidCredentials() {
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  }

  verifyRequiredFields() {
    cy.get('.oxd-input-field-error-message').should('exist');
  }
}

export default new LoginPage();