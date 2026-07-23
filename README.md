> **Final Task**
> **Student:** Anna Sadovaia
> **Course/Stage:** EPAM Run_9_2026_TA in JS (Stage 2)

# Task Description

*"Negative & Edge Case" Flow*
Focus: Error handling, form validation, and wait strategies.
Launch URL: [https://saucedemo.com](https://saucedemo.com)
*UC-1 Form Validation (Negative Testing):*
o Attempt to login with empty Username and Password. Verify error: "Username is required".
o Attempt to login with Username only. Verify error: "Password is required".
o Login with standard_user, go to Checkout, and attempt to continue without filling the postal code. Verify error message.
*UC-2 Handling Latency (Wait Strategies):*
o Login using performance_glitch_user (This user has a built-in delay).
o Ensure your framework handles the page load delay gracefully without hard-coded pause() or sleep()commands.
o Reset the App State via the Burger Menu.
o Logout.
Technical Requirements:
Tool: WebDriverIO.
Browsers: Firefox, Edge (Run in Parallel).
Pattern: Page Object Model (POM).
Locators: CSS Selectors.
Assertions: Use specific framework assertions (e.g., expect(elem).toBeExisting()).
Documentation: Add a README.md explaining how to run the tests and generate the report.

# Tech Stack

*   **Automation Framework:** WebdriverIO
*   **Test Framework:** Mocha (BDD style)
*   **Reporter:** Spec Reporter

# 🚀 Getting Started

## 1. Installation
Clone the repository and install all dependencies:

```bash
npm install
```

## 2. How to Run Tests

```bash
npm test
```