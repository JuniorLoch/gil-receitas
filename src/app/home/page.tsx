import { GridItem } from '@chakra-ui/react'
import { GraficoLinha } from './components/grafico-linha'
import { GilGrid } from '../components/GilGrid'
import { GilCard } from '../components/gil-card'
import { GraficoBarra } from './components/grafico-barra'
import { ListaBarra } from './components/lista-barra'
import { TesteDatabase } from '../components/TesteDatabase'

export default function HomePage() {
  return (
    <GilGrid>
      <GridItem colSpan={4}>
        <GilCard title='Grafico 1'>
          <GraficoLinha />
        </GilCard>
      </GridItem>
      <GridItem colSpan={4}>
        <GilCard title='Grafico 2'>
          <GraficoBarra />
        </GilCard>
      </GridItem>
      <GridItem colSpan={4}>
        <GilCard title='Grafico 3'>
          <ListaBarra />
        </GilCard>
      </GridItem>
      <GridItem colSpan={12}>
        <GilCard title='Teste valores banco de dados'>
          <TesteDatabase />
        </GilCard>
      </GridItem>
    </GilGrid>
  )
}
