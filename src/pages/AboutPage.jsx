import React from "react";
import styled from 'styled-components';
import background from "../images/about/round_background.png";
import logo from "../images/logo/logo.svg"
import solux from "../images/about/solux_img.png";
import dacos from "../images/about/dacos_img.png";
import poster1 from "../images/about/poster1.svg";
import poster2 from "../images/about/poster2.svg";
import { useMediaQuery } from 'react-responsive';
import Slider from "react-slick";
import "../style/slick-theme.css";
import "../style/slick.css";

const AboutContainer = styled.div`
    width: 100%;
    height: auto;
`

const LogoContainer = styled.div`
    height: 97vh;
`

const About = styled.div`
    padding: 0vw 15vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainConatiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 30px;
`

const RoundBackground = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    position: relative;
    width: 100%;
    height: clamp(80%, 1.5vw, 150%);
    border: none;
`

const DXSLogo = styled.div`
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: clamp(330px, 50vw, 370px);
    height: clamp(80px, 50vw, 120px);
`

const MainBoldText = styled.div`
    font-weight: 800;
    font-size: clamp(2.5rem, 60vw, 2.7rem);
`

const MainLightText = styled.div`
    font-weight: 100;
    font-size: 0.65rem;
`

const InfoContainer = styled.div`
    margin-top: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const InfoTextContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const InfoBoldText = styled.div`
    font-weight: 600;
    font-size: clamp(1.3rem, 1.5vw, 1.7rem);
    margin-top: 20px;
`

const InfoLightText = styled.div`
    width: 55%;
    font-weight: 200;
    font-size: clamp(0.7rem, 1.5vw, 0.8rem);
    line-height: 160%;
`

const DSTitle = styled.div`
    font-weight: 600;
    font-size: clamp(2.2rem, 1vw, 2.5rem);
    color: #0057FF;
`

const DSSubtitle = styled.div`
    font-weight: 100;
    font-size: 0.7rem;
    margin-bottom: 10px;
`

const DSContent = styled.div`
    font-weight: 200;
    width: 100%;
    text-align : center;
    word-break: keep-all;
    font-size: clamp(0.7rem, 100vw, 0.8rem);
    line-height: 160%;
    margin-top: 20px;
`

const DacosInfoContainer = styled.div`
    height: auto;
    margin: 200px 0px;
`

const SoluxInfoContainer = styled.div`
    margin-bottom: 40px;
`

const PosterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`

const PosterWrapper = styled.div`
    width: 40%;
    max-height: 83vh;
    border: 1px solid #FFFFFF;
    border-radius: 3%;
    overflow: hidden;
`

const PosterImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
`

const MobilePosterContainer = styled.div`
    margin-top: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
`

const MobilePoster1 = styled.div`
    width: 80%;
    height: 100vw;
    background-image: url(${poster1});
    background-size: cover;
    background-repeat: no-repeat;
`

const MobilePoster2 = styled.div`
    width: 80%;
    height: 100vw;
    background-image: url(${poster2});
    background-size: contain;
    background-repeat: no-repeat;
`

const DacosImage = styled.div`
    width: 80%;
    height: clamp(15vw, 100vw, 25vw);
    background-image: url(${dacos});
    background-size: contain;
    background-repeat: no-repeat;
`;

const SoluxImage = styled.div`
    width: 80%;
    height: clamp(15vw, 100vw, 25vw);
    background-image: url(${solux});
    background-size: contain;
    background-repeat: no-repeat;
`;

const MobileImageContainer = styled.div`
    display: flex;
    width: 70vw;
    height: 100%;
`

const AboutPage = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <AboutContainer>
            <LogoContainer>
                <MainConatiner>
                    <DXSLogo />
                    <MainBoldText>연합해커톤</MainBoldText>
                    <MainLightText>SOOKMYUNG WOMEN'S UNIVERSITY</MainLightText>
                </MainConatiner>

                <RoundBackground/> 
            </LogoContainer>

            <About>
                { isMobile && <>
                <MobilePosterContainer>
                    <MobileImageContainer>
                        <Slider {...settings}>
                            <MobilePoster1 />
                            <MobilePoster2 />
                        </Slider>
                    </MobileImageContainer>
                    <InfoTextContainer>
                        <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                        <DSContent>DACOS X SOLUX 해커톤은 다코스의 데이터 분석 능력과 솔룩스의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</DSContent>
                    </InfoTextContainer>
                </MobilePosterContainer>
                    
                </>
                }
                
                { !isMobile && <>
                    <InfoContainer>
                    <PosterContainer>
                        <PosterWrapper>
                            <PosterImage src={poster1} alt="Poster 1" />
                        </PosterWrapper>
                        <PosterWrapper>
                            <PosterImage src={poster2} alt="Poster 2" />
                        </PosterWrapper>
                    </PosterContainer>
                        <InfoTextContainer>
                            <InfoBoldText>DACOS X SOLUX 해커톤</InfoBoldText>
                            <InfoLightText>DACOS X SOLUX 해커톤은 다코스의 데이터 분석 능력과 솔룩스의 개발 능력을 결합하여 협력적 사고와 미래지향적 아이디어 창출을 목표로, 새로운 아이디어를 모색하고 실제 기획 및 구현까지의 진행을 도모합니다.</InfoLightText>
                        </InfoTextContainer>
                    </InfoContainer>
                </>}
                <DacosInfoContainer>
                    <InfoTextContainer>
                        <DacosImage />
                        <DSTitle>DACOS</DSTitle>
                        <DSSubtitle>소프트웨어학부 데이터분석 학회</DSSubtitle>
                        <DSContent style={{ width: !isMobile? "65%" : "100%"}}>DACOS는 숙명여대 소프트웨어학부의 최초 데이터 분석 동아리로, "Data Analysis Club of Sookmyung" 의 약자입니다. DACOS는 데이터 처리, 머신러닝, 딥러닝 등의 기술을 함께 학습하며, 데이터 분석에 대한 깊이 있는 논의와 협업을 위한 공간을 제공합니다.</DSContent>
                    </InfoTextContainer>
                </DacosInfoContainer>

                <SoluxInfoContainer>
                    <InfoTextContainer>
                        <SoluxImage />
                        <DSTitle>SOLUX</DSTitle>
                        <DSSubtitle>소프트웨어학부 개발 동아리</DSSubtitle>
                        <DSContent style={{ width: !isMobile? "65%" : "100%"}}>리눅스 학회에서 출발한 Sookmyung Linux, SOLUX는 더 다양한 분야에 도전합니다. SOLUX는 교내 유일 프로그래밍 중앙동아리로, 다양한 전공의 학우들이 모여 여러 분야와 IT를 융합하고 새로운 IT 기술을 향해 나아갑니다.</DSContent>
                    </InfoTextContainer>
                </SoluxInfoContainer>
            </About>
        </AboutContainer>
        
    );
};

export default AboutPage;
