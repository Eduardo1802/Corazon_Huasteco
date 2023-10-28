import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import imgAus                 from "../../assets/img/sobre-nosotros/imgSobreNosotros.jpg"
import imgMural               from "../../assets/img/inicio/imgMural-01.jpg"

import { Card, CardMedia, Box, Typography, Fade, Grow } from '@mui/material';

export default function TimelineUsLarge() {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 100);
  }, []);
  return (
    <Timeline position="alternate">
      <TimelineItem >
        <TimelineOppositeContent color="text.secondary">
          <Fade in={componentLoaded}>
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper"
              }}
            >
              <CardMedia
                component="img"
                height={"100%"}
                image={imgAus}
                alt="img-casa-de-la-cultura"
                preload="true"
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
            <Card
              sx={{
                width: "100%",
                bgcolor: "background.paper"
              }}
            >
            <CardMedia
              component="img"
              height={"100%"}
              image={imgMural}
              alt="img-mural"
              preload="true"
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