import React from 'react';

import { Box } from '@material-ui/core';

import { Carousel } from 'react-responsive-carousel';

import useLogin from '../hooks/useLogin';

export default function LoginCarousel() {
  const { classes } = useLogin();
  return (
    <Box className={classes.loginCarousel}>
      <Carousel
        styles={{ height: '100%' }}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        dynamicHeight={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        transitionTime={500}
      >
        <div>
          <img
            alt=""
            className={classes.carouselImages}
            src="http://react-responsive-carousel.js.org/assets/5.jpeg"
          />
        </div>
        <div>
          <img
            alt=""
            className={classes.carouselImages}
            src="http://react-responsive-carousel.js.org/assets/2.jpeg"
          />
        </div>
        <div>
          <img
            alt=""
            className={classes.carouselImages}
            src="http://react-responsive-carousel.js.org/assets/3.jpeg"
          />
        </div>
      </Carousel>
    </Box>
  );
}
