# MyTourOfHeroesAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

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

## notes

### ngModel

- ngModel 指令可以实现双向数据绑定
- ngModel 属于可选模块 FormsModule，必须自行添加此模块才能使用该指令

```
import { FormsModule } from '@angular/forms';
```

### Angular 只会绑定到组件的公共属性

### 在组件的 ngOnInit 生命周期钩子中调用 HeroService 方法，而不是构造函数中。
