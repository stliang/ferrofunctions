### ferrofunctions
Firebase functions for user account aministraction

# Getting started

Your Firebase project would have different credential and names.  So, clone this repo and follow the Firebase getting started guid.

https://firebase.google.com/docs/functions/get-started

```
OS PROMPT >> firebase init functions

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  <parent directory>/<your project>


=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: <your project> (<your project>)
i  Using project <your project> (<your project>)

=== Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/tslint.json
✔  Wrote functions/tsconfig.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes

> protobufjs@6.8.8 postinstall <parent directory>/ferrofunctions/functions/node_modules/protobufjs
> node scripts/postinstall

npm notice created a lockfile as package-lock.json. You should commit this file.
added 270 packages from 197 contributors and audited 731 packages in 8.414s
found 0 vulnerabilities


i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

✔  Firebase initialization complete!
```

After firebase function is initialized, clone the ferrofunctions project and copy the /ferrofunctions/functions/src/index.ts file to your project

# To deploy
firebase login
cd `<parent directory>/<project root directory>`
firebase deploy --only functions
Output should look like this:
```
OS PROMPT >> firebase deploy --only functions

=== Deploying to 'ferrorod'...

i  deploying functions
Running command: npm --prefix "$RESOURCE_DIR" run lint

> functions@ lint <parent directory>/ferrofunctions/functions
> tslint --project tsconfig.json

Running command: npm --prefix "$RESOURCE_DIR" run build

> functions@ build <parent directory>/ferrofunctions/functions
> tsc

✔  functions: Finished running predeploy script.
i  functions: ensuring necessary APIs are enabled...
✔  functions: all necessary APIs are enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (32.57 KB) for uploading
✔  functions: functions folder uploaded successfully
i  functions: creating Node.js 8 function initBasicRole(us-central1)...
i  functions: creating Node.js 8 function userRole(us-central1)...
✔  functions[userRole(us-central1)]: Successful create operation. 
Function URL (userRole): https://us-central1-ferrorod.cloudfunctions.net/userRole
✔  functions[initBasicRole(us-central1)]: Successful create operation. 

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/ferrorod/overview
```
