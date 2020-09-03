import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import React, { useRef, createRef, RefObject, useEffect } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";




export default React.forwardRef(function NuevaOrdenTab(props, ref) {

  


  return (
    <IonPage>
   
    <IonToolbar ref ={ref}>
         <IonButtons slot="start">
           <IonBackButton defaultHref="/" />
         </IonButtons>
         <IonTitle>Nueva orden</IonTitle>
       </IonToolbar>
  
       <IonContent>
         <ExploreContainer name="Ordenes" />
         <IonGrid>
           <IonRow>
             <IonCol>
               <IonCard mode="ios" color="warning">
                 <IonCardHeader mode="ios" color="success">
                   <IonCardTitle>Mesa</IonCardTitle>
                 </IonCardHeader>
  
                 <IonButton color="tertiary">Numero: 1</IonButton>
                 <IonCardContent color="danger">
                   <IonImg src="/assets/table.png" />
                 </IonCardContent>
                 <IonCardHeader>
                   <IonCardSubtitle>Cantidad de asientos: 6</IonCardSubtitle>
                    <IonCardSubtitle>data: {ref.arguments}</IonCardSubtitle>
                 </IonCardHeader>
               </IonCard>
             </IonCol>
  
             <IonCol>
               <IonCard mode="ios" color="warning">
                 <IonCardHeader mode="ios" color="success">
                   <IonCardTitle>Mesa</IonCardTitle>
                 </IonCardHeader>
  
                 <IonButton color="tertiary">Numero: 1</IonButton>
                 <IonCardContent color="danger">
                   <IonImg
                     src="/assets/table.png"
                     onClick={() => {
                       alert("data");
                     }}
                   />
                 </IonCardContent>
                 <IonCardHeader>
                   <IonCardSubtitle>Cantidad de asientos: 6</IonCardSubtitle>
                   <IonCardSubtitle>Clientes en mesa: 6</IonCardSubtitle>
                 </IonCardHeader>
               </IonCard>
             </IonCol>
           </IonRow>
         </IonGrid>
       </IonContent>
     </IonPage>
  
  );
})

