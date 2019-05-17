context('dummy testing of the userSelector component', () => {
    before(() => {
        cy.visit('http://localhost:5000/')
    })
    it('the UserSelector component shoud have 10 cards in it', () => {
        cy.get('.UserSelector').find(".card").should(($card) => {
            expect($card).to.have.length(10);
        })
    })
})
