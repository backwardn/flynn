/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('./google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
goog.object.extend(proto, google_protobuf_field_mask_pb);
goog.exportSymbol('proto.controller.App', null, global);
goog.exportSymbol('proto.controller.AppDeletion', null, global);
goog.exportSymbol('proto.controller.AppGarbageCollection', null, global);
goog.exportSymbol('proto.controller.AppRelease', null, global);
goog.exportSymbol('proto.controller.Artifact', null, global);
goog.exportSymbol('proto.controller.Certificate', null, global);
goog.exportSymbol('proto.controller.ClusterBackup', null, global);
goog.exportSymbol('proto.controller.CreateDeploymentRequest', null, global);
goog.exportSymbol('proto.controller.CreateReleaseRequest', null, global);
goog.exportSymbol('proto.controller.CreateScaleRequest', null, global);
goog.exportSymbol('proto.controller.Deployment', null, global);
goog.exportSymbol('proto.controller.DeploymentEvent', null, global);
goog.exportSymbol('proto.controller.DeploymentEvent.JobState', null, global);
goog.exportSymbol('proto.controller.DeploymentProcessTags', null, global);
goog.exportSymbol('proto.controller.DeploymentStatus', null, global);
goog.exportSymbol('proto.controller.DomainMigration', null, global);
goog.exportSymbol('proto.controller.Event', null, global);
goog.exportSymbol('proto.controller.ExpandedDeployment', null, global);
goog.exportSymbol('proto.controller.Formation', null, global);
goog.exportSymbol('proto.controller.GetAppFormationRequest', null, global);
goog.exportSymbol('proto.controller.GetAppReleaseRequest', null, global);
goog.exportSymbol('proto.controller.GetAppRequest', null, global);
goog.exportSymbol('proto.controller.GetReleaseRequest', null, global);
goog.exportSymbol('proto.controller.HostHealthCheck', null, global);
goog.exportSymbol('proto.controller.HostMount', null, global);
goog.exportSymbol('proto.controller.HostResourceSpec', null, global);
goog.exportSymbol('proto.controller.HostService', null, global);
goog.exportSymbol('proto.controller.Job', null, global);
goog.exportSymbol('proto.controller.LibContainerDevice', null, global);
goog.exportSymbol('proto.controller.ListAppsRequest', null, global);
goog.exportSymbol('proto.controller.ListAppsResponse', null, global);
goog.exportSymbol('proto.controller.ListDeploymentsRequest', null, global);
goog.exportSymbol('proto.controller.ListDeploymentsResponse', null, global);
goog.exportSymbol('proto.controller.ListReleasesRequest', null, global);
goog.exportSymbol('proto.controller.ListReleasesResponse', null, global);
goog.exportSymbol('proto.controller.ListScaleRequestsRequest', null, global);
goog.exportSymbol('proto.controller.ListScaleRequestsResponse', null, global);
goog.exportSymbol('proto.controller.LogAggregatorLogOpts', null, global);
goog.exportSymbol('proto.controller.LogAggregatorStreamSource', null, global);
goog.exportSymbol('proto.controller.LogAggregatorStreamType', null, global);
goog.exportSymbol('proto.controller.LogChunk', null, global);
goog.exportSymbol('proto.controller.Port', null, global);
goog.exportSymbol('proto.controller.ProcessType', null, global);
goog.exportSymbol('proto.controller.Provider', null, global);
goog.exportSymbol('proto.controller.Release', null, global);
goog.exportSymbol('proto.controller.ReleaseDeletion', null, global);
goog.exportSymbol('proto.controller.ReleaseType', null, global);
goog.exportSymbol('proto.controller.Resource', null, global);
goog.exportSymbol('proto.controller.ResourceAppDeletion', null, global);
goog.exportSymbol('proto.controller.ResourceDeletion', null, global);
goog.exportSymbol('proto.controller.Route', null, global);
goog.exportSymbol('proto.controller.Route.RouteType', null, global);
goog.exportSymbol('proto.controller.RouteDeletion', null, global);
goog.exportSymbol('proto.controller.ScaleRequest', null, global);
goog.exportSymbol('proto.controller.ScaleRequestState', null, global);
goog.exportSymbol('proto.controller.Sink', null, global);
goog.exportSymbol('proto.controller.SinkDeletion', null, global);
goog.exportSymbol('proto.controller.StreamAppLogRequest', null, global);
goog.exportSymbol('proto.controller.StreamEventsRequest', null, global);
goog.exportSymbol('proto.controller.UpdateAppRequest', null, global);
goog.exportSymbol('proto.controller.Volume', null, global);
goog.exportSymbol('proto.controller.VolumeReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListAppsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ListAppsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListAppsRequest.displayName = 'proto.controller.ListAppsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListAppsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.ListAppsResponse.repeatedFields_, null);
};
goog.inherits(proto.controller.ListAppsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListAppsResponse.displayName = 'proto.controller.ListAppsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.GetAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.GetAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.GetAppRequest.displayName = 'proto.controller.GetAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.UpdateAppRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.UpdateAppRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.UpdateAppRequest.displayName = 'proto.controller.UpdateAppRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListDeploymentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ListDeploymentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListDeploymentsRequest.displayName = 'proto.controller.ListDeploymentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListDeploymentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.ListDeploymentsResponse.repeatedFields_, null);
};
goog.inherits(proto.controller.ListDeploymentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListDeploymentsResponse.displayName = 'proto.controller.ListDeploymentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListReleasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ListReleasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListReleasesRequest.displayName = 'proto.controller.ListReleasesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListReleasesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.ListReleasesResponse.repeatedFields_, null);
};
goog.inherits(proto.controller.ListReleasesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListReleasesResponse.displayName = 'proto.controller.ListReleasesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.GetAppReleaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.GetAppReleaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.GetAppReleaseRequest.displayName = 'proto.controller.GetAppReleaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.CreateScaleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.CreateScaleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.CreateScaleRequest.displayName = 'proto.controller.CreateScaleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListScaleRequestsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ListScaleRequestsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListScaleRequestsRequest.displayName = 'proto.controller.ListScaleRequestsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ListScaleRequestsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.ListScaleRequestsResponse.repeatedFields_, null);
};
goog.inherits(proto.controller.ListScaleRequestsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ListScaleRequestsResponse.displayName = 'proto.controller.ListScaleRequestsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ScaleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ScaleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ScaleRequest.displayName = 'proto.controller.ScaleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Formation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Formation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Formation.displayName = 'proto.controller.Formation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.GetAppFormationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.GetAppFormationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.GetAppFormationRequest.displayName = 'proto.controller.GetAppFormationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.GetReleaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.GetReleaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.GetReleaseRequest.displayName = 'proto.controller.GetReleaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.StreamAppLogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.StreamAppLogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.StreamAppLogRequest.displayName = 'proto.controller.StreamAppLogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.CreateReleaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.CreateReleaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.CreateReleaseRequest.displayName = 'proto.controller.CreateReleaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.CreateDeploymentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.CreateDeploymentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.CreateDeploymentRequest.displayName = 'proto.controller.CreateDeploymentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.StreamEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.StreamEventsRequest.repeatedFields_, null);
};
goog.inherits(proto.controller.StreamEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.StreamEventsRequest.displayName = 'proto.controller.StreamEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.App = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.App, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.App.displayName = 'proto.controller.App';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Release = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.Release.repeatedFields_, null);
};
goog.inherits(proto.controller.Release, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Release.displayName = 'proto.controller.Release';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.AppRelease = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.AppRelease, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.AppRelease.displayName = 'proto.controller.AppRelease';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Deployment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Deployment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Deployment.displayName = 'proto.controller.Deployment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ExpandedDeployment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ExpandedDeployment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ExpandedDeployment.displayName = 'proto.controller.ExpandedDeployment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.DeploymentProcessTags = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.DeploymentProcessTags, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.DeploymentProcessTags.displayName = 'proto.controller.DeploymentProcessTags';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Certificate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.Certificate.repeatedFields_, null);
};
goog.inherits(proto.controller.Certificate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Certificate.displayName = 'proto.controller.Certificate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Route = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Route, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Route.displayName = 'proto.controller.Route';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Resource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.Resource.repeatedFields_, null);
};
goog.inherits(proto.controller.Resource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Resource.displayName = 'proto.controller.Resource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Job = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Job, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Job.displayName = 'proto.controller.Job';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Event = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Event, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Event.displayName = 'proto.controller.Event';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.AppDeletion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.AppDeletion.repeatedFields_, null);
};
goog.inherits(proto.controller.AppDeletion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.AppDeletion.displayName = 'proto.controller.AppDeletion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.DeploymentEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.DeploymentEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.DeploymentEvent.displayName = 'proto.controller.DeploymentEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ReleaseDeletion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ReleaseDeletion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ReleaseDeletion.displayName = 'proto.controller.ReleaseDeletion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Artifact = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Artifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Artifact.displayName = 'proto.controller.Artifact';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Provider = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Provider, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Provider.displayName = 'proto.controller.Provider';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ResourceDeletion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ResourceDeletion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ResourceDeletion.displayName = 'proto.controller.ResourceDeletion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ResourceAppDeletion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ResourceAppDeletion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ResourceAppDeletion.displayName = 'proto.controller.ResourceAppDeletion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.RouteDeletion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.RouteDeletion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.RouteDeletion.displayName = 'proto.controller.RouteDeletion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.DomainMigration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.DomainMigration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.DomainMigration.displayName = 'proto.controller.DomainMigration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ClusterBackup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.ClusterBackup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ClusterBackup.displayName = 'proto.controller.ClusterBackup';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.AppGarbageCollection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.AppGarbageCollection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.AppGarbageCollection.displayName = 'proto.controller.AppGarbageCollection';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.SinkDeletion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.SinkDeletion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.SinkDeletion.displayName = 'proto.controller.SinkDeletion';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Sink = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Sink, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Sink.displayName = 'proto.controller.Sink';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Volume = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Volume, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Volume.displayName = 'proto.controller.Volume';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.ProcessType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.ProcessType.repeatedFields_, null);
};
goog.inherits(proto.controller.ProcessType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.ProcessType.displayName = 'proto.controller.ProcessType';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.Port = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.Port, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.Port.displayName = 'proto.controller.Port';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.VolumeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.VolumeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.VolumeReq.displayName = 'proto.controller.VolumeReq';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.HostService = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.HostService, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.HostService.displayName = 'proto.controller.HostService';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.HostHealthCheck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.HostHealthCheck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.HostHealthCheck.displayName = 'proto.controller.HostHealthCheck';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.HostResourceSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.HostResourceSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.HostResourceSpec.displayName = 'proto.controller.HostResourceSpec';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.HostMount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.HostMount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.HostMount.displayName = 'proto.controller.HostMount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.LibContainerDevice = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.LibContainerDevice, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.LibContainerDevice.displayName = 'proto.controller.LibContainerDevice';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.LogChunk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.controller.LogChunk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.LogChunk.displayName = 'proto.controller.LogChunk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.controller.LogAggregatorLogOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.controller.LogAggregatorLogOpts.repeatedFields_, null);
};
goog.inherits(proto.controller.LogAggregatorLogOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.controller.LogAggregatorLogOpts.displayName = 'proto.controller.LogAggregatorLogOpts';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListAppsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListAppsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListAppsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListAppsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListAppsRequest}
 */
proto.controller.ListAppsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListAppsRequest;
  return proto.controller.ListAppsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListAppsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListAppsRequest}
 */
proto.controller.ListAppsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListAppsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListAppsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListAppsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListAppsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.controller.ListAppsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.controller.ListAppsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.controller.ListAppsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListAppsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.ListAppsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListAppsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListAppsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListAppsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListAppsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    appsList: jspb.Message.toObjectList(msg.getAppsList(),
    proto.controller.App.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListAppsResponse}
 */
proto.controller.ListAppsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListAppsResponse;
  return proto.controller.ListAppsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListAppsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListAppsResponse}
 */
proto.controller.ListAppsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.App;
      reader.readMessage(value,proto.controller.App.deserializeBinaryFromReader);
      msg.addApps(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListAppsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListAppsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListAppsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListAppsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.controller.App.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated App apps = 1;
 * @return {!Array<!proto.controller.App>}
 */
proto.controller.ListAppsResponse.prototype.getAppsList = function() {
  return /** @type{!Array<!proto.controller.App>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.App, 1));
};


/** @param {!Array<!proto.controller.App>} value */
proto.controller.ListAppsResponse.prototype.setAppsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.controller.App=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.App}
 */
proto.controller.ListAppsResponse.prototype.addApps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.controller.App, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ListAppsResponse.prototype.clearAppsList = function() {
  this.setAppsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.controller.ListAppsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListAppsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.GetAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.GetAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.GetAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.GetAppRequest}
 */
proto.controller.GetAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.GetAppRequest;
  return proto.controller.GetAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.GetAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.GetAppRequest}
 */
proto.controller.GetAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.GetAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.GetAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.GetAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.GetAppRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.GetAppRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.UpdateAppRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.UpdateAppRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.UpdateAppRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.UpdateAppRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && proto.controller.App.toObject(includeInstance, f),
    updateMask: (f = msg.getUpdateMask()) && google_protobuf_field_mask_pb.FieldMask.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.UpdateAppRequest}
 */
proto.controller.UpdateAppRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.UpdateAppRequest;
  return proto.controller.UpdateAppRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.UpdateAppRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.UpdateAppRequest}
 */
