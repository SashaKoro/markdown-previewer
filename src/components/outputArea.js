import React, { PropTypes } from 'react';
import marked from 'marked';
import styled from 'styled-components';

const OutputDiv = styled.div`
  float: left;
  margin-left: 25px;
  margin-top: -15px;
  max-width: 500px;
`;

const OutputArea = ({ incomingText }) => {
  OutputArea.propTypes = {
    incomingText: PropTypes.string.isRequired,
  };

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    sanitize: true,
  });

  const makeMarkup = () => {
    return { __html: marked(incomingText) };
  };

  return (
    <OutputDiv
      /* eslint-disable react/no-danger */
      className="OutputArea"
      dangerouslySetInnerHTML={makeMarkup()}
    />
  );
};

export default OutputArea;
