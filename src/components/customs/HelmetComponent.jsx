import { Helmet } from 'react-helmet-async'
import { formatRouteTitle } from '../../utils/fnFormatRouteTile';
import { useLocation } from 'react-router-dom'

export const HelmetComponent = ({titulo}) => {
  
    const location = formatRouteTitle(useLocation().pathname);

    return (
        <Helmet>
            <title>{titulo ? titulo : location} | Corazón Huasteco</title>
        </Helmet>
    )
}
