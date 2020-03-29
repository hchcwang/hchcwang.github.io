#! /bin/bash

git init
git config --local user.email x_metal@outlook.com
git remote add origin git@github.com:hchcwang/hchcwang.github.io.git
git add .
time=$(date +"%Y-%m-%dT%H:%M:%SZ")
git commit -m "update: $time"
git push origin master --force
