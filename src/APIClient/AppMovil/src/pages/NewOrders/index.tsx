import React, { useState } from 'react'
import { IonActionSheet, IonRouterOutlet,IonContent, IonItem, IonLabel, IonButton, IonRow, IonCol, IonGrid, IonRouterLink} from '@ionic/react';
import { close, clipboard, receipt, time } from 'ionicons/icons';
import { Redirect,Route } from 'react-router';

export const NewOrders: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showReserve, showDisponible] = useState(false);

  function Nein()
  {
    alert("eres lo mejor");
       
  }
  return (
    <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonButton id ="Category-1" onClick={() =>setShowActionSheet(true)} expand="block">Hamburguesas</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton id ="Categorye-2" onClick={() => setShowActionSheet(true)} expand="block">Bebidas</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton id ="Category-3" onClick={() => setShowActionSheet(true)} expand="block">Entradas</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton id ="Category-4" onClick={() => setShowActionSheet(true)} expand="block">Para Niños</IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
    
      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[{
          
          text: 'Nueva Orden',
          role: 'destructive',
          icon: clipboard,
          handler: () => {
           Nein();
          }
        }, {
          text: 'Ver Cuenta',
          icon: receipt,
          handler: () => {
            console.log('Share clicked');
          }
        },
         {
            text: 'Estado de ordenes',
            icon: time,
            handler: () => {
            console.log('Play clicked');
         }
        }, 
         {
          text: 'Cancel',
          icon: close,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]}
      >
      </IonActionSheet>
    </IonContent>

  );

}