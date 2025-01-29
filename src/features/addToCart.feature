Feature: Add to cart feature

  Scenario: Add a single item to the cart
    Given I am logged in as "standard_user" with password "secret_sauce"
    And I am on the inventory page
    When I click the add to cart button for "Sauce Labs Backpack"
    Then I see the cart badge with the count "1"
