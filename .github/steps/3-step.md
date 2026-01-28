## Step 3: Expand Calculator Functionality

Duck wants to expand the calculator with additional operations by creating a new issue and working with Copilot CLI to implement the enhancements.

### 📖 Theory: Iterative Development with Copilot CLI

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
> copilot
> ```
>
> ```text
> /delegate Add modulo, exponentiation, and square root functions to calculator.js with proper error handling
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
> If you have restarted your codespace you may need to run `copilot --allow-all --enable-all-github-mcp-tools` and then authenticate with GitHub again by running `!gh auth login` from within the Copilot CLI session.

> [!NOTE]
> The `--allow-all` option in the Copilot CLI enables all permissions at once:
> it is equivalent to `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls`.
> This allows the CLI to access any file path, use any tool, and access any URL without prompting for confirmation.
> Use with caution, as it grants the CLI full access and automation capabilities.

### ⌨️ Activity: Add More Operations to the Calculator

1. Start an interactive Copilot CLI session (if not already in a session):

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

1. Ask Copilot CLI to help you create another issue for expanding the calculator:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create a GitHub issue for a Node.js CLI calculator app using the feature_request.md template 
   > as the markdown format.
   > I want to request a feature to add more operations including 
   > - modulo
   > - exponentiation (power)
   > - square root
   > Create the issue directly for the current owner and repository in this session on github.com using the `gh` CLI commands.
   > ```
1. Work with Copilot CLI to implement the new operations:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add these functions to my existing calculator.js based on latest issue created:
   > 1. modulo(a, b) - returns the remainder of a divided by b
   > 2. power(base, exponent) - returns base raised to the exponent
   > 3. squareRoot(n) - returns the square root of n with error handling for negative numbers
   > ```

   1. Optional alternatively, use the headless mode:

      > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
      >
      > ```prompt
      > copilot -p "Add these functions to my existing calculator.js based on latest issue created:
      > 1. modulo(a, b) - returns the remainder of a divided by b
      > 2. power(base, exponent) - returns base raised to the exponent
      > 3. squareRoot(n) - returns the square root of n with error handling for negative numbers"
      > ```

1. Test your new functions and add tests:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add tests for the new calculator operations: 
   > - Expand tests based on the following example:
   >   - @images/calc-extended-operations.png
   > - Add these tests to the existing src/tests/calculator.tests.js file
   > - Use a popular Node.js testing framework if one isn't installed
   > - Make sure to include edge case tests like square root of negative numbers
   > - Make sure all tests run and pass
   > ```

1. Commit your changes:
   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add all calculator and test files to git.
   > Commit with message "Implemented additional calculator operations and tests: 
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
