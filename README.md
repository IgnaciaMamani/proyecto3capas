## al momento de hacer la instalacion del npm install se detectaron como 5 vulnerabilidades:

## me salio eso: PS C:\Users\toyga\Desktop\Programacion Web\semana 6\proy3capas\proy3capas> npm install 
## npm warn deprecated @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
## npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
## npm warn deprecated npmlog@6.0.2: This package is no longer supported.
## npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
## npm warn deprecated glob@7.2.3: Old versions of glob are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me
## npm warn deprecated are-we-there-yet@3.0.1: This package is no longer supported.
## npm warn deprecated prebuild-install@7.1.3: No longer maintained. Please contact the author of the relevant native addon; alternatives are available.
## npm warn deprecated gauge@4.0.4: This package is no longer supported.
## npm warn deprecated tar@6.2.1: Old versions of tar are not supported, and contain widely publicized security vulnerabilities, which have been fixed in the current version. Please update. Support for old versions may be purchased (at exorbitant rates) by contacting i@izs.me

## added 191 packages, and audited 192 packages in 9s

## 26 packages are looking for funding
  ## run npm fund for details

## 7 vulnerabilities (2 low, 5 high)

## To address all issues (including breaking changes), run:
  ## npm audit fix --force

## Run npm audit for details.
## PS C:\Users\toyga\Desktop\Programacion Web\semana 6\proy3capas\proy3capas> npm audit
# npm audit report

## @tootallnate/once  <2.0.1
## @tootallnate/once vulnerable to Incorrect Control Flow Scoping - https://github.com/advisories/GHSA-vpq2-c234-7xj6
## fix available via npm audit fix --force
## Will install sqlite3@6.0.1, which is a breaking change
## no de_modules/@tootallnate/once
  ## http-proxy-agent  4.0.1
  ## Depends on vulnerable versions of @tootallnate/once
  ## node_modules/http-proxy-agent
## make-fetch-happen  7.1.1 - 14.0.0
## Depends on vulnerable versions of cacache
## Depends on vulnerable versions of http-proxy-agent
## node_modules/make-fetch-happen
## node-gyp  <=10.3.1
## Depends on vulnerable versions of make-fetch-happen
## Depends on vulnerable versions of tar
## node_modules/node-gyp
## sqlite3  5.0.0 - 5.1.7
## Depends on vulnerable versions of node-gyp
## Depends on vulnerable versions of tar
## node_modules/sqlite3

## tar  <=7.5.10
## Severity: high
## node-tar Vulnerable to Arbitrary File Creation/Overwrite via Hardlink Path Traversal - https://github.com/advisories/GHSA-34x7-hfp2-rc4v
## node-tar is Vulnerable to Arbitrary File Overwrite and Symlink Poisoning via Insufficient Path Sanitization - https://github.com/advisories/GHSA-8qq5-rm4j-mr97
## Arbitrary File Read/Write via Hardlink Target Escape Through Symlink Chain in node-tar Extraction - https://github.com/advisories/GHSA-83g3-92jg-28cx
## tar has Hardlink Path Traversal via Drive-Relative Linkpath - https://github.com/advisories/GHSA-qffp-2rhf-9h96
## node-tar Symlink Path Traversal via Drive-Relative Linkpath - https://github.com/advisories/GHSA-9ppj-qmqm-q256
## Race Condition in node-tar Path Reservations via Unicode Ligature Collisions on macOS APFS - https://github.com/advisories/GHSA-r6q2-hw4h-h46w
## fix available via npm audit fix --force
## Will install sqlite3@6.0.1, which is a breaking change
# node_modules/tar
# cacache  14.0.0 - 18.0.4
## Depends on vulnerable versions of tar
# node_modules/cacache

# 7 vulnerabilities (2 low, 5 high)

# To address all issues (including breaking changes), run:
# npm audit fix --force 
# PS C:\Users\toyga\Desktop\Programacion Web\semana 6\proy3capas\proy3capas> 

## segun investigue es una libreria antigua y trae dependencias internas, no significa que este malo, al tener librerias internas algunas versiones son antiguas y tiene estos avisos de seguridad.

## instale el sqlite6.0.1 lo cual genero que el nodejs tuviera 0 vulnerabilidades y localhost corriendo en el puerto 3000

## igual añadi un css por que encontraba que la pagina estaba muy simple, aun me falta aprender como añadir imagenes de fondo.

## la presentacion contiene formulario html, css y javascript
- valida y procesa los datos recibidos
- datos: guarda y lista las solicitudes usando sqlite

## instalacion: npm install

## ejecucion: node app.js

## prueba
- abrir en el navegador http://localhost:3000 y para ver los registros o solicitudes: http://localhost:3000/api/solicitudes