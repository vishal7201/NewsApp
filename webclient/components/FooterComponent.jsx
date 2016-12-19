import React from 'react'
import {Row ,Col} from 'react-materialize';
import FontAwesome from 'react-fontawesome';
export default class FooterComponent extends React.Component{
  render(){
    var color={
      "background-color":"#887878",
        "color":"white",
        "margin-top":'20px'
    }
    var styleul={
      color:"white"
    }
    return(
      <footer style={color}>
          <Row>
            <Col s={2}>
              <h6>Copyright &copy 2016 Digital Homes</h6>
            </Col>
            <Col s={4}>
                <h6>About Us</h6>
                <p>Digital News is solutions company specializing in price to functionality benefits. We offer pre-built automation packages, but we are also happy to customize a solution to fit your specific needs.
                  LEARN MORE We shall assure you to provide you a best in class & a very cost effective solution.</p>
              </Col>
            <Col s={2}>
                  <h6>Navigation</h6>
                  <ul style={styleul}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
            </Col>
            <Col s={2}>
              <h6>Follow Us</h6>
              <ul style={styleul}>
                <li><a href="#"><FontAwesome name='rocket' size='3x'/>Twitter</a></li>
                <li><a href="#"><FontAwesome name='facebook' size='2x'/>Facebook</a></li>
                <li><a href="#"><FontAwesome name='twitter' size='2x'/>Google Plus</a></li>
                <li><a href="#"><FontAwesome name='youtube' size='2x'/>Youtube</a></li>
              </ul>
            </Col>
              <Col s={2}>
                <h6>Coded with love</h6>
              </Col>
        </Row>
      </footer>
    )
  }
}
