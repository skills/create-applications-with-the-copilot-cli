## Step 1: Install Copilot CLI and Use the Issue Template

Duck is getting ready to manage development for the Node.js CLI calculator app and wants to install the standalone Copilot CLI and use the existing issue template to create a new issue.

### 📖 Theory: GitHub Copilot CLI - A Standalone Terminal Application

#### What is GitHub Copilot CLI?

GitHub Copilot CLI is a **standalone terminal application** that brings the power of GitHub Copilot directly to your command line. It is installed via npm and provides a rich interactive experience for developers.

Key capabilities include:

- Providing intelligent command suggestions powered by the latest AI models from OpenAI and Google
- Generating code snippets and scripts directly in your terminal
- Assisting with Git operations and GitHub interactions
- Supporting image inputs via paste and drag-and-drop for visual context
- Using the `/share` command to save chat sessions as Markdown files or GitHub gists
- Creating **custom agents** to encode specialized prompts and workflows
- Delegating tasks to **Copilot coding agent** using the `/delegate` command

#### Installation Requirements

To install Copilot CLI, you need:

- Node.js version 22 or later
- npm version 10 or later
- An active GitHub Copilot subscription (Pro, Pro+, Business, or Enterprise)

#### Issue Templates

Issue templates help maintain consistency when team members create issues. This repository already has a `feature_request.md` template that you'll use to create your calculator app issue. Templates ensure:

- All necessary information is captured upfront
- Issues follow a standard format
- The team can triage and respond to issues more efficiently

#### References

- [Installing GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Using GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [GitHub Copilot CLI 101](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

> [!IMPORTANT]
> You may need to authenticate with GitHub before using GitHub CLI commands. Run `gh auth login` in your terminal, or use `!gh auth login` from within the Copilot CLI session.

### :keyboard: Activity 1: Getting to know your development environment

1. Right-click the below button to open the **Create Codespace** page in a new tab.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

   - The free tier of Codespaces that comes with all GitHub accounts is fine, assuming you still have minutes available.
   - The default Codespace settings are fine.

> [!IMPORTANT]
> This Codespace VS Code environment has been simplified to focus on using the Copilot CLI in the terminal. You'll primarily be working with terminal commands rather than the full VS Code feature set.

1. Confirm the **Repository** field is your copy of the exercise, not the original, then click the green **Create Codespace** button.

   - ✅ Your copy: `/{{full_repo_name}}`
   - ❌ Original: `/arilivigni/create-applications-with-the-copilot-CLI`

1. Wait a moment for Visual Studio Code to load.

1. Before we continue let's take a moment to familiarize ourselves with the project folder.

   - The left navigation bar is where you can access the file explorer, debugger, and search.
   - The lower panel (Ctrl+J) shows the debugger output, allows running terminal commands, and allows configuring the web service ports.
   - Our calculator.js file is where we'll implement the calculator functionality.

1. At the top of VS Code, locate and click the Copilot icon to open a Copilot Chat panel.

   <img width="150" alt="image" src="https://github.com/user-attachments/assets/5e64db46-95cb-415d-badc-b6b8677f10c1" />

1. If this is your first time using GitHub Copilot, you will have to accept the usage terms to continue.
   - Click the **Accept** button to continue.

### ⌨️ Activity 2: Install the Standalone Copilot CLI

1. Open your Codespace (if not already open)

1. Install the standalone GitHub Copilot CLI by running:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > npm install -g @github/copilot
   > ```

1. Verify the installation by running:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > copilot --version
   > ```

> [!TIP]
> After installation, you can use the `copilot` command anywhere in your terminal to start an interactive session!

### ⌨️ Activity 3: Create an Issue Using Copilot CLI

1. Start an interactive Copilot CLI session:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > copilot --allow-all
   > ```

> [!NOTE]
> When starting Copilot CLI, you may be prompted to add this folder to the trusted folder list and to key bindings. Respond **yes** to both prompts to continue.

1. Authorize with GitHub (if not already authenticated):

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > /login
   > ```

> [!NOTE]
> After running `/login`, you will be provided with a link and an authentication code. Click the link to open GitHub in your browser, then enter the code to complete the authentication process.

1. Explore useful slash commands in Copilot CLI:

   - View your current session information:

     > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
     >
     > ```prompt
     > /session
     > ```

   - Share your session as a GitHub gist for future reference:

     > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
     >
     > ```prompt
     > /share gist
     > ```

> [!TIP]
> The `/session` command shows details about your current chat session. The `/share gist` command saves your conversation as a GitHub gist, which is useful for sharing solutions or keeping a record of helpful interactions.

1. Ask Copilot CLI to help you create a feature request issue for the calculator app:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Create a GitHub issue for a Node.js CLI calculator app using the issue template as the format.
   > I want to request a feature for basic arithmetic operations including 
   > - addition
   > - subtraction
   > - multiplication
   > - division
   > The calculator should be implemented in calculator.js.
   > ```

> [!NOTE]
> Copilot CLI may ask to confirm creating the issue and using `gh issue`. Respond **yes** to creating the issue and **"Yes, and approve `gh issue` for the rest of the running session"**.

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you have Node.js 22+ installed: `node --version`
- If npm install fails, try: `sudo npm install -g @github/copilot`
- Make sure you have GitHub Copilot access enabled for your account
- If authentication fails, run `copilot` and follow the login prompts
- You can also create the issue through the GitHub UI if needed

</details>
