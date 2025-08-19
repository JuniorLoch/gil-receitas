import { ToastContainer } from 'react-toastify'
import { toasterConfig } from './toaster-config-const'

export function Toaster() {
  return <ToastContainer {...toasterConfig} />
}
