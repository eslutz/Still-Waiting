import { Component, inject } from '@angular/core';
import { ItemsWaitingService } from '../services/items-waiting.service';

let omnipodTimer: NodeJS.Timeout;
let timeSpentWaiting: string;

@Component({
  selector: 'app-omnipod-ios-app',
  standalone: true,
  imports: [],
  templateUrl: './omnipod-ios-app.component.html',
  styleUrl: './omnipod-ios-app.component.scss',
})
export class OmnipodIosAppComponent {
  itemsWaitingService: ItemsWaitingService;
  constructor() {
    this.itemsWaitingService = inject(ItemsWaitingService);
  }

  async ngOnInit() {
    const item = await this.itemsWaitingService.getItemStatus('omnipod_5_ios_app');

    // Update the total elapsed time every 1 second.
    omnipodTimer = setInterval(() => {
      if (!item.released) {
        timeSpentWaiting = this.itemsWaitingService.getTimeElapsed();
          document.getElementById('elapsedTime')!.innerHTML = timeSpentWaiting;
      } else {
        timeSpentWaiting = this.itemsWaitingService.getTimeElapsed(new Date(item.releaseDate).getTime());
        document.getElementById('elapsedStart')!.innerHTML = 'It finally happened! The app has been released and it only took';
        document.getElementById('elapsedTime')!.innerHTML = timeSpentWaiting;
        document.getElementById('elapsedEnd')!.innerHTML = "since the start of 2024. It's about time!";
        clearInterval(omnipodTimer);
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(omnipodTimer);
  }
}
