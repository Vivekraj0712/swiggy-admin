import React, { lazy, Suspense, useEffect } from 'react';
import { VStack, Box } from '@chakra-ui/react';
import { Routes as ReactRoutes, Route, useNavigate } from 'react-router-dom';
import Posts from './components/MiniProject/Posts';
import Dashboard from './routes/Dashboard/Dashboard';
import Login from './routes/Login/Login';
import SignUp from './routes/SignUp/SignUp';
import Test from './routes/Test/Test';

const Sidebar = lazy(() => import('./components/Sidebar/Sidebar'));
const Dishes = lazy(() => import('./routes/Dishes/Dishes'));
const AddOns = lazy(() => import('./routes/AddOns/AddOns'));
const Orders = lazy(() => import('./routes/Orders/Orders'));
const Profile = lazy(() => import('./routes/Profile/Profile'));
//const Dashboard=lazy(()=>import('./routes/Dashboard/Dashboard'));
const Header = lazy(() => import('./components/Header/Header'));
// const Test = lazy(() => import('./routes/Test'));

const Routes = () => {
	return (
		<Box sx={{ position: 'relative' }}>
			<Header />
			<VStack style={{ alignItems: 'stretch', overflow: 'hidden !important', justifyContent: 'stretch' }}>
				<ReactRoutes>
					{/* {Private Routes} */}
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
					<Route path='/dishes' element={<MainComponent isPrivate={true} component={<Dishes />} />} />
					<Route path='/orders' element={<MainComponent isPrivate={true} component={<Orders />} />} />
					<Route path='/profile' element={<MainComponent isPrivate={true} component={<Profile />} />} />
					<Route path='/addons' element={<MainComponent isPrivate={true} component={<AddOns />} />} />
					<Route path='/' element={<MainComponent isPrivate={true} component={<Dashboard />} />} />
					{/* <Route path='/redux/dropdown' element={<MainComponent isPrivate={true} component={<Dropdown />} />} /> */}

					{/* {Public Routes} */}
					<Route path='/miniproject' element={<Posts />} />
					{/* <Route path='/' element={<MainComponent component={<Dashboard />} />} /> */}
					{/* <Route path='/redux/test' element={<MainComponent component={<Test1 />} />} />  */}
					<Route path='/test' element={<MainComponent component={<Test />} />} />
				</ReactRoutes>
			</VStack>
		</Box>
	);
};

export const PageLoader = () => {
	return <p style={{ fontSize: '3em', textAlign: 'center', margin: '3em auto' }}>Loading......</p>;
};

// high order => either take component as input  ,or return a component or both
// high order  function=> either take function as input  ,or return a function or both

const MainComponent = (props) => {
	const { component, isPrivate } = props;
	// this loader is for reactjs to load file into the system.
	// this loader is not for api calls or any other asynchronous operations;
	// console.log({ isPrivate });

	// const userToken = false;
	// const navigate = useNavigate();

	// const allowRoute = isPrivate ? (userToken ? true : false) : false;

	// useEffect(() => {
	// 	if (isPrivate) {
	// 		if (!userToken) navigate('/');
	// 	}
	// }, []);

	return (
		<Suspense fallback={<PageLoader />}>
			{/* {allowRoute ? <Sidebar component={component} /> : <Login />} */}
			<Sidebar component={component} />
		</Suspense>
	);
};

export default Routes;
