import React from 'react';
import { IonIcon } from '@ionic/react';
import { heart} from 'ionicons/icons';
class Footer extends React.Component{

    render(){
        return(
<footer>Developed with <IonIcon icon={heart}></IonIcon> © 2023</footer>
        );
    }
}
export default Footer;
