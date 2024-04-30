function requestNotificationPermission() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
        return;
    }

    // Check the current notification permission status
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                console.log("Notification permission granted");
            } else {
                console.log("Notification permission denied");
            }
        });
    }
}

// Function to schedule a notification
function scheduleNotification(date, message) {
    // Request permission if not granted already
    requestNotificationPermission();

    // Calculate time until the notification should be shown
    const currentTime = new Date().getTime();
    const scheduledTime = date.getTime();
    const timeUntilNotification = scheduledTime - currentTime;

    // Check if the scheduled time is in the past
    if (timeUntilNotification <= 0) {
        console.log("Scheduled time is in the past");
        return;
    }

    // Set timeout to show notification at scheduled time
    setTimeout(function () {
        const notification = new Notification("Notification", {
            body: message
        });
    }, timeUntilNotification);
}

