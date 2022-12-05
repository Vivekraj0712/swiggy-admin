import React from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  VStack,
} from "@chakra-ui/react";
import { columnHeadings, addonItems } from "./AddOnsData";
import { useState } from "react";
import CommonDrawer from "../../components/CommonDrawer/CommonDrawer";
import "./AddOns.css";
import { AddNewAddOn, AddOnsNewForm, AddOnsEditForm } from "./AddOns.component";
import Toast from "../../components/Toast/Toast";
import PopUp from "../../components/PopUp/PopUp";
const AddOns = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState(data);
  const [showDrawer, setShowDrawer] = useState(false);
  const [showAddNewDrawer, setShowAddNewDrawer] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showEditToast, setShowEditToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const closePopUp = () => setShowPopUp(false);
  const openPopUp = () => setShowPopUp(true);
  const closeDrawer = () => {
  setShowDrawer(false);
  setShowEditToast(false);
   }
   
  const openDrawer = (e) => {
    setShowDrawer(true);
    setValue(JSON.parse(e.target.dataset.item));
  };
  const closeAddNewDrawer = () =>{ 
  setShowAddNewDrawer(false);
  setShowToast(false);
  }
  const openAddNewDrawer = () => setShowAddNewDrawer(true);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const editAddOnSuccess = () => {
    setShowEditToast(true);
    setTimeout(closeDrawer, 3000);
  };
  const addAddOnSuccess = () => {
    setShowToast(true);
    setTimeout(closeAddNewDrawer, 3000);
  };
  const handleSuccessDelete = () => {
    setShowPopUp(false);
    setShowDeleteToast(true);
    
  };
  const handleDeleteToast=()=>{
    setShowDeleteToast(false)
  }
  return (
    <VStack style={{ width: "100%" }}>
      <AddNewAddOn openDrawer={openAddNewDrawer} />
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
            {addonItems
              ? addonItems.map((item) => {
                  return (
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.costPrice}</Td>
                      <Td>{item.sellingPrice}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.unitType}</Td>
                      <Td className="hflex">
                        <img
                          data-item={JSON.stringify({
                            itemName: item.name,
                            costPrice: item.costPrice,
                            sellingPrice: item.sellingPrice,
                            type: item.type,
                            unit: item.unitType,
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
          title="Edit AddOn"
          successCallBack={editAddOnSuccess}
          closeDrawer={closeDrawer}
          component={<AddOnsEditForm data={value} change={handleChange} />}
        />
      ) : null}
      {showAddNewDrawer ? (
        <CommonDrawer
          title="Add New AddOn"
          closeDrawer={closeAddNewDrawer}
          successCallBack={addAddOnSuccess}
          component={<AddOnsNewForm />}
        />
      ) : null}
      {showEditToast ? (
        <Toast
          title="AddOn Updated"
          description="AddOn updated successfully"
          duration="3000"
        />
      ) : null}
       {showToast ? (
        <Toast
          title="AddOn Added"
          description="AddOn added successfully"
          duration="3000"
        />
      ) : null}
      {showDeleteToast ? (
        <Toast
          title="AddOn Deleted"
          description="AddOn deleted successfully"
          duration="3000"
        />
      ) : null}
      {showPopUp ? (
        <PopUp
          closePopUp={closePopUp}
          handleToast={handleDeleteToast}
          title="Delete!"
          successCallBack={handleSuccessDelete}
          description="Are you sure you want to delete this AddOn?"
        />
      ) : null}
    </VStack>
  );
};
export default AddOns;
