import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {ThemeProvider, createTheme} from '@material-ui/core'

import './index.css';
import App from './App';

const theme = createTheme({
    palette:{
        primary:{
            main : '#33A6B2'
        },
        secondary:{
            main: '#da61bf'
        }
    }
})

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);