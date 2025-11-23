import React from "react";
import { Container, Div, Member, P, A, Img } from "./footer.styles";
import favicon from "../../assets/logo/logo_white.svg";
import github from "../../assets/github.png";

const Footer = () => {
  return (
    <Container>
      <Div>
        <Member>
          <P>Frontend</P>
          <A
            href="https://github.com/JAEJUN090210"
            target="_blank"
            rel="noreferrer"
          >
            전재준
          </A>
          <A href="https://github.com/jsl0118" target="_blank" rel="noreferrer">
            이진서
          </A>
          <A href="https://github.com/yunho09" target="_blank" rel="noreferrer">
            장윤호
          </A>
        </Member>
        <Member>
          <P>Backend</P>
          <A
            href="https://github.com/yellowstarr0323"
            target="_blank"
            rel="noreferrer"
          >
            이한샘
          </A>
          <A
            href="https://github.com/cowtree28"
            target="_blank"
            rel="noreferrer"
          >
            남우현
          </A>
        </Member>
        <Member>
          <P>Android</P>
          <A href="https://github.com/ashxom" target="_blank" rel="noreferrer">
            안세하{" "}
          </A>
        </Member>
        <Member>
          <P>Design</P>
          <A
            href="https://github.com/wjddlfdnd"
            target="_blank"
            rel="noreferrer"
          >
            정일웅
          </A>
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
