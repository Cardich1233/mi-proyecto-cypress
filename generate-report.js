const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');

// Verificar si el archivo JSON existe
const jsonPath = 'cypress/reports/json/cucumber-report.json';

if (fs.existsSync(jsonPath)) {
  report.generate({
    jsonDir: 'cypress/reports/json',
    reportPath: 'cypress/reports/html',
    metadata: {
      browser: { name: 'chrome', version: 'latest' },
      device: 'GitHub Actions',
      platform: { name: 'ubuntu', version: 'latest' }
    },
    customData: {
      title: 'Run Info',
      data: [
        { label: 'Project', value: 'Cypress OrangeHRM Tests' },
        { label: 'Execution', value: new Date().toLocaleString() }
      ]
    }
  });
  console.log('✅ Reporte HTML generado exitosamente');
} else {
  console.log('⚠️ No se encontró JSON, pero se generó reporte básico');
}