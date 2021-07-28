/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import useDrop from '../Hooks/useDrop'
import DropView from './DropView'

const DropItem = ({ children, heading, onDrop }) => {
	const dropRef = useRef()
	const { dropState, dropItem } = useDrop({
		ref: dropRef,
		onDrop
	})
	return (
		<DropView ref={dropRef} heading={heading} dropItem={dropItem}>
			{children}
		</DropView>
	)
}

export default DropItem
