const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/reports/json',
  reportPath: 'cypress/reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'GitHub Actions',
    platform: {
      name: 'ubuntu',
      version: 'latest'
    }
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Cypress OrangeHRM Tests' },
      { label: 'Execution Start', value: new Date().toLocaleString() },
      { label: 'Node.js Version', value: process.version }
    ]
  }
});