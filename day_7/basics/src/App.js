import React, { Component } from 'react';
import Hero from './components/hero/hero.component';
import Counter from './components/counter/counter.component';
import Card from './components/card/card.component';
class App extends Component {
  render() {
    return (
      <div >
        {/* <Hero name="luja shakya"/> */}
        {/* <Counter></Counter> */}
        <div className="container-fluid text-center my-4">
          <h1>ITEMS</h1>
          <div className="row">
            <div className="col">
              <Card title="title" description="lorem ipsum ...." img="https://images.unsplash.com/photo-1638913662415-8c5f79b20656" price="30.0"></Card>
            </div>
            <div className="col">
              <Card title="title" description="lorem ipsum ...." img="https://images.unsplash.com/photo-1638913662415-8c5f79b20656" price="20.0"></Card>
            </div>
            <div className="col">
              <Card title="title" description="lorem ipsum ...." img="https://images.unsplash.com/photo-1638913662415-8c5f79b20656" price="80.0"></Card>
            </div>
            <div className="col">
              <Card title="title" description="lorem ipsum ...." img="https://images.unsplash.com/photo-1638913662415-8c5f79b20656" price="10.0"></Card>
            </div>
            <div className="col">
              <Card title="title" description="lorem ipsum ...." img="https://images.unsplash.com/photo-1638913662415-8c5f79b20656" price="99.0"></Card>
            </div>
            <div className="col">
              <Card title="title" description="lorem ipsum ...." img="https://images.unsplash.com/photo-1638913662415-8c5f79b20656" price="60.0"></Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
