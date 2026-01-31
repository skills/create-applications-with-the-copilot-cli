## Step 2: Work on the Calculator Issue with Copilot CLI

With the issue created, Duck works with the standalone Copilot CLI interactively to start building the calculator application.

### 📖 Theory: Collaborative Development with Copilot CLI

#### Interactive Development with Copilot CLI

The standalone Copilot CLI (`copilot` command) provides a rich interactive experience for development:

- Start a session by simply running `copilot` in your terminal
- Have natural conversations about your code and get intelligent suggestions
- Generate boilerplate code based on your requirements
- Use the latest AI models for cutting-edge responses
- `/share [file|gist] [path]` - Share session to markdown file or GitHub gist

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

> [!NOTE]
> References:
>
> - [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
> - [Custom agents in Copilot CLI](https://github.blog/changelog/2025-10-28-github-copilot-cli-use-custom-agents-and-delegate-to-copilot-coding-agent/)
> - [About custom agents](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)

> [!IMPORTANT]
> If you have restarted your codespace you may need to run `copilot --allow-all --enable-all-github-mcp-tools` and then authenticate with GitHub again by running `!gh auth login` in the Copilot CLI.

### ⌨️ Activity: Create a New Branch for the Calculator App

1. Start an interactive Copilot CLI session (if not already in a session):

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --allow-all --enable-all-github-mcp-tools
   > ```

> [!NOTE]
> The `--allow-all` option in the Copilot CLI enables all permissions at once:
> it is equivalent to `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls`.
> This allows the CLI to access any file path, use any tool, and access any URL without prompting for confirmation.
> Use with caution, as it grants the CLI full access and automation capabilities.

2. Create and push a new branch called `create-calc-app`:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create and push a new branch called 'create-calc-app'
   > ```

<details>
<summary>Having trouble? 🤷</summary><br/>

Use the `!` command in Copilot CLI to execute shell commands directly from your chat session. For example, to create and push the branch without leaving chat:

 ```prompt
 !git checkout -b create-calc-app && git push -u origin create-calc-app
 ```

 Verify the current branch afterward:

 ```prompt
 !git branch --show-current
 ```
</details>

### ⌨️ Activity: Generate Calculator Code with Copilot CLI based on an Image

1. Ask Copilot CLI to help you create the calculator functions based on the image and the GitHub issue created earlier:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > @images/js-calculator.png help me create a Node.js CLI calculator app 
   > based on this image and all the math operations shown and detailed
   > in the latest issue in this owner/repository.
   > Create the code and put it in the 'src' directory.
   > Make sure the calculator is commented with the operations it supports.
   > ```

   1. Optional alternatively, use the headless mode with a prompt:

      > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
      >
      > ```bash
      > copilot -p "@images/js-calculator.png help me create a Node.js CLI calculator app 
      > based on this image and all the math operations shown and detailed
      > in the latest issue in this owner/repository.
      > Create the code and put it in the 'src' directory.
      > Make sure the calculator is commented with the operations it supports."
      > ```

> [!NOTE]
> While this example uses an image of a web JavaScript calculator, it demonstrates how you can use files (including images) with the Copilot CLI to provide context for your requests.

2. Run and test your calculator functions by asking Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Run and test the calculator functions with some example operations 
   > shown in the image @images/calc-basic-operations.png.
   > ```

3. Ask Copilot CLI to create comprehensive tests for the calculator functions:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create comprehensive unit tests for all the calculator functions:
   > - Expand tests based on the following example:
   >   - @images/calc-basic-operations.png
   > - Add these tests to a src/tests/calculator.tests.js file
   > - Use a popular Node.js testing framework if one isn't installed
   > - addition, subtraction, multiplication, and division
   > - test edge cases like division by zero
   > - Make sure all tests run and pass
   > ```

> [!NOTE]
> Hit ctrl+o to see output of the passed tests that Copilot CLI ran for you!
  
4. Once satisfied with the code, commit your changes through Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Add all calculator and test files to git.
   > Commit with message "Implement basic calculator operations and tests: 
   > addition, subtraction, multiplication, division"
   > Push the changes
   > ```

5. Wait a moment for Mona to check your work, provide feedback, and share the next lesson.

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
