import { Tr, Td } from '@chakra-ui/react';
import edit from '../../images/edit.jpg';
import del from '../../images/delete.jpg';

const DishesContent = (props) => {
	const { dishesItems } = props;

	return (
		<Tr>
			<Td>{dishesItems.name}</Td>
			<Td>{dishesItems.costPrice}</Td>
			<Td>{dishesItems.sellingPrice}</Td>
			<Td>{dishesItems.type}</Td>
			<Td>{dishesItems.cuisine}</Td>
			<Td>{dishesItems.image}</Td>
			<Td>{dishesItems.unitType}</Td>
			<Td>{dishesItems.preparationTime}</Td>
			<Td>{dishesItems.addOns}</Td>
			<Td style={{ display: 'flex', gap: '0.2rem' }}>
				<img src={edit} alt='edit' style={{ height: '1.5rem' }} />
				<img src={del} alt='delete' style={{ height: '1.5rem' }} />
			</Td>
		</Tr>
	);
};

export default DishesContent;
