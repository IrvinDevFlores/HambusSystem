import React, { useState } from 'react'
import { IonActionSheet, IonRouterOutlet,IonContent, IonItem, IonLabel, IonButton, IonRow, IonCol, IonGrid, IonRouterLink} from '@ionic/react';
import { close, clipboard, receipt, time } from 'ionicons/icons';
import { Redirect,Route } from 'react-router';

export const Tables: React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showReserve, showDisponible] = useState(false);

  function GoToCategories()
  {
    alert("eres lo mejor");
    
  }
  return (
    <IonContent>
        <IonGrid>
            <IonRow>
                <IonCol size="4">
                    <IonButton id ="table-1" onClick={() =>setShowActionSheet(true)} expand="block">Table-ID</IonButton>
                </IonCol>
                <IonCol size="4">
                    <IonButton id ="table-2" onClick={() => setShowActionSheet(true)} expand="block">Table-ID</IonButton>
                </IonCol>
                <IonCol size="4">
                    <IonButton id ="table-3" onClick={() => setShowActionSheet(true)} expand="block">Table-ID</IonButton>
                </IonCol>
                <IonCol size="4">
                    <IonButton id ="table-4" onClick={() => setShowActionSheet(true)} expand="block">Table-ID</IonButton>
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
            GoToCategories();
          }
        }, {
          text: 'Ver Cuenta',
          icon: receipt,
          handler: () => {
            console.log('Share clicked');
          }
        }, {
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