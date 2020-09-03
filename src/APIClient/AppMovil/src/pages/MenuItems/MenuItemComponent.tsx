
import * as React from "react";
import { render } from "@testing-library/react";
import { IonItem, IonLabel, IonCheckbox } from "@ionic/react";

interface MenuItemProps{
    productName : string,
    productPrice: number
}


const MenuItemModel = (props : MenuItemProps) =>(
    <svg/>
)

class MenuProduct extends React.Component<MenuItemProps>
{
   
    render(){
       return(
          <MenuItemModel productName = {this.props.productName}
                            productPrice = {this.props.productPrice}/>
       )
    }
}

export default class MenuItemComponent extends MenuProduct{
    render(){
        return(
            <IonItem>
                <IonLabel> { this.props.productName}</IonLabel>
                <IonCheckbox checked={true}  />
          </IonItem>
        )
    }
}