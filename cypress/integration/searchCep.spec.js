context("searchCep", () => {
  it("Tries to search for a cep adress", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get("input[type=number]").type("20771320");
    cy.get("button").click();

    cy.contains("Logradouro");
  });
});
