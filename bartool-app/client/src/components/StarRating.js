import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './result.scss'

class StarRating extends React.Component {


    state = {
            rating: 4
    };


onStarClick=(nextValue, prevValue, name)=> {
    this.setState({rating: nextValue});
}

render() {
    const { rating } = this.state;
    
    return (                
    <div className='star'>
        <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={rating}
        onStarClick={this.onStarClick}
        />
    </div>
    );
}
}

export default StarRating