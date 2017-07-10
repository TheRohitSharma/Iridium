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
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onChange(url){
    this.setState({ url: url.target.value });
  }

  addItem(){
    if(this.state.url != '')
    {
    items.push( {url: this.state.url, id: (items.length) } );
    this.setState({ items, url: '' })
  }
  console.log(items)
  }

  removeItem(e){
    items = items.filter((item) => {return item.id != e})
    this.setState({items})
  }


  handleDelete(e){
    console.log(e);
  }

  render() {
    return (
      <MainContainer>
        <LeftPane addItem={this.addItem} onChange={this.onChange} url={this.state.url}  />
        <Grid removeItem={this.removeItem} getValue={this.getValue} items={this.state.items} url={this.state.url} />
      </MainContainer>
    );
  }
}

export default App;
