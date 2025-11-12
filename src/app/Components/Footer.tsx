// components/Footer.js
import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner className="font-mono">
        {/* Colonne 1 : Brand */}
        <Column>
          <Brand>Bakrim Di Rosso Nadia</Brand>
          <Tagline>Développeuse Web · Next.js & React</Tagline>
          <SmallText>
            Je conçois des interfaces modernes, performantes et centrées
            utilisateur, avec un code clair, maintenable et orienté résultats.
          </SmallText>
        </Column>

        {/* Colonne 2 : Navigation */}
        <Column>
          <ColumnTitle>Navigation</ColumnTitle>
          <NavList>
            <NavItem>
              <NavLink href="#About">À propos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Skills">Compétences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Projects">Projets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Knowledge">Savoir-faire</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Contact">Contact</NavLink>
            </NavItem>
          </NavList>
        </Column>

        {/* Colonne 3 : Contact & Social */}
        <Column>
          <ColumnTitle>Contact</ColumnTitle>
          <ContactItem>
            <FaEnvelope size={14} />
            <a href="mailto:nadiabakrim06@gmail.com">
              nadiabakrim06@gmail.com
            </a>
          </ContactItem>
          <ContactItem>
            <FaGlobe size={14} />
            <span>Basée en France · Remote friendly</span>
          </ContactItem>

          <SocialWrapper>
            <SocialLink
              href="https://www.linkedin.com/in/nadia-d-405849b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/BakrimNadia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
          </SocialWrapper>
        </Column>
      </FooterInner>

      {/* Bas de page */}
      <BottomBar>
        <span>
          © {new Date().getFullYear()}{" "}
          <strong>Bakrim Di Rosso Nadia</strong> — Tous droits réservés
        </span>
        <BottomLinks>
          <a href="#Projects">Voir mes projets</a>
          <span>•</span>
          <a href="#Contact">Travaillons ensemble</a>
        </BottomLinks>
      </BottomBar>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  position: relative;
  margin-top: 0;
  padding: 40px 20px 18px;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(236, 72, 153, 0.12),
      transparent 70%
    ),
    linear-gradient(135deg, #020817 0%, #050816 40%, #020817 100%);

  color: #f5f5f5;
  border-top: 1px solid rgba(148, 163, 253, 0.16);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
`;

const FooterInner = styled.div`
  max-width: 1100px;
  margin: 0 auto 10px;
  display: grid;
  grid-template-columns: 1.6fr 1.1fr 1.3fr;
  gap: 28px;
  align-items: flex-start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Brand = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, #ff7ac4, #38bdf8);
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 0 0 8px rgba(236, 72, 153, 0.45);
`;

const Tagline = styled.p`
  font-size: 0.9rem;
  color: #f9fafb;
  font-weight: 500;
  margin: 2px 0 4px;
`;

const SmallText = styled.p`
  font-size: 0.8rem;
  line-height: 1.6;
  color: rgba(226, 232, 240, 0.9);
  max-width: 280px;

  @media (max-width: 640px) {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fb7185;
  margin-bottom: 6px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 4px 0 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  font-size: 0.85rem;
  color: rgba(249, 250, 251, 0.82);
  text-decoration: none;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    color: #f9a8d4;
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    &:hover {
      transform: translateX(0);
      color: #f9a8d4;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(249, 250, 251, 0.9);

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #38bdf8;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(236, 72, 153, 0.16),
    transparent
  );
  color: #e5e7eb;
  border: 1px solid rgba(148, 163, 253, 0.35);
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #020817;
    background: linear-gradient(to right, #fb7185, #e879f9, #38bdf8);
    box-shadow: 0 0 18px rgba(236, 72, 153, 0.7);
    transform: translateY(-2px) scale(1.06);
  }
`;

const BottomBar = styled.div`
  max-width: 1100px;
  margin: 10px auto 0;
  padding-top: 8px;
  border-top: 1px solid rgba(148, 163, 253, 0.16);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px;
  font-size: 0.75rem;
  color: rgba(148, 163, 253, 0.9);

  strong {
    font-weight: 600;
    color: #f9a8d4;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  a {
    color: rgba(148, 163, 253, 0.95);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #38bdf8;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export default Footer;
