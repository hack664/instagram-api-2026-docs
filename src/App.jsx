import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import InstagramDocs from "./pages/InstagramDocs";
import ChangeLogs from "./pages/ChangeLog";

function App() {
  return (
    <>
      {/* TOP NAV */}
      <nav className="p-4 bg-gray-900 text-white flex gap-6">
        <Link to="/">API Docs</Link>
        <Link to="/changelogs">Change Logs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<InstagramDocs />} />
        <Route path="/changelogs" element={<ChangeLogs />} />
      </Routes>
    </>
  );
}

export default App;
