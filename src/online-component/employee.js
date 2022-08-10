import React from 'react'
import { useEffect } from 'react';

export default function Employee() {
   useEffect(() => {
      
      return () => {
         
      };
   }, []);
	return (
		<>
			<div className='container-center text-center m-5'>
				<h2>
					ลงทะเบียน <b className='text-decoration-underline'>ใช้สิทธิเลือกตั้ง ตัวแทนลูกจ้าง</b>
				</h2>
			</div>
			<div className='container d-flex justify-content-center flex-column my-3'>
				<form className='row g-3 mb-3'>
					<div className='col-auto'>
						<label className='col-12 col-form-label form-control-lg'>
							บัตรประชาชนเลขที่ <b id='employeeID' />
						</label>
					</div>
					<div className='col-auto'>
						<label className='col-12 col-form-label form-control-lg'>
							ชื่อ-นามสกุล <b id='employeeName' />
						</label>
					</div>
					<div className='col-auto'>
						<label className='col-12 col-form-label form-control-lg'>
							ผู้ประกันตนมาตรา <b id='insurerID'>33</b>
						</label>
					</div>
					<div className='col-auto'>
						<label className='col-12 col-form-label form-control-lg'>
							สถานะ <b id='status'>Active</b>
						</label>
					</div>
				</form>
				<div className='card mb-3 w-100'>
					<div className='card-header text-white bg-secondary h5'>ข้อมูลผู้มาใช้สิทธิเลือกตั้งตัวแทนลูกจ้าง</div>
					<form className='card-body'>
						<div className='mb1 row'>
							<label className='col-auto col-form-label form-control-lg'>ชื่อบริษัท</label>
							<b className='col-auto col-form-label form-control-lg' id='company'>
								บริษัท TCM จำกัด มหาชน
							</b>
						</div>
						<div className='mb1 row'>
							<label className='col-auto col-form-label form-control-lg'>ชื่อบริษัท</label>
							<b className='col-auto col-form-label form-control-lg'>บริษัท ทีซีเอ็ม คอร์ปอเรชั่น จำกัด (มหาชน)</b>
						</div>
						<div className='mb1 row'>
							<label className='col-auto col-form-label form-control-lg'>ชื่อบริษัท</label>
							<b className='col-auto col-form-label form-control-lg'>บริษัท SSO Connect จำกัด มหาชน</b>
						</div>
						<div className='mb-3 row'>
							<div className='form-group col-sm-6'>
								<select id='province' name='province' className='form-select form-select-lg' defaultValue="กรุณาเลือกจังหวัด">
									<option>
										กรุณาเลือกจังหวัด
									</option>
								</select>
							</div>
							<div className='form-group col-sm-6'>
								<select id='district' name='district' className='form-select form-select-lg' defaultValue='กรุณาเลือกอำเภอ/เขต'>
									<option>กรุณาเลือกอำเภอ/เขต</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<div className='mb-1 d-flex justify-content-center'>
					<button className='btn btn-lg btn-primary m-1 p-2 w-25'>บันทึก</button>
					<button className='btn btn-lg btn-danger m-1 p-2 w-25'>ยกเลิก</button>
				</div>
			</div>
		</>
	)
}
