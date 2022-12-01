import React from 'react';
import { Flex, Thead, Tr, Th, Table, Tbody, VStack } from '@chakra-ui/react';
import Sidebar from '../../components/CommonModal/Sidebar';
import './Dashboard.css';
import OrdersContent from './OrdersContent';

const Dashboard = () => {
	const orderHeadings = ['ORDERID', 'DISH', 'PRICE', 'LOCATION', 'USERID', 'ACTIONS'];
	const orderItems = [
		{
			orderid: '123',
			dish: '2 Veg Burgers',
			price: 'Rs.350',
			location: 'Noida',
			userid: '321',
			isNumeric: true,
		},
		{
			orderid: '124',
			dish: '1 Masala Dosa',
			price: 'Rs.150',
			location: 'Delhi',
			userid: '322',
		},
		{
			orderid: '125',
			dish: '1 veg Noodles',
			price: 'Rs.250',
			location: 'Noida',
			userid: '321',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},

		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
		
		{
			orderid: '126',
			dish: '2 plate Chicken Momos',
			price: 'Rs.350',
			location: 'Delhi',
			userid: '432',
		},
	];
	return (
		<Table variant='striped' colorScheme='teal' className='vertical-line'>
			<Thead>
				<Tr>{orderHeadings ? orderHeadings.map((item) => <Th isNumeric={item.isNumeric}>{item}</Th>) : <div>Loader...</div>}</Tr>
			</Thead>
			<Tbody>{orderItems ? orderItems.map((item) => <OrdersContent ordersItems={item} />) : <div>Loader...</div>}</Tbody>
		</Table>
	);
};
export default React.memo(Dashboard);
