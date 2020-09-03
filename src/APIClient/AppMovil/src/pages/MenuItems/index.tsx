import { IonCheckbox, IonContent, IonHeader,
   IonItem, IonItemDivider, IonLabel,
    IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import MenuItemComponent from './MenuItemComponent';



export const MenuItems : React.FC = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [showReserve, showDisponible] = useState(false);
  const [checked, setChecked] = useState(false);

  

  const checkboxList = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
    ];
  function Nein()
  {
    alert("eres lo mejor");
       
  }

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>CheckboxExamples</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItemDivider>Default Checkbox</IonItemDivider>
        <IonItem>
          <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
          <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
        </IonItem>

        <IonItemDivider>Disabled Checkbox</IonItemDivider>
     

        {checkboxList.map(({ val, isChecked }, i) => (
         
             <MenuItemComponent productName={val}
                                productPrice={100}/>
        ))}
      </IonList>
    </IonContent>
  </IonPage>
  );

}

