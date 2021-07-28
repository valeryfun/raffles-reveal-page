import React, { forwardRef } from 'react'

export default forwardRef(({ children, heading }, ref) => {
	return (
		<div ref={ref}>
			<h3>{heading}</h3>
			<div className='body'>{children}</div>
		</div>
	)
})
