import React, { useState } from 'react';
import { IonContent, IonInput,IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonText } from '@ionic/react';


export const Login: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [password, setpassword] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bienvenido</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Iniciar Sesion</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonLabel>Usuario:</IonLabel>
            <IonInput value={text}></IonInput>
            <IonLabel>Contraseña:</IonLabel>
            <IonInput type = "password" value={password}></IonInput>
            <IonItem href="#" className="ion-activated">
            <IonLabel>Iniciar Sesion</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};