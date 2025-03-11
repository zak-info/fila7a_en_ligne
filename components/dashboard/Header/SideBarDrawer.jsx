"use client"


import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, useDisclosure, } from '@nextui-org/react';
import SideBarItems from './SideBarItems';


const SideBarDrawer = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button isIconOnly onPress={onOpen} radius="full" size="sm" variant="light"><i class="ri-menu-2-line text-xl"></i></Button>
            <Drawer isOpen={isOpen} placement={"left"} size='xs' onClose={onClose}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            {/* <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader> */}
                            <DrawerBody>
                                <SideBarItems user={user} />
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideBarDrawer