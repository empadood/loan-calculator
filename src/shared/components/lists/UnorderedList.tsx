import { ListItem } from '../../models/list-item.interface'
import './UnorderedList.css'

interface UnorderedListProps {
  items: ListItem[]
}

export const UnorderedList = ({ items }: UnorderedListProps) => {
  return (
    <ul className="unordered-list">
      {items.map((listItem) => {
        return <li key={listItem.key}>{listItem.element}</li>
      })}
    </ul>
  )
}
