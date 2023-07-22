import { AccountBalance, AccountBalanceOutlined, Book, BookOutlined, Business, BusinessOutlined, Label, LabelOutlined, LibraryBooks, LibraryBooksOutlined, Paid, PaidOutlined, Store, StoreOutlined, VolunteerActivism, VolunteerActivismOutlined } from "@mui/icons-material";


export const navLinks =[
    {
      title: "Tematicas",
      path: "/tematicas", 
      icon: <LabelOutlined />,
      iconSelected: <Label />
    },
    {
      title: "Sobre Nosotros",
      path: "/sobre-nosotros", 
      icon: <AccountBalanceOutlined/>,
      iconSelected: <AccountBalance />
    },
    {
      title: "Donaciones",
      path: "/donaciones", 
      icon: <VolunteerActivismOutlined/>,
      iconSelected: <VolunteerActivism />
    },
    {
      title: "Creadores de Contenido",
      path: "/creadores-de-contenido", 
      icon: <BookOutlined/>,
      iconSelected: <Book />
    },
    {
      title: "Tienda",
      path: "/tienda", 
      icon: <StoreOutlined/>,
      iconSelected: <Store />
    }
  ]