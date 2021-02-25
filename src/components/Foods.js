import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import FoodsJson from '../foods.json'
import FoodBox from './FoodBox'
import AddForm from './AddForm'




handleAddForm = (event) => {
event.preventDefault()
let name = event.target.name.value
let calories = event.target.calories.value
let image = event.target.image.value

let newfood = {
    name: name,
    calories: calories,
    image: image
}
this.setState({
    showForm: false,
    foods:[newfood, ...this.state.foods]
})
}


handleShowForm = () => {
this.setState({showForm:true})
}

 class Foods extends Component {
    state = {
        foods: FoodsJson
    }
    render() {
        const {foods, showForm} = this.state
        return (
            <div>
                 
                {
                    // loop over the Foodsarray
                    this.state.foods.map((foodbox, index) => {
                        return <FoodBox  
                            name={foodbox.name}
                            image={foodbox.image}
                            calories={foodbox.calories}
                             />
                            }    
                    )
                    
                }
                
                {
                    showForm ? <AddForm onAdd={this.handleAddForm}/> :  <button onClick={this.handleShowForm}>Show</button>
                }
                
            </div>
        )
    }
}
export default Foods
