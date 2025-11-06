import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import addCucumberEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config, {
        json: {
          enabled: true,
          output: "cypress/reports/json/cucumber-report.json"
        }
      });
      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [addCucumberEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});