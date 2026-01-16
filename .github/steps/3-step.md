## Step 3: Expand Calculator Functionality

Duck wants to expand the calculator with additional operations by creating a new issue and working with Copilot CLI to implement the enhancements.

### 📖 Theory: Iterative Development with Copilot CLI

#### Iterative Development and Agile Practices

Modern software development follows iterative approaches where features are built incrementally:

- Start with a minimal viable product (MVP)
- Add features in small, manageable chunks
- Test and validate each addition
- Continuously improve based on feedback

#### Maintaining Momentum with Copilot CLI

The standalone Copilot CLI helps maintain development momentum by:

- Quickly generating code for new features using the latest AI models
- Suggesting best practices and patterns
- Helping debug and test new functionality
- Reducing context switching by keeping you in the terminal
- Handling long-running shell commands more efficiently
- Supporting improved automation with the headless `-p` mode

#### Delegating Larger Tasks

For more complex tasks, you can use the `/delegate` command exampled below to assign work to the Copilot coding agent:

> ```bash
> > copilot
> > /delegate Add modulo, exponentiation, and square root functions to calculator.js with proper error handling
> ```

Copilot coding agent will:

1. Create a new branch automatically
2. Open a draft pull request
3. Work on the task autonomously
4. Stream output to your terminal
5. Request your review when complete

> [!NOTE]
> Using the `/delegate` command to leverage the Copilot Coding Agent (CCA) will consume premium requests from your GitHub Copilot subscription. Regular Copilot CLI commands do not require premium requests.

#### Testing and Improvement Workflows

As you add features, Copilot CLI can help you:

- Generate test cases for new operations
- Suggest edge cases to consider
- Create documentation
- Refactor code for better maintainability
- Save and share your development sessions using `/share`

> [!IMPORTANT]
> You may need to authenticate with GitHub before using GitHub CLI commands. Run `gh auth login` in your terminal, or use `!gh auth login` from within the Copilot CLI session.

### ⌨️ Activity: Add More Operations to the Calculator

1. Start an interactive Copilot CLI session:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > copilot
   > ```

1. Ask Copilot CLI to help you create another issue for expanding the calculator:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Help me create a GitHub issue to add more operations to my calculator. 
   > I want to add modulo, exponentiation (power), and square root functions 
   > with proper error handling using the feature request issue template.
   > ```

1. Work with Copilot CLI to implement the new operations:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Help me add these functions to my calculator.js based on latest issue created:
   > 1. modulo(a, b) - returns the remainder of a divided by b
   > 2. power(base, exponent) - returns base raised to the exponent
   > 3. squareRoot(n) - returns the square root of n with error handling for negative numbers
   > ```

   1. Optional alternatively, use the headless mode:

      > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
      >
      > ```prompt
      > copilot -p "Add modulo, exponentiation (power), 
      > and square root functions to a Node.js calculator module. 
      > Include proper error handling for edge cases like negative square roots."
      > ```

1. Test your new functions and add tests:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Add tests for the new calculator operations: 
   > - Expand tests based on the following example:
   >   - @images/calc-extended-operations.png
   > - Add these tests to a src/tests/calculator.test.js file
   > - Use a popular Node.js testing framework if one isn't installed
   > - Make sure to include edge case tests like square root of negative numbers
   > - Make sure all tests run and pass
   > ```

1. Commit your changes:
   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Add all calculator files to git.
   > Commit with message "Implemented additional calculator operations: 
   > modulo, power, square root" 
   > Push the changes
   > ```

> [!TIP]
> Use `/share` in your Copilot CLI session to save your conversation as a Markdown file or GitHub gist for future reference!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure your issue title includes "Calculator" or "Operations"
- The calculator.js file should export functions that can be required/imported
- You can test operations manually using Node.js REPL: `node` then type your code
- For square root of negative numbers, consider returning `NaN` or throwing an error
- Remember to commit and push any code changes you make
- Use `copilot --help` to see all available command options

</details>
