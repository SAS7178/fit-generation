import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { FitGeneration } from './components/FitGeneration';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <FitGeneration />
    </BrowserRouter>
)


