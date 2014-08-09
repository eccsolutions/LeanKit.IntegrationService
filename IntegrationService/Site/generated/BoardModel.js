

App.codegen.Board = NiceTools.Model.extend({
   Id:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Id', val, silent); else return this.get('Id');},
   Title:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Title', val, silent); else return this.get('Title');},
   Lanes:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Lanes', val, silent); else return this.get('Lanes');},
   CardTypes:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('CardTypes', val, silent); else return this.get('CardTypes');},
   LaneHtml:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('LaneHtml', val, silent); else return this.get('LaneHtml');}
});

App.codegen.BoardListItem = NiceTools.Model.extend({
   Id:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Id', val, silent); else return this.get('Id');},
   Title:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Title', val, silent); else return this.get('Title');},
   TargetProjectId:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TargetProjectId', val, silent); else return this.get('TargetProjectId');},
   TargetProjectName:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('TargetProjectName', val, silent); else return this.get('TargetProjectName');}
});

App.codegen.LaneHtml = NiceTools.Model.extend({
   BoardId:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('BoardId', val, silent); else return this.get('BoardId');},
   Html:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Html', val, silent); else return this.get('Html');}
});

App.codegen.LaneModel = NiceTools.Model.extend({
   Id:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Id', val, silent); else return this.get('Id');},
   Title:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Title', val, silent); else return this.get('Title');},
   Index:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Index', val, silent); else return this.get('Index');},
   Relation:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Relation', val, silent); else return this.get('Relation');},
   IsParent:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('IsParent', val, silent); else return this.get('IsParent');},
   ClassType:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('ClassType', val, silent); else return this.get('ClassType');},
   Type:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Type', val, silent); else return this.get('Type');},
   ChildLanes:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('ChildLanes', val, silent); else return this.get('ChildLanes');},
   Orientation:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Orientation', val, silent); else return this.get('Orientation');},
   Level:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Level', val, silent); else return this.get('Level');},
   Activity:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Activity', val, silent); else return this.get('Activity');}
});

App.codegen.CardTypeModel = NiceTools.Model.extend({
   Id:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Id', val, silent); else return this.get('Id');},
   Name:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('Name', val, silent); else return this.get('Name');},
   ColorHex:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('ColorHex', val, silent); else return this.get('ColorHex');},
   IsDefault:function (val, silent) { silent = silent ? { silent: true } : null; if (!_.isUndefined(val)) this.set('IsDefault', val, silent); else return this.get('IsDefault');}
});