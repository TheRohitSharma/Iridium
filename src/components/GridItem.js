import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  padding:5px;
  width:23%;
  height:23vh;
  align-items:center;
  justify-content:center;
  display:flex;
  flex-direction: column;
  margin:5px;
`;

export default class GridItem extends Component {
  render() {
    return (
        <Block id={this.props.id} onClick={this.props.onClick}>
          <a style={{textAlign: 'center', textDecoration: 'none'}} href={this.props.url}>
            <img alt={this.props.url} src={`https://logo.clearbit.com/${this.props.url}`}/>
            <p style={{fontSize: '1.4em', color:'gray'}}>{this.props.url}</p>
          </a>
        </Block>

    );
  }
}
