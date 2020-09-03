import React, { useState } from 'react';
import { IonContent, IonInput, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonText } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

export const Account: React.FC = () => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
    const [password, setpassword] = useState<string>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Categorias</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                    Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                        <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                        <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="4">
                            <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                        <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                        <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="4">
                            <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                        <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                        <IonCol size="4">
                        <IonCard>
                                <IonItem href="#" className="ion-activated">
                                <IonCardHeader>
                                Categoria x
                                </IonCardHeader>
                                </IonItem>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};