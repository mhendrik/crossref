import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashify'
})
export class DashifyPipe implements PipeTransform {

  transform(value: any, repleceText: string = ' - '): any {
    if (typeof value === 'undefined' || value === null || value === '') {
      return repleceText;
    }
    return value;
  }

}
