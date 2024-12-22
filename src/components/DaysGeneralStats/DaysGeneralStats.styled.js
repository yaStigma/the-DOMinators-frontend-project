import styled, { keyframes } from 'styled-components';
import { theme } from '../MonthStatsTable-D/theme.jsx';
const fadeInDown = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DayStatsWrap = styled.div`
  width: 280px;
  padding: 24px 13px;
  border-radius: 10px;
  position: fixed;
  background: ${theme.colors.white};
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.3);
  animation: ${fadeInDown} 0.3s ease;
  /* transition: transform */
  @media screen and (min-width: 768px) {
    width: 292px;
    padding: 24px 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Date = styled.p`
  color: ${theme.colors.blue};
  padding: 0;
  margin: 0;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DaysCloseButton = styled.button`
  color: ${theme.colors.blue};
  width: 16px;
  height: 16px;
  padding: 0;
  background: transparent;
  transition: color ${theme.transition};
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.orange};
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DayStatsHead = styled.p`
  padding: 0;
  margin: 0;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const DayStats = styled.p`
  color: ${theme.colors.blue};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