proto.controller.UpdateAppRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.App;
      reader.readMessage(value,proto.controller.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 2:
      var value = new google_protobuf_field_mask_pb.FieldMask;
      reader.readMessage(value,google_protobuf_field_mask_pb.FieldMask.deserializeBinaryFromReader);
      msg.setUpdateMask(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.UpdateAppRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.UpdateAppRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.UpdateAppRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.UpdateAppRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.controller.App.serializeBinaryToWriter
    );
  }
  f = message.getUpdateMask();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_field_mask_pb.FieldMask.serializeBinaryToWriter
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.controller.App}
 */
proto.controller.UpdateAppRequest.prototype.getApp = function() {
  return /** @type{?proto.controller.App} */ (
    jspb.Message.getWrapperField(this, proto.controller.App, 1));
};


/** @param {?proto.controller.App|undefined} value */
proto.controller.UpdateAppRequest.prototype.setApp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.UpdateAppRequest.prototype.clearApp = function() {
  this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.UpdateAppRequest.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.FieldMask update_mask = 2;
 * @return {?proto.google.protobuf.FieldMask}
 */
proto.controller.UpdateAppRequest.prototype.getUpdateMask = function() {
  return /** @type{?proto.google.protobuf.FieldMask} */ (
    jspb.Message.getWrapperField(this, google_protobuf_field_mask_pb.FieldMask, 2));
};


/** @param {?proto.google.protobuf.FieldMask|undefined} value */
proto.controller.UpdateAppRequest.prototype.setUpdateMask = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.UpdateAppRequest.prototype.clearUpdateMask = function() {
  this.setUpdateMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.UpdateAppRequest.prototype.hasUpdateMask = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListDeploymentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListDeploymentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListDeploymentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListDeploymentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filterType: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListDeploymentsRequest}
 */
proto.controller.ListDeploymentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListDeploymentsRequest;
  return proto.controller.ListDeploymentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListDeploymentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListDeploymentsRequest}
 */
proto.controller.ListDeploymentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 4:
      var value = /** @type {!proto.controller.ReleaseType} */ (reader.readEnum());
      msg.setFilterType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListDeploymentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListDeploymentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListDeploymentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListDeploymentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilterType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.controller.ListDeploymentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.controller.ListDeploymentsRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.controller.ListDeploymentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListDeploymentsRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent = 3;
 * @return {string}
 */
proto.controller.ListDeploymentsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.ListDeploymentsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ReleaseType filter_type = 4;
 * @return {!proto.controller.ReleaseType}
 */
proto.controller.ListDeploymentsRequest.prototype.getFilterType = function() {
  return /** @type {!proto.controller.ReleaseType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.controller.ReleaseType} value */
proto.controller.ListDeploymentsRequest.prototype.setFilterType = function(value) {
  jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.ListDeploymentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListDeploymentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListDeploymentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListDeploymentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListDeploymentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deploymentsList: jspb.Message.toObjectList(msg.getDeploymentsList(),
    proto.controller.ExpandedDeployment.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListDeploymentsResponse}
 */
proto.controller.ListDeploymentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListDeploymentsResponse;
  return proto.controller.ListDeploymentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListDeploymentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListDeploymentsResponse}
 */
proto.controller.ListDeploymentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.ExpandedDeployment;
      reader.readMessage(value,proto.controller.ExpandedDeployment.deserializeBinaryFromReader);
      msg.addDeployments(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListDeploymentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListDeploymentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListDeploymentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListDeploymentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeploymentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.controller.ExpandedDeployment.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ExpandedDeployment deployments = 1;
 * @return {!Array<!proto.controller.ExpandedDeployment>}
 */
proto.controller.ListDeploymentsResponse.prototype.getDeploymentsList = function() {
  return /** @type{!Array<!proto.controller.ExpandedDeployment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.ExpandedDeployment, 1));
};


/** @param {!Array<!proto.controller.ExpandedDeployment>} value */
proto.controller.ListDeploymentsResponse.prototype.setDeploymentsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.controller.ExpandedDeployment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.ExpandedDeployment}
 */
proto.controller.ListDeploymentsResponse.prototype.addDeployments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.controller.ExpandedDeployment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ListDeploymentsResponse.prototype.clearDeploymentsList = function() {
  this.setDeploymentsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.controller.ListDeploymentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListDeploymentsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListReleasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListReleasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListReleasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListReleasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filterLabelsMap: (f = msg.getFilterLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    filterType: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListReleasesRequest}
 */
proto.controller.ListReleasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListReleasesRequest;
  return proto.controller.ListReleasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListReleasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListReleasesRequest}
 */
proto.controller.ListReleasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 4:
      var value = msg.getFilterLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 5:
      var value = /** @type {!proto.controller.ReleaseType} */ (reader.readEnum());
      msg.setFilterType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListReleasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListReleasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListReleasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListReleasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilterLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getFilterType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.controller.ListReleasesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.controller.ListReleasesRequest.prototype.setPageSize = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string page_token = 2;
 * @return {string}
 */
proto.controller.ListReleasesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListReleasesRequest.prototype.setPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent = 3;
 * @return {string}
 */
proto.controller.ListReleasesRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.ListReleasesRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, string> filter_labels = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.ListReleasesRequest.prototype.getFilterLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ListReleasesRequest.prototype.clearFilterLabelsMap = function() {
  this.getFilterLabelsMap().clear();
};


/**
 * optional ReleaseType filter_type = 5;
 * @return {!proto.controller.ReleaseType}
 */
proto.controller.ListReleasesRequest.prototype.getFilterType = function() {
  return /** @type {!proto.controller.ReleaseType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.controller.ReleaseType} value */
proto.controller.ListReleasesRequest.prototype.setFilterType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.ListReleasesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListReleasesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListReleasesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListReleasesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListReleasesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    releasesList: jspb.Message.toObjectList(msg.getReleasesList(),
    proto.controller.Release.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListReleasesResponse}
 */
proto.controller.ListReleasesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListReleasesResponse;
  return proto.controller.ListReleasesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListReleasesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListReleasesResponse}
 */
proto.controller.ListReleasesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.addReleases(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListReleasesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListReleasesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListReleasesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListReleasesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReleasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Release releases = 1;
 * @return {!Array<!proto.controller.Release>}
 */
proto.controller.ListReleasesResponse.prototype.getReleasesList = function() {
  return /** @type{!Array<!proto.controller.Release>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.Release, 1));
};


/** @param {!Array<!proto.controller.Release>} value */
proto.controller.ListReleasesResponse.prototype.setReleasesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.controller.Release=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.Release}
 */
proto.controller.ListReleasesResponse.prototype.addReleases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.controller.Release, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ListReleasesResponse.prototype.clearReleasesList = function() {
  this.setReleasesList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.controller.ListReleasesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListReleasesResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.GetAppReleaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.GetAppReleaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.GetAppReleaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetAppReleaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.GetAppReleaseRequest}
 */
proto.controller.GetAppReleaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.GetAppReleaseRequest;
  return proto.controller.GetAppReleaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.GetAppReleaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.GetAppReleaseRequest}
 */
proto.controller.GetAppReleaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.GetAppReleaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.GetAppReleaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.GetAppReleaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetAppReleaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.GetAppReleaseRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.GetAppReleaseRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.CreateScaleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.CreateScaleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.CreateScaleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.CreateScaleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    processesMap: (f = msg.getProcessesMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, proto.controller.DeploymentProcessTags.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.CreateScaleRequest}
 */
proto.controller.CreateScaleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.CreateScaleRequest;
  return proto.controller.CreateScaleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.CreateScaleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.CreateScaleRequest}
 */
proto.controller.CreateScaleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = msg.getProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 3:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.DeploymentProcessTags.deserializeBinaryFromReader, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.CreateScaleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.CreateScaleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.CreateScaleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.CreateScaleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.DeploymentProcessTags.serializeBinaryToWriter);
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.CreateScaleRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.CreateScaleRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, int32> processes = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.controller.CreateScaleRequest.prototype.getProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.CreateScaleRequest.prototype.clearProcessesMap = function() {
  this.getProcessesMap().clear();
};


/**
 * map<string, DeploymentProcessTags> tags = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.DeploymentProcessTags>}
 */
proto.controller.CreateScaleRequest.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.DeploymentProcessTags>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.controller.DeploymentProcessTags));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.CreateScaleRequest.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListScaleRequestsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListScaleRequestsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListScaleRequestsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListScaleRequestsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListScaleRequestsRequest}
 */
proto.controller.ListScaleRequestsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListScaleRequestsRequest;
  return proto.controller.ListScaleRequestsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListScaleRequestsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListScaleRequestsRequest}
 */
proto.controller.ListScaleRequestsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListScaleRequestsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListScaleRequestsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListScaleRequestsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListScaleRequestsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.ListScaleRequestsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.ListScaleRequestsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.ListScaleRequestsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ListScaleRequestsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ListScaleRequestsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ListScaleRequestsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListScaleRequestsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    scaleRequestsList: jspb.Message.toObjectList(msg.getScaleRequestsList(),
    proto.controller.ScaleRequest.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ListScaleRequestsResponse}
 */
proto.controller.ListScaleRequestsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ListScaleRequestsResponse;
  return proto.controller.ListScaleRequestsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ListScaleRequestsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ListScaleRequestsResponse}
 */
proto.controller.ListScaleRequestsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.ScaleRequest;
      reader.readMessage(value,proto.controller.ScaleRequest.deserializeBinaryFromReader);
      msg.addScaleRequests(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ListScaleRequestsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ListScaleRequestsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ListScaleRequestsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ListScaleRequestsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScaleRequestsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.controller.ScaleRequest.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated ScaleRequest scale_requests = 1;
 * @return {!Array<!proto.controller.ScaleRequest>}
 */
proto.controller.ListScaleRequestsResponse.prototype.getScaleRequestsList = function() {
  return /** @type{!Array<!proto.controller.ScaleRequest>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.ScaleRequest, 1));
};


/** @param {!Array<!proto.controller.ScaleRequest>} value */
proto.controller.ListScaleRequestsResponse.prototype.setScaleRequestsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.controller.ScaleRequest=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.ScaleRequest}
 */
proto.controller.ListScaleRequestsResponse.prototype.addScaleRequests = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.controller.ScaleRequest, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ListScaleRequestsResponse.prototype.clearScaleRequestsList = function() {
  this.setScaleRequestsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.controller.ListScaleRequestsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ListScaleRequestsResponse.prototype.setNextPageToken = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ScaleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ScaleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ScaleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ScaleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    oldProcessesMap: (f = msg.getOldProcessesMap()) ? f.toObject(includeInstance, undefined) : [],
    newProcessesMap: (f = msg.getNewProcessesMap()) ? f.toObject(includeInstance, undefined) : [],
    oldTagsMap: (f = msg.getOldTagsMap()) ? f.toObject(includeInstance, proto.controller.DeploymentProcessTags.toObject) : [],
    newTagsMap: (f = msg.getNewTagsMap()) ? f.toObject(includeInstance, proto.controller.DeploymentProcessTags.toObject) : [],
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ScaleRequest}
 */
proto.controller.ScaleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ScaleRequest;
  return proto.controller.ScaleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ScaleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ScaleRequest}
 */
proto.controller.ScaleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.controller.ScaleRequestState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = msg.getOldProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 5:
      var value = msg.getNewProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 6:
      var value = msg.getOldTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.DeploymentProcessTags.deserializeBinaryFromReader, "");
         });
      break;
    case 7:
      var value = msg.getNewTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.DeploymentProcessTags.deserializeBinaryFromReader, "");
         });
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ScaleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ScaleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ScaleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ScaleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getOldProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getNewProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getOldTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.DeploymentProcessTags.serializeBinaryToWriter);
  }
  f = message.getNewTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.DeploymentProcessTags.serializeBinaryToWriter);
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.ScaleRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.ScaleRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.controller.ScaleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.ScaleRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ScaleRequestState state = 3;
 * @return {!proto.controller.ScaleRequestState}
 */
proto.controller.ScaleRequest.prototype.getState = function() {
  return /** @type {!proto.controller.ScaleRequestState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.controller.ScaleRequestState} value */
proto.controller.ScaleRequest.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * map<string, int32> old_processes = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.controller.ScaleRequest.prototype.getOldProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ScaleRequest.prototype.clearOldProcessesMap = function() {
  this.getOldProcessesMap().clear();
};


/**
 * map<string, int32> new_processes = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.controller.ScaleRequest.prototype.getNewProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ScaleRequest.prototype.clearNewProcessesMap = function() {
  this.getNewProcessesMap().clear();
};


/**
 * map<string, DeploymentProcessTags> old_tags = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.DeploymentProcessTags>}
 */
proto.controller.ScaleRequest.prototype.getOldTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.DeploymentProcessTags>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.controller.DeploymentProcessTags));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ScaleRequest.prototype.clearOldTagsMap = function() {
  this.getOldTagsMap().clear();
};


/**
 * map<string, DeploymentProcessTags> new_tags = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.DeploymentProcessTags>}
 */
proto.controller.ScaleRequest.prototype.getNewTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.DeploymentProcessTags>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      proto.controller.DeploymentProcessTags));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ScaleRequest.prototype.clearNewTagsMap = function() {
  this.getNewTagsMap().clear();
};


/**
 * optional google.protobuf.Timestamp create_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.ScaleRequest.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.ScaleRequest.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ScaleRequest.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ScaleRequest.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.ScaleRequest.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.ScaleRequest.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ScaleRequest.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ScaleRequest.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Formation.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Formation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Formation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Formation.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    processesMap: (f = msg.getProcessesMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, proto.controller.DeploymentProcessTags.toObject) : [],
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Formation}
 */
