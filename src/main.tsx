import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// @ts-ignore
import AuthProvider from "./context/AuthProvider.tsx";
import PrivateRoutes from "./utils/PrivateRoutes.tsx";
import Login from "./components/login.tsx";
import Register from "./components/register.tsx";
import Home from "./pages/home.tsx";
import Test from "./components/test.tsx";
import BuildSurvey from "./pages/buildSurvey.tsx";
import SurveyResponsesPage from "./pages/surveyResponsesPage.tsx";
import { CookiesProvider } from "react-cookie";
import TestResponsesTable from "./components/responsesTable/testResponsesTable.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <AuthProvider>
            <Router>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/test" element={<Home />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/build/:survey_id" element={<BuildSurvey />} />
                </Route>
              </Routes>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/testgrid" element={<TestResponsesTable />} />
                <Route
                  path="/responses/:collector_url"
                  element={<SurveyResponsesPage />}
                />
              </Routes>
            </Router>
          </AuthProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>,
);
