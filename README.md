# AngularInv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

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

## Video Introductorio a Jasmine y Karma
https://www.youtube.com/watch?v=yG4FH60fhUE
## Correr el proyecto
Intrucciones

Windows
# instalar nodejs
https://nodejs.org/en/

# instalar angular
abrir cmd o Powershell
npm install -g @angular/cli
https://angular.io/cli

# instalar postgreSQL
https://www.postgresql.org/download/
crear la base de datos con el script incluido en la carpeta de documentos que se encuentra en el proyecto

ingresar a la carpeta del proyecto por medio de cmd o powershell(En windows) o una terminal (en linux)
npm install
para que las dependencias del proyecto se instalen

# correr el proyecto en modo normal
ng serve
# correr el proyecto en modo de testeo
ng test
# agregando modulo para mostrar la informacion de testeo
npm i karma-spec-reporter --save-dev
# modulo para hacer el deploy del proyecto

npm install -g angular-cli-ghpages

## Instrucciones de desarrollo

crear una carpeta para el proyecto
crear una carpeta para guardar el backend de la aplicacion 
ingresar en la carpeta de backend y generar el archivo package.json
npm init -y

# instalar los modulos para manejar el servidor

express  //para controlar los servicios de la rest api
morgan  //monitorear los movimientos hechos en tiempo real del servidor
promise-pg //modulo para el control de bases postgresql
cors // para poder utilizar multiples conexiones a servidores angular-nodejs
npm i express morgan promise-pg cors

# instalar typescript(por si no esta instalado)

npm i -g typescript

# crear el archivo de configuracion de typescript tsconfig.json

tsc --init

cambiar el target en el archivo tsconfig.json por es2018,la version mas reciente de typescript que utiliza angular
descomentar la opcion outDir y escribir "./build" //para guardar el archivo de salida cuando se compila el codigo

# para testear el codigo

tsc // compila el ts y lo pasa a js

# probando el codigo generado

node build/index.js

# automatizar el proceso de compilado

nos vamos al archivo package.json y en el atributo scripts ingresamos un comando llamado "build":"tsc -w"

# probando el comando

npm run build

# automatizar el proceso de ejecucion

nodemon //modulo para la ejecucion en espera del archivo js
npm i nodemon -D
luego se agrega otro comando con el nombre "dev":"nodemon build/index.js"
con esto tendriamos un comando para la vigilancia de compilacion y otra de ejecucion de los cambios hechos

# corriendo el servidor

npm run dev

# instalando los tipos para que typescript los reconozca

npm i @types/express -D

# instalar las dependencia de tipo de morgan y cors

npm i @types/morgan @types/cors


