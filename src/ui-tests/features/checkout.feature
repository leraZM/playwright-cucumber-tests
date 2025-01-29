Feature: Checkout feature

  Scenario: Checkout one item
    Given I am logged in as "standard_user" with password "secret_sauce"
    And I am on the inventory page
    And I click the add to cart button for "Sauce Labs Backpack"
    And I see the cart badge with the count "1"
    And I click the shopping cart icon
    And I click the checkout button
    And I see the checkout page
    And I enter the first name "John"
    And I enter the last name "Doe"
    And I enter the postal code "12345"
    And I click the continue button
    And I see the checkout overview page
    And I see the item "Sauce Labs Backpack"
    And I see the price "$29.99"
    And I see the quantity "1"
    And I see the subtotal "$29.99"
    When I click the finish button
    Then I see the checkout complete page
