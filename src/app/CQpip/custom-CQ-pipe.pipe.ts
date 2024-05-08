import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomCQ'
})
export class CustomCQPipe implements PipeTransform {

  transform(items: any, term: string, excludes: any = []): any {
    if (!term || !items) return items;
    return CustomCQPipe.filter(items, term, excludes);
  }

  static filter(
    items: Array<{ [key: string]: any }>,
    term: string,
    excludes: any
  ): Array<{ [key: string]: any }> {
    const searchTerm = new Date(term); // Convertir le terme de recherche en objet Date
    if (isNaN(searchTerm.getTime())) return items; // Vérifier si le terme de recherche est une date valide

    return items.filter(function (item) {
      // Check if the firstName property contains the search term
      if (item['date']) {
        const itemDate = new Date(item['date']);
        return itemDate.toDateString() === searchTerm.toDateString();
      }
      return false;
    });
  }
  }

