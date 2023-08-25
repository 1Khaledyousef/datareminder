import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap';
import NotFound from './NotFound';
import R from '../R.jpeg'

export const DataList = ({ per }) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" className="">
                <div className='rectangel p-2'>
                    {per.length ? (per.map((item) => {
                        return (

                            <div className='d-flex border-bottom mx-3 my-2'>

                                <img className='imgperson' src={R} alt='here' />
                                <div className='mx-3'>
                                    <p className='d-inline fs-5'>{item.name}</p>
                                    <p className='fs-5'> {item.date}</p>

                                </div>
                            </div>
                        )

                    })) : <NotFound />}

                </div>
            </Col>
        </Row>
    )
}
