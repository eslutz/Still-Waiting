let timeSpentWaiting;
let appReleased = false;

// Update the count down every 1 second.
const timeElapsed = setInterval(function () {
    isAppReleased().then(result => {
        if (result) {
            appReleased = true;
            timeSpentWaiting = computeTimeElapsed();
            clearInterval(timeElapsed);
        } else {
            timeSpentWaiting = computeTimeElapsed();
            // Output the result in an element with id='elapsedTime'.
            document.getElementById('elapsedTime').innerHTML = timeSpentWaiting;
        }
    });
}, 1000);

// Compute the time elapsed since the start date.
const computeTimeElapsed = () => {
    // Set the date being counting from.
    const startDate = new Date('Jan 1, 2024 00:00:00').getTime();

    // Get today's date and time.
    const now = new Date().getTime();

    // Find the distance between now and the count down date.
    const distance = now - startDate;

    // Time calculations for days, hours, minutes and seconds.
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Return the time elapsed in a formatted string.
    return days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
};

// Search the app store for apps released by developer.
const searchAppStore = async () => {
    const url = 'https://itunes.apple.com/search?term=Insulet&country=us&entity=software';

    const response = fetch(url)
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

    return response;
};

const isAppReleased = async () => {
    const appName = 'Omnipod® 5 App';

    const appSearchResponse = await searchAppStore();
    const appSearchResult = appSearchResponse.results.find(result => result.trackName === appName);

    return appSearchResult !== undefined;
};
