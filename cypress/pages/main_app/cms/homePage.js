
class homePage {
	elements = {
		learningPointContent: () => cy.get("[href='/cms/lessons']")
	}
	accessLearningPointContentPage() {
		this.elements.learningPointContent().click();
	}
}

module.exports = new homePage();