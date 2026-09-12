import {mkdir,copyFile,stat,writeFile} from 'node:fs/promises';
const base=new URL('../public/',import.meta.url);
await mkdir(new URL('models/',base),{recursive:true});
await mkdir(new URL('draco/',base),{recursive:true});
for(const file of ['draco_decoder.js','draco_decoder.wasm','draco_wasm_wrapper.js'])await copyFile(new URL('../node_modules/three/examples/jsm/libs/draco/gltf/'+file,import.meta.url),new URL('draco/'+file,base));
const target=new URL('models/porsche-911.glb',base);
let present=false;try{present=(await stat(target)).size>100000}catch{}
if(!present){const response=await fetch('https://raw.githubusercontent.com/playcanvas/web-components/main/examples/assets/models/porsche-911-carrera-4s.glb',{signal:AbortSignal.timeout(120000)});if(!response.ok)throw new Error('Licensed vehicle download failed: '+response.status);const bytes=Buffer.from(await response.arrayBuffer());if(bytes.readUInt32LE(0)!==0x46546c67)throw new Error('Vehicle is not a GLB');await writeFile(target,bytes);console.log('Downloaded licensed vehicle: '+bytes.length+' bytes')}
