import React from 'react';
import {useSelector} from 'react-redux'
import Navbar from '../components/Navbar'; //defaultLayout

function Home(){
    const {cars} = useSelector(state => state.carsReducer)
    return (
        <Navbar>
            <h1>Home Page</h1>
            <h1>The length of cars is {cars.length}</h1>
        </Navbar>

    );
}

export default Home;