import React, { Component } from 'react';
import styled from 'styled-components';
import LeftPane from './components/LeftPane.js';
import Grid from './components/Grid.js';

const MainContainer = styled.div `
  display:flex;
  flex:1;
  flex-direction:'column';
  height: 100vh;
`;

let items = [];

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      url: '',
      items: []
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(url){
    this.setState({ url: url.target.value });
  }

  onClick(){
    items.push( {url: this.state.url, key: 0} );
    this.setState({ items, url: '' })

  }

  componentDidMount(){

  }


  render() {
    return (
      <MainContainer>
        <LeftPane onClick={this.onClick} onChange={this.onChange} url={this.state.url}  />
        <Grid items={this.state.items} url={this.state.url} />
      </MainContainer>
    );
  }
}

export default App;