proto.controller.Formation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Formation;
  return proto.controller.Formation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Formation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Formation}
 */
proto.controller.Formation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {!proto.controller.ScaleRequestState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = msg.getProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 4:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.DeploymentProcessTags.deserializeBinaryFromReader, "");
         });
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Formation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Formation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Formation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Formation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.DeploymentProcessTags.serializeBinaryToWriter);
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.Formation.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Formation.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ScaleRequestState state = 2;
 * @return {!proto.controller.ScaleRequestState}
 */
proto.controller.Formation.prototype.getState = function() {
  return /** @type {!proto.controller.ScaleRequestState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.controller.ScaleRequestState} value */
proto.controller.Formation.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * map<string, int32> processes = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.controller.Formation.prototype.getProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Formation.prototype.clearProcessesMap = function() {
  this.getProcessesMap().clear();
};


/**
 * map<string, DeploymentProcessTags> tags = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.DeploymentProcessTags>}
 */
proto.controller.Formation.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.DeploymentProcessTags>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.controller.DeploymentProcessTags));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Formation.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Formation.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Formation.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Formation.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Formation.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Formation.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Formation.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Formation.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Formation.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.GetAppFormationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.GetAppFormationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.GetAppFormationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetAppFormationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.GetAppFormationRequest}
 */
proto.controller.GetAppFormationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.GetAppFormationRequest;
  return proto.controller.GetAppFormationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.GetAppFormationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.GetAppFormationRequest}
 */
proto.controller.GetAppFormationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.GetAppFormationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.GetAppFormationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.GetAppFormationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetAppFormationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.GetAppFormationRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.GetAppFormationRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.GetReleaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.GetReleaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.GetReleaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetReleaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.GetReleaseRequest}
 */
proto.controller.GetReleaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.GetReleaseRequest;
  return proto.controller.GetReleaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.GetReleaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.GetReleaseRequest}
 */
proto.controller.GetReleaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.GetReleaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.GetReleaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.GetReleaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.GetReleaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.GetReleaseRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.GetReleaseRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.StreamAppLogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.StreamAppLogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.StreamAppLogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.StreamAppLogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    opts: (f = msg.getOpts()) && proto.controller.LogAggregatorLogOpts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.StreamAppLogRequest}
 */
proto.controller.StreamAppLogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.StreamAppLogRequest;
  return proto.controller.StreamAppLogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.StreamAppLogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.StreamAppLogRequest}
 */
proto.controller.StreamAppLogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.controller.LogAggregatorLogOpts;
      reader.readMessage(value,proto.controller.LogAggregatorLogOpts.deserializeBinaryFromReader);
      msg.setOpts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.StreamAppLogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.StreamAppLogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.StreamAppLogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.StreamAppLogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOpts();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.controller.LogAggregatorLogOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.StreamAppLogRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.StreamAppLogRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LogAggregatorLogOpts opts = 2;
 * @return {?proto.controller.LogAggregatorLogOpts}
 */
proto.controller.StreamAppLogRequest.prototype.getOpts = function() {
  return /** @type{?proto.controller.LogAggregatorLogOpts} */ (
    jspb.Message.getWrapperField(this, proto.controller.LogAggregatorLogOpts, 2));
};


/** @param {?proto.controller.LogAggregatorLogOpts|undefined} value */
proto.controller.StreamAppLogRequest.prototype.setOpts = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.StreamAppLogRequest.prototype.clearOpts = function() {
  this.setOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.StreamAppLogRequest.prototype.hasOpts = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.CreateReleaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.CreateReleaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.CreateReleaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.CreateReleaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    release: (f = msg.getRelease()) && proto.controller.Release.toObject(includeInstance, f),
    requestId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.CreateReleaseRequest}
 */
proto.controller.CreateReleaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.CreateReleaseRequest;
  return proto.controller.CreateReleaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.CreateReleaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.CreateReleaseRequest}
 */
proto.controller.CreateReleaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.setRelease(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.CreateReleaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.CreateReleaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.CreateReleaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.CreateReleaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRelease();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.CreateReleaseRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.CreateReleaseRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Release release = 2;
 * @return {?proto.controller.Release}
 */
proto.controller.CreateReleaseRequest.prototype.getRelease = function() {
  return /** @type{?proto.controller.Release} */ (
    jspb.Message.getWrapperField(this, proto.controller.Release, 2));
};


/** @param {?proto.controller.Release|undefined} value */
proto.controller.CreateReleaseRequest.prototype.setRelease = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.CreateReleaseRequest.prototype.clearRelease = function() {
  this.setRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.CreateReleaseRequest.prototype.hasRelease = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string request_id = 3;
 * @return {string}
 */
proto.controller.CreateReleaseRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.CreateReleaseRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.CreateDeploymentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.CreateDeploymentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.CreateDeploymentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.CreateDeploymentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    release: jspb.Message.getFieldWithDefault(msg, 2, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    scaleRequest: (f = msg.getScaleRequest()) && proto.controller.CreateScaleRequest.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.CreateDeploymentRequest}
 */
proto.controller.CreateDeploymentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.CreateDeploymentRequest;
  return proto.controller.CreateDeploymentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.CreateDeploymentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.CreateDeploymentRequest}
 */
proto.controller.CreateDeploymentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelease(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestId(value);
      break;
    case 4:
      var value = new proto.controller.CreateScaleRequest;
      reader.readMessage(value,proto.controller.CreateScaleRequest.deserializeBinaryFromReader);
      msg.setScaleRequest(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.CreateDeploymentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.CreateDeploymentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.CreateDeploymentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.CreateDeploymentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRelease();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRequestId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getScaleRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.controller.CreateScaleRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.CreateDeploymentRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.CreateDeploymentRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string release = 2;
 * @return {string}
 */
proto.controller.CreateDeploymentRequest.prototype.getRelease = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.CreateDeploymentRequest.prototype.setRelease = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string request_id = 3;
 * @return {string}
 */
proto.controller.CreateDeploymentRequest.prototype.getRequestId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.CreateDeploymentRequest.prototype.setRequestId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional CreateScaleRequest scale_request = 4;
 * @return {?proto.controller.CreateScaleRequest}
 */
proto.controller.CreateDeploymentRequest.prototype.getScaleRequest = function() {
  return /** @type{?proto.controller.CreateScaleRequest} */ (
    jspb.Message.getWrapperField(this, proto.controller.CreateScaleRequest, 4));
};


/** @param {?proto.controller.CreateScaleRequest|undefined} value */
proto.controller.CreateDeploymentRequest.prototype.setScaleRequest = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.CreateDeploymentRequest.prototype.clearScaleRequest = function() {
  this.setScaleRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.CreateDeploymentRequest.prototype.hasScaleRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.StreamEventsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.StreamEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.StreamEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.StreamEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.StreamEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    objectTypesList: jspb.Message.getRepeatedField(msg, 2),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    past: jspb.Message.getFieldWithDefault(msg, 4, false),
    count: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.StreamEventsRequest}
 */
proto.controller.StreamEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.StreamEventsRequest;
  return proto.controller.StreamEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.StreamEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.StreamEventsRequest}
 */
proto.controller.StreamEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addObjectTypes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPast(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.StreamEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.StreamEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.StreamEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.StreamEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getObjectTypesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPast();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string parent = 1;
 * @return {string}
 */
proto.controller.StreamEventsRequest.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.StreamEventsRequest.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string object_types = 2;
 * @return {!Array<string>}
 */
proto.controller.StreamEventsRequest.prototype.getObjectTypesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.controller.StreamEventsRequest.prototype.setObjectTypesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.controller.StreamEventsRequest.prototype.addObjectTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.StreamEventsRequest.prototype.clearObjectTypesList = function() {
  this.setObjectTypesList([]);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.controller.StreamEventsRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.StreamEventsRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool past = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.StreamEventsRequest.prototype.getPast = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.controller.StreamEventsRequest.prototype.setPast = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 count = 5;
 * @return {number}
 */
proto.controller.StreamEventsRequest.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.controller.StreamEventsRequest.prototype.setCount = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.App.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.App.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.App} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.App.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deployTimeout: jspb.Message.getFieldWithDefault(msg, 6, 0),
    strategy: jspb.Message.getFieldWithDefault(msg, 7, ""),
    release: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.App}
 */
proto.controller.App.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.App;
  return proto.controller.App.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.App} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.App}
 */
proto.controller.App.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 3:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeployTimeout(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrategy(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRelease(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.App.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.App.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.App} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.App.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeployTimeout();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getStrategy();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRelease();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.App.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.App.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.controller.App.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.App.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> labels = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.App.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.App.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * optional google.protobuf.Timestamp create_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.App.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.App.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.App.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.App.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.App.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.App.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.App.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.App.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 deploy_timeout = 6;
 * @return {number}
 */
proto.controller.App.prototype.getDeployTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.controller.App.prototype.setDeployTimeout = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string strategy = 7;
 * @return {string}
 */
proto.controller.App.prototype.getStrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.controller.App.prototype.setStrategy = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string release = 8;
 * @return {string}
 */
proto.controller.App.prototype.getRelease = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.controller.App.prototype.setRelease = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.Release.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Release.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Release.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Release} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Release.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    artifactsList: jspb.Message.getRepeatedField(msg, 3),
    envMap: (f = msg.getEnvMap()) ? f.toObject(includeInstance, undefined) : [],
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    processesMap: (f = msg.getProcessesMap()) ? f.toObject(includeInstance, proto.controller.ProcessType.toObject) : [],
    type: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Release}
 */
proto.controller.Release.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Release;
  return proto.controller.Release.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Release} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Release}
 */
proto.controller.Release.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addArtifacts(value);
      break;
    case 4:
      var value = msg.getEnvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 5:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 6:
      var value = msg.getProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.ProcessType.deserializeBinaryFromReader, "");
         });
      break;
    case 7:
      var value = /** @type {!proto.controller.ReleaseType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Release.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Release.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Release} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Release.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getArtifactsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEnvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.ProcessType.serializeBinaryToWriter);
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.Release.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Release.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string artifacts = 3;
 * @return {!Array<string>}
 */
proto.controller.Release.prototype.getArtifactsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.controller.Release.prototype.setArtifactsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.controller.Release.prototype.addArtifacts = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.Release.prototype.clearArtifactsList = function() {
  this.setArtifactsList([]);
};


/**
 * map<string, string> env = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.Release.prototype.getEnvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Release.prototype.clearEnvMap = function() {
  this.getEnvMap().clear();
};


/**
 * map<string, string> labels = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.Release.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Release.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
};


/**
 * map<string, ProcessType> processes = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.ProcessType>}
 */
proto.controller.Release.prototype.getProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.ProcessType>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.controller.ProcessType));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Release.prototype.clearProcessesMap = function() {
  this.getProcessesMap().clear();
};


/**
 * optional ReleaseType type = 7;
 * @return {!proto.controller.ReleaseType}
 */
proto.controller.Release.prototype.getType = function() {
  return /** @type {!proto.controller.ReleaseType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.controller.ReleaseType} value */
proto.controller.Release.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Release.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Release.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Release.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Release.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.AppRelease.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.AppRelease.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.AppRelease} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.AppRelease.toObject = function(includeInstance, msg) {
  var f, obj = {
    prevRelease: (f = msg.getPrevRelease()) && proto.controller.Release.toObject(includeInstance, f),
    release: (f = msg.getRelease()) && proto.controller.Release.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.AppRelease}
 */
proto.controller.AppRelease.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.AppRelease;
  return proto.controller.AppRelease.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.AppRelease} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.AppRelease}
 */
proto.controller.AppRelease.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.setPrevRelease(value);
      break;
    case 2:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.setRelease(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.AppRelease.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.AppRelease.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.AppRelease} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.AppRelease.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrevRelease();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
  f = message.getRelease();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
};


/**
 * optional Release prev_release = 1;
 * @return {?proto.controller.Release}
 */
proto.controller.AppRelease.prototype.getPrevRelease = function() {
  return /** @type{?proto.controller.Release} */ (
    jspb.Message.getWrapperField(this, proto.controller.Release, 1));
};


/** @param {?proto.controller.Release|undefined} value */
proto.controller.AppRelease.prototype.setPrevRelease = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.AppRelease.prototype.clearPrevRelease = function() {
  this.setPrevRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.AppRelease.prototype.hasPrevRelease = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Release release = 2;
 * @return {?proto.controller.Release}
 */
proto.controller.AppRelease.prototype.getRelease = function() {
  return /** @type{?proto.controller.Release} */ (
    jspb.Message.getWrapperField(this, proto.controller.Release, 2));
};


/** @param {?proto.controller.Release|undefined} value */
proto.controller.AppRelease.prototype.setRelease = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.AppRelease.prototype.clearRelease = function() {
  this.setRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.AppRelease.prototype.hasRelease = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Deployment.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Deployment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Deployment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Deployment.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldRelease: jspb.Message.getFieldWithDefault(msg, 3, ""),
    newRelease: jspb.Message.getFieldWithDefault(msg, 4, ""),
    strategy: jspb.Message.getFieldWithDefault(msg, 5, ""),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0),
    processesMap: (f = msg.getProcessesMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, proto.controller.DeploymentProcessTags.toObject) : [],
    deployTimeout: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expireTime: (f = msg.getExpireTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Deployment}
 */
proto.controller.Deployment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Deployment;
  return proto.controller.Deployment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Deployment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Deployment}
 */
