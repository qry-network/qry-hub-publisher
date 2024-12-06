import { PublicKey } from "@wharfkit/antelope";
import { Socket as SocketIO } from "socket.io-client";
import { QRYPublisherOptions } from "./interfaces.js";
export declare class QRYPublisher {
    private opts;
    private privateKey?;
    publicKey: PublicKey;
    socket?: SocketIO;
    sessionToken?: string;
    metadata?: any;
    onConnect?: () => void;
    onMetadataRequest?: () => void;
    onDisconnect?: () => void;
    constructor(options: QRYPublisherOptions);
    formatStatsArray(reqMap: Map<string, Map<number, number>>): string;
    private checkPrivateKey;
    connect(): Promise<void>;
    private requestSession;
    private requestChallenge;
    sendMetadata(data: any): void;
    publish(data: any): void;
    publishApiUsageMap(apiUsageMap: Map<string, Map<number, number>>, fromTs?: string, toTs?: string): void;
    publishApiUsage(counter: number, timestamp?: string): void;
    publishPastApiUsage(dataPoints: {
        ct: number;
        ts: string;
    }[]): void;
    publishIndexerStatus(status: 'none' | 'offline' | 'delayed' | 'active'): void;
}
