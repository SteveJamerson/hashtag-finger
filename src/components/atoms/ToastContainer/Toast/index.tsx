import React, { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import { useToast } from '../../../../hooks/useToast'
import { ToastMessage } from '../../../../contexts/toast'

import { Container } from './styles'

interface ToastProps {
    message: ToastMessage
    style: object
}

const icons = {
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
    success: <FiCheckCircle size={24} />
}



const Toast: React.FC<ToastProps> = ({ message, style }) => { //recebendo as variaveis, style variavel de efeito

    const { removeToast } = useToast()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id)
        }, 4000)

        return () => {
            clearTimeout(timer)
        }
        //funcao executara se o componente morrer, ou seja for fechado de outra forma, nesse caso no clique x do usuario.

    }, [removeToast, message.id])

    return (
        <Container type={message.type} hasDescription={Number(!!message.description)} style={style} >
            {icons[message.type || 'info']}

            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>

        </Container>
    )
}

export default Toast