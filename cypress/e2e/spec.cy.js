describe("Test Calculator UI", () => {
  it("add two numbers", () => {
    cy.visit("http://localhost:1234");
    cy.get("button")
      .contains("1")
      .click();

    cy.get("button")
      .contains("+")
      .click();

    cy.get("button")
      .contains("1")
      .click();

    cy.get("button")
      .contains("=")
      .click();

    cy.get("[class=primary-operand]").as("value");
    cy.get("@value").should("contain", 2);
  });

  it("subtract two numbers", () => {
    cy.visit("http://localhost:1234");
    cy.get("button")
      .contains("9")
      .click();

    cy.get("button")
      .contains("-")
      .click();

    cy.get("button")
      .contains("7")
      .click();

    cy.get("button")
      .contains("=")
      .click();

    cy.get("[class=primary-operand]").as("value");
    cy.get("@value").should("contain", 2);
  });

  it("multiply two numbers", () => {
    cy.visit("http://localhost:1234");
    cy.get("button")
      .contains("2")
      .click();

    cy.get("button")
      .contains("*")
      .click();

    cy.get("button")
      .contains("3")
      .click();

    cy.get("button")
      .contains("=")
      .click();

    cy.get("[class=primary-operand]").as("value");
    cy.get("@value").should("contain", 6);
  });

  it("divide two numbers", () => {
    cy.visit("http://localhost:1234");
    cy.get("button")
      .contains("8")
      .click();

    cy.get("button")
      .contains("÷")
      .click();

    cy.get("button")
      .contains("2")
      .click();

    cy.get("button")
      .contains("=")
      .click();

    cy.get("[class=primary-operand]").as("value");
    cy.get("@value").should("contain", 4);
  });
});
