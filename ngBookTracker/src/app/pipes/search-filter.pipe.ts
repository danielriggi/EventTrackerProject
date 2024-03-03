import { Pipe, PipeTransform } from '@angular/core';
import { Author } from '../models/author';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(objs: any[], searchText: string): any[] {
    if (!objs) {
      return [];
    }
    if (!searchText) {
      return objs;
    }
    searchText = searchText.toLowerCase();
    return objs.filter(obj => obj && obj.name && obj.name.toLowerCase().includes(searchText));
  }
}
