import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonPrimary } from './ButtonPrimary.styles';
import { ParagraphButton } from 'components/atoms/Paragraphs/Paragraphs';
import { theme } from 'assets/styles/theme';

const ButtonPrimary = ({ children, IconLeft, IconRight, ...props }) => {
  return (
    <StyledButtonPrimary {...props}>
      {IconLeft && <IconLeft className="icon-left" color={theme.colors.black.zero} size={24} strokeWidth={2} />}
      <ParagraphButton>{children}</ParagraphButton>
      {IconRight && <IconRight className="icon-right" color={theme.colors.black.zero} size={24} strokeWidth={2} />}
    </StyledButtonPrimary>
  );
};

ButtonPrimary.propTypes = {
  IconLeft: PropTypes.object,
  IconRight: PropTypes.object,
};

export default ButtonPrimary;
