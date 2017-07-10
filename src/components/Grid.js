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
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem(id){
    this.props.removeItem(id)
  };

  componentWillReceiveProps(nextProps) {
    this.setState({items: nextProps.items})
  }


  render() {
    let listItems = this.state.items.map((item, index) =>
      <GridItem key={index} id={this.props.items[index].id} onClick={() => this.removeItem(this.props.items[index].id)} url={item.url}/>
    );

    return (
      <MainContainer>
        {listItems}
      </MainContainer>
    );
  }
}
