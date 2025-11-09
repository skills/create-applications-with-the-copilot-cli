## Step 1: Install Copilot CLI and Create an Issue Template

Duck is getting ready to manage development for the Node.js calculator app and wants to install Copilot CLI and set up an issue template.

### 📖 Theory: GitHub Copilot CLI and Issue Templates

**What is GitHub Copilot CLI?**

GitHub Copilot CLI is a command-line interface that brings the power of GitHub Copilot to your terminal. It helps developers by:
- Providing intelligent command suggestions
- Generating code snippets and scripts
- Assisting with Git operations and GitHub interactions
- Offering contextual help and documentation

**Issue Templates**

Issue templates help maintain consistency when team members create issues. They ensure that:
- All necessary information is captured upfront
- Issues follow a standard format
- Common sections (like steps to reproduce, expected behavior) are included
- The team can triage and respond to issues more efficiently

Using Copilot CLI can help you quickly create well-structured issue templates with intelligent suggestions.

**References:**
- [Using GitHub Copilot in the command line](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)
- [Creating issue templates for your repository](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-issue-templates-for-your-repository)

### ⌨️ Activity 1: Install Copilot CLI

1. Open your Codespace (if not already open)
1. Install the GitHub Copilot CLI extension by running:
   ```bash
   gh extension install github/gh-copilot
   ```
1. Authenticate Copilot CLI with your GitHub account:
   ```bash
   gh auth login
   ```
1. Follow the prompts to complete authentication

> [!TIP]
> After authentication, you can use `gh copilot` to access Copilot in your terminal!

### ⌨️ Activity 2: Create an Issue Template

1. Create the directory for issue templates:
   ```bash
   mkdir -p .github/ISSUE_TEMPLATE
   ```
1. Create a bug report template file at `.github/ISSUE_TEMPLATE/bug_report.md` with the following sections:
   - **Description**: What is the bug?
   - **Steps to Reproduce**: How to reproduce the issue
   - **Expected Behavior**: What should happen
   - **Actual Behavior**: What actually happens
   - **Additional Context**: Any other relevant information

   You can ask Copilot CLI for help creating this template by using: `gh copilot suggest "create a bug report template"`

1. Once you've created the template, commit and push it to the repository:
   ```bash
   git add .github/ISSUE_TEMPLATE/bug_report.md
   git commit -m "Add bug report issue template"
   git push
   ```

> [!NOTE]
> When you push the template, the workflow will automatically verify your work and prepare the next step!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you have GitHub Copilot access enabled for your account
- If `gh extension install` fails, try updating GitHub CLI: `gh upgrade`
- The bug report template should be a markdown file with clear section headers
- You can manually create the template if Copilot CLI suggestions aren't working
- Make sure to push your changes for the workflow to detect them

</details>
