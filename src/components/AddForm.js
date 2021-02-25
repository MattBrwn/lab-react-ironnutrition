import React, { Component } from 'react'

class AddForm extends Component {
    render() {
        const {onAdd} = this.props
        return (
            <form onSubmit={onAdd}>
                <input name="name" type="text" placeholder="Enter title" />
                <input name="image" type="text" />
                <input name="calories" type="number" />
                <button type="submit" >Add Food</button>
            </form>
        )
    }
}

export default AddForm

