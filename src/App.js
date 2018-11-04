import React, { Component } from 'react';
import './App.css';
import {Warp , Grass , Route , Cloud , Line , Mario} from './css/Warpper'
import CloudImg from './img/cloud.png'
import mario from './img/mario.png'

class App extends Component {
  render() {
    return (
        <div>
      <Warp>
          <Cloud src={CloudImg}/>
      </Warp>
            <Grass/>

          <Route>

              <Line>
                  <Mario src={mario}/>
              </Line>
          </Route>
        </div>
    );
  }
}

export default App;
