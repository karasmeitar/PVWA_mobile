export class cardData {
  header: string
  entityType:'threat' | 'sessions' | 'accounts' | 'requests'
  infoItems: Array<{ title: string, content: string }>
}
