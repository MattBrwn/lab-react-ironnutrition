import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import Foods from './components/Foods'

class App extends Component {

// state = {
//   totalFoods: []
// }

handleAddFood = (food, quantity) => {
  let newfood = {
    name: food.name,
    image: food.image,
    calories: food.calories
  }
  this.setState({
    foods: [...this.state.foods, newfood]
  })
}

render(){
  return (
    <div>
      <Foods onItemAdd={this.handleAddFood}/>
    </div>
  );
}
}

export default App;
