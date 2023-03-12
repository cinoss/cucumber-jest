"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");
var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));
var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));
var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));
var _path = _interopRequireDefault(require("path"));
var _fastGlob = _interopRequireDefault(require("fast-glob"));
var _context;
const params = (0, _slice.default)(_context = process.argv).call(_context, 2);
(async () => {
  const paths = JSON.parse(params[1]);
  const extensions = params[2] ? `{${JSON.parse(params[2]).join(',')}}` : '*';
  const globs = (0, _map.default)(paths).call(paths, p => _path.default.join(params[0], `${p}.${extensions}`));
  const files = await (0, _fastGlob.default)(globs, {
    cwd: params[0],
    absolute: true
  });
  process.stdout.write((0, _stringify.default)(files), () => {
    process.exit();
  });
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGF0aCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2Zhc3RHbG9iIiwiX2NvbnRleHQiLCJwYXJhbXMiLCJfc2xpY2UiLCJkZWZhdWx0IiwicHJvY2VzcyIsImFyZ3YiLCJjYWxsIiwicGF0aHMiLCJKU09OIiwicGFyc2UiLCJleHRlbnNpb25zIiwiam9pbiIsImdsb2JzIiwiX21hcCIsInAiLCJwYXRoIiwiZmlsZXMiLCJmZyIsImN3ZCIsImFic29sdXRlIiwic3Rkb3V0Iiwid3JpdGUiLCJfc3RyaW5naWZ5IiwiZXhpdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRQYXRoc1dvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IGZnIGZyb20gJ2Zhc3QtZ2xvYic7XG5cbmNvbnN0IHBhcmFtcyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcblxuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwYXRocyA9IEpTT04ucGFyc2UocGFyYW1zWzFdKTtcbiAgICBjb25zdCBleHRlbnNpb25zID0gcGFyYW1zWzJdID8gYHske0pTT04ucGFyc2UocGFyYW1zWzJdKS5qb2luKCcsJyl9fWAgOiAnKic7XG5cbiAgICBjb25zdCBnbG9icyA9IHBhdGhzLm1hcCgocCkgPT4gcGF0aC5qb2luKHBhcmFtc1swXSwgYCR7cH0uJHtleHRlbnNpb25zfWApKTtcblxuICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZmcoZ2xvYnMsIHtcbiAgICAgICAgY3dkOiBwYXJhbXNbMF0sXG4gICAgICAgIGFic29sdXRlOiB0cnVlXG4gICAgfSk7XG5cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZShKU09OLnN0cmluZ2lmeShmaWxlcyksICgpID0+IHtcbiAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgfSk7XG59KSgpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxLQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBQyxTQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFBMkIsSUFBQUUsUUFBQTtBQUUzQixNQUFNQyxNQUFNLEdBQUcsSUFBQUMsTUFBQSxDQUFBQyxPQUFBLEVBQUFILFFBQUEsR0FBQUksT0FBTyxDQUFDQyxJQUFJLEVBQUFDLElBQUEsQ0FBQU4sUUFBQSxFQUFPLENBQUMsQ0FBQztBQUVwQyxDQUFDLFlBQVk7RUFDVCxNQUFNTyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDbkMsTUFBTVMsVUFBVSxHQUFHVCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUksSUFBR08sSUFBSSxDQUFDQyxLQUFLLENBQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDVSxJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUUsR0FBRyxHQUFHO0VBRTNFLE1BQU1DLEtBQUssR0FBRyxJQUFBQyxJQUFBLENBQUFWLE9BQUEsRUFBQUksS0FBSyxFQUFBRCxJQUFBLENBQUxDLEtBQUssRUFBTU8sQ0FBQyxJQUFLQyxhQUFJLENBQUNKLElBQUksQ0FBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFHLEdBQUVhLENBQUUsSUFBR0osVUFBVyxFQUFDLENBQUMsQ0FBQztFQUUxRSxNQUFNTSxLQUFLLEdBQUcsTUFBTSxJQUFBQyxpQkFBRSxFQUFDTCxLQUFLLEVBQUU7SUFDMUJNLEdBQUcsRUFBRWpCLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDZGtCLFFBQVEsRUFBRTtFQUNkLENBQUMsQ0FBQztFQUVGZixPQUFPLENBQUNnQixNQUFNLENBQUNDLEtBQUssQ0FBQyxJQUFBQyxVQUFBLENBQUFuQixPQUFBLEVBQWVhLEtBQUssQ0FBQyxFQUFFLE1BQU07SUFDOUNaLE9BQU8sQ0FBQ21CLElBQUksRUFBRTtFQUNsQixDQUFDLENBQUM7QUFDTixDQUFDLEdBQUcifQ==