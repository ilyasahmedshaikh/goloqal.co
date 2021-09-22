# goloqal.co
goloqal.co web app

# Serve ng App on port
ng serve --host 0.0.0.0

# check app port
ipconfig
<!-- 192.168.0.109:4200 -->

# Setup FIrebase in angular app
1. npm install firebase
2. ng add @angular/fire
3. add config in environment file
4. import the angularFire module in app.module

# deploy build with github-pages
https://efficientuser.com/2021/03/04/how-to-deploy-angular-app-on-github-pages-for-free/

> ng deploy --base-href=REPO_NAME

# deploy firebase
https://medium.com/@treviergits/how-to-deploy-an-angular-7-app-on-firebase-hosting-30341f3bcb22

> ng build --prod --base-href "./"
> firebase deploy