import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./route/AppRoutes";
import { useEffect, useState } from "react";
import Modal from "./components/configure/Modal";
function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenAlert = localStorage.getItem('hasSeenAlert');

    if (!hasSeenAlert) {
      setShowModal(true);
      // localStorage.setItem('hasSeenAlert', true);
    }
  }, []);

  const handleConfirm = () => {
    console.log('User  clicked Yes');
    localStorage.setItem('hasSeenAlert', true);
    setShowModal(false);
  };

  const handleClose = () => {
    console.log('User  clicked No');
    localStorage.setItem('hasSeenAlert', false);
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
    </div>
  );
}
export default App;
