import React, { useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { orderHeadings, orderItems } from "./OrderData";
import "./Orders.css";
import CommonDrawer from "../../components/CommonDrawer/CommonDrawer";
import { OrderEditForm } from "./Orders.component";
import Toast from "../../components/Toast/Toast";
import PopUp from "../../components/PopUp/PopUp";
const Order = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [data, setData] = useState({});
  const [value, setValue] = useState(data);
  const [showEditToast, setShowEditToast] = useState(false);
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const closePopUp = () => setShowPopUp(false);
  const openPopUp = () => setShowPopUp(true);

  const openDrawer = (e) => {
    setShowDrawer(true);
    setValue(JSON.parse(e.target.dataset.item));
  };
  const closeDrawer = () => {
    setShowDrawer(false);
    setShowEditToast(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const editOrderSuccess = () => {
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

  return (
    <TableContainer style={{ width: "100%" }}>
      <Table size="sm">
        <Thead>
          <Tr>
            {orderHeadings
              ? orderHeadings.map((item) => (
                  <Th className="th-styles">{item}</Th>
                ))
              : null}
          </Tr>
        </Thead>
        <Tbody>
          {orderItems
            ? orderItems.map((item) => {
                return (
                  <Tr>
                    <Td>{item.orderid}</Td>
                    <Td>{item.dish}</Td>
                    <Td>{item.price}</Td>
                    <Td>{item.location}</Td>
                    <Td>{item.userid}</Td>
                    <Td className="hflex">
                      <img
                        onClick={openDrawer}
                        data-item={JSON.stringify({
                          orderid: item.orderid,
                          dish: item.dish,
                          price: item.price,
                          location: item.location,
                          userid: item.userid,
                        })}
                        className="edit-delete-image"
                        src="../images/edit.png"
                        alt="Edit"
                      />

                      <img
                        className="edit-delete-image"
                        src="../images/delete.png"
                        alt="Delete"
                        onClick={openPopUp}
                      />
                    </Td>
                  </Tr>
                );
              })
            : null}
        </Tbody>
      </Table>
      {showDrawer ? (
        <CommonDrawer
          title="Edit Order"
          closeDrawer={closeDrawer}
          component={<OrderEditForm data={value} change={handleChange} />}
          successCallBack={editOrderSuccess}
        />
      ) : null}
      {showEditToast ? (
        <Toast
          title="Order Updated"
          description="Order updated successfully"
          duration="3000"
        />
      ) : null}
      {showPopUp ? (
        <PopUp
          closePopUp={closePopUp}
          handleToast={handleDeleteToast}
          title="Delete!"
          successCallBack={handleSuccessDelete}
          description="Are you sure you want to delete this order?"
        />
      ) : null}
      {showDeleteToast ? (
        <Toast
          title="Order Deleted"
          description="Order deleted successfully"
          duration="3000"
        />
      ) : null}
    </TableContainer>
  );
};
export default Order;
