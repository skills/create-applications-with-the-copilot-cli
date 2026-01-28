## Step 1: Install Copilot CLI and Use the Issue Template

Duck prefers working in the terminal and wants to use AI from there.
Duck is getting ready to develop a new Node.js CLI calculator app and plans to install the standalone Copilot CLI to build the application from the terminal.

### 📖 Theory: GitHub Copilot CLI - A Standalone Terminal Application

#### What is GitHub Copilot CLI?

GitHub Copilot CLI is a **standalone terminal application** that brings the power of GitHub Copilot directly to your command line. It is installed via npm and provides a rich interactive experience for developers.

<img width="40%" height="40%" alt="CopilotCLI" src="https://github.com/user-attachments/assets/1136ab45-fcc4-43a2-923f-67b797ee2705">

#### Key capabilities and options to be aware of include:

- Providing intelligent command suggestions powered by the latest AI models from OpenAI and Google
- Generating code snippets and scripts directly in your terminal
- Assisting with Git operations and GitHub interactions
- Supporting image inputs via paste and drag-and-drop for visual context
- The `--enable-all-github-mcp-tools` flag enables all GitHub MCP (Model Context Protocol) tools, giving Copilot CLI access to GitHub features like creating issues, managing repositories, and more.
- Depending on your Copilot CLI configuration (for example, if you don't use the `--allow-all` option), you may be prompted to enable certain features during the session. Respond **yes** to these prompts as well.
- `/session`: Command shows details about your current chat session. 
- `/context`: Provides a visual overview of your current token usage
- `/usage`: Lets you view your session statistics, including:
  - The amount of premium requests used in the current session
  - The session duration
  - The total lines of code edited
  - A breakdown of token usage per model
- `/share [file|gist] [path]` - Share session to markdown file or GitHub gist
- Creating **custom agents** to encode specialized prompts and workflows
- Delegating tasks to **Copilot coding agent** using the `/delegate` command

#### Global shortcuts

```text
 @             mention files, include contents in context
 Esc           cancel the current operation
 !             execute command in your local shell (bypass Copilot)
 ctrl+c        cancel operation / clear input / exit
 ctrl+d        shutdown
 ctrl+l        clear the screen
 shift+tab     switch between plan mode and regular interactive mode
```
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
> If you have restarted your codespace you may need to run `copilot --allow-all` and then authenticate with GitHub again by running `!gh auth login` in your terminal,
> or use `!gh auth login` from within the Copilot CLI session.

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

1. We will be focused on the full terminal window since this is all about the CLI.

### ⌨️ Activity 2: Install the Standalone Copilot CLI

1. Open your Codespace (if not already open)

1. Install the standalone GitHub Copilot CLI by running in the terminal window:

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)

   >
   > ```bash
   > npm install -g @github/copilot
   > ```

1. Verify the installation by running:

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)

   >
   > ```bash
   > copilot --version
   > ```

> [!TIP]
> After installation, you can use the `copilot` command anywhere in your terminal to start an interactive session!

### ⌨️ Activity 3: Create an Issue Using Copilot CLI

1. Start an interactive Copilot CLI session:

   > ![Static Badge](https://img.shields.io/badge/Terminal-text?logo=gnometerminal&labelColor=0969da&color=ddf4ff)
   >
   > ```bash
   > copilot --enable-all-github-mcp-tools
   > ```

> [!NOTE]
> When starting Copilot CLI, you may be prompted to add this folder to the trusted folder list and to key bindings. Respond **yes** to both prompts to continue.

<img width="40%" height="40%" alt="CopilotCLIAddDir" src="https://github.com/user-attachments/assets/75c16b1c-8377-4a82-97ad-464baf23b77c" />
<br />
<img width="40%" height="40%" alt="CopilotCLITerminalBindings" src="https://github.com/user-attachments/assets/5c5efc46-06e2-4a53-bfe1-5a335adba521" />

2. Authorize with GitHub (if not already authenticated) in the Copilot CLI:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > !gh auth login
   > ```

> [!NOTE]
> After running `!gh auth login`, you will be provided with a link and an authentication code. Click the link to open GitHub in your browser, then enter the code to complete the authentication process.

3. Explore useful slash commands in Copilot CLI:

   - View your current session information:

     > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
     >
     > ```prompt
     > /session
     > ```

   - View your current context information:

     > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
     >
     > ```prompt
     > /context
     > ```
   
   - View your current usage information:

     > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
     >
     > ```prompt
     > /usage
     > ```

> [!NOTE]
> - `/session`: Command shows details about your current chat session. 
> - `/context`: Provides a visual overview of your current token usage
> - `/usage`: Lets you view your session statistics, including:
>   - The amount of premium requests used in the current session
>   - The session duration
>   - The total lines of code edited
>   - A breakdown of token usage per model

4. Ask Copilot CLI to help you create a feature request issue for the calculator app:

   > ![Static Badge](https://img.shields.io/badge/CLI-Prompt-text?style=flat-square&logo=github-copilot&labelColor=8250df&color=fbefff)
   >
   > ```prompt
   > Create a GitHub issue for a Node.js CLI calculator app using the feature_request.md template
   > in markdown format that contains "calculator" in the title.
   > I want to request a feature for basic arithmetic operations including 
   > - addition
   > - subtraction
   > - multiplication
   > - division
   > The calculator should be implemented in calculator.js
   > Create the issue directly in the current owner in this session
   > and repository on github.com using the `gh` CLI commands.
   > ```

> [!NOTE]
> Copilot CLI may ask to confirm creating the issue and using `gh issue` and `git config`.
> Respond **yes** to creating the issue and
> **"Yes, and approve `gh issue` or `git config` for the rest of the running session"**.

<img width="40%" height="40%" alt="CopilotCLIPerms" src="https://github.com/user-attachments/assets/925ff1c6-a49c-4e7e-b4b3-222854e91b24" />

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you have Node.js 22+ installed: `node --version`
- If npm install fails, try: `sudo npm install -g @github/copilot`
- Make sure you have GitHub Copilot access enabled for your account
- If authentication fails, run `copilot` and run `!gh auth login`
- You can also create the issue through the GitHub UI if needed

</details>
