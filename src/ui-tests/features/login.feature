Feature: Login feature

Scenario: Login with multiple sets of credentials
  Given I am on the login page
  When I enter a username "<username>"
  And I enter a password "<password>"
  And I click on the login button
  Then I should see the "<result>"

  Examples:
    | username          | password       | result                                                 |
    | standard_user     | secret_sauce   | inventory page                                         |
    | locked_out_user   | secret_sauce   | error message                                          |
    | invalid_user      | secret_sauce   | error message                                          |
    | standard_user     | incorrect_pass | error message                                          |
    |                   |                | error message                                          |
