/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import useDrag from '../Hooks/useDrag'
import DragView from './DragView'

const DragItem = ({ dragEffect, data, key, id }) => {
	const dragRef = useRef()
	const [value, setValue] = useState('grab')
	const { dragState } = useDrag({
		id,
		effect: dragEffect,
		ref: dragRef,
		onDragStart: () => setValue('grabbing'),
		onDragEnd: () => {
			setValue('grab')
		}
	})
	return <DragView ref={dragRef} data={data} value={value} />
}

export default DragItem
