import React, {useRef} from "react";
import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
} from "@chakra-ui/react";
import CommonModal from "../../../../src/components/CommonModal/CommonModal";
import EditChapterComponent from "./EditChapterComponent";
import AddChapterComponent from "./AddChapterComponent";
import { add_chapters, delete_chapters } from "../../redux/actions/Action";
import Stars1 from "./Stars1";
import "./bg.css";
import { edit_chapters } from "../../../redux/actions/Action";
const ChapterComponent = () => {
  const starsArr = [1, 2, 3, 4, 5];
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [chapter, setChapter] = useState();
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const closeAddModal = () => setShowAddModal(false);
  const openAddModal = () => setShowAddModal(true);
  const dispatch = useDispatch();
  const chapters = useSelector((state) => state.currentChapters);
  const [newChapterName, setNewChapterName] = useState("");
  const [addNewChapterName, setAddNewChapterName] = useState("");
  const uref = useRef([]);
  const handleAdd = () => {
    if (chapters) {
      openAddModal();
    } else {
      alert("Please select Standard and Subjects first");
    }
  };

  const handleEditChapterName = (e) => {
    setNewChapterName(e.target.value);
  };

  const handleAddChapterName = (e) => {
    setAddNewChapterName(e.target.value);
  };

  const handleSuccessChapterName = () => {
    dispatch(edit_chapters(chapter[0], newChapterName));
    closeModal();
  };

  const handleAddSuccessChapterName = () => {
    dispatch(add_chapters(addNewChapterName));
    closeAddModal();
  };

  const handleChange = (e) => {
    let chap = JSON.parse(e.target.dataset.item);
    setChapter([chap[0], chap[1]]);
    setNewChapterName(chap[1]);
    openModal();
  };
  const handleDelete = (e) => {
    let id = JSON.parse(e.target.dataset.id);
    dispatch(delete_chapters(id));
  };

  const clickFunc = (id) => {
    alert(uref.current.id);
    if (document.getElementById(id).style.color === "yellow") {
      let selectedId = id + 1;
      for (let i = selectedId; i <= 5; i++) {
        document.getElementById(i).style.color = "black";
      }
    } else {
      for (let i = id; i >= 1; i--) {
        document.getElementById(i).style.color = "yellow";
      }
    }

    // switch(id){
    // 	case 1:{
    // 	document.getElementById("tab").className="bg-red"
    // 	 return true;
    // 	}
    // 	case 2:{
    // 	document.getElementById("tab").className="bg-red"
    // 		return true;
    // 	   }
    // 	case 3:{
    // 	document.getElementById("tab").className="bg-orange"
    // 		return true;
    // 	   }
    // 	case 4:{
    // 	document.getElementById("tab").className="bg-orange"
    // 		return true;
    // 	   }
    // 	case 5:{
    // 	document.getElementById("tab").className="bg-green"
    // 		return true;
    // 	   }

    // 	default:{
    // 		document.getElementById("tab").className=""
    // 		return true
    // 	}
    // }
  };

  return (
    <>
      <TableContainer id="tab" className="">
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Chapter</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {chapters
              ? chapters.map((item) => {
                  return (
                    <Tr>
                      <Td style={{ textAlign: "center" }}>{item.id}</Td>
                      <Td style={{ textAlign: "center" }}>{item.name}</Td>
                      <Td
                        style={{
                          display: "flex",
                          gap: "0.2rem",
                          alignItems: "center",
                        }}
                      >
                        {
                          <img
                            onClick={handleChange}
                            data-Item={JSON.stringify([item.id, item.name])}
                            src={"../images/edit.jpg"}
                            alt="edit"
                            style={{ height: "1.5rem" }}
                          />
                        }
                        {
                          <img
                            onClick={handleDelete}
                            data-Id={JSON.stringify(item.id)}
                            src={"../images/delete.jpg"}
                            alt="delete"
                            style={{ height: "1.5rem" }}
                          />
                        }
                      </Td>
                    </Tr>
                  );
                })
              : null}
            <Tr>
              <Td colspan="3" style={{ margin: "auto" }}>
                <Button onClick={handleAdd}>Add Chapter</Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
      <div style={{ display: "flex" }}>
        {starsArr.map((item, i) => (
          <Stars1 ref={uref.current[i]} id={item} clickFunc={clickFunc} />
        ))}
      </div>
      {showModal ? (
        <CommonModal
          closeModal={closeModal}
          successCallBack={handleSuccessChapterName}
          title="Edit Chapter"
          component={
            <EditChapterComponent
              chapterName={newChapterName}
              handleChange={handleEditChapterName}
              closeModal={closeModal}
            />
          }
        />
      ) : null}
      {showAddModal ? (
        <CommonModal
          closeModal={closeAddModal}
          successCallBack={handleAddSuccessChapterName}
          title="Add Chapter"
          component={
            <AddChapterComponent
              chapterName={addNewChapterName}
              handleChange={handleAddChapterName}
              closeModal={closeAddModal}
            />
          }
        />
      ) : null}
    </>
  );
};
export default ChapterComponent;
