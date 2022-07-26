import React from 'react'

const Headerbar = () => {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-white shadow-lg'>
				<div className='container'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNav'
						aria-controls='navbarNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon' />
					</button>
					<a className='navbar-brand' href='index.html'>
						ระบบลงทะเบียนผู้สมัคร
					</a>
					<div className='d-lg-none'>
						<button
							type='button'
							className='custom-btn btn btn-danger'
							data-bs-toggle='modal'
							data-bs-target='#BookingModal'>
							Reservation
						</button>
					</div>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav mx-auto'>
							<li className='nav-item'>
								<a className='nav-link active' href='index.html'>
									ลงสมัครผู้แทนนายจ้าง
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='about.html'>
									ลงสมัครผู้แทนลูกจ้าง
								</a>
							</li>
							
						</ul>
					</div>
					<div className='d-none d-lg-block'>
						<button
							type='button'
							className='custom-btn btn btn-danger'
							data-bs-toggle='modal'
							data-bs-target='#BookingModal'>
							ออกจากระบบ
						</button>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Headerbar
