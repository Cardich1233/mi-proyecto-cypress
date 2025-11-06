import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PIMPage from "../../pages/PIMPage";

When("navego al módulo PIM", () => {
  PIMPage.navigateToPIM();
});

When("hago clic en agregar empleado", () => {
  PIMPage.clickAddEmployee();
});

When("completo los datos personales del empleado con {string} {string}", (firstName, lastName) => {
  PIMPage.fillEmployeeDetails(firstName, '', lastName);
});

When("habilito los detalles de login", () => {
  PIMPage.enableLoginDetails();
});

When("completo los datos de login con usuario {string} y contraseña {string}", (username, password) => {
  // Generar username único agregando timestamp
  const uniqueUsername = `${username}.${Date.now()}`;
  PIMPage.fillLoginDetails(uniqueUsername, password);
});

When("guardo el empleado", () => {
  PIMPage.saveEmployee();
});

Then("debería ver el mensaje de éxito", () => {
  PIMPage.verifySuccessMessage();
});

Then("debería ver los detalles personales del empleado", () => {
  PIMPage.verifyPersonalDetails();
});