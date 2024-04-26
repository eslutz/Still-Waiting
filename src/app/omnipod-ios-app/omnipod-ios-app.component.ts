import { Component, inject } from '@angular/core';
import { OmnipodItunesSearchResponse } from '../models/omnipod-itunes-search-response';
import { ItemsWaitingService } from '../services/items-waiting.service';

const appName = 'Omnipod® 5 App'; // Set the app to search for.
const apiCallDelay = 60; // Set the delay to 60 seconds.
let delayCounter = 0;
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

  ngOnInit() {
    omnipodTimer = setInterval(() => {
      // Every 60 seconds, check if the app has been released.
      if (delayCounter === 0) {
        searchAppStore().then((apps: OmnipodItunesSearchResponse) => {
          const app = apps.results.find((app) => app.trackName === appName);
          if (app !== undefined) {
            timeSpentWaiting = this.itemsWaitingService.getTimeElapsed(new Date(app.releaseDate).getTime());
            document.getElementById('elapsedStart')!.innerHTML = 'It finally happened! The app has been released and it only took';
            document.getElementById('elapsedTime')!.innerHTML = timeSpentWaiting;
            document.getElementById('elapsedEnd')!.innerHTML = "since the start of 2024. It's about time!";
            clearInterval(omnipodTimer);
          }
        }).finally(() => {
          delayCounter = apiCallDelay;
        });
      } else { // Update the total elapsed time every 1 second.
          timeSpentWaiting = this.itemsWaitingService.getTimeElapsed();
          document.getElementById('elapsedTime')!.innerHTML = timeSpentWaiting;
          delayCounter -= 1;
      }
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(omnipodTimer);
  }
}

// Search the app store for apps released by Insulet.
const searchAppStore = async () => {
  const url = 'https://itunes.apple.com/search?term=Insulet&country=us&entity=software';
  const options = {
      mode: 'no-cors' as RequestMode,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };

  const apps = fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return apps;
};
