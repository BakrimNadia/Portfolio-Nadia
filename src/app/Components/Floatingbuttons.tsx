"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Container>
      {/* Bouton scroll top */}
      <ScrollTopButton
        onClick={scrollToTop}
        aria-label="Remonter en haut"
        $visible={showScrollTop}
      >
        <FaArrowUp />
      </ScrollTopButton>

      {/* Bouton WhatsApp */}
      <WhatsAppButton
        href="https://wa.me/33686466287" // 🔁 remplace par ton numéro WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter via WhatsApp"
      >
        <FaWhatsapp />
      </WhatsAppButton>
    </Container>
  );
}

/* ================= Styles ================= */

const Container = styled.div`
  position: fixed;
  right: 36px; /* <-- décalé vers la gauche */
  bottom: 28px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 640px) {
    right: 28px; /* <-- un peu moins sur mobile */
    bottom: 22px;
    gap: 10px;
  }
`;

const buttonBase = `
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(3, 7, 18, 0.96); /* noir profond */
  color: #f9fafb;                   /* texte blanc */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(148, 163, 253, 0.25);
  transition: all 0.25s ease;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 1);
    border-color: rgba(236, 72, 153, 0.8);
  }

  @media (max-width: 640px) {
    width: 38px;
    height: 38px;
    font-size: 1.05rem;
  }
`;

const ScrollTopButton = styled.button<{ $visible: boolean }>`
  ${buttonBase}
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: translateY(${(props) => (props.$visible ? "0" : "6px")});
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
`;

const WhatsAppButton = styled.a`
  ${buttonBase}
`;
