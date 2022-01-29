import React, {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Navbar from '../components/Navbar'; //defaultLayout
import {getAllCars} from '../redux/actions/carsActions';
import { Button } from 'antd';

function Home(){
    const {cars, loading} = useSelector(state => state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())

    }, [dispatch])


    return (
        <Navbar>
            <h1>Home Page</h1>
            <Button type='primary'>Antd Button</Button>
            <h1>The length of cars is {cars.length}</h1>
        </Navbar>

    );
}

export default Home;