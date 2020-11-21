import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import ContentA from '../components/ContentA'
import ContentA2 from '../components/ContentA2'
import ContentASocialCoding from '../components/ContentASocialCoding'
import ContentB from '../components/ContentB'
import ContentTextblock from '../components/ContentTextblock'
import ContentDApp from '../components/ContentDApp'
import ContentDAppCS from '../components/ContentDAppCS'
import Friendlogos from '../components/Friends'

import Button from '../components/button'
import Layout from '../components/layout'
import colors from '../utils/colors'

//
// SECTION1 - Styling
//
// Styling is done directly via styled components, some global css is injected via inject-global from ../components/layout.js
//

const Hero = styled.div`
  padding-top: 10vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${colors.background} 100%,
    ${colors.background} 100%
  );
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  align-content: start;
  justify-content: center;
  display: grid;
  z-index: -1;
`

const HeroImage = styled(Img)`
  display: block;
  @media (max-width: 960px) {
    display: none;
  }
`

const HeroGroup = styled.div`
  position: absolute;
  left: 28vw;
  margin: 0 15vw;
  padding: 20vh 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);

  @media (max-width: 960px) {
    justify-content: center;
    position: static;
  }

  h1 {
    margin: 0;
    color: ${colors.highlight2};
    font-size: 2rem;
    line-height: 1.2;
  }

  p {
    margin: 0px;
    font-size: 2rem;
    color: ${colors.theme};
  }

  .hero-item-1 {
    grid-row: 1;
    max-width: 500px;
    justify-self: center;
  }

  .hero-item-2 {
    margin-top: 1rem;
    grid-row: 2;
  }

  .hero-item-3 {
    grid-row: 3;
  }

  .hero-item-4 {
    margin-top: 5vh;
    grid-row: 4;
    justify-self: center;
  }

  @media (max-width: 640px) {
    margin: 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
`

const HeroNav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 0 4rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 15vh;

  h2 {
    text-align: center;
    font-size: 1.2rem;
    margin: 0;
    font-weight: 800;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    margin: 0.2rem;
  }

  @media (max-width: 640px) {
    display: none;
  }
`

const Block = styled.div`
  display: block;
  text-align: center;

  transition: 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
  :hover {
    transform: skew(0deg, -10deg);
  }
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`

const ContainerXL = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    padding: 0 1rem;
    max-width: 100vw;
  }
`

const Purple = styled.div`
  background: ${colors.theme};
  z-index: 0;
`
const Divider = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${colors.highlight};
`

const Divider2 = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  height: 0.2rem;
  background-color: ${colors.highlight2};
`

//
// SECTION2 - Page Component
//
// Content is rendered here - most of it is passed down via graphql query in the next section
//

const IndexPage = ({ data }) => (
  <Layout>
    <Hero>
      <HeroImage
        fluid={data.backgroundImage.childImageSharp.fluid}
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '50%',
          height: '100%',
          zIndex: '-2',
          transform: 'scale(0.6)'
        }}
        className={'heroImage'}
      />
      <HeroGroup>
        <img
          src={require('../images/logo/givethio-purple.svg')}
          alt='giveth.io'
          className='hero-item-1'
        />
        <p className='hero-item-2'>A Community of Makers</p>
        <h1 className='hero-item-3'>Building the Future of Giving</h1>
        <Link to='/join' className='hero-item-4'>
          <Button primary>Join our chat</Button>
        </Link>
      </HeroGroup>
    </Hero>

    <Container id='heronav'>
      <ContentTextblock headerdata={data.contentB.edges[1]} />
    </Container>

    <HeroNav>
      <Block>
        <Link to='/#dapp'>
          <img
            width='80px'
            height='80px'
            src={require('../images/logo/giveth-nav-logo.svg')}
            alt=''
          />
          <p>Giveth Dapp</p>
        </Link>
      </Block>
      <Block>
        <Link to='/#commonsstack'>
          <img
            width='80px'
            height='80px'
            src={require('../images/icons/commonsstack.svg')}
            alt=''
          />
          <p>The Commons Stack</p>
        </Link>
      </Block>
      <Block>
        <Link to='/#org'>
          <img
            width='80px'
            height='80px'
            src={require('../images/icons/distributed-org.svg')}
            alt=''
          />
          <p>Governance</p>
        </Link>
      </Block>
      <Block>
        <Link to='/#galaxy'>
          <img
            width='80px'
            height='80px'
            src={require('../images/icons/cooperative-dev.svg')}
            alt=''
          />
          <p>Galaxy Projects</p>
        </Link>
      </Block>
    </HeroNav>

    <Divider2 />

    <ContainerXL id='dapp'>
      <ContentDApp data={data.contentDapps.edges[0]} />
    </ContainerXL>

    <Divider2 />

    <ContainerXL id='commonsstack'>
      <ContentDAppCS data={data.contentDapps.edges[1]} />
    </ContainerXL>

    <Divider />

    <Container id='org'>
      <ContentA2 data={data.contentA.edges[3]} />
    </Container>

    <Divider />

    <Container id='socialcoding'>
      <ContentASocialCoding data={data.contentA.edges[2]} />
    </Container>

    <Divider />

    <Container id='galaxy'>
      <ContentB
        headerdata={data.contentB.edges[0]}
        planetsdata={data.contentBcards.edges}
        starsdata={data.contentBcardsStars.edges}
      />
    </Container>

    <Divider />

    <Purple id='dac'>
      <ContentA data={data.contentA.edges[1]} />
      <Friendlogos data={data.friends.edges} />
    </Purple>
  </Layout>
)

export default IndexPage

//
// SECTION3 - Database query
//
// This is the query we send to our contentful database, the data is consumed in Section 2 and passed down to components who need it
//

export const query = graphql`
  query NewQuery {
    contentA: allContentfulContentA(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          image {
            file {
              url
            }
          }
          headline1
          headline2
          contentText {
            id
            contentText
            childMarkdownRemark {
              html
            }
          }
          readMoreLink
        }
      }
    }
    contentB: allContentfulContentB(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          headline1
          headline2
          contentText {
            id
            childMarkdownRemark {
              html
            }
          }
          contentText2 {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentBcards: allContentfulContentBCards(
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          id
          logo {
            id
            file {
              url
            }
          }
          projectTitle
          projectUrl
          projectShortDescription
        }
      }
    }
    contentBcardsStars: allContentfulContentBCardsStars(
      sort: { fields: [updatedAt], order: DESC }
    ) {
      edges {
        node {
          id
          logo {
            id
            file {
              url
            }
          }
          projectTitle
          projectUrl
          projectShortDescription
        }
      }
    }
    contentDapps: allContentfulContentDapps(
      sort: { fields: [createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          projectTitle
          projectUrl
          projectShortDescription
          contentText {
            childMarkdownRemark {
              html
            }
          }
          logo {
            file {
              url
            }
          }
          screenshot {
            file {
              url
            }
          }
        }
      }
    }
    contentTools: allContentfulContentTools {
      edges {
        node {
          headline1
          headline2
          contentText {
            id
            childMarkdownRemark {
              html
            }
          }
          contentText2 {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "dreamcatcher.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageKeyboard: file(relativePath: { eq: "keyboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEthereum: file(relativePath: { eq: "ethereum.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    friends: allContentfulFriendslogos {
      edges {
        node {
          id
          link
          name
          description
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
