import { ReactNode } from 'react'
import { LuChefHat, LuClipboardList, LuHouse } from 'react-icons/lu'

export interface SidebarItemProps {
  text: string
  icon: ReactNode
  link: string
}

export const sidebarItens: Array<SidebarItemProps> = [
  {
    text: 'Página inicial',
    icon: <LuHouse />,
    link: '/home',
  },
  {
    text: 'Receitas',
    icon: <LuChefHat />,
    link: '/recipes',
  },
  {
    text: 'Cadastro de receitas',
    icon: <LuClipboardList />,
    link: '/recipes/register',
  },
]
