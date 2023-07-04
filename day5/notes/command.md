## installation

```bash

# windows
# download gitbash from
# https://git-scm.com/downloads

# linux - debian based - Ubuntu
> sudo apt-get install git

# linux - red hat based - Centos / RH / Fedora
> sudo yum install git

# macOS
# by default available
# to update the git version use
# first install brew from Homebrew
> brew install git

```

```bash

# initializes a git repository
> git init

# set the global settings
> git config --global --list
> git config --global user.name ""
> git config --global user.email ""

# to verify the settings
> cat ~/.gitconfig

# get the status of all the files and directories within the working directory
> git status
> git status -s

# status options
# ??: this file is not yet added to the repository (untracked file)
# A : the file is now present in the staging area
#  M: the file is modified but it is not not yet staged (not yet added to the staging area)
# M : the file is modified and it is present in the staging area
# UU: the file has got conflicts


# add the file(s) in the staging area
> git add <file name>

# add all the updated file(s) or directories
> git add .

# commit all the changes present in the staging area
> git commit -m <commit message>

# get the logs of all commits
> git log

# get the difference between the contents of a file from working directory and last recorded version from repository
> git diff <file name>

# get the last (latest) version from repository and replace it with the working directory
> git checkout <file name>

# please please please do not execute this command if you are not sure what you are doing
# please execute this command on your own risk
# get all the changes out from stage area and move them to the working directory (changes will persist)
> git reset

# please please please do not execute this command if you are not sure what you are doing
# please execute this command on your own risk
# get all the changes out from stage area and discard them
> git reset --hard

```
