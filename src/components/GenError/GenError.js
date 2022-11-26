import { Box } from '@chakra-ui/react';
import React from 'react';
import STATUS from '../Common';
import Loader from '../components/Loader'
import ErrorFound from '../ErrorFound/ErrorFound';
import NoDataFound from '../NoDataFound/NoDataFound';
// PROPS

// status => not started ,fetching,failed,success
// status => fetching =>loader
// status=> failed => Oops Error

// status => success => data => Childcomponent else No Data Found

// getAllOrder => SUCCESS => 0

// getAllOrder

// GenError => getAllOrderStatus ,dataToCheck =allOrders.length!==0,childcomponent

const GenError = (props) => {  
	const { status, childComponent, dataToCheck } = props;
  
  return <Box>{status === STATUS.FETCHING ? <Loader /> : status === STATUS.FAILED ? <ErrorFound /> : status === STATUS.SUCCESS && dataToCheck ? childComponent : <NoDataFound/>}</Box>;
};

export default GenError;
