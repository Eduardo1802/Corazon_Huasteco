import React, {useRef, useEffect, useCallback} from 'react';
import { styled } from '@mui/material/styles';
import { Button, Tooltip, Zoom } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Slideshow = ({ children, controles = false, autoplay = false, velocidad="700", intervalo="5000" }) => {
	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if (slideshow.current && slideshow.current.children && slideshow.current.children.length > 0) {
			const primerElemento = slideshow.current.children[0];// Obtenemos el primer elemento del slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;// Establecemos la transicion para el slideshow.

			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;// Movemos el slideshow

			const transicion = () => {
				slideshow.current.style.transition = 'none'; // Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(primerElemento);// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.removeEventListener('transitionend', transicion);
			}
			slideshow.current.addEventListener('transitionend', transicion);// Eventlistener para cuando termina la animacion.
		}
	}, [velocidad]);
	
	const anterior = () => {
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;// Obtenemos el ultimo elemento del slideshow.
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if(autoplay){
			intervaloSlideshow.current = setInterval(() => { siguiente(); }, intervalo);
	
			// Eliminamos los intervalos
			slideshow.current.addEventListener('mouseenter', () => { clearInterval(intervaloSlideshow.current); });
	
			// Volvemos a poner el intervalo cuando saquen el cursor del slideshow
			slideshow.current.addEventListener('mouseleave', () => {
				intervaloSlideshow.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>
				{children}
			</ContenedorSlideshow>
			{controles && <Controles>
				<Tooltip title="Imagen anterior" arrow placement='right' TransitionComponent={Zoom}>
					<Boton onClick={anterior} aria-label='ver imagen anterior'>
						<KeyboardArrowLeftIcon fontSize='large'/>
					</Boton>
				</Tooltip>
				<Tooltip title="Imagen siguiente" arrow placement='left' TransitionComponent={Zoom}>
					<Boton derecho={"true"} onClick={siguiente} aria-label='ver imagen siguiente'>
						<KeyboardArrowRightIcon fontSize='large'/>
					</Boton>
				</Tooltip>
			</Controles>}
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled('div')({ position: 'relative' });
  
const ContenedorSlideshow = styled("div")({
	display: "flex",
	flexWrap: "nowrap",
});

const Slide = styled("div")({
	minWidth: "100%",
	overflow: "hidden",
	transition: `0.3s ease all`,
	zIndex: 10,
	height: "90vh",
	position: "relative",

	"@media screen and (max-width: 899px)": {
		height: "65vh",
		'&':{ img: { objectFit: "contain", } },
	},

	img: {
		width: "100%",
		height: "100%",
		verticalAlign: "top",
		objectFit: "cover",
		objectPosition: "center",
		filter: "brightness(70%) contrast(110%)", // Agrega el filtro a la imagen
	},
});

const TextoSlide = styled("div")(({ colorFondo, colorTexto }) => ({
	background: colorFondo ? colorFondo : "rgba(0,0,0,.3)",
	color: colorTexto ? colorTexto : "#fff",
	width: "100%",
	padding: "10px 60px",
	textAlign: "center",
	fontSize: "1.5rem",
	position: "absolute",
	bottom: 0,
	pointerEvents: "none",
	display: "flex",
	justifyContent: "space-between",

	"@media screen and (max-width: 899px)": {
		fontSize: "2rem",
		lineHeight: "2rem",
		justifyContent: "center",
		'& > p': { margin: 0, },
		'& > p:nth-of-type(2)': { display: "none",}
	},
	"@media screen and (max-width: 599px)": { lineHeight: "63vh", fontSize: "1.5rem",},
	"@media screen and (max-width: 280px)": { fontSize: "1rem",},
}));

const Controles = styled("div")({
	position: "absolute",
	top: 0,
	zIndex: 20,
	width: "100%",
	height: "100%",
	pointerEvents: "none",
});

const Boton = styled(Button)(({ derecho, theme }) => ({
	pointerEvents: "all",
	background: theme.palette.background.paper,
	border: "none",
	cursor: "pointer",
	outline: "none",
	width: "50px",
	height: "70px",
	top: "50%",
	transform: derecho ? "translate(30%, -50%)" : "translate(-30%, -50%)",
	borderRadius: derecho ? "100% 0 0 100%": "0 100% 100% 0",
	textAlign: "center",
	position: "absolute",
	transition: "0.3s ease all",
	"@media screen and (max-width: 599px)": { background: "none" },
	path: { filter: derecho ? "drop-shadow(-2px 0px 0px #fff)" : "drop-shadow(2px 0px 0px #fff)" },
	...(derecho ? { right: 0 } : { left: 0 }),
}));
 
export {Slideshow, Slide, TextoSlide};