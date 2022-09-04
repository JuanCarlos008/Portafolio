import React from 'react'
import { Lines } from '@components/Background/Lines'
import { AiOutlineSend } from 'react-icons/ai'
import './styles.scss'

export const ContactForm = () => {
	const onHandleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<div className='form-container'>
			<Lines bg='--primary-color'>
				<form onSubmit={onHandleSubmit}>
					<div className='input-box'>
						<label htmlFor='nombre'>Nombre</label>
						<input
							type='text'
							placeholder='Nombre'
							id='nombre'
							autoComplete='off'
						/>
					</div>

					<div className='input-box'>
						<label htmlFor='company_name'>Compañia</label>
						<input
							type='text'
							placeholder='Nombre de la compania'
							id='company_name'
							autoComplete='off'
						/>
					</div>
					<div className='input-box'>
						<label htmlFor='email'>Correo Electronico</label>
						<input
							type='Email'
							placeholder='Norreo electronico'
							id='email'
							autoComplete='off'
						/>
					</div>

					<div className='input-box'>
						<label htmlFor='message'>Mensaje</label>
						<textarea placeholder='Mensaje' id='message'></textarea>
					</div>

					<button type='submit' className='send-btn disabled'>
						<span>Enviar</span>
						<AiOutlineSend className='icon' />
					</button>
				</form>
			</Lines>
		</div>
	)
}
