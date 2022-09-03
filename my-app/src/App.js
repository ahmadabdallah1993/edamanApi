import React from 'react';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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

    const URL = `http://localhost:3005/searchRecipe?name=${name}`;

    axios.get(URL).then(result =>{
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



      {this.state.arr.map( item =>{
        return(
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
        )
      })}
    
 
      </div>
    )
  }
}

export default App;
