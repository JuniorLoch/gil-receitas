import { Bounce, ToastContainerProps } from 'react-toastify'

export const toasterConfig: ToastContainerProps = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
  transition: Bounce,
}