proto.controller.Deployment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldRelease(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewRelease(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrategy(value);
      break;
    case 6:
      var value = /** @type {!proto.controller.DeploymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 7:
      var value = msg.getProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 8:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.DeploymentProcessTags.deserializeBinaryFromReader, "");
         });
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeployTimeout(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireTime(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Deployment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Deployment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Deployment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Deployment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldRelease();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewRelease();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStrategy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.DeploymentProcessTags.serializeBinaryToWriter);
  }
  f = message.getDeployTimeout();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpireTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.Deployment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Deployment.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_release = 3;
 * @return {string}
 */
proto.controller.Deployment.prototype.getOldRelease = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.Deployment.prototype.setOldRelease = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string new_release = 4;
 * @return {string}
 */
proto.controller.Deployment.prototype.getNewRelease = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.Deployment.prototype.setNewRelease = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string strategy = 5;
 * @return {string}
 */
proto.controller.Deployment.prototype.getStrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.controller.Deployment.prototype.setStrategy = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional DeploymentStatus status = 6;
 * @return {!proto.controller.DeploymentStatus}
 */
proto.controller.Deployment.prototype.getStatus = function() {
  return /** @type {!proto.controller.DeploymentStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.controller.DeploymentStatus} value */
proto.controller.Deployment.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * map<string, int32> processes = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.controller.Deployment.prototype.getProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Deployment.prototype.clearProcessesMap = function() {
  this.getProcessesMap().clear();
};


/**
 * map<string, DeploymentProcessTags> tags = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.DeploymentProcessTags>}
 */
proto.controller.Deployment.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.DeploymentProcessTags>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      proto.controller.DeploymentProcessTags));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Deployment.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
};


/**
 * optional int32 deploy_timeout = 9;
 * @return {number}
 */
proto.controller.Deployment.prototype.getDeployTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.controller.Deployment.prototype.setDeployTimeout = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Deployment.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Deployment.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Deployment.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Deployment.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp expire_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Deployment.prototype.getExpireTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Deployment.prototype.setExpireTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Deployment.prototype.clearExpireTime = function() {
  this.setExpireTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Deployment.prototype.hasExpireTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Deployment.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Deployment.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Deployment.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Deployment.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 12) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ExpandedDeployment.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ExpandedDeployment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ExpandedDeployment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ExpandedDeployment.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldRelease: (f = msg.getOldRelease()) && proto.controller.Release.toObject(includeInstance, f),
    newRelease: (f = msg.getNewRelease()) && proto.controller.Release.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    strategy: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    processesMap: (f = msg.getProcessesMap()) ? f.toObject(includeInstance, undefined) : [],
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, proto.controller.DeploymentProcessTags.toObject) : [],
    deployTimeout: jspb.Message.getFieldWithDefault(msg, 10, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expireTime: (f = msg.getExpireTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ExpandedDeployment}
 */
proto.controller.ExpandedDeployment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ExpandedDeployment;
  return proto.controller.ExpandedDeployment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ExpandedDeployment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ExpandedDeployment}
 */
proto.controller.ExpandedDeployment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.setOldRelease(value);
      break;
    case 4:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.setNewRelease(value);
      break;
    case 5:
      var value = /** @type {!proto.controller.ReleaseType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrategy(value);
      break;
    case 7:
      var value = /** @type {!proto.controller.DeploymentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = msg.getProcessesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "");
         });
      break;
    case 9:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.DeploymentProcessTags.deserializeBinaryFromReader, "");
         });
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeployTimeout(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpireTime(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ExpandedDeployment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ExpandedDeployment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ExpandedDeployment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ExpandedDeployment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldRelease();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
  f = message.getNewRelease();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStrategy();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getProcessesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(8, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(9, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.DeploymentProcessTags.serializeBinaryToWriter);
  }
  f = message.getDeployTimeout();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpireTime();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.ExpandedDeployment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.ExpandedDeployment.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Release old_release = 3;
 * @return {?proto.controller.Release}
 */
proto.controller.ExpandedDeployment.prototype.getOldRelease = function() {
  return /** @type{?proto.controller.Release} */ (
    jspb.Message.getWrapperField(this, proto.controller.Release, 3));
};


/** @param {?proto.controller.Release|undefined} value */
proto.controller.ExpandedDeployment.prototype.setOldRelease = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ExpandedDeployment.prototype.clearOldRelease = function() {
  this.setOldRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ExpandedDeployment.prototype.hasOldRelease = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Release new_release = 4;
 * @return {?proto.controller.Release}
 */
proto.controller.ExpandedDeployment.prototype.getNewRelease = function() {
  return /** @type{?proto.controller.Release} */ (
    jspb.Message.getWrapperField(this, proto.controller.Release, 4));
};


/** @param {?proto.controller.Release|undefined} value */
proto.controller.ExpandedDeployment.prototype.setNewRelease = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ExpandedDeployment.prototype.clearNewRelease = function() {
  this.setNewRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ExpandedDeployment.prototype.hasNewRelease = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReleaseType type = 5;
 * @return {!proto.controller.ReleaseType}
 */
proto.controller.ExpandedDeployment.prototype.getType = function() {
  return /** @type {!proto.controller.ReleaseType} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.controller.ReleaseType} value */
proto.controller.ExpandedDeployment.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string strategy = 6;
 * @return {string}
 */
proto.controller.ExpandedDeployment.prototype.getStrategy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.controller.ExpandedDeployment.prototype.setStrategy = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional DeploymentStatus status = 7;
 * @return {!proto.controller.DeploymentStatus}
 */
proto.controller.ExpandedDeployment.prototype.getStatus = function() {
  return /** @type {!proto.controller.DeploymentStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.controller.DeploymentStatus} value */
proto.controller.ExpandedDeployment.prototype.setStatus = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * map<string, int32> processes = 8;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.controller.ExpandedDeployment.prototype.getProcessesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 8, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ExpandedDeployment.prototype.clearProcessesMap = function() {
  this.getProcessesMap().clear();
};


/**
 * map<string, DeploymentProcessTags> tags = 9;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.DeploymentProcessTags>}
 */
proto.controller.ExpandedDeployment.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.DeploymentProcessTags>} */ (
      jspb.Message.getMapField(this, 9, opt_noLazyCreate,
      proto.controller.DeploymentProcessTags));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ExpandedDeployment.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
};


/**
 * optional int32 deploy_timeout = 10;
 * @return {number}
 */
proto.controller.ExpandedDeployment.prototype.getDeployTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.controller.ExpandedDeployment.prototype.setDeployTimeout = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.ExpandedDeployment.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.ExpandedDeployment.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ExpandedDeployment.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ExpandedDeployment.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp expire_time = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.ExpandedDeployment.prototype.getExpireTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.ExpandedDeployment.prototype.setExpireTime = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ExpandedDeployment.prototype.clearExpireTime = function() {
  this.setExpireTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ExpandedDeployment.prototype.hasExpireTime = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.ExpandedDeployment.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.ExpandedDeployment.prototype.setEndTime = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.ExpandedDeployment.prototype.clearEndTime = function() {
  this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.ExpandedDeployment.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 13) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.DeploymentProcessTags.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.DeploymentProcessTags.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.DeploymentProcessTags} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.DeploymentProcessTags.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsMap: (f = msg.getTagsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.DeploymentProcessTags}
 */
proto.controller.DeploymentProcessTags.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.DeploymentProcessTags;
  return proto.controller.DeploymentProcessTags.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.DeploymentProcessTags} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.DeploymentProcessTags}
 */
proto.controller.DeploymentProcessTags.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getTagsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.DeploymentProcessTags.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.DeploymentProcessTags.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.DeploymentProcessTags} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.DeploymentProcessTags.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * map<string, string> tags = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.DeploymentProcessTags.prototype.getTagsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.DeploymentProcessTags.prototype.clearTagsMap = function() {
  this.getTagsMap().clear();
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.Certificate.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Certificate.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Certificate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Certificate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Certificate.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    routesList: jspb.Message.getRepeatedField(msg, 2),
    cert: jspb.Message.getFieldWithDefault(msg, 3, ""),
    key: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Certificate}
 */
proto.controller.Certificate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Certificate;
  return proto.controller.Certificate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Certificate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Certificate}
 */
proto.controller.Certificate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoutes(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCert(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Certificate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Certificate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Certificate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Certificate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getCert();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.Certificate.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Certificate.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string routes = 2;
 * @return {!Array<string>}
 */
proto.controller.Certificate.prototype.getRoutesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.controller.Certificate.prototype.setRoutesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.controller.Certificate.prototype.addRoutes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.Certificate.prototype.clearRoutesList = function() {
  this.setRoutesList([]);
};


/**
 * optional string cert = 3;
 * @return {string}
 */
proto.controller.Certificate.prototype.getCert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.Certificate.prototype.setCert = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.controller.Certificate.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.Certificate.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Certificate.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Certificate.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Certificate.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Certificate.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Certificate.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Certificate.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Certificate.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Certificate.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Route.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Route.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Route} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Route.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    serviceName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    port: jspb.Message.getFieldWithDefault(msg, 5, 0),
    leader: jspb.Message.getFieldWithDefault(msg, 6, false),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updateTime: (f = msg.getUpdateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    domain: jspb.Message.getFieldWithDefault(msg, 9, ""),
    certificate: (f = msg.getCertificate()) && proto.controller.Certificate.toObject(includeInstance, f),
    sticky: jspb.Message.getFieldWithDefault(msg, 11, false),
    path: jspb.Message.getFieldWithDefault(msg, 12, ""),
    drainBackends: jspb.Message.getFieldWithDefault(msg, 13, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Route}
 */
proto.controller.Route.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Route;
  return proto.controller.Route.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Route} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Route}
 */
proto.controller.Route.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {!proto.controller.Route.RouteType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLeader(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdateTime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDomain(value);
      break;
    case 10:
      var value = new proto.controller.Certificate;
      reader.readMessage(value,proto.controller.Certificate.deserializeBinaryFromReader);
      msg.setCertificate(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSticky(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDrainBackends(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Route.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Route.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Route} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Route.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getServiceName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLeader();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdateTime();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDomain();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCertificate();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.controller.Certificate.serializeBinaryToWriter
    );
  }
  f = message.getSticky();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDrainBackends();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.controller.Route.RouteType = {
  HTTP: 0,
  TCP: 1
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.Route.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Route.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.controller.Route.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.Route.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RouteType type = 3;
 * @return {!proto.controller.Route.RouteType}
 */
proto.controller.Route.prototype.getType = function() {
  return /** @type {!proto.controller.Route.RouteType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.controller.Route.RouteType} value */
proto.controller.Route.prototype.setType = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string service_name = 4;
 * @return {string}
 */
proto.controller.Route.prototype.getServiceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.Route.prototype.setServiceName = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 port = 5;
 * @return {number}
 */
proto.controller.Route.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.controller.Route.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool leader = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.Route.prototype.getLeader = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.controller.Route.prototype.setLeader = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Route.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Route.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Route.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Route.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp update_time = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Route.prototype.getUpdateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Route.prototype.setUpdateTime = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Route.prototype.clearUpdateTime = function() {
  this.setUpdateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Route.prototype.hasUpdateTime = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string domain = 9;
 * @return {string}
 */
proto.controller.Route.prototype.getDomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.controller.Route.prototype.setDomain = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional Certificate certificate = 10;
 * @return {?proto.controller.Certificate}
 */
proto.controller.Route.prototype.getCertificate = function() {
  return /** @type{?proto.controller.Certificate} */ (
    jspb.Message.getWrapperField(this, proto.controller.Certificate, 10));
};


/** @param {?proto.controller.Certificate|undefined} value */
proto.controller.Route.prototype.setCertificate = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Route.prototype.clearCertificate = function() {
  this.setCertificate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Route.prototype.hasCertificate = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool sticky = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.Route.prototype.getSticky = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.controller.Route.prototype.setSticky = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string path = 12;
 * @return {string}
 */
proto.controller.Route.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/** @param {string} value */
proto.controller.Route.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional bool drain_backends = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.Route.prototype.getDrainBackends = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.controller.Route.prototype.setDrainBackends = function(value) {
  jspb.Message.setProto3BooleanField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.Resource.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Resource.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Resource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Resource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Resource.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    externalId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    envMap: (f = msg.getEnvMap()) ? f.toObject(includeInstance, undefined) : [],
    appsList: jspb.Message.getRepeatedField(msg, 4),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Resource}
 */
proto.controller.Resource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Resource;
  return proto.controller.Resource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Resource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Resource}
 */
proto.controller.Resource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalId(value);
      break;
    case 3:
      var value = msg.getEnvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addApps(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Resource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Resource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Resource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Resource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExternalId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEnvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.Resource.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Resource.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string external_id = 2;
 * @return {string}
 */
proto.controller.Resource.prototype.getExternalId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.Resource.prototype.setExternalId = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> env = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.Resource.prototype.getEnvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.Resource.prototype.clearEnvMap = function() {
  this.getEnvMap().clear();
};


/**
 * repeated string apps = 4;
 * @return {!Array<string>}
 */
proto.controller.Resource.prototype.getAppsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.controller.Resource.prototype.setAppsList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.controller.Resource.prototype.addApps = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.Resource.prototype.clearAppsList = function() {
  this.setAppsList([]);
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Resource.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Resource.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Resource.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Resource.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Job.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Job.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Job} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Job.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Job}
 */
proto.controller.Job.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Job;
  return proto.controller.Job.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Job}
 */
proto.controller.Job.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Job.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Job} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Job.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Event.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Event.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Event} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Event.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    error: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    app: (f = msg.getApp()) && proto.controller.App.toObject(includeInstance, f),
    appDeletion: (f = msg.getAppDeletion()) && proto.controller.AppDeletion.toObject(includeInstance, f),
    appRelease: (f = msg.getAppRelease()) && proto.controller.AppRelease.toObject(includeInstance, f),
    deploymentEvent: (f = msg.getDeploymentEvent()) && proto.controller.DeploymentEvent.toObject(includeInstance, f),
    job: (f = msg.getJob()) && proto.controller.Job.toObject(includeInstance, f),
    scaleRequest: (f = msg.getScaleRequest()) && proto.controller.ScaleRequest.toObject(includeInstance, f),
    release: (f = msg.getRelease()) && proto.controller.Release.toObject(includeInstance, f),
    releaseDeletion: (f = msg.getReleaseDeletion()) && proto.controller.ReleaseDeletion.toObject(includeInstance, f),
    artifact: (f = msg.getArtifact()) && proto.controller.Artifact.toObject(includeInstance, f),
    provider: (f = msg.getProvider()) && proto.controller.Provider.toObject(includeInstance, f),
    resource: (f = msg.getResource()) && proto.controller.Resource.toObject(includeInstance, f),
    resourceDeletion: (f = msg.getResourceDeletion()) && proto.controller.ResourceDeletion.toObject(includeInstance, f),
    resourceAppDeletion: (f = msg.getResourceAppDeletion()) && proto.controller.ResourceAppDeletion.toObject(includeInstance, f),
    route: (f = msg.getRoute()) && proto.controller.Route.toObject(includeInstance, f),
    routeDeletion: (f = msg.getRouteDeletion()) && proto.controller.RouteDeletion.toObject(includeInstance, f),
    domainMigration: (f = msg.getDomainMigration()) && proto.controller.DomainMigration.toObject(includeInstance, f),
    clusterBackup: (f = msg.getClusterBackup()) && proto.controller.ClusterBackup.toObject(includeInstance, f),
    appGarbageCollection: (f = msg.getAppGarbageCollection()) && proto.controller.AppGarbageCollection.toObject(includeInstance, f),
    sink: (f = msg.getSink()) && proto.controller.Sink.toObject(includeInstance, f),
    sinkDeletion: (f = msg.getSinkDeletion()) && proto.controller.SinkDeletion.toObject(includeInstance, f),
    volume: (f = msg.getVolume()) && proto.controller.Volume.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Event}
 */
proto.controller.Event.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Event;
  return proto.controller.Event.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Event} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Event}
 */
