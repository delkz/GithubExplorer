import { Repository } from "./RepositoryList";

interface RepositoryItemProps{
  repository: Repository
}
export function RepositoryItem(props:RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a target="_blank" href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
