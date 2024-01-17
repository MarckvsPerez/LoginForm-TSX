import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { WebLayout } from "../layouts/WebLayout";
import { LoginPage, HomePage } from "../pages";

type LayoutProps = {
    children: ReactNode;
};

const loadLayout = (Layout: React.ComponentType<LayoutProps>, Page: React.ComponentType) => {
    return (
        <Layout>
            <Page />
        </Layout>
    );
};

export const WebRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={loadLayout(WebLayout, HomePage)} />
                <Route path="/login" element={loadLayout(WebLayout, LoginPage)} />
            </Routes>
        </div>
    );
};