import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'isEven'
})
export class isEvenPipe implements PipeTransform{
    transform(value: any){
        let isEven=' its odd';
        if(value %2==0){
            isEven=' its even';
        }
        return 'The year '+value+isEven;
    }
}