proto.controller.Event.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    case 6:
      var value = new proto.controller.App;
      reader.readMessage(value,proto.controller.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 7:
      var value = new proto.controller.AppDeletion;
      reader.readMessage(value,proto.controller.AppDeletion.deserializeBinaryFromReader);
      msg.setAppDeletion(value);
      break;
    case 8:
      var value = new proto.controller.AppRelease;
      reader.readMessage(value,proto.controller.AppRelease.deserializeBinaryFromReader);
      msg.setAppRelease(value);
      break;
    case 9:
      var value = new proto.controller.DeploymentEvent;
      reader.readMessage(value,proto.controller.DeploymentEvent.deserializeBinaryFromReader);
      msg.setDeploymentEvent(value);
      break;
    case 10:
      var value = new proto.controller.Job;
      reader.readMessage(value,proto.controller.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    case 11:
      var value = new proto.controller.ScaleRequest;
      reader.readMessage(value,proto.controller.ScaleRequest.deserializeBinaryFromReader);
      msg.setScaleRequest(value);
      break;
    case 12:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.setRelease(value);
      break;
    case 13:
      var value = new proto.controller.ReleaseDeletion;
      reader.readMessage(value,proto.controller.ReleaseDeletion.deserializeBinaryFromReader);
      msg.setReleaseDeletion(value);
      break;
    case 14:
      var value = new proto.controller.Artifact;
      reader.readMessage(value,proto.controller.Artifact.deserializeBinaryFromReader);
      msg.setArtifact(value);
      break;
    case 15:
      var value = new proto.controller.Provider;
      reader.readMessage(value,proto.controller.Provider.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 16:
      var value = new proto.controller.Resource;
      reader.readMessage(value,proto.controller.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 17:
      var value = new proto.controller.ResourceDeletion;
      reader.readMessage(value,proto.controller.ResourceDeletion.deserializeBinaryFromReader);
      msg.setResourceDeletion(value);
      break;
    case 18:
      var value = new proto.controller.ResourceAppDeletion;
      reader.readMessage(value,proto.controller.ResourceAppDeletion.deserializeBinaryFromReader);
      msg.setResourceAppDeletion(value);
      break;
    case 19:
      var value = new proto.controller.Route;
      reader.readMessage(value,proto.controller.Route.deserializeBinaryFromReader);
      msg.setRoute(value);
      break;
    case 20:
      var value = new proto.controller.RouteDeletion;
      reader.readMessage(value,proto.controller.RouteDeletion.deserializeBinaryFromReader);
      msg.setRouteDeletion(value);
      break;
    case 21:
      var value = new proto.controller.DomainMigration;
      reader.readMessage(value,proto.controller.DomainMigration.deserializeBinaryFromReader);
      msg.setDomainMigration(value);
      break;
    case 22:
      var value = new proto.controller.ClusterBackup;
      reader.readMessage(value,proto.controller.ClusterBackup.deserializeBinaryFromReader);
      msg.setClusterBackup(value);
      break;
    case 23:
      var value = new proto.controller.AppGarbageCollection;
      reader.readMessage(value,proto.controller.AppGarbageCollection.deserializeBinaryFromReader);
      msg.setAppGarbageCollection(value);
      break;
    case 24:
      var value = new proto.controller.Sink;
      reader.readMessage(value,proto.controller.Sink.deserializeBinaryFromReader);
      msg.setSink(value);
      break;
    case 25:
      var value = new proto.controller.SinkDeletion;
      reader.readMessage(value,proto.controller.SinkDeletion.deserializeBinaryFromReader);
      msg.setSinkDeletion(value);
      break;
    case 26:
      var value = new proto.controller.Volume;
      reader.readMessage(value,proto.controller.Volume.deserializeBinaryFromReader);
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Event.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Event.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Event} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Event.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.controller.App.serializeBinaryToWriter
    );
  }
  f = message.getAppDeletion();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.controller.AppDeletion.serializeBinaryToWriter
    );
  }
  f = message.getAppRelease();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.controller.AppRelease.serializeBinaryToWriter
    );
  }
  f = message.getDeploymentEvent();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.controller.DeploymentEvent.serializeBinaryToWriter
    );
  }
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.controller.Job.serializeBinaryToWriter
    );
  }
  f = message.getScaleRequest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.controller.ScaleRequest.serializeBinaryToWriter
    );
  }
  f = message.getRelease();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
  f = message.getReleaseDeletion();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.controller.ReleaseDeletion.serializeBinaryToWriter
    );
  }
  f = message.getArtifact();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.controller.Artifact.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.controller.Provider.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.controller.Resource.serializeBinaryToWriter
    );
  }
  f = message.getResourceDeletion();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.controller.ResourceDeletion.serializeBinaryToWriter
    );
  }
  f = message.getResourceAppDeletion();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.controller.ResourceAppDeletion.serializeBinaryToWriter
    );
  }
  f = message.getRoute();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.controller.Route.serializeBinaryToWriter
    );
  }
  f = message.getRouteDeletion();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.controller.RouteDeletion.serializeBinaryToWriter
    );
  }
  f = message.getDomainMigration();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.controller.DomainMigration.serializeBinaryToWriter
    );
  }
  f = message.getClusterBackup();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.controller.ClusterBackup.serializeBinaryToWriter
    );
  }
  f = message.getAppGarbageCollection();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.controller.AppGarbageCollection.serializeBinaryToWriter
    );
  }
  f = message.getSink();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.controller.Sink.serializeBinaryToWriter
    );
  }
  f = message.getSinkDeletion();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.controller.SinkDeletion.serializeBinaryToWriter
    );
  }
  f = message.getVolume();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.controller.Volume.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.Event.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.Event.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string parent = 2;
 * @return {string}
 */
proto.controller.Event.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.Event.prototype.setParent = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.controller.Event.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.Event.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string error = 4;
 * @return {string}
 */
proto.controller.Event.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.Event.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.Event.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.Event.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional App app = 6;
 * @return {?proto.controller.App}
 */
proto.controller.Event.prototype.getApp = function() {
  return /** @type{?proto.controller.App} */ (
    jspb.Message.getWrapperField(this, proto.controller.App, 6));
};


