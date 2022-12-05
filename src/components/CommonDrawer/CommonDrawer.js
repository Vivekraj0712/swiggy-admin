import React from 'react'
import { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react'

function CommonDrawer(props) {
  const { title, component, closeDrawer ,successCallBack} = props
  //const btnRef = React.useRef()
  const [showDrawer, setShowDrawer] = useState(true);
  const handleCloseDrawer = () => {
    closeDrawer();
    setShowDrawer(false);
  };

  return (
    <>
      <Drawer
        isOpen={showDrawer}
        placement='right'
        onClose={handleCloseDrawer}
        //finalFocusRef={btnRef}
        size='xl'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={handleCloseDrawer} />
          <DrawerHeader>{title}</DrawerHeader>

          <DrawerBody>
            {component}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={handleCloseDrawer}>
              Cancel
            </Button>
            <Button onClick={successCallBack} colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default React.memo(CommonDrawer);