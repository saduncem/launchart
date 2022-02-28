/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Feature from 'components/cards/feature';


import individual from 'assets/images/icons/iconr8.png';
import marketing from 'assets/images/icons/iconr2.png';
import allon from 'assets/images/icons/iconr4.png';
import community from 'assets/images/icons/iconr6.png';
import roadmap from 'assets/images/icons/icon6.png';
import branding from 'assets/images/icons/branding.svg';

const data = [
  {
    id: 1,
    icon: individual,
    title: 'All included Launchpad ',
    description: `You don’t need to worry about your contract, we will handle all the little details.`,
  },
  {
    id: 2,
    icon: marketing,
    title: 'Marketing',
    description: `You can get advice from our Marketing experts directly.`,
  },
  {
    id: 3,
    icon: community,
    title: 'Community Management',
    description: `Our team is always ready to help you with your socials and Discord management.`,
  },
  {
    id: 4,
    icon: roadmap,
    title: 'Project Roadmap',
    description: `Think about getting pieces of advice from experienced people in the industry, for the most important part of your Project.Worthless, isn’t it?`,
  },
  {
    id: 5,
    icon: branding,
    title: 'Branding',
    description: `Be the one in the many. Direct spotlights on your Project. Create your art and make branding with us.`,
  },
  {
    id: 6,
    icon: allon,
    title: 'All in one place',
    description: `All of the above and all the things you can think about in your Project are covered by our support and our team is always ready to help you.`,
  },
];
const HappyCustomer = () => {
  return (
    <Box as="section" variant="section.happyCustomer" id="Projects">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
          <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="For Projects"
              description="We know how hard to launch an NFT collection. We did it. Now, we are here with a solution. The first-ever launchpad in Avalanche. Launchart helps you with Launching, Marketing, Community Management, and all your needs in NFT Collection launching."
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HappyCustomer;

const styles = {
  features: {
    display: ['grid', 'grid'],
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block', 'block', 'flex', 'flex', 'block', 'flex'],
      textAlign: ['center', 'center', 'center', 'center', 'center', 'center'],
      maxWidth: [190, 160, 'none'],
      m: ['0 auto', '0 auto', 0],
      figure: {
        m: [
          '0 0 15px',
          '0 0 15px',
          '0 30px 0 0',
          '0 30px 0 0',
          '0 0 15px',
          '0 30px 0 0',
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ['15px', '15px', '20px', '15px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '11px', '14px', '12px'],
      },
    },
  },
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 50],
    display: ['block', 'block', 'block', 'flex', 'grid'],
    gridTemplateColumns: '1.3fr 0.7fr',
    flexDirection: ['unset', 'unset', 'unset', 'column', 'unset'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['295px', '395px', 'none', '480px', 'none'],
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    mb: ['20px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '32px', '32px', '36px', '48px'],
      lineHeight: [1.45, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
    p: {
      fontSize: ['17px'],
      lineHeight: [2, 2, 2, 2.48],
      maxWidth: [460],
      ml: [0],
    },
  },
  learnMore: {
    textAlign: ['center', 'center', 'left', 'center', 'left'],
  },
  accordionGroup: {
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: '30px 45px',
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
