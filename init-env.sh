#!/usr/bin/env bash

if test -f .env; then
    printf "Unable to initialize local environment variables: existing .env file detected in current working directory"
else
    touch .env
    printf 'NODE_ENV="development"\nPORT=8000\nAPI_KEY="some-randomized-hypehnated-string-ofchars"\nDB_NAME="mvc_db"\nDB_HOST="localhost"\nDB_PORT=3306\nDB_USER="root"\nDB_PASSWORD="rootp@ssw3rd"\n' >.env
fi

if test -f .gitignore; then
    printf 'Unable to initialize git ignore file: existing .gitignore file detected in current working directory'
else
    touch .gitignore
    printf 'node_modules/ \n.env' >.env
fi
