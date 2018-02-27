export class cardData {
  header: string;
  entityType:'threat' | 'sessions' | 'accounts' | 'requests' | string;
  infoItems: Array<{ title: string, content: string }>;
  icon?: string;
  iconText?: string;
  iconColor?: 'blue' | 'red' | 'orange';
  entityId?: string;
}
