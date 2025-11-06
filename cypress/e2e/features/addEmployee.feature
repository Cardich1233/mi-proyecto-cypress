Feature: Gestión de empleados en módulo PIM

  Scenario Outline: Agregar empleados con diferentes datos
    Given estoy logueado en OrangeHRM
    When navego al módulo PIM
    And hago clic en agregar empleado
    And completo los datos personales del empleado con "<firstName>" "<lastName>"
    And guardo el empleado
    Then debería ver el mensaje de éxito

    Examples:
      | firstName | lastName |
      | Juan1      | Pere    |

  Scenario Outline: Agregar empleados con acceso al sistema
    Given estoy logueado en OrangeHRM
    When navego al módulo PIM
    And hago clic en agregar empleado
    And completo los datos personales del empleado con "<firstName>" "<lastName>"
    And habilito los detalles de login
    And completo los datos de login con usuario "<username>" y contraseña "<password>"
    And guardo el empleado
    Then debería ver el mensaje de éxito

    Examples:
      | firstName | lastName | username        | password    |
      | Carlos    | Ruiz     | carlos1.ruiz     | Password123 |