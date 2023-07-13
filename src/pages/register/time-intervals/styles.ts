// Estilização da tela da sesao de dias da semana e horarios.

import { Box, Text, styled } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const IntervalContainer = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
})

// Div de dia da semana
export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

// Div de horario
export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  // Trocando a cor do icone de relogio padrao do chrome
  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(30%)',
  },
})

export const FormError = styled(Text, {
  color: '#f75a68',
  marginBottom: '$2',
})
