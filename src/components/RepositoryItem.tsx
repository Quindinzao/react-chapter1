interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default name'}</strong>
      <p>{props.repository?.description ?? 'default description'}</p>

      <a href={props.repository?.html_url ?? 'default link'}>
      Acessar repositório
      </a>
    </li>
  )
}