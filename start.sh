#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd /opt/wayne-derry-has-no-teeth/wayne-dezza
npm install
npm run build
npm start