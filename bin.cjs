#!/usr/bin/env node
'use strict';

const api = require('./dist/index.cjs');
const locateOpera = api.default || api;
const getOperaVersion = api.getOperaVersion;
const getInstallGuidance = api.getInstallGuidance;

const argv = process.argv.slice(2);
const allowFallback = argv.includes('--fallback') || argv.includes('-f');
const printBrowserVersion =
  argv.includes('--opera-version') || argv.includes('--browser-version');
const allowExec = argv.includes('--allow-exec');

try {
  const operaPath =
    (typeof locateOpera === 'function' && locateOpera(allowFallback)) ||
    (typeof locateOpera === 'function' && locateOpera(true)) ||
    null;

  if (!operaPath) {
    const guidance =
      (typeof getInstallGuidance === 'function' && getInstallGuidance()) ||
      'Opera not found.';
    console.error(guidance);
    process.exit(1);
  }

  if (printBrowserVersion && typeof getOperaVersion === 'function') {
    const v = getOperaVersion(operaPath, { allowExec });
    if (!v) {
      console.log('');
      process.exit(2);
    }
    console.log(String(v));
    process.exit(0);
  }

  console.log(String(operaPath));
} catch (e) {
  console.error(String(e?.message ? e.message : e));
  process.exit(1);
}

