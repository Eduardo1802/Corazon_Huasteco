import styled   from '@emotion/styled'
import { Link } from 'react-router-dom'



// contenedor de footer
export const FooterContent = styled.footer`
  border-top: 1px solid #e1e1e1;
  margin-top: 50rem;
  padding-top: 5rem; 
`
//componente router personalizado {link}
export const LinkStyled = styled(Link)(({ theme }) => ({
  display: "block",
  color: "white",
  textDecoration: "none",

  '&:hover': {
      color: theme.palette.background.default,
  }
}))