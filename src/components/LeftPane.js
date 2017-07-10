import React, { Component } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex:1;
  flex-direction: column;
  background-color: #524972;
  align-items: center;
  justify-content: center;
  padding:20px;
`;

const TextInput = styled.input`
  height:35px;
  border-radius:2px;
  border:none;
  padding-left:5px;
  font-size: 1.2em;
  color:dimgray;
  width:100%;
  max-width:100%;
  align-self:flex-end;
`;

const SubmitBtn = styled.button`
  width:100px;
  padding:10px;
  background-color:#674972;
  border:none;
  color:white;
  box-shadow:1px 2px 10px rgba(0,0,0,0.2);
  font-size: 1em;
  margin-top:10px;
  align-self: flex-end;
  transition:0.2s box-shadow;
  &:hover {
    box-shadow:1px 1px 2px rgba(0,0,0,0.1);
  }
`;

export default class LeftPane extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: null
    }
  }


  render(){
    return(
      <MainContainer>
        <TextInput placeholder="http(s)://www.example.com" onChange={this.props.onChange} value={this.props.url} type="text"/>
        <SubmitBtn onClick={this.props.addItem}>Save</SubmitBtn>
      </MainContainer>
    );
  }

}
