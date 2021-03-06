import React from 'react'
import { useTransition } from 'react-spring'

import Toast from './Toast'
import { ToastMessage } from '../../../contexts/toast'
import { Container } from './styles'

interface ToastContainerProps {
   messages: ToastMessage[]
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {

   const messagesWithTransictions = useTransition(messages, {
      keys: (message) => message.id,
      from: { right: '-120%', transform: 'opacity: 0' },
      enter: { right: '0%', transform: 'opacity: 1' },
      leave: { right: '-120%', transform: 'opacity: 0' }
   }
   )

   return (
      <Container>
         {messagesWithTransictions((style, item, t) => (
            <Toast key={t.key} style={style} message={item} />
         ))}
      </Container>
   )
}

export default ToastContainer