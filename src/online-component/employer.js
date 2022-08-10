import React from 'react';

export default function Employer() {
	return (
		<>
			<div>
				<div className='container-center text-center m-5'>
					<h2>
						ลงทะเบียน <b className='text-decoration-underline'>ใช้สิทธิเลือกตั้ง ตัวแทนนายจ้าง</b>
					</h2>
					{/*&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;*/}
				</div>
				<div className='container d-flex justify-content-center flex-column my-3'>
					<div className='card mb-3 w-100'>
						<div className='card-header text-white bg-primary h5'>กรอกข้อมูลผู้มาใช้สิทธิเลือกตั้งตัวแทนนายจ้าง</div>
						<div className='card-body'>
							<div className='mb-3 row'>
								<label className='col-sm-2 col-form-label form-control-lg'>เลขทะเบียนนายจ้าง</label>
								<b className='col-auto col-form-label form-control-lg' id='employerID'>
									0123456789
								</b>
							</div>
							<div className='mb-3 row'>
								<label className='col-sm-2 col-form-label form-control-lg'>ประเภทกิจการ</label>
								<b className='col-auto col-form-label form-control-lg' id='business'>
									บริษัทจำกัด
								</b>
							</div>
							<div className='mb-3 row'>
								<label htmlFor='companyname' className='col-sm-2 col-form-label form-control-lg'>
									ชื่อบริษัท
								</label>
								<b className='col-auto col-form-label form-control-lg' id='company'>
									บริษัท TCM จำกัด มหาชน
								</b>
							</div>
							<div className='mb-3 row'>
								<label className='col-sm-2 col-form-label form-control-lg'>ที่ตั้งบริษัท</label>
								<b className='col-auto col-form-label form-control-lg' id='companyAddress'>
									191/40 อาคารซีทีไอ ทาวเวอร์ ชั้น 22 ถ. รัชดาภิเษก แขวง คลองเตย เขตคลองเตย กรุงเทพมหานคร 10110
								</b>
							</div>
							<div className='mb-3 row'>
								<label htmlFor='firstname' className='col-sm-2 col-form-label form-control-lg'>
									เลขบัตรประชาชน
								</label>
								<div className='col-sm-4'>
									<input type='text' className='form-control form-control-lg' id='cardnumber' />
								</div>
							</div>
							<div className='mb-3 row'>
								<label htmlFor='firstname' className='col-sm-2 col-form-label form-control-lg'>
									ชื่อ
								</label>
								<div className='col-sm-4'>
									<input type='text' className='form-control form-control-lg' id='firstname' />
								</div>
								<label htmlFor='lastname' className='col-sm-2 col-form-label form-control-lg'>
									นามสกุล
								</label>
								<div className='col-sm-4'>
									<input type='text' className='form-control form-control-lg' id='lastname' />
								</div>
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
							<div className='mb-3 row'>
								<fieldset className='form-group form-control-lg'>
									<legend className='mt-4'>เอกสารยืนยันตัวแทนนายจ้าง</legend>
									<form>
										<input id='myfile' type='file' name='myfile' multiple required />
										<button type='upload'>
											Upload
										</button>
									</form>
								</fieldset>
							</div>
						</div>
					</div>
					<div className='mb-1 d-flex justify-content-center'>
						<button className='btn btn-lg btn-info m-1 p-2 w-25'>
							บันทึก
						</button>
						<button
							className='btn btn-lg btn-danger m-1 p-2 w-25'>
							ยกเลิก
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
