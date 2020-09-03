import { IonApp, IonIcon, IonImg, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { add, apps, basketOutline, restaurantOutline } from "ionicons/icons";
import React, { useRef, useEffect, createRef, RefObject } from "react";
import { Redirect, Route } from "react-router-dom";
import { Categories } from "./pages/Categories";
import { Login } from "./pages/Login";
import { MenuItems } from "./pages/MenuItems";
import NuevaOrdenTab from "./pages/NuevaOrdenTab";
import { Tables } from "./pages/Tables";
/* Theme variables */
import "./theme/variables.css";
import { Menu } from "./tools/Menu";


//me quede en la parte en la que apilo componentes dentro de componentes

const App = () =>{

let myRef = createRef();

useEffect(() => {
  

  myRef.current.appendChild(<div></div>)
  console.log(`data: ${myRef.current.children}`)
}, [])

  return(
    <IonApp>

    <div >
      <IonToolbar slot="center" ref={myRef} id='tol'>
        <div className="hcs">
          <IonImg src="/assets/logo.jpg" slot="secondary" />
        </div>

        {myRef.childNodes}
      </IonToolbar>
    </div>

    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact={true} />

          <Route path="/neworder"
            component={() => <NuevaOrdenTab ref={myRef} />}
            exact={true} />

          <Route path="/menuitems"
            component={MenuItems}
            exact={true} />

          <Route path="/mesas"
            component={Tables} exact={true} />

          <Route path="/menu"
            component={Menu} exact={true} />
          <Route
            path="/"
            render={() => <Redirect to="/Login" />}
            exact={true}
          />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="neworderTab" href="/neworder">
            <IonIcon icon={add} />
            <IonLabel>Nueva orden</IonLabel>
          </IonTabButton>

          <IonTabButton tab="menuItemsTab" href="/menuitems">
            <IonIcon icon={apps} />
            <IonLabel>Mesas</IonLabel>
          </IonTabButton>

          <IonTabButton tab="ordersTab" href="/orders">
            <IonIcon icon={basketOutline} />
            <IonLabel>Ordenes</IonLabel>
          </IonTabButton>

          <IonTabButton tab="menuTab" href="/menu">
            <IonIcon icon={restaurantOutline} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>

  )
}

export default App;
