import React, { useEffect, useRef } from 'react';
import { srConfig } from 'config';
import sr from 'utils/sr';
import { StyledContactSection, Wrapper, StyledSocialList, SocialEntry, StyledAvatar, CircleIcon, LimeRect } from './Contact.styles';
import { Caption } from 'components/atoms/Caption/Caption';
import { Header3 } from 'components/atoms/Headers/Headers';
import { ReactComponent as LinkedinIcon } from 'assets/icons/linkedin-icon.svg';
import avatarphoto from 'assets/images/avatar.jpg';
import CV from 'assets/KamilaGraf_CV.pdf';
import { AtEmail, DocumentClean, MessageCircleDots } from 'react-swm-icon-pack';

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig);
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <Wrapper>
        <Caption className="green caption">let’s talk 💬️</Caption>
        <Header3>
          Interested in working with me or got some questions? Hit me up by <span className="green">email</span> or my{' '}
          <span className="green">social media</span>.
        </Header3>
        <StyledSocialList>
          <SocialEntry>
            <a href="https://www.linkedin.com/in/kamilagraf/" aria-label="linkedin" target="_blank" rel="noreferrer">
              <LinkedinIcon id="linkedin" />
              Chat on LinkedIn
            </a>
          </SocialEntry>
          <SocialEntry>
            <a href="mailto:kam.graf0@gmail.com" aria-label="email" target="_blank" rel="noreferrer">
              <AtEmail color="#FFFFFF" size="32px" strokeWidth="2" />
              Send me an email
            </a>
          </SocialEntry>
          <SocialEntry>
            <a href={CV} download="KamilaGraf_CV.pdf" aria-label="cv" target="_blank" rel="noreferrer">
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
      </Wrapper>
      <LimeRect />
    </StyledContactSection>
  );
};

export default Contact;
