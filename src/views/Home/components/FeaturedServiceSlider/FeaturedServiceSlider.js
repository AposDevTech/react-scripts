import React from 'react';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const mock = [
  {
    category: 'Autism',
    media: 'https://www.angelsense.com/wp-content/uploads/2016/09/shutterstock_24826897.jpg',
    title: 'Concerned about child’s development?',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: 'Early detection and intervention are critical factors in supporting child’s development',
    
    users: [
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
    ],
  },
  {
    category: 'ABA Therapy',
    media: 'https://images.squarespace-cdn.com/content/v1/5e5e97f2fd9fbc2e803e24d8/1583258884968-OAKT4GMCHN16I1M2NYHX/banner.jpg',
    title: 'Concerned about child’s development?',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: 'Right therapy-based intervention makes a big impact on the quaity of life ahead',
    
    users: [
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
    ],
  },
  {
    category: 'Parental Counseling',
    media: 'https://www.prevention.psu.edu/uploads/project-heroes/_1800xAUTO_fit_center-center/parents-with-mentor-AdobeStock_196996852-opt.jpg',
    title: 'Need guidance with child’s development?',
    tutor: 'Dr. Erica Jowett-Hirst, BCBA',
    
    audience: 'For Parents',
    summary: 'Managing a child of a neurodevelopmental disorder is hard. Our sessions help you cope well.',
    
    users: [
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
    ],
  },
  {
    category: 'Couples Counseling',
    media: 'https://emeryondivorce.com/wp-content/uploads/2020/10/21443C243BC148F38717ED65C6028349.jpeg',
    title: 'Concerned about your marriage / relationship?',
    tutor: 'Dr. Joshua Karamaki, BCBA',
    
    audience: 'For Parents',
    summary: 'Parents of a special needs child often run into marital challenges. We can help.',
    
    users: [
      'https://hendersonfamilymagazine.com/wp-content/uploads/2022/03/ParentProfile-Feature.jpg',
      'https://t4.ftcdn.net/jpg/00/44/50/63/360_F_44506382_EazIxapwkcV9FFRkYQXsGutxRRBTPJcT.jpg',
      'https://media.istockphoto.com/id/525949883/photo/smiling-woman.jpg?s=612x612&w=0&k=20&c=drPuUoVZMA3h0WuDpcmwWlAdIBL31WQUvZNe9IPi8wc=',
      'https://media.istockphoto.com/id/1097618664/photo/mature-smiling-woman.jpg?s=612x612&w=0&k=20&c=nqvODQTensirt_7ALNBm5J2ixmbOl0OkUYwDDgqghUM=',
      'https://media.istockphoto.com/id/533347509/photo/close-up-of-a-mature-man-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=HT8P9FAQsBaAZ-iL_UEDB1M4xxsz4dk258l9XxPhMgM=',
    ],
  },
];

