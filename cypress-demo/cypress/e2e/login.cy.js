describe('login spec', () => {
    it('verifies login', () => {
      cy.visit('http://localhost:3000/login');
      cy.get('#username').type("abc");
      cy.get('#password').type("abc@123");
      cy.get('#loginbtn').click();
      cy.location('href').should('eq', 'http://localhost:3000/counter');
    })
  })