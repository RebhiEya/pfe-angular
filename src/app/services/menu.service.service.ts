import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

  export class MenuServiceService {
    private showMenu = false;

    constructor() { }

    setShowMenu(show: boolean) {
      this.showMenu = show;
    }

    getShowMenu(): boolean {
      return this.showMenu;
    }
}
