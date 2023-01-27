/// <reference types="cypress" />

context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("cy.location() - should be home page on localhost", () => {
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/");
    });
  });

  it("should find the NextJS starter page", () => {
    cy.get("h1").contains("NextJS Starter App");
  });

  describe("Inside the links container ", () => {
    it("should check each link has the correct heading", () => {
      cy.get("#links a h2").first().should("have.text", "Docs ->");
      cy.get("#links a h2").eq(1).contains("Templates");
      cy.get("#links a h2")
        .eq(2)
        .should("be.visible")
        .should("have.text", "Deploy ->")
        .should("have.css", "color", "rgb(159, 43, 104)");
    });

    it("should check each link has a description", () => {
      cy.get("#links a").then((links) => {
        const linksCount = links.length;

        cy.get("#links a p").then((paragraphs) => {
          const paragraphsCount = paragraphs.length;

          expect(linksCount).to.equal(paragraphsCount);
        });
      });
    });
  });
});
