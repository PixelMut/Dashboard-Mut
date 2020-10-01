# DashboardMut

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

All of the components are declared in the shared module and not appmodule

# Steps :
# --------------------------
## Pre-required :
- Install angular material : npm i @angular/material && ng add @angular/material
- Install highcharts : npm i highcharts-angular && npm i highcharts
- Other dependencies :  npm i @angular/flex-layout @angular/cdk --save

# --------------------------
## Step 1 :
- Create the first layout ( ng g c layouts/default, ng g m layouts/default )
- Create a component for the dashboard (ng g c modules/dashboard)
- Use routes for parent and children component ( dashboard )
- Create the Header / Sidebar / Footer components
- Create a shared Module
- Update the module to add those components (declaration and export sections)
- Organize the sidebar organization
- Arrange the Footer / Header UI
- Create and arrange Sidebar UI
- Make the menu button work

# ---------------------------
## Step 2 :
- Importation of Highcharts elements
- Creation of widgets ( nested components )
- Sharing/export of components
- Implementation of charts

# ------------------------------
# ------------------------------

# Big Project :
- install bulma css : npm install bulma
- Creation of main-styles.css and custom scss
- header styling ( color ), possibility to change between custom bulma css and default angular material css (styles.scss)

## Implementation of Tic-Tac-Toe 
- Added components square & board
- Modification of UI & UX
- Added Dialog, global point count & reset button

## Implementation of Covid-19 Tracker
- Added bootstrap lib for style (index.html)
- Installed bootstrap (npm i ngx-bootstrap )
- Installed Google charts ( npm i angular-google-charts )
- Added Components and Service to project
- npm install ngx-pagination --save

## Implementation of Login Process
- Added Backend link
- Added Authentication Service
- Added Token system
- Added Interceptor for HTTP Request - With possibility to skip

## Implementation of Task Manager
- Added Main page 
- Added modals for edit & creation
- Custom CSS
- Usage of interceptor for http request, with refresh token

## Implementation of Budget Manager 
- Added Components
- Custom CSS

## Implementation of Kanban
- npm install @angular/cdk --save
- Added main view component
- Custom CSS

## Home page 
- Hero Class for sections
- Smooth scroll : https://www.npmjs.com/package/ngx-page-scroll

--------------------------------
When creating new component : delete the declaration from app module and add it to shared module (declaration and exports)

---------------------------------
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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
