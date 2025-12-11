describe('Portfolio E2E Tests', () => {
  beforeEach(() => {
    // Ensure app is running on localhost:5173
    cy.visit('http://localhost:5173');
  });

  it('loads the homepage and displays hero content', () => {
    cy.contains('Bhushan Shimpi').should('be.visible');
    cy.contains('Build. Scale. Innovate.').should('be.visible');
    cy.get('a[href="#/projects"]').should('exist');
  });

  it('navigates to projects page and opens a modal', () => {
    cy.get('nav').contains('Projects').click();
    cy.url().should('include', '/projects');
    cy.contains('My Projects').should('be.visible');
    
    // Open Project Modal
    cy.get('.group').first().click();
    cy.contains('Key Highlights').should('be.visible');
    
    // Close Modal
    cy.get('button').find('svg.lucide-x').click();
    cy.contains('Key Highlights').should('not.exist');
  });

  it('toggles dark mode', () => {
    // Initial State Check (assuming light mode default)
    cy.get('html').should('not.have.class', 'dark');
    
    // Toggle
    cy.get('button[aria-label="Toggle Theme"]').click();
    cy.get('html').should('have.class', 'dark');
    
    // Toggle Back
    cy.get('button[aria-label="Toggle Theme"]').click();
    cy.get('html').should('not.have.class', 'dark');
  });

  it('navigates to contact page', () => {
    cy.get('nav').contains('Contact').click();
    cy.url().should('include', '/contact');
    cy.contains('Send a Message').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
  });
});