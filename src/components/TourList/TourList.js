import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

class TourList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tours: tourData
    };
  }

  removeTour = id => {
    const { tours } = this.state;
    const filteredTours = tours.filter(tour => tour.id !== id);

    this.setState({
      tours: filteredTours
    });
  };

  render() {
    const { tours } = this.state;

    return (
      <section className='container tourlist'>
        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
          );
        })}
      </section>
    );
  }
}

export default TourList;
