    #!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git git remote add origin git@gitee.com:adekang/morney-react-web.git &&
git push -u origin master -f
cd -