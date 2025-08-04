import { GenericComponent } from './generic-component'
import { GenericPage } from './generic-page'

export interface GenericLayout<T> extends GenericPage<T>, GenericComponent {}
