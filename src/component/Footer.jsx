import React from 'react';
import styled from 'styled-components';
import dacoslogo from "../images/logo/dacos.png";
import soluxlogo from "../images/logo/solux.png";
import software from "../images/logo/software.png";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`

const DacosLogo = styled.div`
  background-image: url(${dacoslogo});
  width: clamp(87px, 1.5vw, 97px);
  height: clamp(50px, 1.5vw, 60px);
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0px 30px;
`

const SoluxLogo = styled.div`
  background-image: url(${soluxlogo});
  width: clamp(102px, 1.5vw, 112px);
  height: clamp(29px, 1.5vw, 39px);
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0px 30px;
`

const SoftwareLogo = styled.div`
  background-image: url(${software});
  width: clamp(77px, 1.5vw, 87px);
  height: clamp(20px, 1.5vw, 30px);
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0px 30px;
`

const EmailContainer = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`

const InfoContainer = styled.div`
  margin-top: 10px;
`

const FooterInfoText = styled.p`
  color: #6B6B6B;
  font-size: xx-small;
  margin: 0px 15px 0px 0px;
`

const ProducedTextContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DevelopedTextContainer = styled.div`
  display: flex;
  justify-content: center;
`

function Footer() {
    return (
      <footer className="text-dark py-3">
        <div className="container text-center"  style={{ height: "20vh", padding: "0px"}}>
            <LogoContainer>
              <DacosLogo />
              <SoluxLogo />
              <SoftwareLogo />
            </LogoContainer>

            <EmailContainer>
              <FooterInfoText>DACOS | smdacos@gmail.com</FooterInfoText>
              <FooterInfoText>@smdacos_oficial</FooterInfoText>
            </EmailContainer>

            <EmailContainer>
              <FooterInfoText>SOLUX | sm.solux@gmail.com</FooterInfoText>
              <FooterInfoText>@only_solux</FooterInfoText>
            </EmailContainer>

            <InfoContainer>
              <FooterInfoText>Made by SOLUX</FooterInfoText>

              <ProducedTextContainer>
                <FooterInfoText>Produced by Youngseo Noh</FooterInfoText>
                <FooterInfoText>Designed by Jeongin Kim</FooterInfoText>
              </ProducedTextContainer>

              <DevelopedTextContainer>
                <FooterInfoText>Devleoped by Sehee Kim</FooterInfoText>
                <FooterInfoText>Kiju Lee</FooterInfoText>
                <FooterInfoText>Jimin Lee</FooterInfoText>
              </DevelopedTextContainer>
            </InfoContainer>
        </div>
      </footer>
    )
}

export default Footer;