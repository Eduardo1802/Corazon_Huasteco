import {useScrollTrigger, Slide} from '@mui/material';
import { Button }                from '@mui/material';
import { styled }                from '@mui/material/styles';


export function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}




export const CustomizedBtn = styled(Button)`
    color: #D9CAAD;
    border: 0.1rem solid #D9CAAD;
    text-transform: none;
`;


