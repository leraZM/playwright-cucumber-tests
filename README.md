# SpriteCloud

## Automation Framework for UI with TypeScript, Playwright & Cucumber

---

## 🛠️ Tech Stack

The following technologies are used in this automation framework:

1. **TypeScript** - Strongly typed JavaScript for better maintainability.
2. **Cucumber** - BDD framework for writing test scenarios in Gherkin.
3. **Playwright** - Modern end-to-end testing framework for UI automation.

---

## 🚀 How to run the tests

### From the command line:

```sh
# Install dependencies
npm install

# Run UI tests
npm run test:ui

# Run API tests
npm run test:api
```

### GitHub Actions:

The tests can also be executed as part of the **CI/CD pipeline** in **GitHub Actions**.

To be added...

## 🔍 Approach

### 📝 UI Feature Breakdown

Each feature file contains **one critical scenario per feature**. This approach is scalable and allows for building more extensive test coverage per feature. The selected scenarios automate the **happy path** for the most critical functionalities of the **e-commerce website** from an **end-user perspective**.

- **`login.feature`**
- **`addToCart.feature`**
- **`checkout.feature`**

The **Cucumber layer** provides **clear documentation** and serves as **living documentation** for the project over time.

### 🔗 API Tests

- The API tests are located in the **`api.spec.ts`** file.
- The tests include both **successful and unsuccessful scenarios**.
- **Validation covers both status codes and response schemas**.

## 📌 Next Steps

- Implement **cross-browser testing** with Playwright.
- Implement **cross-device testing** to ensure compatibility on different screen sizes.
- Implement **visual testing** to detect UI regressions.
- Improve **test reporting and logging**.
- **Refactor test selectors** to locate elements by **Role** to support **accessibility testing**.
