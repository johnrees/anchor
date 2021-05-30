#!/bin/bash
rm -rf dist

mv src/workspace.ts src/workspace.ts.bak
mv src/node_wallet.ts src/node_wallet.ts.bak

cp src/browser_shims.ts src/workspace.ts
cp src/browser_shims.ts src/node_wallet.ts

yarn build

mv src/workspace.ts.bak src/workspace.ts
mv src/node_wallet.ts.bak src/node_wallet.ts
