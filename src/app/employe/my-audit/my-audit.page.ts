import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';



@Component({
  selector: 'app-my-audit',
  templateUrl: './my-audit.page.html',
  styleUrls: ['./my-audit.page.scss'],
})
export class MyAuditPage implements OnInit {
  data: any[] = []; // Initialize data as an empty array
  showComment: boolean = false;

  constructor(
 
    private router: Router,
    private popoverController: PopoverController,
   
  ) {}

  async ngOnInit() {

  }

 
  sortDataByDateDescending() {
    this.data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  onChecklistClick() {
    // Action à effectuer lors du clic sur Checklist
  }

  onDefautClick() {
    // Action à effectuer lors du clic sur Défaut
  }

  navigate(auditId: any) {
    this.router.navigate(['/checklist', auditId]);
  }

  navigateToDefects(auditId: any) {
    this.router.navigate(['/defaut', auditId]);
  }

  callTeam() {}

  toggleComment() {
    this.showComment = !this.showComment;
  }

  openAttachment() {}

  navigateToChecklists(auditId: any) {
    this.router.navigate(['/checklist', auditId]);
  }

  navigateToFILE(auditId: any) {
    this.router.navigate(['/file', auditId]);
  }

  redirectToProcessPage() {
    this.router.navigate(['/process']);
  
  }

  redirectToTeamPage(auditId: any) {
    this.router.navigate(['/team', auditId]);
  }

  redirectToFilesPage(auditId: any) {
    this.router.navigate(['/files', auditId]);
  }

  redirectToUpdatePage(id: any) {
    this.router.navigate(['/updateaudit', id]);
  }


}
