import { Box, Flex, Thead, Tr, Th, Table, Tbody } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import '../Dashboard/Dashboard.css';
import DishesContent from '../Dashboard/DishesContent';
import { useSelector } from 'react-redux';
import {getAllPosts} from '../../redux/reducers/PostReducer'
import { useDispatch } from 'react-redux';
import GenError from '../../components/GenError/GenError';

const Dishes = () => {
	// const reduxData = useSelector((state) => state);
	// console.log({ reduxData });
	

const dispatch = useDispatch();
const posts = useSelector(state => state.posts)
const {getAllPostStatus,allPosts}=posts
useEffect(() => {
 dispatch(getAllPosts()) 
   
},[])

	
console.log({posts}) 
	
    
 	

    
	const columnHeadings = ['Name', 'Cost Price', 'Selling Price', 'Type', 'Cuisine', 'Image', 'Unit Type', 'Preparation Time', 'Add Ons', 'Actions'];
	const dishesItems = [
		{
			name: '2 Burgers',
			costPrice: 'Rs.250',
			sellingPrice: 'Rs.200',
			type: 'Veg',
			cuisine: 'Continental',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},

		{
			name: '1 Butter Chicken',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.250',
			type: 'Non-Veg',
			cuisine: 'Mughlai',
			image: 'image',
			unitType: '1.5 Kilo',
			preparationTime: '30 mins',
			addOns: 'extra gravy',
		},

		{
			name: '1 Masala Dosa',
			costPrice: 'Rs.150',
			sellingPrice: 'Rs.80',
			type: 'Veg',
			cuisine: 'South Indian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '25 mins',
			addOns: 'extra Chatni',
		},

		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},
		{
			name: '1 regular Pizza',
			costPrice: 'Rs.350',
			sellingPrice: 'Rs.300',
			type: 'Veg',
			cuisine: 'Italian',
			image: 'image',
			unitType: '1 unit',
			preparationTime: '30 mins',
			addOns: 'extra cheese',
		},

		
		

	];
	return (
   
                    <>
	                <GenError childComponent={posts.allPosts.map((item)=><div>{item.title}</div>)} status={getAllPostStatus} dataToCheck={allPosts.length!==0}/>
					<Table  variant='striped' colorScheme='teal' className='vertical-line'>
						<Thead>
							<Tr>{columnHeadings ? columnHeadings.map((item) => <Th>{item}</Th>) : <Loader />}</Tr>
						</Thead>
						<Tbody>{dishesItems ? dishesItems.map((item) => <DishesContent dishesItems={item} />) : <Loader />}</Tbody>
					</Table>
					</>
				
	);
};
export default React.memo(Dishes);

const Loader = () => {
	return <div>Loader...</div>;
};
