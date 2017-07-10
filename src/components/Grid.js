import React, { Component } from 'react';
import styled from 'styled-components';
import GridItem from './GridItem.js'

const MainContainer = styled.div`
  flex:4;
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding:25px;
  margin:5px auto;
  background-color: white;
  overflow:auto;
}
`;

export default class Grid extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    console.log(this.state.items);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.items){
      this.setState({ items: nextProps.items });
    }
  }


  render() {


    const listItems = this.state.items.map((item, index) =>
      <GridItem key={index} onClick={this.onClick} url={item.url}/>
    );

    return (
      <MainContainer>
        {listItems}
      </MainContainer>
    );
  }
}
