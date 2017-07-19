import {  PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
// Our goal  is  transform passed  list of IProduct[]  into  filterList based  on what  user entered
    transform(value: IProduct[], filterBy: string): IProduct[] {

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
   // if our filterBy has  value  and is not  Null 
   //then we r  filter list 
   //otherwise  returning  original value 
        return filterBy ? value.filter((product: IProduct) =>

            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
  