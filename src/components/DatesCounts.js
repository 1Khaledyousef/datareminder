import React from 'react'
import { Col, Row } from 'react-bootstrap'
import per from '../data'
export const DatesCounts = ({ per }) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" className="">
                لديك {per.length} مواعيد
            </Col>
        </Row>
    )
}
export default DatesCounts;