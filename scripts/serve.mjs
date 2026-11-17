import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import './build.mjs';
const root=resolve(fileURLToPath(new URL('../dist/',import.meta.url)));
const port=Number(process.env.PORT||4321);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2','.json':'application/json; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const server=createServer(async(req,res)=>{
  try{
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    let file=resolve(root,`.${pathname}`);
    if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403);res.end();return;}
    let info;
    try{info=await stat(file);}catch{}
    if(info?.isDirectory()){
      if(!pathname.endsWith('/')){res.writeHead(308,{Location:`${pathname}/${new URL(req.url,'http://localhost').search}`});res.end();return;}
      file=resolve(file,'index.html');
    }
    let body,status=200;
    try{body=await readFile(file);}catch{status=404;file=resolve(root,'404.html');body=await readFile(file);}
    res.writeHead(status,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin','X-Frame-Options':'DENY'});
    res.end(req.method==='HEAD'?undefined:body);
  }catch{res.writeHead(400);res.end('Bad request');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Switch2e ready: http://localhost:${port}\nEnglish: / · 简体中文: /zh-CN/ · 日本語: /ja/`));
