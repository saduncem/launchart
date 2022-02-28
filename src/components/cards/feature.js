/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';
import { LearnMore } from 'components/link';

const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box>
      <Image src={data?.icon} alt={data?.title} />
        <Heading as="h3">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
        {data?.path && <LearnMore path={data?.path} />}
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    display: ['flex'],
    figure: {
      minWidth: [70],
      mr: ['30px'],
    },
    img :{
      maxWidth:'40%'
    },
    h3: {
      fontSize: '14px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '5px',
    },
    p: {
      fontSize: 16,
      lineHeight: 1.38,
      color: 'text',
    },
    a: {
      mt: [3],
    },
  },
};
