//Home
import React, { Component } from 'react';

import Food from './Food';

class Foods extends Component {
  render() {
    return (
      <div className="Foods">
        <h1>Welcome to GigaPets</h1>
        <ul>
          {this.props.foods.map(food => {
            return (
              <Food
                id={food.id}
                name={food.name}
                breakfast={food.breakfast}
                lunch={food.lunch}
                key={food.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Foods.defaultProps = {
  foods: []
};

export default Foods;
