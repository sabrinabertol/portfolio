import React from 'react'
import { HeroContainer, ImageTitle, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SubTitleSmall, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.JPEG'
import { Bio } from '../../data/constants';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
      <div id="about">
        <HeroContainer>
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
              <ResumeButton href={Bio.resume} target="display">
                Check my CV!
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer id="Right">
              <ImageTitle>?</ImageTitle>
              <Img src={HeroImg} alt="hero-image" />
            </HeroRightContainer>
          </HeroInnerContainer>
        </HeroContainer>
      </div>
    );
}

export default HeroSection