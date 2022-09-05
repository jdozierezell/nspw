import React from 'react'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	useDisclosure,
} from '@chakra-ui/react'

export const Audacy = ({ isOpen, onClose }) => {
	return (
		<Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerBody p="0">
					<iframe
						title="Audacy Production"
						src="https://embed.radio.com?callsign=afspoutofthedarknessradio&type=exclusive-station"
						style={{
							border: 0,
							height: '220px',
							width: '100%',
							overflow: 'hidden',
						}}
					/>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}
