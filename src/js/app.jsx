import React from 'react';
import NavBar from './components/Navigation/Nav.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import Clients from './components/Clients/Clients.jsx';


import image from '../img/background.svg';
import Privateroute from './components/utils/Privateroute.jsx';
import PublicRoute from './components/utils/PublicRoute.jsx';
import Page404 from './components/Page404.jsx';


export default class App extends React.Component {
    render() {
        return (


            <div className='backdroundImage' style={{
                backgroundImage: `url(${image})`,
                height: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>


                <NavBar />

                <Switch>
                    <PublicRoute restricted={true} exact path="/" component={Login} />
                    <PublicRoute restricted={true} exact path="/register" component={Register} />
                    <Privateroute exact path="/clients" component={Clients} />
                    <Route path="" component={Page404} />
                </Switch>

            </div>

        )
    }
}