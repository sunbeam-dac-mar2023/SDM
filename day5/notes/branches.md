## branching

```bash

# by default git always will create a new branch (along with the first commit) named main branch
# the main branch
# - should contain the latest code
# - should contain working code
# - should contain bug-free code
# - should contain crash-free code
# - should contain stable code

# current branch
# - which is used to create new versions
# - all the commits will go to this branch

# get the current branch
> git status

# get the list of branches
# the branch which has * in front of the name is the current branch
> git branch

# create a new branch
> git branch <branch name>

# checkout new branch
> git checkout <branch name>

# merge changes from other branch
# merges all the changes from other branch to the current branch
> git merge <other branch name>

# delete a branch
> git branch -d <branch name>

# get the logs in better way
> git log --oneline --graph --color

# create a new branch and checkout immediately
> git checkout -b <new branch name>

```

## merge conflict

- when two branches have added / updated the same file on the same line then the merge will generate a conflict
- a scenario where git does not understand how to merge the changes
- and gives the control in users hand
- the merge conflict(s) must be handled manually
