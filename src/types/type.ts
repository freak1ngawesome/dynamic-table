export type CarsTarrifsYear = {
  [key: string]: {year: number}
}

export type Car = {
  mark: string,
  model: string,
  tariffs: CarsTarrifsYear,
}

export type CarsArray = Array<Car>

export type Tariffs = 'Эконом' | 'Комфорт' | 'Комфорт+' | 'Минивэн' | 'Бизнес' | 'Лайт' | 'Стандарт'

export type TariffsList = Array<Tariffs>

