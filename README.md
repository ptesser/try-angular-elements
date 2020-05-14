# Try Angular Elements

## Info

The `@angular/elements` package provides the functionality to convert Angular Components to native Web Components using the Custom Elements API.

It uses the same mechanism behind the scenes, but hides away all the boilerplate code.

**Angular Elements** is a bridge to connect **Custom Elements** to **Angular Components**.

## Files required

Currently, Angular Elements only supports projects of type `application` to create `Custom Elements`.

This means **you need to generate an additional application**. The sole purpose of the application is to import your angular components and output them as Custom Elements.

So we need to have:

- An Angular `libary` that contains the custom Angular components to transform in Custom Elements: `ng g lib <lib-name>` (and generate all components needed)
- An Angular `application` that acts as connector in order to generate Custom Element and a single `.js` file: `ng g app <lib-name>-element` (for convention). This application hasn't any logic. It only imports library's modules.

```TypeScript

import { LibModule } from 'lib-name';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    <LibraryModule>, // --> check here
  ],
  providers: [],
  bootstrap: [], // --> check here
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // --> check here
})
export class AppModule {

  ngDoBootstrap() { // --> check here
  }
}
```

## Output file

`jscat` package will help us to concatenate the multiple files and create the output file, which will be our `<web-component>.js` file.

- Install it `npm install jscat --save-dev`.
- Add command in `package.json` (one for each library to build)

```JSON
{
  ...
  "scripts": {
    "package-lts-cart": "jscat ./dist/lts-cart-element/runtime.js ./dist/lts-cart-element/polyfills.js ./dist/lts-cart-element/scripts.js ./dist/lts-cart-element/main.js > htmlapp/lts-cart-element.js",
    "build-lts-cart": "ng build lts-cart --prod && ng build --project=lts-cart-element --prod  --output-hashing=none && npm run package-lts-cart",
    "build-all": "npm run build-lts-cart && ng build --prod"
  }
}
```

## Elements

Inside the project there are different libraries. Each lib is related to a group of related web components to generate.

- **lts-cart**: dumb elements used to manage a cart system in Vanilla JS website;


### LTS Cart


## References

- https://medium.com/angular-in-depth/angular-elements-how-does-this-magic-work-under-the-hood-3684a0b2be95
- https://medium.com/angular-in-depth/how-angular-elements-uses-custom-events-mechanism-to-transmit-components-outputs-outside-angular-7b469386f6e2
- https://developers.google.com/web/fundamentals/web-components/customelements
- https://medium.com/angular-in-depth/using-angular-elements-with-ngrx-bc655e1eb212
- https://medium.com/swlh/angular-elements-create-a-component-library-for-angular-and-the-web-8f7986a82999

------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

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
