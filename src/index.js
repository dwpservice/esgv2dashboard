import React from 'react';
import ReactDOM from 'react-dom';
import Logingoogle from './Logingoogle';
import App from './App';
import Error from './Erro';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';


ReactDOM.render(
    <Router basename={'/esgv2dashboard'}>
          <Routes>
                    <Route exact  path="/"      element={<Navigate replace to="/login" />} />  
                    <Route exact  path="/login" element={<Logingoogle />} />  
                    <Route exact  path="/app"   element={<App />} />
                    <Route exact  path="/erro"  element={<Error />} />
           </Routes>
    </Router>
 ,
 document.getElementById('root')
);
