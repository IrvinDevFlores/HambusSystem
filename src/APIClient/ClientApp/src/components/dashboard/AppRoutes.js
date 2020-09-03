import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { Route } from "react-router";
import Home from "../../pages/Home";
import AddEmployeeForm from "../AppContainer/Forms/AddEmployeeForm";
import AddSuppliesForm from "../AppContainer/Forms/AddSuppliesForm";
import AddOrderToProvider from "../AppContainer/Forms/AddOrderToProvider";
import AddProductForm from "../AppContainer/Forms/AddProductForm";

import Layout from "./LayoutContainer/Layout";

const AppRoutes = () => {
  return (
    <Layout>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route exact path="/mesas" component={Home} />
      <Route exact path="/empleados/add" component={AddEmployeeForm} />
      <Route exact path="/almacen" component={AddSuppliesForm} />
      <Route path="/productos/add" component={AddProductForm} />

      <Route
        exact 
        path="/productos/hacer-pedido"
        component={AddOrderToProvider}
      />
    </Layout>
  );
};
export default AppRoutes;
