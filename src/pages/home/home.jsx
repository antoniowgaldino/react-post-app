import React from "react";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import Table from "../../components/table/Table";

export const Home = () => {
    return (
        <div>
            <Header />
            <br />
            <Table />
            <Footer />
        </div>
    )
}