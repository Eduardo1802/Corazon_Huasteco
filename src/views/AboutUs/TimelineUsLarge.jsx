import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';
import imgAus                 from "../../assets/img/sobre-nosotros/imgSobreNosotros.jpg"
import imgMural               from "../../assets/img/inicio/imgMural.jpg"
import { Card, CardMedia, Box, Typography } from '@mui/material';

export default function TimelineUsLarge() {
  return (
    <Timeline position="alternate">
      <TimelineItem >
        <TimelineOppositeContent color="text.secondary">
          <Card
            data-aos="fade-right"
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
            />
          </Card>   
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{p:3, height: "100%", display: "flex", justifyContent: "center", flexFlow: "column wrap"}}  data-aos="fade-up">
            <Typography variant="h4" color="text.primary">
              Misión: 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Somos una empresa que promueve la cultura a traves de la difusión y fomento de la enseña que impulsen la libre expresión cultural, estimulando los trabajos de creación, investigación, cientificos, literarios y artisticos
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <Card
            data-aos="fade-left"
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
            />
          </Card>   
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{p:3, height: "100%", display: "flex", justifyContent: "center", flexFlow: "column wrap"}}  data-aos="fade-up">
            <Typography variant="h4" color="text.primary">
              Visión: 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Ser una empresa importante en el ambito cultural del municipio de Huejutla de Reyes Hidalgo para proyectar a nivel nacional e internacional la cultura de esta región.
            </Typography>
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