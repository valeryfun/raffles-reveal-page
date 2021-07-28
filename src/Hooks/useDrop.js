import { useState, useEffect } from 'react'

const useDrop = ({ ref, onDrop }) => {
	const [dropState, updateDrop] = useState('dropable')
	const dropOver = e => {
		e.preventDefault()
		updateDrop('dragging')
	}
	const dropDone = e => {
		e.preventDefault()
		onDrop(e.dataTransfer.getData('source'))
		updateDrop('dropped')
	}

	useEffect(() => {
		const element = ref.current
		if (element) {
			element.addEventListener('dragover', dropOver)
			element.addEventListener('drop', dropDone)
			return () => {
				element.removeEventListener('dragover', dropOver)
				element.removeEventListener('drop', dropDone)
			}
		}
	})
	return {
		dropState
	}
}

export default useDrop
