# Controlpanel Docs
The official controlpanel docs. in the root directory, I’ve included a simple node.js web server for easy deployment. for local development, you can just hop into the 'docs' folder and run the local dev server.

## Local development
### Install node_modules for docs
```bash
cd docs/
npm install
```

### Run development server
```bash
npm run start
```

## Deploy webserver
You will need to install the node_modules for both the webserver and the docs and build the documentation files.

### Install modules
```bash
#webserver
npm install

#docs
cd docs/
npm install
```

### Build the docs files
```bash
#make sure you are in the 'docs' folder
npm run build
```

### Start the webserver
```bash
#we cd back to the root directory
cd ../
npm start
```

## Docs made with Docusaurus
For more info checkout [Docusaurus](https://docusaurus.io/ "Docusaurus")