/** @param {?proto.controller.App|undefined} value */
proto.controller.Event.prototype.setApp = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearApp = function() {
  this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasApp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AppDeletion app_deletion = 7;
 * @return {?proto.controller.AppDeletion}
 */
proto.controller.Event.prototype.getAppDeletion = function() {
  return /** @type{?proto.controller.AppDeletion} */ (
    jspb.Message.getWrapperField(this, proto.controller.AppDeletion, 7));
};


/** @param {?proto.controller.AppDeletion|undefined} value */
proto.controller.Event.prototype.setAppDeletion = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearAppDeletion = function() {
  this.setAppDeletion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasAppDeletion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AppRelease app_release = 8;
 * @return {?proto.controller.AppRelease}
 */
proto.controller.Event.prototype.getAppRelease = function() {
  return /** @type{?proto.controller.AppRelease} */ (
    jspb.Message.getWrapperField(this, proto.controller.AppRelease, 8));
};


/** @param {?proto.controller.AppRelease|undefined} value */
proto.controller.Event.prototype.setAppRelease = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearAppRelease = function() {
  this.setAppRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasAppRelease = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional DeploymentEvent deployment_event = 9;
 * @return {?proto.controller.DeploymentEvent}
 */
proto.controller.Event.prototype.getDeploymentEvent = function() {
  return /** @type{?proto.controller.DeploymentEvent} */ (
    jspb.Message.getWrapperField(this, proto.controller.DeploymentEvent, 9));
};


/** @param {?proto.controller.DeploymentEvent|undefined} value */
proto.controller.Event.prototype.setDeploymentEvent = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearDeploymentEvent = function() {
  this.setDeploymentEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasDeploymentEvent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Job job = 10;
 * @return {?proto.controller.Job}
 */
proto.controller.Event.prototype.getJob = function() {
  return /** @type{?proto.controller.Job} */ (
    jspb.Message.getWrapperField(this, proto.controller.Job, 10));
};


/** @param {?proto.controller.Job|undefined} value */
proto.controller.Event.prototype.setJob = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearJob = function() {
  this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasJob = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ScaleRequest scale_request = 11;
 * @return {?proto.controller.ScaleRequest}
 */
proto.controller.Event.prototype.getScaleRequest = function() {
  return /** @type{?proto.controller.ScaleRequest} */ (
    jspb.Message.getWrapperField(this, proto.controller.ScaleRequest, 11));
};


/** @param {?proto.controller.ScaleRequest|undefined} value */
proto.controller.Event.prototype.setScaleRequest = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearScaleRequest = function() {
  this.setScaleRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasScaleRequest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Release release = 12;
 * @return {?proto.controller.Release}
 */
proto.controller.Event.prototype.getRelease = function() {
  return /** @type{?proto.controller.Release} */ (
    jspb.Message.getWrapperField(this, proto.controller.Release, 12));
};


/** @param {?proto.controller.Release|undefined} value */
proto.controller.Event.prototype.setRelease = function(value) {
  jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearRelease = function() {
  this.setRelease(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasRelease = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ReleaseDeletion release_deletion = 13;
 * @return {?proto.controller.ReleaseDeletion}
 */
proto.controller.Event.prototype.getReleaseDeletion = function() {
  return /** @type{?proto.controller.ReleaseDeletion} */ (
    jspb.Message.getWrapperField(this, proto.controller.ReleaseDeletion, 13));
};


/** @param {?proto.controller.ReleaseDeletion|undefined} value */
proto.controller.Event.prototype.setReleaseDeletion = function(value) {
  jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearReleaseDeletion = function() {
  this.setReleaseDeletion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasReleaseDeletion = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Artifact artifact = 14;
 * @return {?proto.controller.Artifact}
 */
proto.controller.Event.prototype.getArtifact = function() {
  return /** @type{?proto.controller.Artifact} */ (
    jspb.Message.getWrapperField(this, proto.controller.Artifact, 14));
};


/** @param {?proto.controller.Artifact|undefined} value */
proto.controller.Event.prototype.setArtifact = function(value) {
  jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearArtifact = function() {
  this.setArtifact(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasArtifact = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Provider provider = 15;
 * @return {?proto.controller.Provider}
 */
proto.controller.Event.prototype.getProvider = function() {
  return /** @type{?proto.controller.Provider} */ (
    jspb.Message.getWrapperField(this, proto.controller.Provider, 15));
};


/** @param {?proto.controller.Provider|undefined} value */
proto.controller.Event.prototype.setProvider = function(value) {
  jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearProvider = function() {
  this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Resource resource = 16;
 * @return {?proto.controller.Resource}
 */
proto.controller.Event.prototype.getResource = function() {
  return /** @type{?proto.controller.Resource} */ (
    jspb.Message.getWrapperField(this, proto.controller.Resource, 16));
};


/** @param {?proto.controller.Resource|undefined} value */
proto.controller.Event.prototype.setResource = function(value) {
  jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearResource = function() {
  this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasResource = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ResourceDeletion resource_deletion = 17;
 * @return {?proto.controller.ResourceDeletion}
 */
proto.controller.Event.prototype.getResourceDeletion = function() {
  return /** @type{?proto.controller.ResourceDeletion} */ (
    jspb.Message.getWrapperField(this, proto.controller.ResourceDeletion, 17));
};


/** @param {?proto.controller.ResourceDeletion|undefined} value */
proto.controller.Event.prototype.setResourceDeletion = function(value) {
  jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearResourceDeletion = function() {
  this.setResourceDeletion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasResourceDeletion = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ResourceAppDeletion resource_app_deletion = 18;
 * @return {?proto.controller.ResourceAppDeletion}
 */
proto.controller.Event.prototype.getResourceAppDeletion = function() {
  return /** @type{?proto.controller.ResourceAppDeletion} */ (
    jspb.Message.getWrapperField(this, proto.controller.ResourceAppDeletion, 18));
};


/** @param {?proto.controller.ResourceAppDeletion|undefined} value */
proto.controller.Event.prototype.setResourceAppDeletion = function(value) {
  jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearResourceAppDeletion = function() {
  this.setResourceAppDeletion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasResourceAppDeletion = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Route route = 19;
 * @return {?proto.controller.Route}
 */
proto.controller.Event.prototype.getRoute = function() {
  return /** @type{?proto.controller.Route} */ (
    jspb.Message.getWrapperField(this, proto.controller.Route, 19));
};


/** @param {?proto.controller.Route|undefined} value */
proto.controller.Event.prototype.setRoute = function(value) {
  jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearRoute = function() {
  this.setRoute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasRoute = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional RouteDeletion route_deletion = 20;
 * @return {?proto.controller.RouteDeletion}
 */
proto.controller.Event.prototype.getRouteDeletion = function() {
  return /** @type{?proto.controller.RouteDeletion} */ (
    jspb.Message.getWrapperField(this, proto.controller.RouteDeletion, 20));
};


/** @param {?proto.controller.RouteDeletion|undefined} value */
proto.controller.Event.prototype.setRouteDeletion = function(value) {
  jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearRouteDeletion = function() {
  this.setRouteDeletion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasRouteDeletion = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional DomainMigration domain_migration = 21;
 * @return {?proto.controller.DomainMigration}
 */
proto.controller.Event.prototype.getDomainMigration = function() {
  return /** @type{?proto.controller.DomainMigration} */ (
    jspb.Message.getWrapperField(this, proto.controller.DomainMigration, 21));
};


/** @param {?proto.controller.DomainMigration|undefined} value */
proto.controller.Event.prototype.setDomainMigration = function(value) {
  jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearDomainMigration = function() {
  this.setDomainMigration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasDomainMigration = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ClusterBackup cluster_backup = 22;
 * @return {?proto.controller.ClusterBackup}
 */
proto.controller.Event.prototype.getClusterBackup = function() {
  return /** @type{?proto.controller.ClusterBackup} */ (
    jspb.Message.getWrapperField(this, proto.controller.ClusterBackup, 22));
};


/** @param {?proto.controller.ClusterBackup|undefined} value */
proto.controller.Event.prototype.setClusterBackup = function(value) {
  jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearClusterBackup = function() {
  this.setClusterBackup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasClusterBackup = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional AppGarbageCollection app_garbage_collection = 23;
 * @return {?proto.controller.AppGarbageCollection}
 */
proto.controller.Event.prototype.getAppGarbageCollection = function() {
  return /** @type{?proto.controller.AppGarbageCollection} */ (
    jspb.Message.getWrapperField(this, proto.controller.AppGarbageCollection, 23));
};


/** @param {?proto.controller.AppGarbageCollection|undefined} value */
proto.controller.Event.prototype.setAppGarbageCollection = function(value) {
  jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearAppGarbageCollection = function() {
  this.setAppGarbageCollection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasAppGarbageCollection = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Sink sink = 24;
 * @return {?proto.controller.Sink}
 */
proto.controller.Event.prototype.getSink = function() {
  return /** @type{?proto.controller.Sink} */ (
    jspb.Message.getWrapperField(this, proto.controller.Sink, 24));
};


/** @param {?proto.controller.Sink|undefined} value */
proto.controller.Event.prototype.setSink = function(value) {
  jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearSink = function() {
  this.setSink(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasSink = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional SinkDeletion sink_deletion = 25;
 * @return {?proto.controller.SinkDeletion}
 */
proto.controller.Event.prototype.getSinkDeletion = function() {
  return /** @type{?proto.controller.SinkDeletion} */ (
    jspb.Message.getWrapperField(this, proto.controller.SinkDeletion, 25));
};


/** @param {?proto.controller.SinkDeletion|undefined} value */
proto.controller.Event.prototype.setSinkDeletion = function(value) {
  jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearSinkDeletion = function() {
  this.setSinkDeletion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasSinkDeletion = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Volume volume = 26;
 * @return {?proto.controller.Volume}
 */
proto.controller.Event.prototype.getVolume = function() {
  return /** @type{?proto.controller.Volume} */ (
    jspb.Message.getWrapperField(this, proto.controller.Volume, 26));
};


/** @param {?proto.controller.Volume|undefined} value */
proto.controller.Event.prototype.setVolume = function(value) {
  jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Event.prototype.clearVolume = function() {
  this.setVolume(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Event.prototype.hasVolume = function() {
  return jspb.Message.getField(this, 26) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.AppDeletion.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.AppDeletion.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.AppDeletion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.AppDeletion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.AppDeletion.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deletedRoutesList: jspb.Message.toObjectList(msg.getDeletedRoutesList(),
    proto.controller.Route.toObject, includeInstance),
    deletedResourcesList: jspb.Message.toObjectList(msg.getDeletedResourcesList(),
    proto.controller.Resource.toObject, includeInstance),
    deletedReleasesList: jspb.Message.toObjectList(msg.getDeletedReleasesList(),
    proto.controller.Release.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.AppDeletion}
 */
proto.controller.AppDeletion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.AppDeletion;
  return proto.controller.AppDeletion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.AppDeletion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.AppDeletion}
 */
proto.controller.AppDeletion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.controller.Route;
      reader.readMessage(value,proto.controller.Route.deserializeBinaryFromReader);
      msg.addDeletedRoutes(value);
      break;
    case 3:
      var value = new proto.controller.Resource;
      reader.readMessage(value,proto.controller.Resource.deserializeBinaryFromReader);
      msg.addDeletedResources(value);
      break;
    case 4:
      var value = new proto.controller.Release;
      reader.readMessage(value,proto.controller.Release.deserializeBinaryFromReader);
      msg.addDeletedReleases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.AppDeletion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.AppDeletion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.AppDeletion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.AppDeletion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeletedRoutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.controller.Route.serializeBinaryToWriter
    );
  }
  f = message.getDeletedResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.controller.Resource.serializeBinaryToWriter
    );
  }
  f = message.getDeletedReleasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.controller.Release.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.controller.AppDeletion.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.AppDeletion.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Route deleted_routes = 2;
 * @return {!Array<!proto.controller.Route>}
 */
proto.controller.AppDeletion.prototype.getDeletedRoutesList = function() {
  return /** @type{!Array<!proto.controller.Route>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.Route, 2));
};


/** @param {!Array<!proto.controller.Route>} value */
proto.controller.AppDeletion.prototype.setDeletedRoutesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.controller.Route=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.Route}
 */
proto.controller.AppDeletion.prototype.addDeletedRoutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.controller.Route, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.AppDeletion.prototype.clearDeletedRoutesList = function() {
  this.setDeletedRoutesList([]);
};


/**
 * repeated Resource deleted_resources = 3;
 * @return {!Array<!proto.controller.Resource>}
 */
proto.controller.AppDeletion.prototype.getDeletedResourcesList = function() {
  return /** @type{!Array<!proto.controller.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.Resource, 3));
};


/** @param {!Array<!proto.controller.Resource>} value */
proto.controller.AppDeletion.prototype.setDeletedResourcesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.controller.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.Resource}
 */
proto.controller.AppDeletion.prototype.addDeletedResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.controller.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.AppDeletion.prototype.clearDeletedResourcesList = function() {
  this.setDeletedResourcesList([]);
};


/**
 * repeated Release deleted_releases = 4;
 * @return {!Array<!proto.controller.Release>}
 */
proto.controller.AppDeletion.prototype.getDeletedReleasesList = function() {
  return /** @type{!Array<!proto.controller.Release>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.Release, 4));
};


/** @param {!Array<!proto.controller.Release>} value */
proto.controller.AppDeletion.prototype.setDeletedReleasesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.controller.Release=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.Release}
 */
proto.controller.AppDeletion.prototype.addDeletedReleases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.controller.Release, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.AppDeletion.prototype.clearDeletedReleasesList = function() {
  this.setDeletedReleasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.DeploymentEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.DeploymentEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.DeploymentEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.DeploymentEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    deployment: (f = msg.getDeployment()) && proto.controller.Deployment.toObject(includeInstance, f),
    jobType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jobState: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.DeploymentEvent}
 */
proto.controller.DeploymentEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.DeploymentEvent;
  return proto.controller.DeploymentEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.DeploymentEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.DeploymentEvent}
 */
proto.controller.DeploymentEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.controller.Deployment;
      reader.readMessage(value,proto.controller.Deployment.deserializeBinaryFromReader);
      msg.setDeployment(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobType(value);
      break;
    case 3:
      var value = /** @type {!proto.controller.DeploymentEvent.JobState} */ (reader.readEnum());
      msg.setJobState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.DeploymentEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.DeploymentEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.DeploymentEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.DeploymentEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeployment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.controller.Deployment.serializeBinaryToWriter
    );
  }
  f = message.getJobType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJobState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.controller.DeploymentEvent.JobState = {
  PENDING: 0,
  BLOCKED: 1,
  STARTING: 2,
  UP: 3,
  STOPPING: 5,
  DOWN: 6,
  CRASHED: 7,
  FAILED: 8
};

/**
 * optional Deployment deployment = 1;
 * @return {?proto.controller.Deployment}
 */
proto.controller.DeploymentEvent.prototype.getDeployment = function() {
  return /** @type{?proto.controller.Deployment} */ (
    jspb.Message.getWrapperField(this, proto.controller.Deployment, 1));
};


/** @param {?proto.controller.Deployment|undefined} value */
proto.controller.DeploymentEvent.prototype.setDeployment = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.DeploymentEvent.prototype.clearDeployment = function() {
  this.setDeployment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.DeploymentEvent.prototype.hasDeployment = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string job_type = 2;
 * @return {string}
 */
proto.controller.DeploymentEvent.prototype.getJobType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.DeploymentEvent.prototype.setJobType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional JobState job_state = 3;
 * @return {!proto.controller.DeploymentEvent.JobState}
 */
proto.controller.DeploymentEvent.prototype.getJobState = function() {
  return /** @type {!proto.controller.DeploymentEvent.JobState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.controller.DeploymentEvent.JobState} value */
proto.controller.DeploymentEvent.prototype.setJobState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ReleaseDeletion.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ReleaseDeletion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ReleaseDeletion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ReleaseDeletion.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ReleaseDeletion}
 */
proto.controller.ReleaseDeletion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ReleaseDeletion;
  return proto.controller.ReleaseDeletion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ReleaseDeletion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ReleaseDeletion}
 */
proto.controller.ReleaseDeletion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ReleaseDeletion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ReleaseDeletion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ReleaseDeletion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ReleaseDeletion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Artifact.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Artifact.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Artifact} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Artifact.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Artifact}
 */
proto.controller.Artifact.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Artifact;
  return proto.controller.Artifact.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Artifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Artifact}
 */
proto.controller.Artifact.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Artifact.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Artifact.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Artifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Artifact.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Provider.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Provider.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Provider} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Provider.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Provider}
 */
proto.controller.Provider.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Provider;
  return proto.controller.Provider.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Provider} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Provider}
 */
proto.controller.Provider.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Provider.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Provider.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Provider} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Provider.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ResourceDeletion.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ResourceDeletion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ResourceDeletion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ResourceDeletion.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ResourceDeletion}
 */
proto.controller.ResourceDeletion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ResourceDeletion;
  return proto.controller.ResourceDeletion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ResourceDeletion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ResourceDeletion}
 */
proto.controller.ResourceDeletion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ResourceDeletion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ResourceDeletion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ResourceDeletion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ResourceDeletion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ResourceAppDeletion.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ResourceAppDeletion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ResourceAppDeletion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ResourceAppDeletion.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ResourceAppDeletion}
 */
proto.controller.ResourceAppDeletion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ResourceAppDeletion;
  return proto.controller.ResourceAppDeletion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ResourceAppDeletion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ResourceAppDeletion}
 */
proto.controller.ResourceAppDeletion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ResourceAppDeletion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ResourceAppDeletion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ResourceAppDeletion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ResourceAppDeletion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.RouteDeletion.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.RouteDeletion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.RouteDeletion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.RouteDeletion.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.RouteDeletion}
 */
proto.controller.RouteDeletion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.RouteDeletion;
  return proto.controller.RouteDeletion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.RouteDeletion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.RouteDeletion}
 */
proto.controller.RouteDeletion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.RouteDeletion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.RouteDeletion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.RouteDeletion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.RouteDeletion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.DomainMigration.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.DomainMigration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.DomainMigration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.DomainMigration.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.DomainMigration}
 */
proto.controller.DomainMigration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.DomainMigration;
  return proto.controller.DomainMigration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.DomainMigration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.DomainMigration}
 */
proto.controller.DomainMigration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.DomainMigration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.DomainMigration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.DomainMigration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.DomainMigration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ClusterBackup.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ClusterBackup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ClusterBackup} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ClusterBackup.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ClusterBackup}
 */
proto.controller.ClusterBackup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ClusterBackup;
  return proto.controller.ClusterBackup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ClusterBackup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ClusterBackup}
 */
proto.controller.ClusterBackup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ClusterBackup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ClusterBackup.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ClusterBackup} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ClusterBackup.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.AppGarbageCollection.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.AppGarbageCollection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.AppGarbageCollection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.AppGarbageCollection.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.AppGarbageCollection}
 */
proto.controller.AppGarbageCollection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.AppGarbageCollection;
  return proto.controller.AppGarbageCollection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.AppGarbageCollection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.AppGarbageCollection}
 */
proto.controller.AppGarbageCollection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.AppGarbageCollection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.AppGarbageCollection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.AppGarbageCollection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.AppGarbageCollection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.SinkDeletion.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.SinkDeletion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.SinkDeletion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.SinkDeletion.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.SinkDeletion}
 */
proto.controller.SinkDeletion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.SinkDeletion;
  return proto.controller.SinkDeletion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.SinkDeletion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.SinkDeletion}
 */
proto.controller.SinkDeletion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.SinkDeletion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.SinkDeletion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.SinkDeletion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.SinkDeletion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Sink.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Sink.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Sink} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Sink.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Sink}
 */
proto.controller.Sink.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Sink;
  return proto.controller.Sink.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Sink} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Sink}
 */
proto.controller.Sink.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Sink.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Sink.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Sink} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Sink.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Volume.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Volume.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Volume} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Volume.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Volume}
 */
proto.controller.Volume.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Volume;
  return proto.controller.Volume.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Volume} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Volume}
 */
proto.controller.Volume.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Volume.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Volume.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Volume} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Volume.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.ProcessType.repeatedFields_ = [1,3,4,11,12,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.ProcessType.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.ProcessType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.ProcessType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ProcessType.toObject = function(includeInstance, msg) {
  var f, obj = {
    argsList: jspb.Message.getRepeatedField(msg, 1),
    envMap: (f = msg.getEnvMap()) ? f.toObject(includeInstance, undefined) : [],
    portsList: jspb.Message.toObjectList(msg.getPortsList(),
    proto.controller.Port.toObject, includeInstance),
    volumesList: jspb.Message.toObjectList(msg.getVolumesList(),
    proto.controller.VolumeReq.toObject, includeInstance),
    omni: jspb.Message.getFieldWithDefault(msg, 5, false),
    hostNetwork: jspb.Message.getFieldWithDefault(msg, 6, false),
    hostPidNamespace: jspb.Message.getFieldWithDefault(msg, 7, false),
    service: jspb.Message.getFieldWithDefault(msg, 8, ""),
    resurrect: jspb.Message.getFieldWithDefault(msg, 9, false),
    resourcesMap: (f = msg.getResourcesMap()) ? f.toObject(includeInstance, proto.controller.HostResourceSpec.toObject) : [],
    mountsList: jspb.Message.toObjectList(msg.getMountsList(),
    proto.controller.HostMount.toObject, includeInstance),
    linuxCapabilitiesList: jspb.Message.getRepeatedField(msg, 12),
    allowedDevicesList: jspb.Message.toObjectList(msg.getAllowedDevicesList(),
    proto.controller.LibContainerDevice.toObject, includeInstance),
    writeableCgroups: jspb.Message.getFieldWithDefault(msg, 14, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.ProcessType}
 */
proto.controller.ProcessType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.ProcessType;
  return proto.controller.ProcessType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.ProcessType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.ProcessType}
 */
proto.controller.ProcessType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 2:
      var value = msg.getEnvMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 3:
      var value = new proto.controller.Port;
      reader.readMessage(value,proto.controller.Port.deserializeBinaryFromReader);
      msg.addPorts(value);
      break;
    case 4:
      var value = new proto.controller.VolumeReq;
      reader.readMessage(value,proto.controller.VolumeReq.deserializeBinaryFromReader);
      msg.addVolumes(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOmni(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHostNetwork(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHostPidNamespace(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setService(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResurrect(value);
      break;
    case 10:
      var value = msg.getResourcesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.controller.HostResourceSpec.deserializeBinaryFromReader, "");
         });
      break;
    case 11:
      var value = new proto.controller.HostMount;
      reader.readMessage(value,proto.controller.HostMount.deserializeBinaryFromReader);
      msg.addMounts(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addLinuxCapabilities(value);
      break;
    case 13:
      var value = new proto.controller.LibContainerDevice;
      reader.readMessage(value,proto.controller.LibContainerDevice.deserializeBinaryFromReader);
      msg.addAllowedDevices(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWriteableCgroups(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.ProcessType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.ProcessType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.ProcessType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.ProcessType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getEnvMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getPortsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.controller.Port.serializeBinaryToWriter
    );
  }
  f = message.getVolumesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.controller.VolumeReq.serializeBinaryToWriter
    );
  }
  f = message.getOmni();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getHostNetwork();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getHostPidNamespace();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getService();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResurrect();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getResourcesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.controller.HostResourceSpec.serializeBinaryToWriter);
  }
  f = message.getMountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.controller.HostMount.serializeBinaryToWriter
    );
  }
  f = message.getLinuxCapabilitiesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getAllowedDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.controller.LibContainerDevice.serializeBinaryToWriter
    );
  }
  f = message.getWriteableCgroups();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * repeated string args = 1;
 * @return {!Array<string>}
 */
