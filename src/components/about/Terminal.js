import { Box } from "@mui/material";
import classNames from "classnames";
import Style from "./Terminal.module.scss";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const {text} = props;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
           width={{xs: '95%', md: '50%'}}
           maxWidth={'100%'}
           borderRadius={'0.5rem'}
           mb={'4rem'}
           sx={{ boxSizing: 'border-box', overflowX: 'hidden' }}
      >
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={classNames(iconClass, Style.red)}/>
            <i className={classNames(iconClass, Style.amber)}/>
            <i className={classNames(iconClass, Style.green)}/>
         </Box>
         <Box
            py={{xs: '1rem', md: '2rem'}}
            px={{xs: '1rem', md: '3rem'}}
            borderRadius={'0 0 0.5rem 0.5rem'}
            sx={{
               backgroundColor: '#27242f',
               fontSize: { xs: '1rem', md: '1.5rem' },
               fontFamily: 'Courier New, Courier, monospace',
               overflowX: 'auto',       /* allow horizontal scroll inside terminal if needed */
               wordBreak: 'break-word',
               overflowWrap: 'break-word',
               boxSizing: 'border-box',
            }}
         >
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;