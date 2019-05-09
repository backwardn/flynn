// package: controller
// file: controller.proto

import * as controller_pb from "./controller_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ControllerListApps = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.ListAppsRequest;
  readonly responseType: typeof controller_pb.ListAppsResponse;
};

type ControllerListAppsStream = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.ListAppsRequest;
  readonly responseType: typeof controller_pb.ListAppsResponse;
};

type ControllerGetApp = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.GetAppRequest;
  readonly responseType: typeof controller_pb.App;
};

type ControllerStreamApp = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.GetAppRequest;
  readonly responseType: typeof controller_pb.App;
};

type ControllerUpdateApp = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.UpdateAppRequest;
  readonly responseType: typeof controller_pb.App;
};

type ControllerUpdateAppMeta = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.UpdateAppRequest;
  readonly responseType: typeof controller_pb.App;
};

type ControllerGetAppRelease = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.GetAppReleaseRequest;
  readonly responseType: typeof controller_pb.Release;
};

type ControllerStreamAppRelease = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.GetAppReleaseRequest;
  readonly responseType: typeof controller_pb.Release;
};

type ControllerCreateScale = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.CreateScaleRequest;
  readonly responseType: typeof controller_pb.ScaleRequest;
};

type ControllerListScaleRequestsStream = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.ListScaleRequestsRequest;
  readonly responseType: typeof controller_pb.ListScaleRequestsResponse;
};

type ControllerStreamAppFormation = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.GetAppFormationRequest;
  readonly responseType: typeof controller_pb.Formation;
};

type ControllerGetRelease = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.GetReleaseRequest;
  readonly responseType: typeof controller_pb.Release;
};

type ControllerListReleases = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.ListReleasesRequest;
  readonly responseType: typeof controller_pb.ListReleasesResponse;
};

type ControllerListReleasesStream = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: true;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.ListReleasesRequest;
  readonly responseType: typeof controller_pb.ListReleasesResponse;
};

type ControllerStreamAppLog = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.StreamAppLogRequest;
  readonly responseType: typeof controller_pb.LogChunk;
};

type ControllerCreateRelease = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof controller_pb.CreateReleaseRequest;
  readonly responseType: typeof controller_pb.Release;
};

type ControllerStreamDeployments = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.ListDeploymentsRequest;
  readonly responseType: typeof controller_pb.ListDeploymentsResponse;
};

type ControllerCreateDeployment = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.CreateDeploymentRequest;
  readonly responseType: typeof controller_pb.Event;
};

type ControllerStreamEvents = {
  readonly methodName: string;
  readonly service: typeof Controller;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof controller_pb.StreamEventsRequest;
  readonly responseType: typeof controller_pb.Event;
};

export class Controller {
  static readonly serviceName: string;
  static readonly ListApps: ControllerListApps;
  static readonly ListAppsStream: ControllerListAppsStream;
  static readonly GetApp: ControllerGetApp;
  static readonly StreamApp: ControllerStreamApp;
  static readonly UpdateApp: ControllerUpdateApp;
  static readonly UpdateAppMeta: ControllerUpdateAppMeta;
  static readonly GetAppRelease: ControllerGetAppRelease;
  static readonly StreamAppRelease: ControllerStreamAppRelease;
  static readonly CreateScale: ControllerCreateScale;
  static readonly ListScaleRequestsStream: ControllerListScaleRequestsStream;
  static readonly StreamAppFormation: ControllerStreamAppFormation;
  static readonly GetRelease: ControllerGetRelease;
  static readonly ListReleases: ControllerListReleases;
  static readonly ListReleasesStream: ControllerListReleasesStream;
  static readonly StreamAppLog: ControllerStreamAppLog;
  static readonly CreateRelease: ControllerCreateRelease;
  static readonly StreamDeployments: ControllerStreamDeployments;
  static readonly CreateDeployment: ControllerCreateDeployment;
  static readonly StreamEvents: ControllerStreamEvents;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ControllerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  listApps(
    requestMessage: controller_pb.ListAppsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.ListAppsResponse|null) => void
  ): UnaryResponse;
  listApps(
    requestMessage: controller_pb.ListAppsRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.ListAppsResponse|null) => void
  ): UnaryResponse;
  listAppsStream(metadata?: grpc.Metadata): BidirectionalStream<controller_pb.ListAppsRequest, controller_pb.ListAppsResponse>;
  getApp(
    requestMessage: controller_pb.GetAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.App|null) => void
  ): UnaryResponse;
  getApp(
    requestMessage: controller_pb.GetAppRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.App|null) => void
  ): UnaryResponse;
  streamApp(requestMessage: controller_pb.GetAppRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.App>;
  updateApp(
    requestMessage: controller_pb.UpdateAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.App|null) => void
  ): UnaryResponse;
  updateApp(
    requestMessage: controller_pb.UpdateAppRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.App|null) => void
  ): UnaryResponse;
  updateAppMeta(
    requestMessage: controller_pb.UpdateAppRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.App|null) => void
  ): UnaryResponse;
  updateAppMeta(
    requestMessage: controller_pb.UpdateAppRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.App|null) => void
  ): UnaryResponse;
  getAppRelease(
    requestMessage: controller_pb.GetAppReleaseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.Release|null) => void
  ): UnaryResponse;
  getAppRelease(
    requestMessage: controller_pb.GetAppReleaseRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.Release|null) => void
  ): UnaryResponse;
  streamAppRelease(requestMessage: controller_pb.GetAppReleaseRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.Release>;
  createScale(
    requestMessage: controller_pb.CreateScaleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.ScaleRequest|null) => void
  ): UnaryResponse;
  createScale(
    requestMessage: controller_pb.CreateScaleRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.ScaleRequest|null) => void
  ): UnaryResponse;
  listScaleRequestsStream(requestMessage: controller_pb.ListScaleRequestsRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.ListScaleRequestsResponse>;
  streamAppFormation(requestMessage: controller_pb.GetAppFormationRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.Formation>;
  getRelease(
    requestMessage: controller_pb.GetReleaseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.Release|null) => void
  ): UnaryResponse;
  getRelease(
    requestMessage: controller_pb.GetReleaseRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.Release|null) => void
  ): UnaryResponse;
  listReleases(
    requestMessage: controller_pb.ListReleasesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.ListReleasesResponse|null) => void
  ): UnaryResponse;
  listReleases(
    requestMessage: controller_pb.ListReleasesRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.ListReleasesResponse|null) => void
  ): UnaryResponse;
  listReleasesStream(metadata?: grpc.Metadata): BidirectionalStream<controller_pb.ListReleasesRequest, controller_pb.ListReleasesResponse>;
  streamAppLog(requestMessage: controller_pb.StreamAppLogRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.LogChunk>;
  createRelease(
    requestMessage: controller_pb.CreateReleaseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: controller_pb.Release|null) => void
  ): UnaryResponse;
  createRelease(
    requestMessage: controller_pb.CreateReleaseRequest,
    callback: (error: ServiceError|null, responseMessage: controller_pb.Release|null) => void
  ): UnaryResponse;
  streamDeployments(requestMessage: controller_pb.ListDeploymentsRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.ListDeploymentsResponse>;
  createDeployment(requestMessage: controller_pb.CreateDeploymentRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.Event>;
  streamEvents(requestMessage: controller_pb.StreamEventsRequest, metadata?: grpc.Metadata): ResponseStream<controller_pb.Event>;
}

