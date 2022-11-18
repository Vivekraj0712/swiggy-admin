import React from 'react';
import {useState,useEffect} from "react"
import { useSelector } from 'react-redux';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';
import  CommonModal from "../../components/CommonModal/CommonModal" 
import EditChapterComponent from './EditChapterComponent';
const ChapterComponent = () => {
	const [showModal,setShowModal]=useState(false)
	const [chapter,setChapter]=useState()
	const closeModal = () => setShowModal(false);
	const openModal = () => setShowModal(true);
     
	const chapters = useSelector((state) => state.currentChapters);
     
    



    const  handleChange=(e)=>{

		let chap=JSON.parse(e.target.dataset.item)
		setChapter([chap[0],chap[1]])
	    console.log("yahiii",chap?chap:"nothin")
		openModal()
		
		
     //console.log(e.target.dataset.item[0])
	}
	return (
		<>
			<TableContainer>
				<Table size='lg'>
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
										<Tr onClick={handleChange}  >
											<Td style={{ textAlign: 'center' }}>{item.id}</Td>
											<Td style={{ textAlign: 'center' }}>{item.name}</Td>
											<Td style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
												{<img data-Item={JSON.stringify([item.id,item.name])} src={'../images/edit.jpg'}  alt='edit' style={{ height: '1.5rem' }} />}
												{<img src={'../images/delete.jpg'} alt='delete' style={{ height: '1.5rem' }} />}
											</Td>
										</Tr>
									);
							  })
							: null}
					</Tbody>
					<Tfoot></Tfoot>
				</Table>
			</TableContainer>
			{showModal?<CommonModal  closeModal={closeModal} title="Edit Chapter" component={<EditChapterComponent chapter={chapter}/>}/>:null}

		</>
	);
};

export default ChapterComponent;
