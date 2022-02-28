/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import workHard from 'assets/images/work-hard.png';
import emoji from 'assets/images/icons/emoji.png';


import icon1 from 'assets/images/icons/iconr1.png';
import icon2 from 'assets/images/icons/iconr3.png';
import icon3 from 'assets/images/icons/icon4.png';
import Feature from 'components/cards/feature';

const data = [
  {
    id: 1,
    icon: icon1,
    path: '#!',
    title: 'KYC and Doxxed',
    description: ``,
  },
  {
    id: 2,
    icon: icon2,
    path: '#!',
    title: 'Safe and Secure Minting',
    description: ``,
  },
  {
    id: 3,
    icon: icon3,
    path: '#!',
    title: 'Fast and stable system infrastructure',
    description: ``,
  },
  
];

const WorkHard = () => {
  return (
    <Box as="section" variant="section.workHard" >
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="For investors"
              description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
            />
          </Box>
          <Box sx={styles.illustration}>
           {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkHard;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.6fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    mb: ['10px', '10px', 0],
    mt: [0, 0, 0, 0, 0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['30%', null, null, '30%', '40%'],
    },
  },
};
