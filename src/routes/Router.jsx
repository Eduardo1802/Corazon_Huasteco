import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// nav && foot components
import { NavBar }               from '../components/Layout/NavBar/NavBar'
import { Footer }               from '../components/Layout/Footer/Footer'
// routes components
import { ChatBot }        from '../views/ChatBot/ChatBot'
import { SobreNosotros }        from '../views/AboutUs/SobreNosotros'
import { Acceso }               from '../views/Access/Acceso'
import { AvisoDePrivacidad }    from '../views/NoticePrivacy/AvisoDePrivacidad'
import { CreadoresDeContenido } from '../views/ContentCreators/CreadoresDeContenido'
import { Donaciones }           from '../views/Donations/Donaciones'
import { Error }                from '../views/Error/Error'
import { Inicio }               from '../views/Home/Inicio'
import { Mapa }                 from '../views/Home/Mapa/Mapa'
import { PreguntasFrecuentes }  from '../views/FAQ/PreguntasFrecuentes'
import { Registro }             from '../views/Register/Registro'
import { RestorePassword }      from '../views/RestorePass/RestorePassword'
import { Solicitud }            from '../views/Request/Solicitud'
import { DetalleProduct }       from '../views/Shop/DetalleProduct'
import { Tienda }               from '../views/Shop/Tienda'
import { Danza }                from '../views/Thematics/Danza/Danza'
import { Gastronomia }          from '../views/Thematics/Gastronomia/Gastronomia'
import { Musica }               from '../views/Thematics/Musica/Musica'
import { PanelTematicas }       from '../views/Thematics/PanelTematicas'
import { Tradiciones }          from '../views/Thematics/Tradiciones/Tradiciones'
import { Vestimenta }           from '../views/Thematics/vestimenta/Vestimenta'
// profiles components
import { Administrador }        from '../views/Profiles/Administrador/Administrador'
import { Colaborador }          from '../views/Profiles/Colaborador/Colaborador'
import { Consultor }            from '../views/Profiles/Consultor/Consultor'
import { Supervisor }           from '../views/Profiles/Supervisor/Supervisor'
// aditional components
import { AuthProvider }         from '../context/AuthContext'
import { ProtectedRoute }       from '../components/customs/ProtectedRoute'
import { ProtecteRoutAdmi }     from '../components/customs/ProtecteRoutAdmi'
import { ProtecteRoutCol }      from '../components/customs/ProtecteRoutCol'
import { ProtectedRoutSuper }   from '../components/customs/ProtectedRoutSuper'
import { CifradoCesar }         from '../components/Cifrado/CifradoCesar'
// import CheckConnection          from '../components/OffLine/CheckConnection';
import ScrollToTop              from '../components/customs/ScrollToTop'
import { getProducts } from '../utils/fnTienda'
import { useEffect, useState } from 'react'
import { DetalleTematicas } from '../views/Thematics/DetalleTematicas'
import { getTematicas } from '../utils/fnTematica'
import { CarritoProvider } from '../context/CarritoContext'
import { WavyDivider } from '../components/customs/WavyDivider'

export const Router = ({isDarkMode, handleThemeChange}) => {

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
              <NavBar isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
                  <ScrollToTop>
                    <Routes>
                      {/*rutasDeAplicacion*/}
                      <Route path='/'                       element={<Navigate to='/inicio'/>}/>
                      <Route path='/inicio'                 element={<Inicio/>} />
                      <Route path='/mapa'                   element={<Mapa/> } />
                      <Route path='/chatbot'         element={<ChatBot/>} />
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
                  </ScrollToTop>

              <WavyDivider/>
              <Footer/>
            </CarritoProvider>
          </AuthProvider>
        {/* </CheckConnection> */}
      </BrowserRouter>
  )
}
