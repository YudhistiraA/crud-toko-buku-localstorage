import React from 'react'

import Cart from './pages/Cart';
import Gallery from './pages/Gallery';

import {Switch,Route} from 'react-router-dom'

const Utama = ()=>(
    <Switch>
        <Route exact path='/' component={Gallery}/>
         <Route path="/Cart" component={Cart} />
    
    </Switch>
)

export default Utama