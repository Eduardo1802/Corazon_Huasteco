import LabelRoundedIcon from '@mui/icons-material/LabelRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';

export const navLinks =[
    {
      title: "Tematicas", path: "tematicas", icon: <LabelRoundedIcon />
    },
    {
      title: "Sobre Nosotros", path: "sobre-nosotros", icon: <BusinessRoundedIcon />
    },
    {
      title: "Donaciones", path: "donaciones", icon: <PaidRoundedIcon />
    },
    {
      title: "Creadores de Contenido", path: "creadores-de-contenido", icon: <LibraryBooksRoundedIcon />
    },
    {
      title: "Tienda", path: "tienda", icon: <StoreRoundedIcon />
    }
  ]