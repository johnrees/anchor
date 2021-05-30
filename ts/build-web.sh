#!/bin/bash
rm -rf dist
mv src/workspace.ts src/workspace.ts.bak
mv src/workspace-browser-shim.ts src/workspace.ts
yarn build
mv src/workspace.ts src/workspace-browser-shim.ts
mv src/workspace.ts.bak src/workspace.ts
