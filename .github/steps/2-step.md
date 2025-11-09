## Step 2: Create and Work on an Issue for the Calculator App

With the issue template ready, Duck creates an issue for the initial calculator implementation and works with Copilot CLI interactively to start building the application.

### 📖 Theory: Collaborative Development with Copilot CLI

**Creating Issues via CLI**

The GitHub CLI (`gh`) allows you to create issues directly from the command line, which is perfect for developers who prefer staying in the terminal. Combined with your issue template, you can quickly document work that needs to be done.

**Copilot CLI for Code Generation**

Once you have an issue created, GitHub Copilot CLI can help you:
- Generate boilerplate code based on your requirements
- Suggest implementation approaches
- Create test cases
- Debug and fix issues interactively

The interactive nature of Copilot CLI means you can have a conversation with it, refining suggestions until you get exactly what you need.

**References:**
- [About Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Use Copilot CLI agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)

### ⌨️ Activity: Create an Issue for the Calculator App

1. Create a new issue for the calculator implementation using GitHub CLI:
   ```bash
   gh issue create --title "Initial Node.js Calculator App" --body "Create a basic Node.js calculator with the following operations:
   - Addition
   - Subtraction
   - Multiplication
   - Division
   
   The calculator should be implemented in calculator.js with functions for each operation."
   ```

1. Assign the issue to yourself:
   ```bash
   gh issue list
   # Note the issue number, then assign it
   gh issue edit <issue-number> --add-assignee @me
   ```

1. (Optional) Start working with Copilot CLI to generate initial calculator code:
   ```bash
   gh copilot suggest "create calculator functions for addition, subtraction, multiplication, and division in JavaScript"
   ```

> [!TIP]
> You can view your newly created issue in the GitHub UI by running `gh issue view <issue-number> --web`

> [!NOTE]
> Creating the issue will trigger the workflow to verify your work and prepare the next step!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you're in the repository directory when running `gh issue` commands
- If authentication fails, run `gh auth refresh`
- The issue title should contain "Calculator" or "Initial Node.js Calculator App"
- You can also create the issue through the GitHub UI if CLI commands aren't working
- Remember to include a description/body in your issue

</details>
