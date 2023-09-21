# github-provisioner
Kaiser Permanente Provisioner Solution

### Pre-requisites:
1. Add USER_PAT into Actions secrets.
![Enable GitHub actions to create and approve pull requests](./provisioner/assets/Repo-secrets.png)
2. Make sure to enable "Allow GitHub Actions to create and approve pull requests" under "settings > Actions > General > Workflow permissions" for the repository.
![Add USER_PAT into Actions secrets](./provisioner/assets/Actions-settings.png)
### Trouble shooting:
1. If the workflow "Issue inputs, create branch and push changes" gets stuck at "Authenticate with GitHub" step then check on authorizing the PAT to access the Organization and repository, otherwise it will be waiting for authorizing process and gets stuck at Authenticating to GitHub.
2. Make sure to enable "Allow GitHub Actions to create and approve pull requests" under "settings > Actions > General > Workflow permissions" for the repository.
