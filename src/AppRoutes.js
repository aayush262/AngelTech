import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { HomePage } from './pages/homePage/homePage';
import { ScrapingPage } from './pages/scrapingPage/scrapingPage';
import { ContactPage } from './pages/contactPage/contactPage';
import { WebPage } from './pages/webPage/webPage';
import { NotFoundPage } from './pages/notFoundPage/notFoundPage';

export const AppRoutes = ()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/scraping" component={ScrapingPage}></Route>
                <Route exact path="/web" component={WebPage}></Route>
                <Route exact path="/contact" component={ContactPage}></Route>
                <Route component={NotFoundPage}></Route>
            </Switch>
        </Router>
    )
}