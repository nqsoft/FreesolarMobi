## Welcome to the App With RN Typescript

> How to build

- Install react native
  https://facebook.github.io/react-native/docs/getting-started
- Create new project
  `npx react-native init <yourProjectName> --template react-native-template-typescript`
- Copy all file and folder to your project without `package.json` file
- Copy `dependencies` from `package.json` to your `package.json` file

- Install package
  `npm install` or
  `yarn install`(recommended)
- Run your app
  `react-native run-android/ios` or
  `npx react-native run-android/ios`yarn-android/ios`or`npm run-android/ios`

### Command line instructions

- You can also upload existing files from your computer using the instructions below.

### Git global setup

- git config --global user.name "username"
- git config --global user.email "email";

### Create a new repository

- git clone git@gitlab.com:twinger/son-ha/sonha-app-mobile.git
- cd sonha-app-mobile
- touch README.md
- git add README.md
- git commit -m "add README"
- git push -u origin master

### Push an existing folder

- cd existing_folder
- git init
- git remote add origin git@gitlab.com:twinger/son-ha/sonha-app-mobile.git
- git add .
- git commit -m "Initial commit"
- git push -u origin master

### Push an existing Git repository

- cd existing_repo
- git remote rename origin old-origin
- git remote add origin git@gitlab.com:twinger/son-ha/sonha-app-mobile.git
- git push -u origin --all
- git push -u origin --tags
