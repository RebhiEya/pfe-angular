import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {
  data: any; // Utilisez la variable de classe ici
  showComment: boolean = false;

  constructor(private dataService: DataService ,
      private router: Router ,
      private route: ActivatedRoute) {}

  async ngOnInit() {
    await this.loadData();
    }

  async loadData() {
    this.data = await this.dataService.getAllControls();
    this.data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

    console.log(this.data);
  }
}
