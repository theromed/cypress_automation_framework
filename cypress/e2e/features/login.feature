Feature: Login page

    Scenario: Login using valid credentials
        Given I load login data
        When I access to login page
        And I enter a email
        And I enter a password 
        And I click login button
        Then I should be logged in
