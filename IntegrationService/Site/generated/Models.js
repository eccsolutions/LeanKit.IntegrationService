

App.codegen.ProjectListItem = NiceTools.Model.extend({
   Id:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Id', val, silent); else return this.get('Id');},
   Name:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Name', val, silent); else return this.get('Name');},
   PathFilter:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('PathFilter', val, silent); else return this.get('PathFilter');}
});

App.codegen.ConfigurationModel = NiceTools.Model.extend({
   Target:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Target', val, silent); else return this.get('Target');},
   LeanKit:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('LeanKit', val, silent); else return this.get('LeanKit');},
   Mappings:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Mappings', val, silent); else return this.get('Mappings');},
   Settings:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Settings', val, silent); else return this.get('Settings');}
});

App.codegen.ConfigurationSettingsModel = NiceTools.Model.extend({
   PollingFrequency:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('PollingFrequency', val, silent); else return this.get('PollingFrequency');},
   EarliestSyncDate:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('EarliestSyncDate', val, silent); else return this.get('EarliestSyncDate');},
   LocalStoragePath:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('LocalStoragePath', val, silent); else return this.get('LocalStoragePath');}
});

App.codegen.ServerConfigurationModel = NiceTools.Model.extend({
   Protocol:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Protocol', val, silent); else return this.get('Protocol');},
   Url:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Url', val, silent); else return this.get('Url');},
   Host:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Host', val, silent); else return this.get('Host');},
   User:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('User', val, silent); else return this.get('User');},
   Password:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Password', val, silent); else return this.get('Password');},
   Type:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Type', val, silent); else return this.get('Type');}
});

App.codegen.TypeMapModel = NiceTools.Model.extend({
   LeanKitType:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('LeanKitType', val, silent); else return this.get('LeanKitType');},
   TargetType:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TargetType', val, silent); else return this.get('TargetType');}
});

App.codegen.BoardMappingModel = NiceTools.Model.extend({
   Id:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Id', val, silent); else return this.get('Id');},
   BoardId:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('BoardId', val, silent); else return this.get('BoardId');},
   Title:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Title', val, silent); else return this.get('Title');},
   TargetProjectId:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TargetProjectId', val, silent); else return this.get('TargetProjectId');},
   TargetProjectName:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TargetProjectName', val, silent); else return this.get('TargetProjectName');},
   UpdateCards:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('UpdateCards', val, silent); else return this.get('UpdateCards');},
   UpdateCardLanes:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('UpdateCardLanes', val, silent); else return this.get('UpdateCardLanes');},
   UpdateTargetItems:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('UpdateTargetItems', val, silent); else return this.get('UpdateTargetItems');},
   CreateCards:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('CreateCards', val, silent); else return this.get('CreateCards');},
   CreateTargetItems:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('CreateTargetItems', val, silent); else return this.get('CreateTargetItems');},
   LaneToStatesMap:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('LaneToStatesMap', val, silent); else return this.get('LaneToStatesMap');},
   TypeMap:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TypeMap', val, silent); else return this.get('TypeMap');},
   Query:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Query', val, silent); else return this.get('Query');},
   IterationPath:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('IterationPath', val, silent); else return this.get('IterationPath');},
   AreaPath:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('AreaPath', val, silent); else return this.get('AreaPath');},
   DefaultCardCreationLaneId:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('DefaultCardCreationLaneId', val, silent); else return this.get('DefaultCardCreationLaneId');},
   QueryStates:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('QueryStates', val, silent); else return this.get('QueryStates');},
   Excludes:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Excludes', val, silent); else return this.get('Excludes');},
   TagCardsWithTargetSystemName:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TagCardsWithTargetSystemName', val, silent); else return this.get('TagCardsWithTargetSystemName');}
});