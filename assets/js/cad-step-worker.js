/* Liest STEP, IGES und BREP mit occt-import-js (WebAssembly) in einem eigenen Thread.
   Der Leser erzeugt intern Funktionen zur Laufzeit. Das bleibt so im Worker, die Seite selbst behält ihre strenge CSP.
   Die Datei kommt als ArrayBuffer vom Hauptthread und verlässt den Rechner nicht. */
'use strict';
importScripts('/assets/vendor/occt/occt-import-js.js');
let occt = null;

self.onmessage = async (e) => {
  const { id, ext, bytes, opts } = e.data;
  try {
    if (!occt) occt = await self.occtimportjs({ locateFile: () => '/assets/vendor/occt/occt-import-js.wasm' });
    const res = ext === 'brep' ? occt.ReadBrepFile(bytes, opts) : (ext === 'iges' || ext === 'igs') ? occt.ReadIgesFile(bytes, opts) : occt.ReadStepFile(bytes, opts);
    if (!res || !res.success || !res.meshes) { self.postMessage({ id, ok: false }); return; }
    const transfer = [];
    const meshes = res.meshes.map((m) => {
      const out = {
        name: m.name || '',
        color: m.color || null,
        position: new Float32Array(m.attributes.position.array),
        normal: m.attributes.normal ? new Float32Array(m.attributes.normal.array) : null,
        index: m.index ? new Uint32Array(m.index.array) : null,
      };
      transfer.push(out.position.buffer);
      if (out.normal) transfer.push(out.normal.buffer);
      if (out.index) transfer.push(out.index.buffer);
      return out;
    });
    self.postMessage({ id, ok: true, meshes }, transfer);
  } catch (err) {
    self.postMessage({ id, ok: false, error: String((err && err.message) || err) });
  }
};
