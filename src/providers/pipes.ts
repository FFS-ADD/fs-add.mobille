import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberFormat'})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value > 1000) {
        var formatValue = value / 1000;
        var transformValue = formatValue.toFixed(1);
        var pos_decimal = transformValue.split('.');
        if (pos_decimal[1] === "0") {
            return pos_decimal[0] + 'k';
        }
        return formatValue.toFixed(1) + 'k';
    }
    return value + '';
  }
}
