import React from "react";
import Container from "./components/Container";
import "./App.css";
import {CityDataProvider} from "./context/CityDataContext";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";



function App() {
    return (
        <CityDataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Container/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "10rem"}}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </CityDataProvider>
    );
}

export default App;