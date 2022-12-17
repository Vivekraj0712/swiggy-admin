import React, { useEffect, useRef, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllDishes } from "../../redux/reducers/DishReducer"
import { getAllRestaurants } from "../../redux/reducers/RestaurantReducer"
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  VStack,
} from "@chakra-ui/react";
import { columnHeadings, dishesItems } from "./DishesData";
import "./Dishes.css";
import { AddNewDish, DishesEditForm, DishesNewForm } from "./Dishes.component";
import CommonDrawer from "../../components/CommonDrawer/CommonDrawer";
import Toast from "../../components/Toast/Toast";
import PopUp from "../../components/PopUp/PopUp";
const Dishes = () => {
  const dispatch=useDispatch();
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAddNewDrawer, setShowAddNewDrawer] = useState(false);
  const [data, setData] = useState({});
  const [value, setValue] = useState(data);
  const [showToast, setShowToast] = useState(false);
  const [showEditToast, setShowEditToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const closePopUp = () => setShowPopUp(false);
  const openPopUp = () => setShowPopUp(true);
  const closeDrawer = () => {
    setShowDrawer(false);
    setShowEditToast(false);
  };
  const openDrawer = (e) => {
    setShowDrawer(true);
    setValue(JSON.parse(e.target.dataset.item));
  };
  const closeAddNewDrawer = () => {
    setShowAddNewDrawer(false);
    setShowToast(false);
  };
  const openAddNewDrawer = () => setShowAddNewDrawer(true);  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const addDishSuccess = () => {
    setShowToast(true);
    setTimeout(closeAddNewDrawer, 3000);
  };
  const editDishSuccess = () => {
    setShowEditToast(true);
    setTimeout(closeDrawer, 3000);
  };
  const handleSuccessDelete = () => {
    setShowPopUp(false);
    setShowDeleteToast(true);
    
  };
  const handleDeleteToast=()=>{
    setShowDeleteToast(false)
  }
  useEffect(()=>{
    dispatch(getAllDishes())
   },[])
   const restaurants=useSelector((state)=>state.dishes)
  console.log({restaurants})
  return (
    <VStack>
      <AddNewDish openDrawer={openAddNewDrawer} />
      <TableContainer style={{ width: "100%" }}>
        <Table size="sm">
          <Thead>
            <Tr>
              {columnHeadings
                ? columnHeadings.map((item) => (
                    <Th className="th-styles">{item}</Th>
                  ))
                : null}
            </Tr>
          </Thead>
          <Tbody>
            {dishesItems
              ? dishesItems.map((item) => {
                  return (
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.costPrice}</Td>
                      <Td>{item.sellingPrice}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.cuisine}</Td>
                      <Td>{item.image}</Td>
                      <Td>{item.unitType}</Td>
                      <Td>{item.preparationTime}</Td>
                      <Td>{item.addOns}</Td>
                      <Td className="hflex">
                        <img
                          data-item={JSON.stringify({
                            itemName: item.name,
                            costPrice: item.costPrice,
                            sellingPrice: item.sellingPrice,
                            type: item.type,
                            cuisine: item.cuisine,
                            image: item.image,
                            unit: item.unitType,
                            preparationTime: item.preparationTime,
                            addOns: item.addOns,
                          })}
                          
                          onClick={openDrawer}
                          className="edit-delete-image"
                          src="../images/edit.png"
                          alt="Edit"
                        />
                        <img
                          onClick={openPopUp}
                          className="edit-delete-image"
                          src="../images/delete.png"
                          alt="Delete"
                        />
                      </Td>
                    </Tr>
                  );
                })
              : null}
          </Tbody>
        </Table>
      </TableContainer>
      {showDrawer ? (
        <CommonDrawer
          title="Edit Dish"
          successCallBack={editDishSuccess}
          closeDrawer={closeDrawer}
          component={<DishesEditForm data={value} change={handleChange} />}
        />
      ) : null}
      {showAddNewDrawer ? (
        <CommonDrawer
          title="Add New Dish"
          successCallBack={addDishSuccess}
          closeDrawer={closeAddNewDrawer}
          component={<DishesNewForm />}
        />
      ) : null}
      {showToast ? (
        <Toast
          title="Dish Added"
          description="Dish added successfully"
          duration="3000"
        />
      ) : null}
      {showEditToast ? (
        <Toast
          title="Dish Updated"
          description="Dish updated successfully"
          duration="3000"
        />
      ) : null}
      {showDeleteToast ? (
        <Toast
          title="Dish Deleted"
          description="Dish deleted successfully"
          duration="3000"
        />
      ) : null}
      {showPopUp ? (
        <PopUp
          closePopUp={closePopUp}
          handleToast={handleDeleteToast}
          title="Delete!"
          successCallBack={handleSuccessDelete}
          description="Are you sure you want to delete this dish?"
        />
      ) : null}
    </VStack>
  );
};
export default Dishes;
