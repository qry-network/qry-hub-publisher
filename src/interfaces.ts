export interface QRYPublisherOptions {
    hubUrl: string;
    instancePrivateKey: string;
    metadata?: any;
    onConnect?: () => void;
    onMetadataRequest?: () => void;
    onDisconnect?: () => void;
}
