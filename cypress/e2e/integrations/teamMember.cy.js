/// <reference types="cypress" />

context("Team Member Page", () => {
  describe("Dynamic content", () => {
    describe("When the id in the url is 0", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000/team-member/0");
      });

      it("location object has the same value in it", () => {
        cy.location().should((location) => {
          const teamMemberId = location.href.split("/")[4]; //TODO Find better way to parse the url and get the id
          expect(teamMemberId).to.eq("0");
        });
      });

      it("should render heading 'Matt'", () => {
        cy.get("#content > h1").first().should("have.text", "Matt");
      });
    });

    describe("When the id in the url is 1", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000/team-member/1");
      });

      it("location object has the same value in it", () => {
        cy.location().should((location) => {
          const teamMemberId = location.href.split("/")[4]; //TODO Find better way to parse the url and get the id
          expect(teamMemberId).to.eq("1");
        });
      });

      it("should render heading 'James' with color aqua", () => {
        cy.get("#content > h1")
          .first()
          .should("have.text", "James")
          .should("have.css", "color", "rgb(0, 255, 255)"); //TODO Check how to import objects from another file and use here for reference
      });
    });

    describe("When the id is in wrong format or doesn't exist", () => {
      beforeEach(() => {
        cy.visit("http://localhost:3000/team-member/j9ya");
      });

      it("should render heading 'Not found'", () => {
        cy.get("#content > h1").first().should("have.text", "Not found");
      });
    });
  });
});
