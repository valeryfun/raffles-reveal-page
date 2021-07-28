/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const useDrag = ({ id, effect, ref, onDragStart, onDragOver, onDragEnd }) => {
	const [dragState, updateDragState] = useState('dragable')
	const dragStartChange = e => {
		updateDragState('dragStart')
		e.dataTransfer.dropEffect = effect
		e.dataTransfer.setData('source', id)
		onDragStart && onDragStart()
	}

	const dragOverChange = e => {
		updateDragState('dragging')
		onDragOver && onDragOver()
	}

	const dragEndChange = e => {
		updateDragState('dragable')
		onDragEnd && onDragEnd()
	}

	useEffect(() => {
		const element = ref.current
		if (element) {
			element.setAttribute('dragable', true)
			element.addEventListener('dragStart', dragStartChange)
			element.addEventListener('dragOver', dragOverChange)
			element.addEventListener('dragEnd', dragEndChange)
			return () => {
				element.removeEventListener('dragStart', dragStartChange)
				element.removeEventListener('dragOver', dragOverChange)
				element.removeEventListener('dragEnd', dragEndChange)
			}
		}
	}, [dragStartChange, dragEndChange, dragOverChange, ref])
	return {
		dragState: dragState
	}
}

export default useDrag
