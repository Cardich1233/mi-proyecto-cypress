Feature: Login en OrangeHRM

  Scenario Outline: Login con diferentes credenciales
    Given intento loguearme con usuario "<username>" y contraseña "<password>"
    Then debería ver el mensaje "<mensaje>"

    Examples:
      | username | password   | mensaje                    |
      | Admin    | admin123   | Dashboard                  |
      | admin    | admin123   | Dashboard                  |
      | Admin    | wrongpass  | Invalid credentials        |
      | invalid  | admin123   | Invalid credentials        |
      |          | admin123   | Required                   |
      | Admin    |            | Required                   |