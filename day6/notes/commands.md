## remote repo connection

- local repository
  - the one which resides on the users machine
- remote repository
  - the one which resides on the remote server (shared server) like GitHub or GitLab
  - also known as shared repository

```bash

# get the info of remote repository
> git remote -v

# link the remote repository with local one
# > git remote add <alias> <remote repository url>
> git remote add origin git@github.com:<username>/test-dac-repo.git

# share the changes from local to remote
# > git push <alias> <branch>
> git push origin main

# u: upstream
# once set, by default git will use the origin as alias and main as the branch
> git push -u origin main

# first time setup (get all the changes from server to local)
> git clone <url>

# get all the changes from server to local (all the times)
> git pull

```
