# milwaukee-bonsai-society-angular-mock-up
A mock-up of www.milwaukeebonsai.org modernized using the Angular Framework and Angular Material Components.

# Deployment
In order to deploy this application one must first have an active AWS account as well as an S3 bucket. An AWS_ACCESS_KEY_ID can be retrieved from the IAM service after a user has been created. This project uses [@jefiozie/ngx-aws-deploy:deploy](https://github.com/Jefiozie/ngx-aws-deploy) while following the [Angular Deployment Docs](https://angular.io/guide/deployment#automatic-deployment-with-the-cli)

Use these commands with the following example script to deploy to your AWS S3 Bucket of choice
```bash
npx cross-env NG_DEPLOY_AWS_ACCESS_KEY_ID=MY_AWS_ACCESS_KEY_ID NG_DEPLOY_AWS_SECRET_ACCESS_KEY=MY_AWS_SECRET_ACCESS_KEY NG_DEPLOY_AWS_BUCKET=mys3bucket NG_DEPLOY_AWS_REGION=us-east-2 ng deploylar-mock-up>
```

# MilwaukeeBonsaiSocietyAngularMockUp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
