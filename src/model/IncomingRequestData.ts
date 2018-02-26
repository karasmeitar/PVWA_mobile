import {accountData} from "./accountData";

export class IncomingRequestData {
  RequestID: string;
  RequestorUserName: string;
  RequestorReason: string;
  Operation: string;
  ExpirationDate: string;
  OperationType: number;
  AccessType: string;
  AccessFrom: number;
  AccessTo: number;
  Status: number;
  StatusTitle: string;
  InvalidRequestReason: number;
  AccountDetails: accountData;
}
