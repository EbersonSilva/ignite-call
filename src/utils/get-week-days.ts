// Função para formatar e exibir os dias da semana em PT-BR.

// export function getWeeDays() {
//   const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

//   return Array.from(Array(7).keys())
//     .map((day) => formatter.format(new Date(Date.UTC(2023, 7, day))))
//     .map((weekDay) => {
//       return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
//     })
// }

interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }

      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}
