import { Button, Container, Col, Row } from 'react-bootstrap';
import './index.css';
import React, { useState } from 'react'
import NotFound from './components/NotFound';
import R from './R.jpeg'
import DatesCounts from './components/DatesCounts'
import per from './data';
import { DataList } from './components/DataList';
import { ButtonS } from './components/ButtonS ';
export const App = () => {

  const [persondata, SetPerson] = useState(per)

  const Viewdetai = () => {
    SetPerson(per)
  }
  const Hide = () => {
    SetPerson([])
  }
  return (
    <div div className="font color-body" >
      <Container className='py-5'>

        <DatesCounts per={persondata} />
        <DataList per={persondata} />

        <ButtonS Viewdetai={Viewdetai} Hide={Hide} />
      </Container>
    </div >
  )
}

export default App;
