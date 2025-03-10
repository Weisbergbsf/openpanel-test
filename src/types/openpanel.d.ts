export interface OpenPanel {
    track(eventName: string, properties?: Record<string, any>): void;
    identify(properties: Record<string, any>): void;
    setGlobalProperties(properties: Record<string, any>): void;
    alias(alias: string): void;
    increment(eventName: string, value?: number): void;
    decrement(eventName: string, value?: number): void;
    clear(): void;
  }
  
  declare module '@openpanel/web' {
    export class OpenPanel {
      constructor(config: {
        clientId: string;
        trackScreenViews?: boolean;
        trackOutgoingLinks?: boolean;
        trackAttributes?: boolean;
        apiUrl?: string;
      });
      track(eventName: string, properties?: Record<string, any>): void;
      identify(properties: Record<string, any>): void;
      setGlobalProperties(properties: Record<string, any>): void;
      alias(alias: string): void;
      increment(eventName: string, value?: number): void;
      decrement(eventName: string, value?: number): void;
      clear(): void;
    }
  }