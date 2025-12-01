## Step 3: Expand Calculator Functionality

Duck wants to expand the calculator with additional operations by creating a new issue and working with Copilot CLI to implement the enhancements.

### 📖 Theory: Iterative Development with Copilot CLI

**Iterative Development and Agile Practices**

Modern software development follows iterative approaches where features are built incrementally:
- Start with a minimal viable product (MVP)
- Add features in small, manageable chunks
- Test and validate each addition
- Continuously improve based on feedback

**Maintaining Momentum with Copilot CLI**

GitHub Copilot CLI helps maintain development momentum by:
- Quickly generating code for new features using the latest AI models
- Suggesting best practices and patterns
- Helping debug and test new functionality
- Reducing context switching by keeping you in the terminal
- Handling long-running shell commands more efficiently
- Supporting improved automation with the headless `-p` mode

**Testing and Improvement Workflows**

As you add features, Copilot CLI can help you:
- Generate test cases for new operations
- Suggest edge cases to consider
- Create documentation
- Refactor code for better maintainability
- Save and share your development sessions using `/share`

### ⌨️ Activity: Add More Operations to the Calculator

1. Create a new issue for additional calculator operations:
   ```bash
   gh issue create --title "Add More Operations to Calculator" --body "Expand the calculator with additional operations:
   - Modulo (remainder)
   - Exponentiation (power)
   - Square root
   
   Each operation should be thoroughly tested and documented."
   ```

1. Work with Copilot CLI to implement the new operations. You can ask for help:
   ```bash
   gh copilot suggest "add modulo, exponentiation, and square root functions to calculator.js"
   ```

1. Implement the suggested functions in your `calculator.js` file

1. (Optional) Test your new functions:
   ```bash
   node -e "const calc = require('./calculator'); console.log('5 % 2 =', calc.modulo(5, 2)); console.log('2 ^ 3 =', calc.power(2, 3));"
   ```

1. Commit your changes:
   ```bash
   git add calculator.js
   git commit -m "Add modulo, power, and square root operations"
   git push
   ```

> [!TIP]
> Use `gh copilot explain` to understand complex mathematical operations or JavaScript patterns!

> [!NOTE]
> Creating this second issue will complete the exercise and trigger the review workflow!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure your issue title includes "Calculator" or "Operations"
- The calculator.js file should export functions that can be required/imported
- You can test operations manually using Node.js REPL: `node` then type your code
- Don't worry if some functions already exist - focus on adding new ones
- Remember to commit and push any code changes you make

</details>