proto.controller.ProcessType.prototype.getArgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.controller.ProcessType.prototype.setArgsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.controller.ProcessType.prototype.addArgs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ProcessType.prototype.clearArgsList = function() {
  this.setArgsList([]);
};


/**
 * map<string, string> env = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.controller.ProcessType.prototype.getEnvMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ProcessType.prototype.clearEnvMap = function() {
  this.getEnvMap().clear();
};


/**
 * repeated Port ports = 3;
 * @return {!Array<!proto.controller.Port>}
 */
proto.controller.ProcessType.prototype.getPortsList = function() {
  return /** @type{!Array<!proto.controller.Port>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.Port, 3));
};


/** @param {!Array<!proto.controller.Port>} value */
proto.controller.ProcessType.prototype.setPortsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.controller.Port=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.Port}
 */
proto.controller.ProcessType.prototype.addPorts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.controller.Port, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ProcessType.prototype.clearPortsList = function() {
  this.setPortsList([]);
};


/**
 * repeated VolumeReq volumes = 4;
 * @return {!Array<!proto.controller.VolumeReq>}
 */
proto.controller.ProcessType.prototype.getVolumesList = function() {
  return /** @type{!Array<!proto.controller.VolumeReq>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.VolumeReq, 4));
};


/** @param {!Array<!proto.controller.VolumeReq>} value */
proto.controller.ProcessType.prototype.setVolumesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.controller.VolumeReq=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.VolumeReq}
 */
proto.controller.ProcessType.prototype.addVolumes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.controller.VolumeReq, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ProcessType.prototype.clearVolumesList = function() {
  this.setVolumesList([]);
};


/**
 * optional bool omni = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.ProcessType.prototype.getOmni = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.controller.ProcessType.prototype.setOmni = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool host_network = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.ProcessType.prototype.getHostNetwork = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.controller.ProcessType.prototype.setHostNetwork = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool host_pid_namespace = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.ProcessType.prototype.getHostPidNamespace = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.controller.ProcessType.prototype.setHostPidNamespace = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string service = 8;
 * @return {string}
 */
proto.controller.ProcessType.prototype.getService = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.controller.ProcessType.prototype.setService = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool resurrect = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.ProcessType.prototype.getResurrect = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.controller.ProcessType.prototype.setResurrect = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * map<string, HostResourceSpec> resources = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.controller.HostResourceSpec>}
 */
proto.controller.ProcessType.prototype.getResourcesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.controller.HostResourceSpec>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      proto.controller.HostResourceSpec));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.controller.ProcessType.prototype.clearResourcesMap = function() {
  this.getResourcesMap().clear();
};


/**
 * repeated HostMount mounts = 11;
 * @return {!Array<!proto.controller.HostMount>}
 */
proto.controller.ProcessType.prototype.getMountsList = function() {
  return /** @type{!Array<!proto.controller.HostMount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.HostMount, 11));
};


/** @param {!Array<!proto.controller.HostMount>} value */
proto.controller.ProcessType.prototype.setMountsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.controller.HostMount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.HostMount}
 */
proto.controller.ProcessType.prototype.addMounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.controller.HostMount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ProcessType.prototype.clearMountsList = function() {
  this.setMountsList([]);
};


/**
 * repeated string linux_capabilities = 12;
 * @return {!Array<string>}
 */
proto.controller.ProcessType.prototype.getLinuxCapabilitiesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/** @param {!Array<string>} value */
proto.controller.ProcessType.prototype.setLinuxCapabilitiesList = function(value) {
  jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 */
proto.controller.ProcessType.prototype.addLinuxCapabilities = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ProcessType.prototype.clearLinuxCapabilitiesList = function() {
  this.setLinuxCapabilitiesList([]);
};


/**
 * repeated LibContainerDevice allowed_devices = 13;
 * @return {!Array<!proto.controller.LibContainerDevice>}
 */
proto.controller.ProcessType.prototype.getAllowedDevicesList = function() {
  return /** @type{!Array<!proto.controller.LibContainerDevice>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.controller.LibContainerDevice, 13));
};


/** @param {!Array<!proto.controller.LibContainerDevice>} value */
proto.controller.ProcessType.prototype.setAllowedDevicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.controller.LibContainerDevice=} opt_value
 * @param {number=} opt_index
 * @return {!proto.controller.LibContainerDevice}
 */
proto.controller.ProcessType.prototype.addAllowedDevices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.controller.LibContainerDevice, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.ProcessType.prototype.clearAllowedDevicesList = function() {
  this.setAllowedDevicesList([]);
};


/**
 * optional bool writeable_cgroups = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.ProcessType.prototype.getWriteableCgroups = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.controller.ProcessType.prototype.setWriteableCgroups = function(value) {
  jspb.Message.setProto3BooleanField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.Port.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.Port.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.Port} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Port.toObject = function(includeInstance, msg) {
  var f, obj = {
    port: jspb.Message.getFieldWithDefault(msg, 1, 0),
    proto: jspb.Message.getFieldWithDefault(msg, 2, ""),
    service: (f = msg.getService()) && proto.controller.HostService.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.Port}
 */
proto.controller.Port.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.Port;
  return proto.controller.Port.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.Port} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.Port}
 */
proto.controller.Port.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProto(value);
      break;
    case 3:
      var value = new proto.controller.HostService;
      reader.readMessage(value,proto.controller.HostService.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.Port.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.Port.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.Port} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.Port.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getProto();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.controller.HostService.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 port = 1;
 * @return {number}
 */
proto.controller.Port.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.controller.Port.prototype.setPort = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string proto = 2;
 * @return {string}
 */
proto.controller.Port.prototype.getProto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.Port.prototype.setProto = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional HostService service = 3;
 * @return {?proto.controller.HostService}
 */
proto.controller.Port.prototype.getService = function() {
  return /** @type{?proto.controller.HostService} */ (
    jspb.Message.getWrapperField(this, proto.controller.HostService, 3));
};


/** @param {?proto.controller.HostService|undefined} value */
proto.controller.Port.prototype.setService = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.Port.prototype.clearService = function() {
  this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.Port.prototype.hasService = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.VolumeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.VolumeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.VolumeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.VolumeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deleteOnStop: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.VolumeReq}
 */
proto.controller.VolumeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.VolumeReq;
  return proto.controller.VolumeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.VolumeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.VolumeReq}
 */
proto.controller.VolumeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteOnStop(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.VolumeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.VolumeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.VolumeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.VolumeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeleteOnStop();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.controller.VolumeReq.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.VolumeReq.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool delete_on_stop = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.VolumeReq.prototype.getDeleteOnStop = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.controller.VolumeReq.prototype.setDeleteOnStop = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.HostService.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.HostService.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.HostService} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostService.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    create: jspb.Message.getFieldWithDefault(msg, 2, false),
    check: (f = msg.getCheck()) && proto.controller.HostHealthCheck.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.HostService}
 */
proto.controller.HostService.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.HostService;
  return proto.controller.HostService.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.HostService} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.HostService}
 */
proto.controller.HostService.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreate(value);
      break;
    case 3:
      var value = new proto.controller.HostHealthCheck;
      reader.readMessage(value,proto.controller.HostHealthCheck.deserializeBinaryFromReader);
      msg.setCheck(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.HostService.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.HostService.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.HostService} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostService.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreate();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCheck();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.controller.HostHealthCheck.serializeBinaryToWriter
    );
  }
};


