import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
  import { useSelector } from 'react-redux';
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import {Home,OrdersList,Product,ProductsList,UsersList,CreateProduct,Login,EditOrder} from "./Pages";
const App = () => {
  // const users = JSON.parse(localStorage.getItem("persist:root"))?.user;
  // const currentUser = users && JSON.parse(users).currentUser?.isAdmin
  
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  console.log(admin)

  const RequireAuth = ({ children }) => {
    return admin ? children : <Navigate to="/login" />;
  };

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <UsersList />
                  </RequireAuth>
                }
              />
           
           
            </Route>
            <Route path="orders">
              <Route
                index
                element={
                  <RequireAuth>
                    <OrdersList />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <EditOrder />
                  </RequireAuth>
                }
              />
           
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <ProductsList />
                  </RequireAuth>
                }
              />
              <Route
                path=":Id"
                element={
                  <RequireAuth>
                    <Product />
                  </RequireAuth>
                }
              />
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <CreateProduct  title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
