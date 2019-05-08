export interface Pos {
  ID: number;
  PaypoResId: number;
  Name: string;
  Active: boolean;
  CreditCardExternalTerminalSettings: any;
  RewardyEnabled: boolean;
  RewardyEndPointId?: any;
  RewardySetupCode?: any;
  DeliveryPos: boolean;
  ManageOrderStatus_Received: boolean;
  ManageOrderStatus_InProcess: boolean;
  ManageOrderStatus_Ready: boolean;
  ManageOrderStatus_OutForDelivery: boolean;
  Disabled: boolean;
  SyncOrdersWithLocalServersEnabled: boolean;
  POSTransferOrdersEnabled: boolean;
  ExecuteAllNextStageDisabled: boolean;
  OrderStatus_Received_OnlinePooledOnly: boolean;
  PrintingManagerServerIP?: any;
  PosIndex: number;
  CurrentPOSId: number;
  IPAddress?: any;
}
