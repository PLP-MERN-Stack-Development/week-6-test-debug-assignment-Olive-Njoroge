// App.jsx
import React from "react";
import BugForm from "./components/BugForm";
import ErrorBoundary from "./components/ErrorBoundary"; // Optional

function App() {
  return (
    <div className="app-container">
      <h1>🐛 Bug Tracker</h1>

      <ErrorBoundary>
        <BugForm />
      </ErrorBoundary>
    </div>
  );
}

export default App;
