import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// nav && foot components
import { NavBar }               from '../components/Layout/NavBar/NavBar'
import { Footer }               from '../components/Layout/Footer/Footer'
// routes components
const ChatBot               = lazy(() => import('../views/ChatBot/ChatBot').then((module) => ({ default: module.ChatBot })))
const SobreNosotros         = lazy(() => import('../views/AboutUs/SobreNosotros').then((module) => ({ default: module.SobreNosotros })))
const Acceso                = lazy(() => import('../views/Access/Acceso').then((module) => ({ default: module.Acceso })))
const AvisoDePrivacidad     = lazy(() => import('../views/NoticePrivacy/AvisoDePrivacidad').then((module) => ({ default: module.AvisoDePrivacidad })))
const CreadoresDeContenido  = lazy(() => import('../views/ContentCreators/CreadoresDeContenido').then((module) => ({ default: module.CreadoresDeContenido })))
const Donaciones            = lazy(() => import('../views/Donations/Donaciones').then((module) => ({ default: module.Donaciones })))   
const Error                 = lazy(() => import('../views/Error/Error').then((module) => ({ default: module.Error })))
import { Inicio } from '../views/Home/Inicio'
const Mapa                  = lazy(() => import('../views/Home/Mapa/Mapa').then((module) => ({ default: module.Mapa })))
const PreguntasFrecuentes   = lazy(() => import('../views/FAQ/PreguntasFrecuentes').then((module) => ({ default: module.PreguntasFrecuentes })))
const Registro              = lazy(() => import('../views/Register/Registro').then((module) => ({ default: module.Registro })))
const RestorePassword       = lazy(() => import('../views/RestorePass/RestorePassword').then((module) => ({ default: module.RestorePassword })))
const Solicitud             = lazy(() => import('../views/Request/Solicitud').then((module) => ({ default: module.Solicitud })))
const DetalleProduct        = lazy(() => import('../views/Shop/DetalleProduct').then((module) => ({ default: module.DetalleProduct })))
const Tienda                = lazy(() => import('../views/Shop/Tienda').then((module) => ({ default: module.Tienda })))
const Danza                 = lazy(() => import('../views/Thematics/Danza/Danza').then((module) => ({ default: module.Danza })))
const DetalleTematicas      = lazy(() => import('../views/Thematics/DetalleTematicas').then((module) => ({ default: module.DetalleTematicas })))
const Gastronomia           = lazy(() => import('../views/Thematics/Gastronomia/Gastronomia').then((module) => ({ default: module.Gastronomia })))
const Musica                = lazy(() => import('../views/Thematics/Musica/Musica').then((module) => ({ default: module.Musica })))
const PanelTematicas        = lazy(() => import('../views/Thematics/PanelTematicas').then((module) => ({ default: module.PanelTematicas })))
const Tradiciones           = lazy(() => import('../views/Thematics/Tradiciones/Tradiciones').then((module) => ({ default: module.Tradiciones })))
const Vestimenta            = lazy(() => import('../views/Thematics/vestimenta/Vestimenta').then((module) => ({ default: module.Vestimenta })))
const CifradoCesar          = lazy(() => import('../components/Cifrado/CifradoCesar').then((module) => ({ default: module.CifradoCesar })))
// profiles components        
const Administrador                  = lazy(() => import('../views/Profiles/Administrador/Administrador').then((module) => ({ default: module.Administrador })))
const Colaborador                    = lazy(() => import('../views/Profiles/Colaborador/Colaborador').then((module) => ({ default: module.Colaborador })))
const Consultor                      = lazy(() => import('../views/Profiles/Consultor/Consultor').then((module) => ({ default: module.Consultor })))
const Supervisor                     = lazy(() => import('../views/Profiles/Supervisor/Supervisor').then((module) => ({ default: module.Supervisor })))
// aditional components       
import { AuthProvider }                 from '../context/AuthContext'
import { ProtectedRoute }               from '../components/customs/ProtectedRoute'
import { ProtecteRoutAdmi }             from '../components/customs/ProtecteRoutAdmi'
import { ProtecteRoutCol }              from '../components/customs/ProtecteRoutCol'
import { ProtectedRoutSuper }           from '../components/customs/ProtectedRoutSuper'
// import CheckConnection                  from '../components/OffLine/CheckConnection';
import ScrollToTop                      from '../components/customs/ScrollToTop'
import { getProducts } from '../utils/fnTienda'
import { getTematicas } from '../utils/fnTematica'
import { CarritoProvider } from '../context/CarritoContext'
import { WavyDivider } from '../components/customs/WavyDivider'
import { Box, Fab } from '@mui/material'
import { KeyboardDoubleArrowUp } from '@mui/icons-material'
import { BtnScrollTop } from '../components/customs/btnScrollTop'
import { LoaderAnimation } from '../components/customs/LoaderAnimation'

