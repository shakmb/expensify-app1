import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';

// const Header = () => (
//     <header>
//         <h1>Expensify</h1>
//         <Link to="/">Dashboard</Link>
//         <Link to="/create">Create Expense</Link>
//         <Link to="/edit">Edit Expense</Link>
//         <Link to="/help">Help</Link>
//     </header>
// )

const Approuter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default Approuter;