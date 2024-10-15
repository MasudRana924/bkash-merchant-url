import React, { useEffect } from "react";

const NotificationComponent = () => {
  useEffect(() => {
    // Check and request notification permission
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Permission granted!");
        } else {
          console.log("Permission denied!");
        }
      });
    }

    // Function to show the notification
    const showNotification = () => {
      if (Notification.permission === "granted") {
        new Notification("Hello User!", {
          body: "This is your periodic notification.",
          icon: "path_to_icon.png", // optional
        });
      }
    };

    // Set an interval to show the notification every 10 seconds
    const notificationInterval = setInterval(() => {
      showNotification();
    }, 10000); // 10000ms = 10 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(notificationInterval);
  }, []); // Empty dependency array means it runs only on mount

  return null; // This component doesn't render anything
};

export default NotificationComponent;
