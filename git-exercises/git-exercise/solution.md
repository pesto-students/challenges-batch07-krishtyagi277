# Git Excercise insights
# 1. tree .git
Git computes the hash for your commit as well as for your files present inside the commit and save it inside the Objects folder.

# 2. 
# $ git cat-file -t c9f604c 
(type is commit, -t for checking the type hash value)
# $ git cat-file -p c9f604c 
(-p for checking the content)
tree 409feb8d4640738abd69205a1e03794a61148728
parent 632c1866b4382086541dd0939a4cbd0d843029f0
author krishtyagi277 <krishtyagi277@gmail.com> 1612940675 +0530
committer krishtyagi277 <krishtyagi277@gmail.com> 1612940675 +0530

Adding Sample.txt file
# $ git cat-file -p 409feb8d4640738abd69205a1e03794a61148728
040000 tree 29a422c19251aeaeb907175e9b3219a9bed6c616    .github
100644 blob de87b60146c6ea69dcf0e5e9bed8f718c06fc950    .gitignore
100644 blob 4fd021952d5a1d74ce03afc79643268a0480adfb    .npmrc
100644 blob fae663d3bc07c3f32d86598f6173ffa42a3e6824    README.md
040000 tree d5f75192983b00f0e882457e30b54783225a07c6    git-exercises

Basically, Your file stores as a blob and folder stores as a tree and.

# 3.
$ git ls-files -s
stagins area is the area, where your code lives. Staging area is a copy of our last commit so it contains a list of files present in the last commit with their SHA1.

# 4. git reset
 I just added my file in staging area and than git reset remove it from staging area and added in the list of untracked files.

# 5. 
$ git stash save "WIP: git-excercise related solution file"
Stash command saves the current modification of your local system and reverts it back to the working directory head.
$ git stash list
$ git stash show stash@{0}
$ git stash apply stash@{0}

# 6.
git tag basically used to mark release points or different versions of your history. So that you can easily revert back to at any point in the future easily. 
Git has two types of tags:
1. lightweight tag
2. annotated tag

1. lightweight tag is the simplest way to add tags. lightweight tags only stores the hash value of commit they pointing to.
 git tag "tag-v1.0"

# 7.
Annoated tag store some extra meta data like author name, release notes, tag-message and date as complete objects in Git db. This is data is important for the release.
git tag -a v1.1.0 -m "Releasing version v1.1.0"

# 8. git merge <Branch Name>



