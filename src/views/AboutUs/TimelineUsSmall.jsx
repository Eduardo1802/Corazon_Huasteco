import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import imgAus                 from "../../assets/img/sobre-nosotros/imgSobreNosotros.jpg"
import imgMural               from "../../assets/img/inicio/imgMural.jpg"
import { Box, Typography } from '@mui/material';

export default function TimelineUsSmall() {
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
            <Box sx={{ py: 3,  display: "flex", justifyContent: "center", flexFlow: "column wrap"}}  data-aos="fade-up">
                <Typography variant="h4" color="text.primary">
                    Misión: 
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Somos una empresa que promueve la cultura a traves de la difusión y fomento de la enseña que impulsen la libre expresión cultural, estimulando los trabajos de creación, investigación, cientificos, literarios y artisticos
                </Typography>
                <Box
                    data-aos="zoom-in"
                    component="img"
                    src={imgAus}
                    alt="sobre-nosotros"
                    sx={{ width: "100%", height: "100%", objectFit: "cover", mt: 2 }}
                />
            </Box>
            
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Box sx={{  py: 3, display: "flex", justifyContent: "center", flexFlow: "column wrap"}}  data-aos="fade-up">
                <Typography variant="h4" color="text.primary">
                    Visión: 
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Ser una empresa importante en el ambito cultural del municipio de Huejutla de Reyes Hidalgo para proyectar a nivel nacional e internacional la cultura de esta región.
                </Typography>
                <Box
                    data-aos="zoom-in"
                    component="img"
                    src={imgMural}
                    alt="sobre-nosotros-mural"
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