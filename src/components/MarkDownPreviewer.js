import React, { Component } from 'react';
import styled from 'styled-components';
import OutputArea from './OutputArea';

const Div = styled.div`
  margin-top: 50px;
  font-size: 16px;
  font-family: Arial;
`;

const Textarea = styled.textarea`
  height: 550px;
  width: 500px;
  float: left;

  @media screen and (max-width: 1199px) {
    width: 100%;
  }
`;

export default class MarkDownPreviewer extends Component {
  constructor () {
    super();

    /* eslint-disable max-len */
    this.state = {
      output: '# This is a MarkDown Previewer! \n--- \n### You can type Github markdown and see the result \n- Markdown can help you create awesome README\'s \n \n Here is some stuff you can **do**: \n 1. *italics \n 2. ***bold and italics!*** \n \n ``` \n Cool boxes! \n ``` \n > "Quotes can go here" - somebody \n \n [Library used for this project](https://github.com/chjj/marked) \n \n [Learn more about markdown](https://guides.github.com/features/mastering-markdown/)',
    };

    this.updateText = this.updateText.bind(this);
  }

  updateText (event) {
    this.setState({ output: event.target.value });
  }

  render () {
    return (
      <Div className="MarkDownPreviewer container">
        <Textarea
          className="Textarea"
          onChange={this.updateText}
          value={this.state.output}
        />
        <OutputArea
          incomingText={this.state.output}
        />
      </Div>
    );
  }
}
