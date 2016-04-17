#!/bin/zsh

git add .
echo "Commit message: "
read commit
git commit -m "$commit"
echo "dev/master? "
read repository
git push origin $repository
