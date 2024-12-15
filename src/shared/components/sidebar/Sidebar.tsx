import { ListItem } from 'src/shared/models/list-item.interface'
import { routes } from 'src/shared/routes/routes'
import { LinkComponent } from '../links/LinkComponent'
import { UnorderedList } from '../lists/UnorderedList'

export const Sidebar = () => {
  const listItems: ListItem[] = [
    {
      key: routes.Calculator,
      element: (
        <LinkComponent
          label="Lånekalkyl"
          to={routes.Calculator}
          key={routes.Calculator}
        />
      )
    },
    {
      key: routes.CalculatorWithLib,
      element: (
        <LinkComponent
          label="Lånekalkyl v2"
          to={routes.CalculatorWithLib}
          key={routes.CalculatorWithLib}
        />
      )
    }
  ]
  return <UnorderedList items={listItems} />
}
