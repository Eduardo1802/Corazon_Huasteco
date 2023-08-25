import styled   from '@emotion/styled'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'



// contenedor de footer
export const FooterContent = styled.footer`
  border-top: 1px solid #e1e1e1;
  margin-top: 50rem;
  padding-top: 5rem; 
`
//componente router personalizado {link}
export const LinkStyled = styled(Link)(({ theme }) => ({
  
  color: "white",
  textDecoration: "none",

  '&:hover': {
      color: theme.palette.background.default,
  }
}))

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: "white",
  transition: "all 0.3s ease-in-out",
  '&:hover': {
      color: theme.palette.background.default,
      transform: "rotate(-10deg) scale(1.2)",
  }
}))