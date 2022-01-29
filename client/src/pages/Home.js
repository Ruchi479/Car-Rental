import React, {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Navbar from '../components/Navbar'; //defaultLayout
import {getAllCars} from '../redux/actions/carsActions';
import { Button, Row, Col } from 'antd';

function Home(){
    const {cars, loading} = useSelector(state => state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())

    }, [dispatch])


    return (
        <Navbar>
            <Row justify='center' gutter={16} className="mt-5">
                
                {cars.map(car=>{
                    return <Col lg={5} sm ={24} xs={24}>
                        <div className='car p-2 bs1 mt-3'>
                            <img src={car.image} className="carimg" alt="car displaying"/>
                            
                            <div className='car-content d-flex align-item-center justify-content-between'>
                                <div>
                                    <p>{car.name}</p>
                                    <p>{car.rentPerHour}Rent Per Hour $ </p>
                                </div>

                                <div>
                                    <button className='btn1 mr-2'>Book Now</button>
                                </div>
                            </div>

                        </div>
                    </Col>
                })}
            </Row>
        </Navbar>

    );
}

export default Home;