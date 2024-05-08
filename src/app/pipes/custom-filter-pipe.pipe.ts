import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(items: any, term: string, excludes: any = []): any {
    if (!term || !items) return items;
    return CustomFilterPipe.filter(items, term, excludes);
  }

  static filter(
    items: Array<{ [key: string]: any }>,
    term: string,
    excludes: any
  ): Array<{ [key: string]: any }> {
    const toCompare = term.toLowerCase();

    return items.filter(function (item) {
      // Check if item and item['firstName'] are not null
      if (item && item['firstName']) {
        // Check if the firstName property contains the search term
        return item['firstName'].toLowerCase().startsWith(toCompare);
      }
      return false; // Exclude items with null firstName
    });
  }
}
