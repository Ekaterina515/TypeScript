export declare class GetData {
    getPlace(url: string, p: boolean): Promise<Response>;
}
export declare function renderBlock(elementId: string, html: string): boolean;
declare type MessageType = {
    type: string;
    text: string;
};
declare type ActionType = {
    name: string;
    handler: () => void;
};
export declare function renderToast(message: MessageType, action: ActionType): void;
export {};
