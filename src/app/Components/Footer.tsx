// components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className="font-mono">
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/nadia-d-405849b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </IconLink>
        <IconLink
          href="https://github.com/BakrimNadia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </IconLink>
      </IconsContainer>

      <Text>
        © {new Date().getFullYear()} <span>Bakrim Di Rosso Nadia</span> — Tous droits réservés
      </Text>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 100%);
  color: #f5eeea;
  text-align: center;
  padding: 25px 0 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 12px;
`;

const IconLink = styled.a`
  color: #f5eeea;
  text-decoration: none;
  transition: all 0.3s ease;
  transform: scale(1);

  &:hover {
    color: #f8bfbf; /* Rose pâle doux pour hover */
    transform: scale(1.2);
  }
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
  letter-spacing: 0.3px;
  color: rgba(245, 238, 234, 0.85);

  span {
    font-weight: 600;
    color: #fff;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export default Footer;