export const Router = ({isDarkMode, handleThemeChange}, props) => {

  const [productos, setProductos] = useState(null);
  const [tematicas, setTematicas] = useState(null);

  const getProductsData = async() =>{
    const p = await getProducts();
    setProductos(p.docs);
  }

  const getTematicasData = async() =>{
    const t = await getTematicas();
    setTematicas(t.docs);
  }

  useEffect(() => {
    getProductsData();
    getTematicasData();
  }, [])

  return (
    <BrowserRouter>
      {/* <CheckConnection> */}
      <AuthProvider>
        <CarritoProvider>
          <Box id="back-to-top-anchor" />
          <NavBar isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
            <ScrollToTop>
              <Suspense fallback={<LoaderAnimation/>}>
                <Routes>
                  {/*rutasDeAplicacion*/}
                  <Route path='/'                       element={<Navigate to='/inicio'/>}/>
                  <Route path='/inicio'                 element={<Inicio/>} />
                  <Route path='/mapa'                   element={<Mapa/> } />
                  <Route path='/chatbot'                element={<ChatBot/>} />
                  <Route path='/sobre-nosotros'         element={<SobreNosotros/>} />
                  <Route path='/donaciones'             element={<Donaciones/>} />
                  <Route path='/creadores-de-contenido' element={<CreadoresDeContenido/>} />
                  <Route path='/tienda'                 element={<Tienda/>} />
                  <Route path='/tienda/:id'             element={<DetalleProduct productos={productos}/> } />
                  <Route path='/aviso-de-privacidad'    element={<AvisoDePrivacidad/>} />
                  <Route path='/preguntas-frecuentes'   element={<PreguntasFrecuentes/>} />
                  
                  {/* SubRutas -- tematicas */}
                  <Route path="/tematicas/" /*AquiSePuedeRenderizarUnNavTematicas*/ >
                    <Route index element={<PanelTematicas/>}/*yAquiSePuedeRenderizarUnListTematicas*/  />
                    <Route path="vestimenta"          element={<Vestimenta />} />
                    <Route path="danza"               element={<Danza/>} />
                    <Route path="gastronomia"         element={<Gastronomia/>} />
                    <Route path="musica"              element={<Musica/>} />
                    <Route path="tradiciones"         element={<Tradiciones/>} />
                    <Route path="*"                   element={<Error/>} />
                  </Route>
                  <Route path='tematicas/:id'     element={<DetalleTematicas tematicas={tematicas}/> } />

                  {/* Perfiles -- usuarios */}
                  <Route path='/user/consultor'     element={<ProtectedRoute>       <Consultor/>      </ProtectedRoute>} />
                  <Route path='/user/colaborador'   element={<ProtecteRoutCol>     <Colaborador/>    </ProtecteRoutCol>  } />
                  <Route path='/user/supervisor'    element={<ProtectedRoutSuper>   <Supervisor/>   </ProtectedRoutSuper>    } />
                  <Route path='/user/administrador' element={<ProtecteRoutAdmi>   <Administrador/>    </ProtecteRoutAdmi>   } />
                  {/* acceso -- registro */}
                  <Route path='/acceso'               element={<Acceso/>} />
                  <Route path='/acceso/restaurar-pass'element={<RestorePassword/>} />
                  <Route path='/acceso/cesar'         element={<CifradoCesar/>} />
                  <Route path='/registro'             element={<Registro/>} />
                  <Route path='/registro/colaborador' element={<Solicitud/>} />
                  {/* vista -- error */}
                  <Route path="*" element={<Error/>} />
                </Routes>
              </Suspense>

              <BtnScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top" 
                  sx={{
                    bgcolor: "primary.main", color: "background.paper", 
                    '&:hover': {
                      bgcolor: 'background.paper',
                      color: "primary.main",
                      border: "1px solid",
                    },
                  }}
                >
                    <KeyboardDoubleArrowUp />
                </Fab>
              </BtnScrollTop>
            </ScrollToTop>

          <WavyDivider/>
          <Footer/>
        </CarritoProvider>
      </AuthProvider>
      {/* </CheckConnection> */}
    </BrowserRouter>
  )
}
