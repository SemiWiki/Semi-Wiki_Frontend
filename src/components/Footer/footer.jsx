import React from "react";
import { Container, Div, Member, P, Img } from "./footer.styles";
import favicon from "../../assets/logo/logo_white.svg";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <Container>
      <Div>
        <Member>
          <P>Frontend</P>
          <P
            href="https://github.com/JAEJUN090210"
            target="_blank"
            rel="noreferrer"
          >
            전재준
          </P>
          <P href="https://github.com/jsl0118" target="_blank" rel="noreferrer">
            이진서
          </P>
          <P href="https://github.com/yunho09" target="_blank" rel="noreferrer">
            장윤호
          </P>
        </Member>
        <Member>
          <P>Backend</P>
          <P
            href="https://github.com/yellowstarr0323"
            target="_blank"
            rel="noreferrer"
          >
            이한샘
          </P>
          <P
            href="https://github.com/cowtree28"
            target="_blank"
            rel="noreferrer"
          >
            남우현
          </P>
        </Member>
        <Member>
          <P>Android</P>
          <P href="https://github.com/ashxom" target="_blank" rel="noreferrer">
            안세하{" "}
          </P>
        </Member>
        <Member>
          <P>Design</P>
          <P
            href="https://github.com/wjddlfdnd"
            target="_blank"
            rel="noreferrer"
          >
            정일웅
          </P>
        </Member>
      </Div>
      <Div style={{ alignItems: "center", marginTop: "55px" }}>
        <Img
          src={favicon}
          alt="image"
          style={{ width: "78px", height: "52px" }}
        />
        <a
          href="https://github.com/dmsSeason11"
          target="_blank"
          rel="noreferrer"
        >
          <Img
            src={github}
            alt="github"
            style={{ width: "60px", height: "60px" }}
          />
        </a>
      </Div>
    </Container>
  );
};

export default Footer;
