#!/bin/zsh

git add .
printf "Commit message: "
read commit
git commit -m "$commit"
printf "dev/master? "
read repository
git push origin $repository
