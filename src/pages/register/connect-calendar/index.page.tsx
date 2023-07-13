// Tela de registro de usuario com o Gloogle Calendar.

import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from 'phosphor-react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'
  // Verificação de possiveis erros.
  async function handleConnectCalendar() {
    await signIn('google')
  }

  // Direcionamento de pagina ao clicar no botão

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }
  return (
    <>
      <NextSeo title="Conecte a sua agenda do Google  | Ignite Call" noindex />
      <Container>
        <Header>
          <Heading as={'strong'}>Conecte sua agenda!</Heading>
          <Text>
            Conecte seu calendario para verificar automaticamente as horas
            ocupadas e os novos eventos á medida em que são agendados
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isSignedIn ? (
              <Button size="sm" disabled>
                Conectado
              </Button>
            ) : (
              <Button
                variant={'secondary'}
                size="sm"
                onClick={handleConnectCalendar}
              >
                Conectar
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>

          {hasAuthError && (
            <AuthError size="sm">
              Falha ao se conectar ao Google, verifique se você habilitou as
              permissões de acesso ao Google Calendar
            </AuthError>
          )}
          <Button
            onClick={handleNavigateToNextStep}
            type="submit"
            disabled={!isSignedIn}
          >
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>
      </Container>
    </>
  )
}
