# 請直接使用在 develop
# 切換 gh-pages 分之
git checkout gh-pages

git rebase develop

git commit --allow-empty 'chore: deploy'

git push origin gh-pages

