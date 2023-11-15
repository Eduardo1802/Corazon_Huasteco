import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Fade, Grow, Typography } from '@mui/material';

export default function TimelineUsSmall({imgAus, imgMural}) {
  const [componentLoaded, setComponentLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setComponentLoaded(true);
    }, 100);
  }, []);
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Box sx={{ py: 3,  display: "flex", justifyContent: "center", flexFlow: "column wrap"}}>
                <Typography variant="h4" color="text.primary">
                    Misión: 
                </Typography>
                <Grow in={componentLoaded}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(componentLoaded ? { timeout: 500 } : {})}
                >
                  <Typography variant="subtitle1" color="text.secondary">
                      Somos una empresa que promueve la cultura a traves de la difusión y fomento de la enseña que impulsen la libre expresión cultural, estimulando los trabajos de creación, investigación, cientificos, literarios y artisticos
                  </Typography>
                </Grow> 
                <Fade in={componentLoaded}>
                  <Box
                    component="img"
                    src={imgAus}
                    preload="true"
                    cached="true"
                    alt="img-casa-de-la-cultura"
                    sx={{ width: "100%", height: "100%", objectFit: "cover", mt: 2 }}
                  />
                </Fade>
            </Box>
            
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Box sx={{  py: 3, display: "flex", justifyContent: "center", flexFlow: "column wrap"}}>
                <Typography variant="h4" color="text.primary">
                    Visión: 
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Ser una empresa importante en el ambito cultural del municipio de Huejutla de Reyes Hidalgo para proyectar a nivel nacional e internacional la cultura de esta región.
                </Typography>
                <Box
                  component="img"
                  src={imgMural}
                  preload="true"
                  cached="true"
                  alt="img-mural"
                  sx={{ width: "100%", height: "100%", objectFit: "cover", mt: 2 }}
                />
            </Box>
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