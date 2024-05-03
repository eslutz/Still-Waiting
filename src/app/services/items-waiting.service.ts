import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsWaitingService {

  constructor() { }

  async getItemStatus(itemId: string): Promise<Item> {
    const url = 'https://stillwaiting-api.azurewebsites.net/api/itemstatus';
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: itemId })
    };

    const item: Promise<Item> = await fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

    return item;
  };

  // Computes and returns the time elapsed since the start date as a string.
  getTimeElapsed(date?: number): string {
    // Set the date being counting from.
    const startDate = new Date('Jan 1, 2024 00:00:00').getTime();

    // If no date is provided, use the current date.
    if (date === undefined) {
        date = new Date().getTime();
    }

    // Find the distance between the current or app release date and the start date.
    const distance = date - startDate;

    // Time calculations for days, hours, minutes, and seconds.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Return the time elapsed in a formatted string.
    return days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
  };
}
