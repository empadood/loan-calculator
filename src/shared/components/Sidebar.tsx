import { ListItem } from '../models/list-item.interface'
import { routes } from '../routes/routes'
import { LinkComponent } from './links/LinkComponent'
import { UnorderedList } from './lists/UnorderedList'

export const Sidebar = () => {
  const listItems: ListItem[] = [
    {
      key: routes.Home,
      element: <LinkComponent label="Hem" to={routes.Home} key={routes.Home} />
    },
    {
      key: routes.Calculator,
      element: (
        <LinkComponent
          label="Lånekalkyl"
          to={routes.Calculator}
          key={routes.Calculator}
        />
      )
    }
  ]
  return <UnorderedList items={listItems} />
}
