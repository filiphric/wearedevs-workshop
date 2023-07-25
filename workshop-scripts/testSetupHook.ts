import * as path from 'path';
import * as singleBoardTwoListsTwoCards from './fixtures/singleBoardTwoListsTwoCards.json'
import * as singleBoardTwoListsFiveCards from './fixtures/singleBoardTwoListsFiveCards.json'

const beforeEachTestSeeds = {
  'cypress/e2e/01_common_problems/demo_end.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/01_common_problems/demo_start.cy.ts': singleBoardTwoListsFiveCards,
  'cypress/e2e/02_debugging_stabilizing/demo_end.cy.ts': singleBoardTwoListsTwoCards,
  'cypress/e2e/02_debugging_stabilizing/demo_start.cy.ts': singleBoardTwoListsTwoCards
}

const testPath = path.normalize(Cypress.spec.relative)

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})