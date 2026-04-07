#!/bin/bash

set -e
set -x

cp src/index.html dist/index.html
cp src/styles.css dist/styles.css
cp node_modules/katex/dist/katex.min.css dist/katex.min.css
cp -r node_modules/katex/dist/fonts/ dist/fonts/ 
