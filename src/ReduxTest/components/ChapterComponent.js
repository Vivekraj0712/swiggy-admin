import React from 'react';
import { useSelector } from 'react-redux';
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';

const ChapterComponent = () => {
	const chapters = useSelector((state) => state.currentChapters);
	console.log({ chapters });
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
										<Tr>
											<Td style={{ textAlign: 'center' }}>{item.id}</Td>
											<Td style={{ textAlign: 'center' }}>{item.name}</Td>
											<Td style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
												{<img src={'../images/edit.jpg'} alt='edit' style={{ height: '1.5rem' }} />}
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
		</>
	);
};

export default ChapterComponent;
