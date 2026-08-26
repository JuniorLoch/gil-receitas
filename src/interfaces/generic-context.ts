import { GenericComponent } from './generic-component'

export interface GenericContext<T = unknown> extends GenericComponent {
  initialValues?: T
}
