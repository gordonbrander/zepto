/* Register as AMD module.
See https://github.com/madrobby/zepto/pull/342 */
if (typeof define === 'function' && define.amd) {
  define(function() { return Zepto; });
}
