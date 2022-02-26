/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/iconr1.png';
import icon2 from 'assets/images/icons/iconr3.png';
import icon3 from 'assets/images/icons/icon4.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'KYC and Doxxed',
    description: `All Projects in Launchart have to Doxx and KYC themselves. We will not launch unknown projects`,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Safe and Secure Minting',
    description: `No need to worry about connecting your wallet to thousand different websites. One site for all your needs`,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Fast and stable system infrastructure',
    description: `We are working with industry leads in system infrastructures. No more overload or problem with minting.`,
  },
  
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" variant="section.ultimateFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="For investors"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [60, 60, 60, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, 260, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
