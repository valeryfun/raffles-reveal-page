import React, { forwardRef } from 'react'

export default forwardRef(({ data, value }, ref) => {
	return (
		<div className={`item ${value}`} ref={ref}>
			{data.text}
		</div>
	)
})
