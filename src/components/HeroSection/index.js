import React from 'react'
import { HeroContainer, ImageTitle, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SubTitleSmall } from './HeroStyle'
import HeroImg from '../../images/HeroImage.JPEG'
import { Bio } from '../../data/constants';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <HeroContainer id="about">
          <HeroBg></HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>Hey there, I'm {Bio.name}</Title>
              <TextLoop>
                I am a/an
                <Span>
                  <TypeAnimation
                    sequence={Bio.roles}
                    speed={20}
                    style={{ display: "inline-block" }}
                  />
                </Span>
              </TextLoop>
              <SubTitle>
                {Bio.description}
                <SubTitleSmall>
                  (But if you want, you can still check mine below! 😉)
                </SubTitleSmall>
              </SubTitle>
            </HeroLeftContainer>
            <HeroRightContainer id="Right">
              <ImageTitle>?</ImageTitle>
              <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
    );
}

export default HeroSection