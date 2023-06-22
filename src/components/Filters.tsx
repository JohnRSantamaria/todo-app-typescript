import { FOOTER_FILTERS_BUTTONS } from '../const'
import { type FilterValue } from '../types'

interface Props {
  onFilterChage: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChage }) => {
  return (
    <ul className='filters'>
      {Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterChage(key as FilterValue)
              }}
            />
            {literal}
          </li>
        )
      })}
    </ul>
  )
}
