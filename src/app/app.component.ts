import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  teamData: any;
  controlId: string = '';

  constructor(private storage: Storage, private router: Router , private dataService: DataService,  private route: ActivatedRoute) {}

  async ngOnInit() {
    await this.storage.create();

    // Check if the value is already in storage
    const storedValue = await this.storage.get('name');

    if (storedValue ) {
      // If the value is present, navigate to tab3
      this.router.navigate(['/tab2']);
    }
    else {
      // If the value is not present, navigate to tab1
      this.router.navigate(['/tab1']);
    }
  }

   // Define the signOut method
   signOut() {
    // Implement your sign-out logic here
    console.log('User signed out');
  }
  logout() {
  }

  navigateToteam(controlId: any){
    this.router.navigate(['/mycontrol', controlId]);
  }

}
