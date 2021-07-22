import { makeAutoObservable } from 'mobx'
import { TariffsList } from '../types/type'
import { CarsArray } from '../types/type'
import { getCarsData } from '../api/api'

export class TableStore {
  tariffsList: TariffsList = []
  cars: CarsArray = []
  search: string = ''
  isLoading: boolean = true
  pickedCar: string = ''
  sortingDirection: 'up' | 'down' | null = null
  n: number = 1
  countPerRender: number = 30
  constructor() {
    makeAutoObservable(this)
  }

  async setCarsData() {
    const res = await getCarsData()
    const {cars, tariffs_list} = res?.data
    this.cars = cars
    this.tariffsList = tariffs_list
    this.isLoading = false
  }

  updateSearch(str: string) {
    this.search = str
  }

  resetSearch() {
    this.search = ''
  }

  updatePickedCar(pickedCar: string) {
    this.pickedCar = pickedCar
  }

  updateSortingDirection(direction: 'up' | 'down') {
    this.sortingDirection = direction
    this.n = 1
  }

  updateN() {
    if (this.countPerRender * this.n < this.cars.length) this.n++
  }

  get getCarsData() {
    return this.cars
      .map(car => [`${car.mark} ${car.model}`, ...this.tariffsList
        .map(tariff => (car.tariffs[tariff]?.year.toString() || '-'))])
  }

  get getSearchedCarsData() {
    if (this.search) {
      return this.getCarsData.filter(car => new RegExp(`${this.search}`, 'i').test(`${car.join(' ')}`))
    }
    return this.getCarsData
  }

  get getSearchedAndSortedCarsData() {
    if (this.sortingDirection === 'up') {
      return this.getSearchedCarsData
        .sort((arr1, arr2) => arr1[0].toLowerCase() < arr2[0].toLowerCase() ? 1 : -1).slice(0, this.n * this.countPerRender)
    }
    if (this.sortingDirection === 'down') {
      return this.getSearchedCarsData
        .sort((arr1, arr2) => arr1[0].toLowerCase() < arr2[0].toLowerCase() ? -1 : 1).slice(0, this.n * this.countPerRender)
    }
    return this.getSearchedCarsData.slice(0, this.n * this.countPerRender)
  }

}

