let env = Cypress.env('env')
let host = env.be.host
let account = env.be.account.system_admin

import cmsLoginPage from '../../../pages/main_app/cms/loginPage';
import cmsHomeage from '../../../pages/main_app/cms/homePage';

describe('template spec', async() => {
  beforeEach(function () {
    cy.visit(host)
  })

  it('create existent Learning Point Content for new program and new class', async() => {
    cmsLoginPage.login(account)
    cmsHomeage.accessLearningPointContentPage()
  })
})