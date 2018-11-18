import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

import Images from '../components/images'
import Contact from '../components/contact'
import OpeningTimes from '../components/opening-times'
import Documents from '../components/documents'
import Map from '../components/map'
import Links from '../components/links'

import Helmet from 'react-helmet'
const Home = ({ data }) => {
  return (
    <Layout>
      <Helmet
        script={[
          {
            type: 'application/ld+json',
            innerHTML: data.schemaContent.fields.content,
          },
        ]}
      />
      <Header title={data.page.name} />
 
      <Images data={data} />
      <Contact data={data} />
      <OpeningTimes data={data} />
      <Documents data={data} />
      <Map data={data} />
      <Links data={data} />
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
query($slug: String!, $schemaId: String!, $schemaName: String!) {
  schemaContent: file(name: { eq: $schemaName }) {
    fields {
      content
    }
  }
  schema: schemasJson(_id: { eq: $schemaId }) {
    name
    address {
      streetAddress
      addressLocality
      addressRegion
      postalCode
      addressCountry
    }
    telephone
    email
    geo {
      latitude
      longitude
    }
    openingHoursSpecification {
      dayOfWeek
      opens
      closes
    }
  }

  page: pagesJson(slug: { eq: $slug }) {
    name
    content
    googlePlaceId
    vcf {
      publicURL
    }
    images {
      filePath {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 600) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      name
    }
    documents {
      filePath {
        publicURL
      }
      name
    }
    links {
      url
      title
      image {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
}
`
