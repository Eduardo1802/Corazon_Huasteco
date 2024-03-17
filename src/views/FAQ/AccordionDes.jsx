import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export const AccordionDes = () => {
  return (
    <Container>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>¿Que puedo hacer para subir un archivo?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Para subir un archivo... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography>¿Que puedo hacer para solicitar un cambio en la información?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Para solicitar un cambio...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
            >
                <Typography>¿Existen pagos alternos?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Los pagos alternos...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
            >
                <Typography>¿como puedo solicitar un reembolso?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Puedes solicitar un rembolso...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel3a-header"
            >
                <Typography>¿Los libros cuentan con alguna contraseña o restricción?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Los libros cuentan con...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel3a-header"
            >
                <Typography>¿Puedo solicitar un libro o recomendar uno para la página?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Puedes solicitar un libro o recomendar uno en... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
            >
                <Typography>¿Que datos necesitan oara enviarme mi compra?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Los datos que solicitamos son... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6a-content"
                id="panel6a-header"
            >
                <Typography>¿Para qué...?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Container>
  )
}