'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warn = require('./utils/warn');

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://developers.google.com/tag-manager/quickstart

var Snippets = function Snippets(_ref) {
  var id = _ref.id,
      events = _ref.events,
      dataLayer = _ref.dataLayer,
      dataLayerName = _ref.dataLayerName;

  if (!id) (0, _warn2.default)('GTM Id is required');

  var iframe = '\n    <iframe src="//www.googletagmanager.com/ns.html?id=' + id + '"\n      height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';

  var script = '\n    (function(w,d,s,l,i){w[l]=w[l]||[];\n      w[l].push({\'gtm.start\': new Date().getTime(),event:\'gtm.js\', ' + JSON.stringify(events).slice(1, -1) + '});\n      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';\n      j.async=true;j.src=\'//www.googletagmanager.com/gtm.js?id=\'+i+dl;\n      f.parentNode.insertBefore(j,f);\n    })(window,document,\'script\',\'' + dataLayerName + '\',\'' + id + '\');';

  var dataLayerVar = '\n    window.' + dataLayerName + ' = window.' + dataLayerName + ' || [];\n    window.' + dataLayerName + '.push(' + JSON.stringify(dataLayer) + ')';

  return {
    iframe: iframe,
    script: script,
    dataLayerVar: dataLayerVar
  };
};

exports.default = Snippets;