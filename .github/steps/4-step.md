## Step 4: Create, Review, and Merge Your Pull Request

Duck is ready to finalize the development work by creating a pull request, linking it to both issues, getting a review from Copilot, and merging the changes—all from the command line with Copilot CLI.

### 📖 Theory: Pull Requests and Code Review with Copilot CLI

#### Understanding Pull Requests (PRs)

Pull requests are the standard way to propose changes in collaborative development:

- They allow team members to review code before merging
- They maintain a history of changes and decisions
- They can be linked to issues for better project tracking
- They enable automated testing and validation through CI/CD

#### Connecting PRs to Issues

Linking pull requests to issues helps with project management:

- Closes issues automatically when the PR is merged
- Provides traceability between work items and code changes
- Helps track progress through the development lifecycle
- Improves team communication about what's being built

#### Code Review with AI Assistance

GitHub Copilot can act as a reviewer to:

- Suggest improvements to code quality
- Identify potential bugs or edge cases
- Recommend best practices and design patterns
- Provide constructive feedback on implementation

The Copilot CLI enables you to:

- Create pull requests directly from the terminal
- Request reviews from Copilot or team members
- Merge changes without leaving the CLI
- Automate the entire workflow for faster iteration

#### References

- [Creating Pull Requests with GitHub CLI](https://cli.github.com/manual/gh_pr_create)
- [Linking Issues and PRs](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
- [GitHub Copilot as a Code Reviewer](https://docs.github.com/en/copilot/best-practices-for-using-github-copilot/best-practices-for-code-review-with-github-copilot)

> [!IMPORTANT]
> If you have restarted your codespace you may need to run `copilot --allow-all` and then authenticate with GitHub again by running `!gh auth login` in your terminal,
> or use `!gh auth login` from within the Copilot CLI session.

### ⌨️ Activity: Complete Your Pull Request Workflow

1. Start an interactive Copilot CLI session:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > copilot
   > ```

2. Create a pull request for your changes and add Copilot as a reviewer:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Create a pull request from the current branch with a title "Add calculator enhancements" 
   > and description that includes the main changes: basic calculator operations and expanded 
   > functionality with modulo, power, and square root. Make sure to add @copilot as a reviewer 
   > and request a review on the PR.
   > ```

3. Attach the pull request to both issues you created earlier:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Link the pull request I just created to both the "Create a calculator" and 
   > "Add more operations" issues so they close automatically when merged.
   > ```

> [!TIP]
> You can manually link issues by adding "Closes #<issue-number>" in the PR description,
> or use GitHub CLI commands like `gh pr edit` to manage the linkage.

4. Review the pull request status:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Check the status of the pull request, show any reviews from Copilot or other reviewers, 
   > and confirm that both issues are linked to the PR.
   > ```

5. Merge the pull request to complete your work:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Merge the pull request using a squash merge strategy and delete the branch after merging. 
   > This will automatically close both linked issues.
   > ```

> [!NOTE]
> When you merge a PR that's linked to issues using "Closes #<issue-number>",
> GitHub automatically closes those issues. The squash merge option keeps your
> main branch history clean.

6. Verify that both issues are now closed:

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > List the closed issues in the repository to confirm both the "Create a calculator" 
   > and "Add more operations" issues are now closed.
   > ```

> [!TIP]
> Use `/share gist` in your Copilot CLI session to save your entire workflow conversation 
> as a Markdown file or GitHub gist for documentation and future reference!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you've committed and pushed all your changes before creating the PR
- Verify your GitHub authentication with `gh auth status` or `!gh auth status` in Copilot CLI
- If the PR creation fails, check that you're on a branch different from main/master
- To manually link an issue, edit the PR description to include "Closes #<issue-number>"
- You can view PR details with `!gh pr view` or `!gh pr list` to see your PRs
- For issues that don't close automatically, link them manually in the GitHub web interface
- Remember to check that Copilot's review has been submitted before merging
- Use `!gh pr merge --squash` to merge with a clean history

</details>
