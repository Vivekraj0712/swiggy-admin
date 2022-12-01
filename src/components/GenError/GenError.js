import { Box } from '@chakra-ui/react';
import React from 'react';
import STATUS from '../Common';
import Loader from '../../components/Loader/Loader'
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
	const { status,  dataToCheck } = props;  
  return <>{status === STATUS.FETCHING ? <Loader /> : status === STATUS.FAILED ? <ErrorFound title="Error" description="There was some error"/> : status === STATUS.SUCCESS && dataToCheck ? props.children : <NoDataFound warning="No Data Found"/>}</>;
};

export default GenError;
