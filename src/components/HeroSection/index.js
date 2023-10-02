import React from 'react'
import { HeroContainer, ImageTitle, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, Title, SubTitle, SubTitleSmall } from './HeroStyle'
import HeroImg from '../../images/HeroImage.JPEG'
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <HeroContainer id="about">
          <HeroBg></HeroBg>
          <HeroInnerContainer>
            <HeroLeftContainer id="Left">
              <Title>Who is she, anyway?</Title>
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