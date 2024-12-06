export interface QRYPublisherOptions {
    publishPath?: string;
    publishUrl: string;
    instancePrivateKey?: string;
    metadata?: any;
    onConnect?: () => void;
    onMetadataRequest?: () => void;
    onDisconnect?: () => void;
}
