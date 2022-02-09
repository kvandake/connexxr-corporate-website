import React from 'react';
import Typed from 'react-typed';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-1.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-1.jpg',
      },
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-2.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-2.jpg',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-3.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-3.jpg',
      },
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-4.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-4.jpg',
      },
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-5.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-5.jpg',
      },
    ],
  },
  {
    group: [
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-6.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-6.jpg',
      },
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-7.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-7.jpg',
      },
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-8.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-8.jpg',
      },
      {
        cover:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-9.jpg',
        coverDark:
          'https://connexxr-web.s3.us-west-2.amazonaws.com/index-page-9.jpg',
      },
    ],
  },
];

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 600,
              }}
            >
              Change the way DVT
              <br />
              treats{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                <Typed
                  strings={['amblyopia.', 'strabismus.', 'exotropia.', 'diplopia.']}
                  typeSpeed={80}
                  loop={true}
                />
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Our team is dedicated to the idea that Digital Vision Therapy could significantly 
              improve the quality of treatment of Amblyopia, Strabismus and Convergence Insufficiency in Kids and Adults.
            </Typography>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/'}
              >
                Learn more
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                 Library
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{ transform: 'translate3d(20%, -50%, 0)' }}
          >
            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