const FeaturedServiceSlider = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const sliderOpts = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: isMd ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Featured Services
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Browse our service catalogue
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Here are our top services driven by experts
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          justifyContent={'center'}
          marginTop={2}
        >
        </Box>
      </Box>



      <Box maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>

        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& .slick-slide img': {
              objectFit: 'cover',
            },
            '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
              height: { xs: 'auto', md: 1 },
            },
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              bottom: 0,
              top: '107%',
              left: '100%',
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              '&:before': {
                fontSize: 32,
                color: 'primary.main',
              },
            },
            '& .slick-prev': {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i} padding={{ xs: 1, md: 2, lg: 3 }}>
                <Box
                  display={'block'}
                  width={1}
                  height={1}
                  sx={{
                    textDecoration: 'none',
                    transition: 'all .2s ease-in-out',
                    '&:hover': {
                      transform: `translateY(-${theme.spacing(1 / 2)})`,
                    },
                  }}
                >
                  <Box
                    component={Card}
                    width={1}
                    height={1}
                    
                    display={'flex'}
                    flexDirection={'column'}
                    sx={{ backgroundImage: 'none' }}
                    paddingBottom={3}
                  >
                    <CardMedia
                      title={item.title}
                      image={item.media}
                      sx={{
                        position: 'relative',
                        height: { xs: 240, sm: 340, md: 280 },
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component={'svg'}
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1921 273"
                        sx={{
                          position: 'absolute',
                          width: '100%',
                          left: 0,
                          bottom: 0,
                          right: 0,
                          zIndex: 1,
                        }}
                      >
                        <polygon
                          fill={theme.palette.background.paper}
                          points="0,273 1921,273 1921,0 "
                        />
                      </Box>
                      
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        position={'absolute'}
                        top={0}
                        padding={2}
                        width={1}
                        zIndex={2}
                      >
                        
                        <Box
                          padding={1}
                          paddingX={1.5}
                          bgcolor={'background.paper'}
                          boxShadow={5}
                          borderRadius={6}
                          border={1}
                          borderColor={'#bfbfbf'}
                        >
                          <Typography sx={{ fontWeight: 600 }}>
                            {item.category}
                          </Typography>
                        
                        </Box>

                        {/*
                        <Button
                          variant={'contained'}
                          color="primary"
                          size="large"
                          startIcon={
                            <Box
                              component={'svg'}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={16}
                              height={16}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </Box>
                          }
                        >
                          Save
                        </Button>
                        */}

                      </Box>


                      <Box
                        display={'flex'}
                        justifyContent={'space-between'} 
                        position={'absolute'}
                        bottom={0}
                        padding={2}
                        width={1}
                        zIndex={2}
                      >
                        
                        <Box
                          padding={1}
                          paddingX={2}
                          bgcolor={'background.paper'}
                          boxShadow={5}
                          borderRadius={6}
                          border={1}
                          borderColor={'#bfbfbf'}
                          display={'flex'}                        
                          justifyContent={'center'}
                          alignItems={'center'}
                        >
                          <Typography sx={{ fontWeight: 600 }}>
                            {item.audience}
                          </Typography>
                        
                        </Box>


                        <Button
                          variant={'contained'}
                          color="primary"
                          size="large"
                          href= {'/Services'}
                          startIcon={
                            <Box
                              component={'svg'}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={16}
                              height={16}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </Box>
                          }
                        >
                          See Details
                        </Button>
                      </Box>


                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant={'h6'}
                        gutterBottom
                        align={'left'}
                        sx={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        /* variant={'h6'} */
                        gutterBottom
                        align={'left'}
                        sx={{ fontWeight: 300 }}
                      >
                        {item.summary}
                      </Typography>
                      <Box display={'flex'} alignItems={'center'} marginY={2}>
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                          marginRight={1}
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </Box>
                        <Typography variant={'subtitle1'} color="text.secondary">
                          {item.tutor}
                        </Typography>
                      </Box>
                      <Box
                        marginTop={2}
                        display={'flex'}
                        justifyContent={'space-between'}
                      >
                        <AvatarGroup max={4}>
                          {item.users.map((u) => (
                            <Avatar key={u} src={u} />
                          ))}
                        </AvatarGroup>
                        <Box display={'flex'} alignItems={'center'}>
                          <Box
                            component={'svg'}
                            width={20}
                            height={20}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            color={colors.yellow[700]}
                            marginRight={1}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </Box>
                          <Typography sx={{ fontWeight: 700 }}>5.0</Typography>
                        </Box>
                      </Box>
                    </CardContent>
                    <Box flexGrow={1} />
                    <CardActions 
                      sx={{ 
                        justifyContent: 'center' 
                      }}
                    >
                      <Button
                        variant={'contained'}
                        href= {'/Contact'}
                        color="primary"
                        size="large"
                      >
                        Schedule Now
                      </Button>
                    </CardActions>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedServiceSlider;
