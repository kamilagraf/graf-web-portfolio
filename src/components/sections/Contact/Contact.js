import React from 'react';
import PropTypes from 'prop-types';
import { StyledContactSection, Wrapper, StyledSocialList, SocialEntry, StyledAvatar, CircleIcon, LimeRect } from './Contact.styles';
import { Caption } from 'components/atoms/Customs/Customs';
import { Header3 } from 'components/atoms/Headers/Headers';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin-icon.svg';
import avatarphoto from 'assets/images/avatar.jpg';
import { AtEmail, DocumentClean, MessageCircleDots } from 'react-swm-icon-pack';

const Contact = () => {
  return (
    <StyledContactSection>
      <Wrapper>
        <Caption className="green caption">let’s talk 💬️</Caption>
        <Header3>
          Interested in working with me or got some questions? Hit me up by <span className="green">email</span> or my{' '}
          <span className="green">social media</span>.
        </Header3>
        <StyledSocialList>
          <SocialEntry>
            <a href={'https://google.com'} aria-label="linkedin" target="_blank" rel="noreferrer">
              <LinkedinIcon />
              Chat on LinkedIn
            </a>
          </SocialEntry>
          <SocialEntry>
            <a href={'https://google.com'} aria-label="linkedin" target="_blank" rel="noreferrer">
              <AtEmail color="#FFFFFF" size="32px" strokeWidth="2" />
              Send me an email
            </a>
          </SocialEntry>
          <SocialEntry>
            <a href={'https://google.com'} aria-label="linkedin" target="_blank" rel="noreferrer">
              <DocumentClean color="#FFFFFF" size="32px" strokeWidth="2" />
              Download my CV
            </a>
          </SocialEntry>
        </StyledSocialList>
        <StyledAvatar>
          <img className="avatarphoto" src={avatarphoto} alt="Avatarphoto" />
          <CircleIcon>
            <MessageCircleDots color="#050505" size="40px" strokeWidth="2" />
          </CircleIcon>
        </StyledAvatar>
        <LimeRect />
      </Wrapper>
    </StyledContactSection>
  );
};

Contact.propTypes = {};

export default Contact;
