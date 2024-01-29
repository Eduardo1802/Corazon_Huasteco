import { AccountBalance, AccountBalanceOutlined, Book, BookOutlined, Label, LabelOutlined, SmartToy, SmartToyOutlined, Store, StoreOutlined, VolunteerActivism, VolunteerActivismOutlined } from "@mui/icons-material";

export const navLinks =[
    {
      title: "Tematicas",
      path: "/tematicas", 
      icon: <LabelOutlined />,
      iconSelected: <Label />
    },
    {
      title: "ChatBot",
      path: "/chatbot", 
      icon: <SmartToyOutlined />,
      iconSelected: <SmartToy/>
    },
    {
      title: "Nosotros",
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
      title: "Colaboradores",
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