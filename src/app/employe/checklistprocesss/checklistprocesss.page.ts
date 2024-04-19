import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checklistprocesss',
  templateUrl: './checklistprocesss.page.html',
  styleUrls: ['./checklistprocesss.page.scss'],
})
export class ChecklistprocesssPage implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goTomyprocessPage() {
    this.router.navigate(['/process']); // Assurez-vous que '/process' est le chemin de votre page de processus
  }

}
