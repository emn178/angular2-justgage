# angular2-justgage
JustGage component for Angular2

## Installation
You can install angular2-justgage by using npm.
```
npm install angular2-justgage
```

## Usage
Add `JustgageModule` to your module, eg.
```JavaScript
import { JustgageModule } from 'angular2-justgage';

@NgModule({
  imports: [ JustgageModule ]
  // ...
})
export class AppModule {
}
```
And you can use selector `justgage` in your template.

JavaScript
```JavaScript
options = {
  min: 0,
  title: 'Visitors'
};
max = 100;
value = 67;
```
HTML
```HTML
<justgage [options]="options" [max]="max" [value]="value"></justgage>
```

## Options
### [options]
*object*  
To create a justgage with configuration options, simply pass an object containing your configuration to the constructor.

### [value]
*number*
Set current value.

### [max]
*number*
Set maximum value.

## License
The project is released under the [MIT license](http://www.opensource.org/licenses/MIT).

## Contact
The project's website is located at https://github.com/emn178/angular2-justgage  
Author: Chen, Yi-Cyuan (emn178@gmail.com)
