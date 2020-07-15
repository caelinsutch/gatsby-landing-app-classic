import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from '../../../common/components/Text';
import Image from '../../../common/components/Image';
import CustomerWrapper, { ImageWrapper } from './customer.style';

const Customer = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        client {
          id
          title
          image {
            publicURL
          }
        }
      }
    }
  `);
  const { client } = data.dataJson;

  return (
    <CustomerWrapper>
      <Text content="Trusted by companies like:" />
      <ImageWrapper>
        {client.map(item => (
          <Image
            key={`client-key${item.id}`}
            src={item.image.publicURL}
            alt={item.title}
          />
        ))}
      </ImageWrapper>
    </CustomerWrapper>
  );
};

export default Customer;
