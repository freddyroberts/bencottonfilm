npm run build && npm run templates
git push -f git@github.com:freddyroberts/bencottonfilm.git master:develop
cp ./source/CNAME ./public
cp ./source/templates/sitemap.xml ./public
cd public
git init
git add -A
git commit -m 'publish'
git push -f git@github.com:freddyroberts/bencottonfilm.git master:gh-pages
cd ../
echo "THE DEPLOY IS COMPLETE"