## Step 2: Work on the Calculator Issue with Copilot CLI

With the issue created, Duck works with the standalone Copilot CLI interactively to start building the calculator application.

### 📖 Theory: Collaborative Development with Copilot CLI

#### Interactive Development with Copilot CLI

The standalone Copilot CLI (`copilot` command) provides a rich interactive experience for development:

- Start a session by simply running `copilot` in your terminal
- Have natural conversations about your code and get intelligent suggestions
- Generate boilerplate code based on your requirements
- Use the latest AI models for cutting-edge responses
- Share your session using the `/share` command to save as Markdown or a gist

#### Custom Agents

Copilot CLI supports custom agents that you can define in your repository:

- Create agent profiles in `.github/agents/` directory
- Encode specialized prompts, tool selections, and workflows
- Invoke agents using `/agent <name>` command
- Great for documentation, infrastructure, security, or domain-specific tasks

#### Delegating Tasks

When you have larger tasks, you can delegate them to Copilot coding agent:

- Use `/delegate TASK-DESCRIPTION` to assign work
- Copilot creates a new branch and draft pull request
- The coding agent works autonomously in the background
- Review the changes when complete

> [!TIP]
> Use the `/share` command to save your Copilot CLI chat sessions as Markdown files or GitHub gists for future reference!

> [!NOTE]
> References:
>
> - [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
> - [Custom agents in Copilot CLI](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
> - [About custom agents](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)

> [!IMPORTANT]
> You may need to authenticate with GitHub before using GitHub CLI commands. Run `gh auth login` in your terminal, or use `!gh auth login` from within the Copilot CLI session.

### ⌨️ Activity: Create a New Branch for the Calculator App

1. Create and push a new branch called `create-calc-app`:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > copilot -p "Create and push a new branch called 'create-calc-app'"
   > ```

> [!TIP]
> Use the `!` command in Copilot CLI to execute shell commands directly from your chat session. For example, to create and push the branch without leaving chat:
>
> ```prompt
> !git checkout -b create-calc-app && git push -u origin create-calc-app
> ```
>
> Verify the current branch afterward:
>
> ```prompt
> !git branch --show-current
> ```

### ⌨️ Activity: Generate Calculator Code with Copilot CLI based on an Image

1. Start an interactive Copilot CLI session:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > copilot
   > ```

1. Ask Copilot CLI to help you create the calculator functions based on the image and the GitHub issue created earlier:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > @images/js-calculator.png help me create a Node.js CLI calculator app based on this image
   > and all the math operations shown and detailed in issue #2.
   > Make sure to create the 'src' directory and put all the app code for the calculator there.
   > ```

   1. Optional alternatively, use the headless mode with a prompt:

      > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
      >
      > ```prompt
      > copilot -p "@images/js-calculator.png help me create a Node.js CLI calculator app based on this image
      > and all the math operations shown and detailed in the latest issue in this repository.
      > Make sure to create the 'src' directory and put all the app code for the calculator there."
      > ```

1. Run and test your calculator functions by asking Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Run and test the calculator functions with some example operations like 2 + 3, 10 - 4,  45 * 2, 20 / 5, 10 % 3, and 2 ** 3.
   > ```

1. Ask Copilot CLI to create comprehensive tests for the calculator functions:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Create comprehensive unit tests for all the calculator functions in the src directory.
   > Use a popular Node.js testing framework and place the tests in a tests directory.
   > Include tests for all math operations: addition, subtraction, multiplication, division,
   > modulo, and exponentiation. Also test edge cases like division by zero.
   > Run the tests and ensure all pass.
   > ```
  
1. Once satisfied with the code, commit your changes through Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Add all calculator files to git, commit with message "Implement basic calculator operations", and push the changes
   > ```

> [!TIP]
> You can paste or drag-and-drop images into Copilot CLI to provide visual context for your questions!

> [!NOTE]
> Pushing your changes will trigger the workflow to verify your work and prepare the next step!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you're in the repository directory when running commands
- The `copilot` command requires Node.js 22+ to be installed
- If authentication fails, run `copilot` and follow the login prompts
- You can also edit the calculator.js file manually based on Copilot's suggestions
- Remember to export your functions using `module.exports`

</details>
