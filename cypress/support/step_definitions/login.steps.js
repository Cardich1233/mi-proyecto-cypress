import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

// STEP ORIGINAL - Para otros features
Given("estoy logueado en OrangeHRM", () => {
  LoginPage.visit();
  LoginPage.login("Admin", "admin123");
});

// NUEVOS STEPS - Limpios, sin lógica
Given("intento loguearme con usuario {string} y contraseña {string}", (username, password) => {
  LoginPage.visit();
  LoginPage.attemptLogin(username, password);
});

Then("debería ver el mensaje {string}", (mensaje) => {
  if (mensaje === "Dashboard") {
    LoginPage.verifyDashboard();
  } else if (mensaje === "Invalid credentials") {
    LoginPage.verifyInvalidCredentials();
  } else if (mensaje === "Required") {
    LoginPage.verifyRequiredFields();
  }
});