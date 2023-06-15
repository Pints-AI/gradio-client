import { hardware_types } from "./utils.js";
import type { EventType, EventListener, PostResponse, UploadResponse, SpaceStatusCallback, FileData } from "./types.js";
import type { Config } from "./types.js";
declare type event = <K extends EventType>(eventType: K, listener: EventListener<K>) => SubmitReturn;
declare type predict = (endpoint: string | number, data?: unknown[], event_data?: unknown) => Promise<unknown>;
declare type client_return = {
    predict: predict;
    config: Config;
    submit: (endpoint: string | number, data?: unknown[], event_data?: unknown) => SubmitReturn;
    view_api: (c?: Config) => Promise<Record<string, any>>;
};
declare type SubmitReturn = {
    on: event;
    off: event;
    cancel: () => Promise<void>;
    destroy: () => void;
};
export declare function post_data(url: string, body: unknown, token?: `hf_${string}`): Promise<[PostResponse, number]>;
export declare let NodeBlob: any;
export declare function upload_files(root: string, files: Array<File>, token?: `hf_${string}`): Promise<UploadResponse>;
export declare function duplicate(app_reference: string, options: {
    hf_token: `hf_${string}`;
    private?: boolean;
    status_callback: SpaceStatusCallback;
    hardware?: typeof hardware_types[number];
    timeout?: number;
}): Promise<client_return>;
export declare function client(app_reference: string, options?: {
    hf_token?: `hf_${string}`;
    status_callback?: SpaceStatusCallback;
    normalise_files?: boolean;
}): Promise<client_return>;
export declare function normalise_file(file: Array<FileData> | FileData | string | null, root: string, root_url: string | null): Array<FileData> | FileData | null;
export declare function handle_blob(endpoint: string, data: unknown[], api_info: any, token?: `hf_${string}`): Promise<unknown[]>;
export declare function walk_and_store_blobs(param: any, type?: any, path?: any[], root?: boolean, api_info?: any): Promise<any[]>;
export {};
//# sourceMappingURL=client.d.ts.map