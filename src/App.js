import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";
import { useEffect, useState } from "react";
import Modal from "./components/configure/Modal";

// Notification Component for push notifications every 10 seconds
const NotificationComponent = () => {
  useEffect(() => {
    const showNotification = () => {
      if (Notification.permission === "granted") {
        new Notification("Hello User!", {
          body: "This is your periodic notification.",
          icon: "path_to_icon.png", // Optional: Add an icon if needed
        });
      }
    };

    // Request notification permission if not already granted
    if (Notification.permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted!");
          // Start showing notifications every 10 seconds
          const notificationInterval = setInterval(() => {
            showNotification();
          }, 10000);

          // Cleanup interval when component unmounts
          return () => clearInterval(notificationInterval);
        } else {
          console.log("Notification permission denied.");
        }
      });
    } else if (Notification.permission === "granted") {
      // If permission is already granted, show notifications every 10 seconds
      const notificationInterval = setInterval(() => {
        showNotification();
      }, 10000);

      // Cleanup interval when component unmounts
      return () => clearInterval(notificationInterval);
    }
  }, []);

  return null; // This component doesn't render any UI
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem('hasSeenAlert');

    if (hasSeenAlert !== '1' && hasSeenAlert !== '0') {
      // Show the modal only if the user hasn't made a choice
      setShowModal(true);
    } else if (hasSeenAlert === '1') {
      // If user has agreed to notifications earlier, start them
      setShowNotifications(true);
    }
  }, []);

  const handleConfirm = () => {
    console.log('User clicked Yes');
    localStorage.setItem('hasSeenAlert', '1');
    setShowModal(false);
    setShowNotifications(true); // Start showing notifications after confirmation
  };

  const handleClose = () => {
    console.log('User clicked No');
    localStorage.setItem('hasSeenAlert', '0'); // Store '0' for No to prevent notifications
    setShowModal(false);
  };

  return (
    <div>
      <div className="App">
        <Router>
          <AppRoutes />
        </Router>
      </div>

      {showModal && (
        <Modal
          message="বিকাশ পেমেন্ট নোটিফিকেশন পেতে চান?"
          onClose={handleClose}
          onConfirm={handleConfirm}
        />
      )}

      {/* Only show notifications if user confirms */}
      {showNotifications && <NotificationComponent />}
    </div>
  );
}

export default App;
