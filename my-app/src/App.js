import React from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Card , Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      arr: []
    }
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    const name = event.target.food.value;
    const serv = `http://localhost:3005`;
    // const URL = `http://localhost:3005/searchRecipe?name=${name}`;

    const obj = {
      name: name,
    }

    axios.get(`${serv}/searchRecipe`, { params: obj })
    .then(result =>{
      // console.log(result.data)
      this.setState({
        arr: result.data
      })
    }).catch(error =>{
      console.log(error)
    })

  }




  render(){
    return(
      <div>


<Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formFoodName">
        <Form.Label>Food Name</Form.Label>
        <Form.Control type="text" name="food" placeHolder="pleace enter food name... " />
      </Form.Group>

    
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>


    <Row xs={1} md={3} className="g-4">
      {this.state.arr.map( item =>{
        return(
          <Col>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.label}</Card.Title>
        <Card.Text>
          Ingredients:
          {item.ingredients.map( i =>{
            return(
              <Card.Text>{i}</Card.Text>
            )
          })}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
          
          </Col>

         
          
        )
        
      })} </Row>
    
 
      </div>
    )
  }
}

export default App;
