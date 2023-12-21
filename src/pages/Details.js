import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { checkmark,star,heart} from 'ionicons/icons';
import LoadDetails from '../controller/HttpDetails';
class Details extends React.Component{
 render(){


 return(
        <main>
      
        <div className="details-container">
        <div className="details-description">
            <div className="details-title">
                <p className="text-length">Description of Card 1 </p>
                <h3 className="text-length">Card 1 Title fdafasdfasdfasdf</h3>
                <div className="rating">
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                    <IonIcon icon={star}></IonIcon>
                </div>
                <div className="description ">
                    The HyperText Markup Language or HTML is the standard markup
                    language for documents designed to be displayed in a web browser.
                    It defines the meaning and structure of web content.
                    It is often assisted by technologies such as Cascading Style Sheets (CSS)
                    and scripting languages such as JavaScript. dhfasidhf dhsapo fhdsapoh fpaosdhf opasdhofp hsdao
                    fhopasdh ofiahsdo fhasopd hfpoasdh fopasdhopfh opsdah opfish odihafpo hadspof hidsopfh posdhif
                    opasdihf opsadh opfihadsopf hasdop ihfaodsp hifopasi dhfopih dopsfhiopdsihf opasdhif opsah fpoahsd
                    pofhasd pohfopasdhfop hdasop fhasdpo fho sdih osiihdpsoahf podhsfop hsadopf hpoasdhf opasdhf opashdf
                    opashd opfhaso pdfhpos dfpo hdspofihaspod fhposdhf posadhf poashdfpo ihadsop fhaspodhf poasdhif
                    poahsdpof hsdpof hposdhf opsdhaf poahsdopf hasopdihf ashdo fhsaodfh opasidhf posdahfpo asihdpfo
                    sdhapofh dosi

                </div>
            </div>


        </div>

        <div className="author-card">
            <img src="logos/analytics.png" alt="analytics"/>
            <p className="author-name text-length"><strong>HTML</strong> by <NavLink to="#">Sarah Smith</NavLink></p>
            <div className="add-favourites border">
                <p>Interested about this topic?</p>
                <button>Add to Favourites <IonIcon icon={heart}></IonIcon></button>

                <p className="credits">Unlimited credits</p>

            </div>
        </div>

    </div>

    <div className="topics">
        <div className="topics-container">
            <h2 className="text-length">Checklist</h2>

            <ul className="checklist-topics ">
                <li>
                    <span><IonIcon icon={checkmark}></IonIcon></span> Topic 1 - Item
                 </li>
                 <li>
                    <span><IonIcon icon={checkmark}></IonIcon></span> Topic 1 - Item
                 </li>   
                 <li>
                    <span><IonIcon icon={checkmark}></IonIcon></span> Topic 1 - Item
                 </li>  
                  <li>
                    <span><IonIcon icon={checkmark}></IonIcon></span> Topic 1 - Item
                 </li>
                 <li>
                    <span><IonIcon icon={checkmark}></IonIcon></span> Topic 1 - Item
                 </li>
                 <li>
                    <span><IonIcon icon={checkmark}></IonIcon></span> Topic 1 - Item
                 </li>
             
            </ul>

        </div>
    </div>
        </main>
    );
 }

}

export default Details;