const appName = 'Omnipod® 5 App'; // Set the app to search for.
const apiCallDelay = 60; // Set the delay to 60 seconds.
let delayCounter = 0;
let timeSpentWaiting;

const pageLoad = setInterval(function () {
    console.log(delayCounter);
    // Every 60 seconds, check if the app has been released.
    if (delayCounter === 0) {
        searchAppStore().then(apps => {
            const app = apps.results.find(response => response.trackName === appName);
            if (app !== undefined) {
                timeSpentWaiting = computeTimeElapsed(new Date(app.releaseDate).getTime());
                document.getElementById('elapsedStart').innerHTML = 'It finally happened! The app has been released and it only took';
                document.getElementById('elapsedTime').innerHTML = timeSpentWaiting;
                document.getElementById('elapsedEnd').innerHTML = "since the start of 2024. It's about time!";
                clearInterval(pageLoad);
            }
        }).finally(() => {
            delayCounter = apiCallDelay;
        });
    } else { // Update the total elapsed time every 1 second.
        timeSpentWaiting = computeTimeElapsed();
        document.getElementById('elapsedTime').innerHTML = timeSpentWaiting;
        delayCounter -= 1;
    }
}, 1000);

// Compute the time elapsed since the start date.
const computeTimeElapsed = (date) => {
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

// Search the app store for apps released by Insulet.
const searchAppStore = async () => {
    const url = 'https://itunes.apple.com/search?term=Insulet&country=us&entity=software';
    const options = {
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
            document.getElementById('elapsedTime').innerHTML = 'Unable to determine time elapsed. Please try again later.';
    });

    return apps;
};
