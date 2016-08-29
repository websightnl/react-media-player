'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _vendorPropTypes = require('./vendor-prop-types');

var _vendorPropTypes2 = _interopRequireDefault(_vendorPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTML5 = function (_Component) {
  _inherits(HTML5, _Component);

  function HTML5() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HTML5);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HTML5.__proto__ || Object.getPrototypeOf(HTML5)).call.apply(_ref, [this].concat(args))), _this), _this._isMounted = false, _this._timeUpdateId = null, _this._handleCanPlay = function () {
      _this.props.onReady();
    }, _this._handlePlay = function () {
      if (_this._timeUpdateId !== null) {
        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
      }
      _this.props.onPlay(true);
    }, _this._handlePause = function () {
      if (_this._timeUpdateId !== null) {
        cancelAnimationFrame(_this._timeUpdateId);
      }
      _this._timeUpdateId = null;

      _this.props.onPause(false);
    }, _this._handleEnded = function () {
      _this.props.onEnded(false);
    }, _this._handleError = function (e) {
      _this.props.onError(e);
    }, _this._handleProgress = function (_ref2) {
      var _ref2$target = _ref2.target;
      var buffered = _ref2$target.buffered;
      var duration = _ref2$target.duration;

      var progress = 0;

      if (buffered.length > 0) {
        progress = buffered.end(0) / duration;
      }

      _this.props.onProgress(isNaN(progress) ? 0 : progress);
    }, _this._handleDuration = function (_ref3) {
      var duration = _ref3.target.duration;

      _this.props.onDuration(duration);
    }, _this._handleTimeUpdate = function () {
      if (!_this._isMounted) return;

      _this.props.onTimeUpdate(_this._player.currentTime || 0);

      if (_this._timeUpdateId) {
        _this._timeUpdateId = requestAnimationFrame(_this._handleTimeUpdate);
      }
    }, _this._handleVolumeChange = function (_ref4) {
      var _ref4$target = _ref4.target;
      var volume = _ref4$target.volume;
      var muted = _ref4$target.muted;

      _this.props.onMute(muted);
      _this.props.onVolumeChange(volume);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HTML5, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'play',
    value: function play() {
      this._player.play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._player.pause();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._player.pause();
      this._player.currentTime = 0;
    }
  }, {
    key: 'seekTo',
    value: function seekTo(currentTime) {
      this._player.currentTime = currentTime;
    }
  }, {
    key: 'mute',
    value: function mute(muted) {
      this._player.muted = muted;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(volume) {
      this._player.volume = volume;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(this.props.vendor, {
        ref: function ref(c) {
          return _this2._player = c;
        },
        src: this.props.src,
        onCanPlay: this._handleCanPlay,
        onPlay: this._handlePlay,
        onPause: this._handlePause,
        onEnded: this._handleEnded,
        onError: this._handleError,
        onProgress: this._handleProgress,
        onLoadedMetadata: this._handleDuration,
        onVolumeChange: this._handleVolumeChange
      });
    }
  }]);

  return HTML5;
}(_react.Component);

HTML5.propTypes = _vendorPropTypes2.default;
exports.default = HTML5;