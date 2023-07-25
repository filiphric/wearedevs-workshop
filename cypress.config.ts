import { defineConfig } from "cypress";
import { registerWorkshopScripts } from './workshop-scripts/workshopScripts'

export default defineConfig({
  viewportHeight: 550,
  viewportWidth: 660,
  e2e: {
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
      registerWorkshopScripts(on)
      return config
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ['*.md', '*.html', '*.png', '*.jpeg'],
  },
})
