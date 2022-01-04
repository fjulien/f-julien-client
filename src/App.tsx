import React from "react";
import "./App.scss";
import NavigationBar from "./components/Sidebar/Sidebar.component";
import Home from "./pages/home/home.page";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import ProfessionalPage from "./pages/professional/professional.page";
import FormationPage from "./pages/formation/formation.page";
import { URL_NAVIGATION } from "./constants/urlNavigation";
import { Layout, Breadcrumb } from "antd";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="App">
      <NavigationBar />
      <Layout className="site-layout">
        <Content style={{ margin: "0 0 0 80px" }}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={`/`}>Accueil</Link>
            </Breadcrumb.Item>
            {useLocation()
              .pathname.split("/")
              .filter(Boolean)
              .map((pathName, index) => (
                <Breadcrumb.Item key={index}>
                  <Link to={`/${pathName}`}>{pathName}</Link>
                </Breadcrumb.Item>
              ))}
          </Breadcrumb>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path={URL_NAVIGATION.FORMATION}
              element={<FormationPage />}
            />
            <Route
              path={URL_NAVIGATION.PROFESSIONAL}
              element={<ProfessionalPage />}
            />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©2021 Created by FJulien
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;