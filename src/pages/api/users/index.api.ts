import type { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Condicional para dar erro caso o metodo seja diferente de "POST"
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, username } = req.body

  // Validação para saber se ja existe o usuario na tabela.
  const userExists = await prisma.user.findUnique({
    where: {
      username,
    },
  })

  // Condicional para retornar mensagem de erro caso ja exista usuario na tabela.
  if (userExists) {
    return res.status(400).json({
      message: 'Username already exists.',
    })
  }

  // Criando usuarios na tabela Users
  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })

  // Tempo que o cookie vai durar.
  setCookie({ res }, '@ignitecall:userId', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  })

  return res.status(201).json(user)
}
