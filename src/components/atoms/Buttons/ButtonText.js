import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonText } from './ButtonText.styles';
import { ParagraphButton } from 'components/atoms/Paragraphs/Paragraphs';
import { theme } from 'assets/styles/theme';

const ButtonText = ({ children, IconLeft, IconRight, ...props }) => {
  return (
    <StyledButtonText {...props}>
      {IconLeft && <IconLeft className="icon-left" color={theme.colors.white.zero} size={24} strokeWidth={2} />}
      <ParagraphButton>{children}</ParagraphButton>
      {IconRight && <IconRight className="icon-right" color={theme.colors.white.zero} size={24} strokeWidth={2} />}
    </StyledButtonText>
  );
};

ButtonText.propTypes = {
  IconLeft: PropTypes.object,
  IconRight: PropTypes.object,
};

export default ButtonText;
