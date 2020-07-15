import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../../common/components/Text';
import Heading from '../../../common/components/Heading';
import Button from '../../../common/components/Button';
import Image from '../../../common/components/Image';
import Container from '../../../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './designedAndBuilt.style';

const DesignedAndBuilt = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        designAndBuilt {
          image {
            publicURL
          }
          title
          description
        }
      }
    }
  `);
  const { image, title, description } = data.dataJson.designAndBuilt;

  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image.publicURL} alt="Built Logo" />
          </div>
          <div className="content">
            <Heading content={title} />
            <Text content={description} />
            <Button title="Learn More" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
