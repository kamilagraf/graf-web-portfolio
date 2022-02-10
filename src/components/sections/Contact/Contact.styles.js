import styled from 'styled-components';
import { LimeRectangle } from 'components/atoms/LimeRectangle/LimeRectangle';

export const StyledContactSection = styled.section`
  background-color: #200934;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black.ten};
  border-radius: 30px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h3,
  p.caption {
    width: 998px;
  }

  @media screen and (min-width: 768px) {
    padding: 60px;
  }

  @media screen and (min-width: 1356px) {
    padding: 80px;
    z-index: 3;
  }
`;

export const StyledSocialList = styled.ul`
  margin: 60px 0 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }

  @media screen and (min-width: 1356px) {
    margin: 80px 0 0 0;
    flex-direction: row;
    gap: 64px;
    align-self: flex-end;
  }
`;

export const SocialEntry = styled.li`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white.zero};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 20px;
    line-height: 30px;

    @media screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 34px;
    }

    @media screen and (min-width: 1356px) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  svg {
    margin: 0 16px 0 0;
  }
`;

export const StyledAvatar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 150px;
    height: 150px;
    position: relative;
    align-self: flex-end;

    img {
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 1356px) {
    position: absolute;
    right: 40px;
    top: 40px;
  }
`;

export const CircleIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.limePrimary.zero};
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -10px;
  right: 0;
`;

export const LimeRect = styled(LimeRectangle)`
  @media screen and (min-width: 768px) {
    width: 120px;
    height: 80px;
    position: absolute;
    right: 0;
    top: -40px;
  }

  @media screen and (min-width: 1356px) {
    width: 196px;
    height: 100px;
    top: auto;
    bottom: -50px;
    z-index: 1;
  }
`;