/**
 * optional string display_name = 1;
 * @return {string}
 */
proto.controller.HostService.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.HostService.prototype.setDisplayName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool create = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.HostService.prototype.getCreate = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.controller.HostService.prototype.setCreate = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional HostHealthCheck check = 3;
 * @return {?proto.controller.HostHealthCheck}
 */
proto.controller.HostService.prototype.getCheck = function() {
  return /** @type{?proto.controller.HostHealthCheck} */ (
    jspb.Message.getWrapperField(this, proto.controller.HostHealthCheck, 3));
};


/** @param {?proto.controller.HostHealthCheck|undefined} value */
proto.controller.HostService.prototype.setCheck = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.HostService.prototype.clearCheck = function() {
  this.setCheck(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.HostService.prototype.hasCheck = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.HostHealthCheck.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.HostHealthCheck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.HostHealthCheck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostHealthCheck.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    interval: (f = msg.getInterval()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    threshold: jspb.Message.getFieldWithDefault(msg, 4, 0),
    killDown: jspb.Message.getFieldWithDefault(msg, 5, false),
    startTimeout: (f = msg.getStartTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 7, ""),
    host: jspb.Message.getFieldWithDefault(msg, 8, ""),
    match: jspb.Message.getFieldWithDefault(msg, 9, ""),
    status: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.HostHealthCheck}
 */
proto.controller.HostHealthCheck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.HostHealthCheck;
  return proto.controller.HostHealthCheck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.HostHealthCheck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.HostHealthCheck}
 */
proto.controller.HostHealthCheck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setThreshold(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKillDown(value);
      break;
    case 6:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setStartTimeout(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setMatch(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.HostHealthCheck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.HostHealthCheck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.HostHealthCheck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostHealthCheck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getThreshold();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getKillDown();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getStartTimeout();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getMatch();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.controller.HostHealthCheck.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.HostHealthCheck.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Duration interval = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.controller.HostHealthCheck.prototype.getInterval = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.controller.HostHealthCheck.prototype.setInterval = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.HostHealthCheck.prototype.clearInterval = function() {
  this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.HostHealthCheck.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 threshold = 4;
 * @return {number}
 */
proto.controller.HostHealthCheck.prototype.getThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.controller.HostHealthCheck.prototype.setThreshold = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool kill_down = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.HostHealthCheck.prototype.getKillDown = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.controller.HostHealthCheck.prototype.setKillDown = function(value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Duration start_timeout = 6;
 * @return {?proto.google.protobuf.Duration}
 */
proto.controller.HostHealthCheck.prototype.getStartTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 6));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.controller.HostHealthCheck.prototype.setStartTimeout = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.HostHealthCheck.prototype.clearStartTimeout = function() {
  this.setStartTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.HostHealthCheck.prototype.hasStartTimeout = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string path = 7;
 * @return {string}
 */
proto.controller.HostHealthCheck.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.controller.HostHealthCheck.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string host = 8;
 * @return {string}
 */
proto.controller.HostHealthCheck.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.controller.HostHealthCheck.prototype.setHost = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string match = 9;
 * @return {string}
 */
proto.controller.HostHealthCheck.prototype.getMatch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.controller.HostHealthCheck.prototype.setMatch = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 status = 10;
 * @return {number}
 */
proto.controller.HostHealthCheck.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.controller.HostHealthCheck.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 10, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.HostResourceSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.HostResourceSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.HostResourceSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostResourceSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    request: jspb.Message.getFieldWithDefault(msg, 1, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.HostResourceSpec}
 */
proto.controller.HostResourceSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.HostResourceSpec;
  return proto.controller.HostResourceSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.HostResourceSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.HostResourceSpec}
 */
proto.controller.HostResourceSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.HostResourceSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.HostResourceSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.HostResourceSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostResourceSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequest();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 request = 1;
 * @return {number}
 */
proto.controller.HostResourceSpec.prototype.getRequest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.controller.HostResourceSpec.prototype.setRequest = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 limit = 2;
 * @return {number}
 */
proto.controller.HostResourceSpec.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.controller.HostResourceSpec.prototype.setLimit = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.HostMount.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.HostMount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.HostMount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostMount.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    target: jspb.Message.getFieldWithDefault(msg, 2, ""),
    writable: jspb.Message.getFieldWithDefault(msg, 3, false),
    device: jspb.Message.getFieldWithDefault(msg, 4, ""),
    data: jspb.Message.getFieldWithDefault(msg, 5, ""),
    flags: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.HostMount}
 */
proto.controller.HostMount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.HostMount;
  return proto.controller.HostMount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.HostMount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.HostMount}
 */
proto.controller.HostMount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWritable(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.HostMount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.HostMount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.HostMount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.HostMount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTarget();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWritable();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getData();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFlags();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.controller.HostMount.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.HostMount.prototype.setLocation = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string target = 2;
 * @return {string}
 */
proto.controller.HostMount.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.HostMount.prototype.setTarget = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool writable = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.HostMount.prototype.getWritable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.controller.HostMount.prototype.setWritable = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string device = 4;
 * @return {string}
 */
proto.controller.HostMount.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.HostMount.prototype.setDevice = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string data = 5;
 * @return {string}
 */
proto.controller.HostMount.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.controller.HostMount.prototype.setData = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 flags = 6;
 * @return {number}
 */
proto.controller.HostMount.prototype.getFlags = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.controller.HostMount.prototype.setFlags = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.LibContainerDevice.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.LibContainerDevice.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.LibContainerDevice} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.LibContainerDevice.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    major: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minor: jspb.Message.getFieldWithDefault(msg, 4, 0),
    permissions: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fileMode: jspb.Message.getFieldWithDefault(msg, 6, 0),
    uid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    gid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    allow: jspb.Message.getFieldWithDefault(msg, 9, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.LibContainerDevice}
 */
proto.controller.LibContainerDevice.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.LibContainerDevice;
  return proto.controller.LibContainerDevice.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.LibContainerDevice} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.LibContainerDevice}
 */
proto.controller.LibContainerDevice.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMajor(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinor(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPermissions(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFileMode(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGid(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.LibContainerDevice.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.LibContainerDevice.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.LibContainerDevice} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.LibContainerDevice.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMajor();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMinor();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getPermissions();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFileMode();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getUid();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getGid();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getAllow();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * optional int32 type = 1;
 * @return {number}
 */
proto.controller.LibContainerDevice.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.controller.LibContainerDevice.prototype.setType = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.controller.LibContainerDevice.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.LibContainerDevice.prototype.setPath = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 major = 3;
 * @return {number}
 */
proto.controller.LibContainerDevice.prototype.getMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.controller.LibContainerDevice.prototype.setMajor = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 minor = 4;
 * @return {number}
 */
proto.controller.LibContainerDevice.prototype.getMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.controller.LibContainerDevice.prototype.setMinor = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string permissions = 5;
 * @return {string}
 */
proto.controller.LibContainerDevice.prototype.getPermissions = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.controller.LibContainerDevice.prototype.setPermissions = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 file_mode = 6;
 * @return {number}
 */
proto.controller.LibContainerDevice.prototype.getFileMode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.controller.LibContainerDevice.prototype.setFileMode = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 uid = 7;
 * @return {number}
 */
proto.controller.LibContainerDevice.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.controller.LibContainerDevice.prototype.setUid = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 gid = 8;
 * @return {number}
 */
proto.controller.LibContainerDevice.prototype.getGid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.controller.LibContainerDevice.prototype.setGid = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool allow = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.LibContainerDevice.prototype.getAllow = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.controller.LibContainerDevice.prototype.setAllow = function(value) {
  jspb.Message.setProto3BooleanField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.LogChunk.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.LogChunk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.LogChunk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.LogChunk.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    job: jspb.Message.getFieldWithDefault(msg, 2, ""),
    msg: jspb.Message.getFieldWithDefault(msg, 3, ""),
    processType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    source: jspb.Message.getFieldWithDefault(msg, 5, 0),
    stream: jspb.Message.getFieldWithDefault(msg, 6, 0),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.LogChunk}
 */
proto.controller.LogChunk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.LogChunk;
  return proto.controller.LogChunk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.LogChunk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.LogChunk}
 */
proto.controller.LogChunk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJob(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessType(value);
      break;
    case 5:
      var value = /** @type {!proto.controller.LogAggregatorStreamSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 6:
      var value = /** @type {!proto.controller.LogAggregatorStreamType} */ (reader.readEnum());
      msg.setStream(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.LogChunk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.LogChunk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.LogChunk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.LogChunk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJob();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProcessType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSource();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStream();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.controller.LogChunk.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.controller.LogChunk.prototype.setHost = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string job = 2;
 * @return {string}
 */
proto.controller.LogChunk.prototype.getJob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.LogChunk.prototype.setJob = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.controller.LogChunk.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.controller.LogChunk.prototype.setMsg = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string process_type = 4;
 * @return {string}
 */
proto.controller.LogChunk.prototype.getProcessType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.LogChunk.prototype.setProcessType = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional LogAggregatorStreamSource source = 5;
 * @return {!proto.controller.LogAggregatorStreamSource}
 */
proto.controller.LogChunk.prototype.getSource = function() {
  return /** @type {!proto.controller.LogAggregatorStreamSource} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.controller.LogAggregatorStreamSource} value */
proto.controller.LogChunk.prototype.setSource = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional LogAggregatorStreamType stream = 6;
 * @return {!proto.controller.LogAggregatorStreamType}
 */
proto.controller.LogChunk.prototype.getStream = function() {
  return /** @type {!proto.controller.LogAggregatorStreamType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {!proto.controller.LogAggregatorStreamType} value */
proto.controller.LogChunk.prototype.setStream = function(value) {
  jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.controller.LogChunk.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.controller.LogChunk.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.controller.LogChunk.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.controller.LogChunk.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.controller.LogAggregatorLogOpts.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.controller.LogAggregatorLogOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.controller.LogAggregatorLogOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.controller.LogAggregatorLogOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.LogAggregatorLogOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    follow: jspb.Message.getFieldWithDefault(msg, 1, false),
    job: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lines: jspb.Message.getFieldWithDefault(msg, 3, 0),
    processType: jspb.Message.getFieldWithDefault(msg, 4, ""),
    streamTypesList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.controller.LogAggregatorLogOpts}
 */
proto.controller.LogAggregatorLogOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.controller.LogAggregatorLogOpts;
  return proto.controller.LogAggregatorLogOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.controller.LogAggregatorLogOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.controller.LogAggregatorLogOpts}
 */
proto.controller.LogAggregatorLogOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFollow(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJob(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLines(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessType(value);
      break;
    case 5:
      var value = /** @type {!Array<!proto.controller.LogAggregatorStreamType>} */ (reader.readPackedEnum());
      msg.setStreamTypesList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.controller.LogAggregatorLogOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.controller.LogAggregatorLogOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.controller.LogAggregatorLogOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.controller.LogAggregatorLogOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollow();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getJob();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLines();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getProcessType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStreamTypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional bool follow = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.controller.LogAggregatorLogOpts.prototype.getFollow = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.controller.LogAggregatorLogOpts.prototype.setFollow = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string job = 2;
 * @return {string}
 */
proto.controller.LogAggregatorLogOpts.prototype.getJob = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.controller.LogAggregatorLogOpts.prototype.setJob = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 lines = 3;
 * @return {number}
 */
proto.controller.LogAggregatorLogOpts.prototype.getLines = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.controller.LogAggregatorLogOpts.prototype.setLines = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string process_type = 4;
 * @return {string}
 */
proto.controller.LogAggregatorLogOpts.prototype.getProcessType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.controller.LogAggregatorLogOpts.prototype.setProcessType = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated LogAggregatorStreamType stream_types = 5;
 * @return {!Array<!proto.controller.LogAggregatorStreamType>}
 */
proto.controller.LogAggregatorLogOpts.prototype.getStreamTypesList = function() {
  return /** @type {!Array<!proto.controller.LogAggregatorStreamType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array<!proto.controller.LogAggregatorStreamType>} value */
proto.controller.LogAggregatorLogOpts.prototype.setStreamTypesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.controller.LogAggregatorStreamType} value
 * @param {number=} opt_index
 */
proto.controller.LogAggregatorLogOpts.prototype.addStreamTypes = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.controller.LogAggregatorLogOpts.prototype.clearStreamTypesList = function() {
  this.setStreamTypesList([]);
};


/**
 * @enum {number}
 */
proto.controller.ScaleRequestState = {
  SCALE_PENDING: 0,
  SCALE_CANCELLED: 1,
  SCALE_COMPLETE: 2
};

/**
 * @enum {number}
 */
proto.controller.ReleaseType = {
  ANY: 0,
  CODE: 1,
  CONFIG: 2
};

/**
 * @enum {number}
 */
proto.controller.DeploymentStatus = {
  PENDING: 0,
  FAILED: 1,
  RUNNING: 2,
  COMPLETE: 3
};

/**
 * @enum {number}
 */
proto.controller.LogAggregatorStreamType = {
  STDOUT: 0,
  STDERR: 1,
  INIT: 2,
  UNKNOWN: 3
};

/**
 * @enum {number}
 */
proto.controller.LogAggregatorStreamSource = {
  APP: 0
};

goog.object.extend(exports, proto.controller);
