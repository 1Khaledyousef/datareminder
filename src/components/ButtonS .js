import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';

export const ButtonS = ({ Hide, Viewdetai }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button onClick={Hide} className='btn  btn-secondary size="lg" p-3'>اخفاء الكل</Button>
        <Button onClick={Viewdetai} className='btn  btn-secondary size="lg" p-3'>عرض الكل</Button>

      </Col>
    </Row>
  )
}
export default ButtonS;