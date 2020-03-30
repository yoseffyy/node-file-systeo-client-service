// package: proto
// file: service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateReq extends jspb.Message { 

    hasFile(): boolean;
    clearFile(): void;
    getFile(): File | undefined;
    setFile(value?: File): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateReq.AsObject;
    static toObject(includeInstance: boolean, msg: CreateReq): CreateReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateReq;
    static deserializeBinaryFromReader(message: CreateReq, reader: jspb.BinaryReader): CreateReq;
}

export namespace CreateReq {
    export type AsObject = {
        file?: File.AsObject,
    }
}

export class ReadReq extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): void;

    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadReq.AsObject;
    static toObject(includeInstance: boolean, msg: ReadReq): ReadReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadReq;
    static deserializeBinaryFromReader(message: ReadReq, reader: jspb.BinaryReader): ReadReq;
}

export namespace ReadReq {
    export type AsObject = {
        owner: string,
        id: string,
    }
}

export class UpdateReq extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): void;


    hasFile(): boolean;
    clearFile(): void;
    getFile(): File | undefined;
    setFile(value?: File): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateReq.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateReq): UpdateReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateReq;
    static deserializeBinaryFromReader(message: UpdateReq, reader: jspb.BinaryReader): UpdateReq;
}

export namespace UpdateReq {
    export type AsObject = {
        owner: string,
        file?: File.AsObject,
    }
}

export class DeleteReq extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): void;

    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteReq.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteReq): DeleteReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteReq;
    static deserializeBinaryFromReader(message: DeleteReq, reader: jspb.BinaryReader): DeleteReq;
}

export namespace DeleteReq {
    export type AsObject = {
        owner: string,
        id: string,
    }
}

export class FileRes extends jspb.Message { 

    hasFile(): boolean;
    clearFile(): void;
    getFile(): File | undefined;
    setFile(value?: File): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileRes.AsObject;
    static toObject(includeInstance: boolean, msg: FileRes): FileRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileRes;
    static deserializeBinaryFromReader(message: FileRes, reader: jspb.BinaryReader): FileRes;
}

export namespace FileRes {
    export type AsObject = {
        file?: File.AsObject,
    }
}

export class BoolRes extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolRes.AsObject;
    static toObject(includeInstance: boolean, msg: BoolRes): BoolRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolRes;
    static deserializeBinaryFromReader(message: BoolRes, reader: jspb.BinaryReader): BoolRes;
}

export namespace BoolRes {
    export type AsObject = {
        success: boolean,
    }
}

export class ListFilesReq extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilesReq.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilesReq): ListFilesReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilesReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilesReq;
    static deserializeBinaryFromReader(message: ListFilesReq, reader: jspb.BinaryReader): ListFilesReq;
}

export namespace ListFilesReq {
    export type AsObject = {
        owner: string,
    }
}

export class ListFilesRes extends jspb.Message { 
    clearFilesList(): void;
    getFilesList(): Array<File>;
    setFilesList(value: Array<File>): void;
    addFiles(value?: File, index?: number): File;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFilesRes.AsObject;
    static toObject(includeInstance: boolean, msg: ListFilesRes): ListFilesRes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFilesRes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFilesRes;
    static deserializeBinaryFromReader(message: ListFilesRes, reader: jspb.BinaryReader): ListFilesRes;
}

export namespace ListFilesRes {
    export type AsObject = {
        filesList: Array<File.AsObject>,
    }
}

export class File extends jspb.Message { 
    getId(): string;
    setId(value: string): void;

    getOwner(): string;
    setOwner(value: string): void;

    getPath(): string;
    setPath(value: string): void;

    getName(): string;
    setName(value: string): void;

    getIsfolder(): boolean;
    setIsfolder(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        id: string,
        owner: string,
        path: string,
        name: string,
        isfolder: boolean,
    }
}

export class Owner extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Owner.AsObject;
    static toObject(includeInstance: boolean, msg: Owner): Owner.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Owner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Owner;
    static deserializeBinaryFromReader(message: Owner, reader: jspb.BinaryReader): Owner;
}

export namespace Owner {
    export type AsObject = {
        id: string,
    }
}

export class AddOwnerReq extends jspb.Message { 
    getOwner(): string;
    setOwner(value: string): void;

    getOwnertoadd(): string;
    setOwnertoadd(value: string): void;

    getPath(): string;
    setPath(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddOwnerReq.AsObject;
    static toObject(includeInstance: boolean, msg: AddOwnerReq): AddOwnerReq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddOwnerReq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddOwnerReq;
    static deserializeBinaryFromReader(message: AddOwnerReq, reader: jspb.BinaryReader): AddOwnerReq;
}

export namespace AddOwnerReq {
    export type AsObject = {
        owner: string,
        ownertoadd: string,
        path: string,
    }
}
