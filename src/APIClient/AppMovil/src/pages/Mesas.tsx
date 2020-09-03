import React from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, 
  IonToolbar, IonImg } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';


const Mesas: React.FC = () => {
  return (
    <IonPage>

      <IonHeader >
          <IonToolbar slot="center">
            <div className="hcs">
              <IonImg src="/assets/logo.jpg" slot="secondary"/>
            </div>
          </IonToolbar>
        </IonHeader>

      <IonContent>
        
      </IonContent>

    </IonPage>
  );
};

export default Mesas;
