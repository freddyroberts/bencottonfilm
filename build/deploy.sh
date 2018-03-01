git checkout production
npm version patch
npm run build && npm run templates
cp ./source/CNAME ./public
cp ./source/templates/sitemap.xml ./public
cd public
git init
git add -A
git commit -m 'publish'
git push -f git@github.com:freddyroberts/bencottonfilm.git master:gh-pages
cd ../
npm run build
echo "THE DEPLOY IS COMPLETE"