import Layout from "@layouts/app.layout";

import List from "@pages/[slug]";

import { Routes, Route, Navigate } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<List />} />
        <Route path="/:slug" element={<List />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
