import React, { Component }  from 'react';
import { Row, Col } from 'antd';
import './style/common.less';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';

export default class Admin extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={3} className="left-nav">
            <LeftNav></LeftNav>
          </Col>
          <Col span={21} className="main">
            <Header></Header>
            <Row className="content">content</Row>
            <Footer></Footer>
          </Col>
        </Row>
      </div>
    )
  }
}