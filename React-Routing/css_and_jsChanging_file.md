"css:clean": "rm -f public/css/*",
"css:compile": "node-sass --source-map public/css/app.css.map --output-style compressed -o public/css/ resources/css/app.scss",
"css:rev": "node-file-rev public/css/app.css --manifest=public/rev-manifest.json --root=public/",
"build:css": "npm run css:clean && npm run css:compile && npm run css:rev",
"build:css:watch": "onchange -i 'resources/css/*.scss' 'resources/css/*/*.scss' -- npm run build:css",

"build:js:watch": "onchange -i 'resources/js/*.ts' 'resources/ts/*/*.ts' -- npm run build:js",
"build:js": "npm run js:clean && npm run js:compile && npm run js:rev && npm run js:move",
"js:clean": "rm -f public/js/*",
"js:move": "cp $npm_package_config_moveFilesJs public/js/",
"js:compile": "rollup --config",
"js:rev": "node-file-rev public/js/*.js --manifest=public/rev-manifest.json --root=public/"

//Json Orignal Files
    "start:dev": "concurrently \"npm start\" \"npm run json-server\"",
    "build": "react-scripts build",