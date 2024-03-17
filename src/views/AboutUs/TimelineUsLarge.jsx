import { useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import { Card, CardMedia, Box, Typography, Fade, Grow } from '@mui/material';

export default function TimelineUsLarge({imgAus, imgMural}) {
  const [componentLoaded, setComponentLoaded] = useState(false);
  
  useEffect(() => { setTimeout(() => { setComponentLoaded(true); }, 100); }, []);
  return (
    <Timeline position="alternate">
      <TimelineItem >
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card sx={{ width: "100%", bgcolor: "background.paper" }}>
              <CardMedia
                component="img"
                height={"100%"}
                image={imgAus}
                preload="true"
                cached="true"
                alt="img-casa-de-la-cultura"
              />
            </Card>   
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Grow in={componentLoaded}
            style={{ transformOrigin: '0 0 0' }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box sx={{p:3, height: "100%", display: "flex", justifyContent: "center", flexFlow: "column wrap"}} >
              <Typography variant="h4" color="text.primary">
                Misión: 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Somos una empresa que promueve la cultura a traves de la difusión y fomento de la enseña que impulsen la libre expresión cultural, estimulando los trabajos de creación, investigación, cientificos, literarios y artisticos
              </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card sx={{ width: "100%", bgcolor: "background.paper" }}>
            <CardMedia
              component="img"
              height={"100%"}
              image={imgMural}
              preload="true"
              cached="true"
              alt="img-mural"
            />
            </Card>   
          </Fade>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Grow in={componentLoaded}
            style={{ transformOrigin: '0 0 0' }}
            {...(componentLoaded ? { timeout: 500 } : {})}
          >
            <Box sx={{p:3, height: "100%", display: "flex", justifyContent: "center", flexFlow: "column wrap"}}>
            <Typography variant="h4" color="text.primary">
              Visión: 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ser una empresa importante en el ambito cultural del municipio de Huejutla de Reyes Hidalgo para proyectar a nivel nacional e internacional la cultura de esta región.
            </Typography>
            </Box>
          </Grow>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary' />
        </TimelineSeparator>
        <TimelineContent></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}