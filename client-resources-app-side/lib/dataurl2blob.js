//npm dataurl-to-blob@0.0.1 MIT license
module.exports = function (a) { 'use strict'; if (!window || window.window !== window) { console.error('This module is only available in browser'); return new Blob(['error']); } var b = window.Blob || window.MozBlob || window.WebKitBlob; if (!b) { console.error('Blob was not supported'); return new Blob(['error']); } var c = /^data:((.*?)(;charset=.*?)?)(;base64)?,/; var d = a.match(c); if (!d) { console.error('invalid dataURI'); return new Blob(['error']); } var e = d[2] ? d[1] : 'text/plain' + (d[3] || ';charset=utf-8'); var f = !!d[4]; var g = a.slice(d[0].length); var h = f ? atob(g) : decodeURIComponent(g); var j = []; for (var i = 0; i < h.length; i++) { j.push(h.charCodeAt(i)) } return new b([new Uint8Array(j)], { type: e }) };