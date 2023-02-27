
class homePage {
	elements = {
		gifts: () => cy.get("[href='/cms/gifts'].nav-link"),
		learningPointContent: () => cy.get("[href='/cms/lessons']")
	}
	accessLearningPointContentPage() {
		this.elements.learningPointContent().click();
	}
	accessGiftsPage() {
		this.elements.gifts().click();
	}
}

module.exports = new homePage();
