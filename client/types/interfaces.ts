//пропсы компонента ListItem
export interface ListItemProps {
  id: number;
  name: string;
  price: string;
  pattern: {};
}

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: {
          query_id?: string;
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
          };
          auth_date?: number;
          hash?: string;
        };
        close: () => void;
        expand: () => void;
        isExpanded: boolean;
        onEvent: (eventType: string, callback: () => void) => void;
        offEvent: (eventType: string, callback: () => void) => void;
        sendData: (data: string) => void;
      };
    };
  }
}