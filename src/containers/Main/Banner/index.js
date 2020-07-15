import React from 'react';
import Fade from 'react-reveal/Fade';
// import { Icon } from 'react-icons-kit';
// import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from '../../../common/components/Text';
import Image from '../../../common/components/Image';
import Button from '../../../common/components/Button';
import Heading from '../../../common/components/Heading';
import Container from '../../../common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from '../../../common/assets/image/main/bannerImg.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Revolutionizing Restaurant
              Order Management and Pickup."
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Providing 21st century solutions for managing customer orders placed over the web. Providing real-time updates, analytics, and powerful tools to optimize restaurant sales."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Button className="primary" title="Learn When we Launch" />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
