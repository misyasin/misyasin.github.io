import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserIdService } from '../shared/user-id.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit, OnDestroy {
  userId: string;
  private userIdSubscription: Subscription;

  constructor(private router: Router, private userIdService: UserIdService) {}

  ngOnInit() {
    // Fetch the user ID from the service when the component is initialized
    this.userId = this.userIdService.getUserId();
    console.log('User ID:', this.userId);

    // Subscribe to the UserIdObservable to receive updates
    this.userIdSubscription = this.userIdService.getUserIdObservable().subscribe((userId) => {
      this.userId = userId;
      console.log('User ID updated:', this.userId);
      // Perform any additional actions needed when the user ID is updated
    });
  }

  navigateToHistory() {
    if (!this.userId) {
      console.log('User ID not available.');
      return;
    }
    this.router.navigateByUrl(`/tabs/history/${this.userId}`);
  }  

  goBack() {
    this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    console.log('TabsPage - OnDestroy');
    this.userIdSubscription.unsubscribe();
  }

  ionViewWillEnter() {
    console.log('TabsPage - ViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('TabsPage - ViewWillLeave');
  }
}
