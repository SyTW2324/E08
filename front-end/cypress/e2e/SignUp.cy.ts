describe("Sign Up Test", () => {
  beforeEach(() => {
    // Visit your Vue app or the login page directly
    cy.visit("http://localhost:3000/signup"); // Update with your actual route
  });

  it("should display the login form", () => {
    // Check if the login form elements are present
    cy.get("[data-cy='full_name']").should("be.visible");
    cy.get("[data-cy='username']").should("be.visible");
    cy.get("[data-cy='password']").should("be.visible");
    cy.get("[data-cy='mail']").should("be.visible");
    cy.get("[data-cy='date']").should("be.visible");
    cy.get("[data-cy='singup-btn']").should("be.visible");
  });

  it("should not sing up", () => {
    cy.get("[data-cy='full_name']").type("Nombre de Prueba");
    cy.get("[data-cy='username']").type("saul");
    cy.get("[data-cy='password']").type("contraseña123");
    cy.get("[data-cy='mail']").type("prueba@correo.com");
    cy.get("[data-cy=date]").type("2002-01-01");

    cy.get("[data-cy=singup-btn]").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Try an other username");
    });
  });
});
