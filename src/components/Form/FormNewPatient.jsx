import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import useForm from '../../hooks/useForm'
import FormBase from './FormBase'
import { motion } from 'framer-motion'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'

const FormNewPatient = () => {
    const { formData, handleFormDataChange } = useForm()
    const [step, setStep] = useState(1)

    const handleStepChange = (e) => {
        e.preventDefault()
        if (step < 4)
            setStep(step + 1)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(formData.email, formData.password, {
                nombrec: {
                    "nombres": formData.nombres,
                    "apellidoP": formData.apellidoP,
                    "apellidoM": formData.apellidoM
                },
                telefono: formData.telefono,
                rfc: formData.rfc,
                rol: formData.cargo,
                admin: user.uid
            })
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <div className='flex justify-center'>
            <FormBase onSubmit={step != 6 ? handleStepChange : handleSubmit}>
                <motion.h3 layout className='text-3xl font-semibold'>Ingresar nuevo paciente.</motion.h3>
                {
                    step == 1 ?
                        <>
                            <motion.h4 layout className='mt-2'>Información básica.</motion.h4>{/* Considerar quitar */}
                            <FormField key={"nombres"} name="nombres" onChange={handleFormDataChange} placeholder={"Nombre(s)"} />
                            <FormField key={"apellidoP"} name="apellidoP" onChange={handleFormDataChange} placeholder={"Apellido Paterno"} />
                            <FormField key={"apellidoM"} name="apellidoM" onChange={handleFormDataChange} placeholder={"Apellido Materno"} />
                        </>
                        :
                        step == 2 ?
                            <>
                                <motion.h4 layout className='mt-2'>Salud básica.</motion.h4>{/* Considerar quitar */}
                                <FormField key={"curp"} name="curp" onChange={handleFormDataChange} placeholder={"CURP"} />
                                <FormField key={"fechanacimiento"} name="fechanacimiento" onChange={handleFormDataChange} placeholder={"Fecha de Nacimiento"} />
                                <FormField key={"altura"} name="altura" onChange={handleFormDataChange} placeholder={"Altura cm."} />
                                <FormField key={"peso"} name="peso" onChange={handleFormDataChange} placeholder={"Peso Kg."} />
                                <FormField key={"sexo"} name="sexo" onChange={handleFormDataChange} placeholder={"Sexo"} />
                                <FormField key={"grupoS"} name="grupoS" onChange={handleFormDataChange} placeholder={"Grupo Sanguineo"} />

                            </>
                            :
                            step == 3 ?
                                <>
                                    <motion.h4 layout className='mt-2'>Salud avanzada.</motion.h4>{/* Considerar quitar */}
                                    <FormField key={"numSeguro"} name="numSeguro" onChange={handleFormDataChange} placeholder={"Número de Seguro"} />
                                    <FormField key={"alergias"} name="alergias" onChange={handleFormDataChange} placeholder={"Alergias"} />
                                    <FormField key={"padecimientos"} name="padecimientos" onChange={handleFormDataChange} placeholder={"Padecimientos"} />
                                </>
                                :
                                <>
                                    <motion.h4 layout className='mt-2'>Información de estancia.</motion.h4>{/* Considerar quitar */}
                                    <FormField key={"piso"} name="piso" onChange={handleFormDataChange} placeholder={"Número de Piso"} />
                                    <FormField key={"habitacion"} name="habitacion" onChange={handleFormDataChange} placeholder={"Número de Habitación"} />
                                </>
                }

                <div className='flex justify-center mt-6 '>
                    <Button key={`${step == 1 ? `btn1` : step == 2 ? `btn2` : `btn3`}`} text={step != 4 ? "Continuar" : "Registrar"} /> {/* Considerar poner un boton de regreso */}
                </div>
            </FormBase>
        </div>
    )
}

export default FormNewPatient
