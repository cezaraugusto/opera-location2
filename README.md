[npm-version-image]: https://img.shields.io/npm/v/opera-location2.svg?color=ff0000
[npm-version-url]: https://www.npmjs.com/package/opera-location2
[npm-downloads-image]: https://img.shields.io/npm/dm/opera-location2.svg?color=2ecc40
[npm-downloads-url]: https://www.npmjs.com/package/opera-location2
[action-image]: https://github.com/cezaraugusto/opera-location2/actions/workflows/ci.yml/badge.svg?branch=main
[action-url]: https://github.com/cezaraugusto/opera-location2/actions

> Approximates the current location of the Opera browser across platforms.

# opera-location2 [![Version][npm-version-image]][npm-version-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![workflow][action-image]][action-url]

<img alt="Opera" align="right" src="https://cdn.jsdelivr.net/gh/extension-js/media@9ef31f005a0192907d9f6405838e43776aca2124/browser_logos/svg/opera.svg" width="10.5%" />
  
* By default checks only `stable`. Optionally can cascade to `beta` / `developer`.
* Supports macOS / Windows / Linux
* Works both as an ES module or CommonJS

## Support table

This table lists the default locations where Opera is typically installed for each supported platform and channel. By default, only the Stable channel is checked. When fallback is enabled, the package checks these paths (in order) and returns the first one found.

<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Channel</th>
      <th>Paths checked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3" align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/macos.png" /><br><strong>macOS</strong></td>
      <td align="center">Opera (Stable)</td>
      <td>
        <ul>
          <li><code>/Applications/Opera.app/Contents/MacOS/Opera</code></li>
          <li><code>~/Applications/Opera.app/Contents/MacOS/Opera</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Opera Beta</td>
      <td>
        <ul>
          <li><code>/Applications/Opera Beta.app/Contents/MacOS/Opera Beta</code></li>
          <li><code>~/Applications/Opera Beta.app/Contents/MacOS/Opera Beta</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Opera Developer</td>
      <td>
        <ul>
          <li><code>/Applications/Opera Developer.app/Contents/MacOS/Opera Developer</code></li>
          <li><code>~/Applications/Opera Developer.app/Contents/MacOS/Opera Developer</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td rowspan="3" align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/windows.png" /><br><strong>Windows</strong></td>
      <td align="center">Opera (Stable)</td>
      <td>
        <ul>
          <li><code>%LOCALAPPDATA%\Opera\opera.exe</code></li>
          <li><code>%PROGRAMFILES%\Opera\opera.exe</code></li>
          <li><code>%PROGRAMFILES(X86)%\Opera\opera.exe</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Opera Beta</td>
      <td>
        <ul>
          <li><code>%LOCALAPPDATA%\Opera Beta\opera.exe</code></li>
          <li><code>%PROGRAMFILES%\Opera Beta\opera.exe</code></li>
          <li><code>%PROGRAMFILES(X86)%\Opera Beta\opera.exe</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Opera Developer</td>
      <td>
        <ul>
          <li><code>%LOCALAPPDATA%\Opera developer\opera.exe</code></li>
          <li><code>%PROGRAMFILES%\Opera developer\opera.exe</code></li>
          <li><code>%PROGRAMFILES(X86)%\Opera developer\opera.exe</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td rowspan="3" align="center"><img alt="" width="64" height="64" src="https://cdn.jsdelivr.net/gh/extension-js/media@db5deb23fbfa85530f8146718812972998e13a4d/platform_logos/linux.png" /><br><strong>Linux/other</strong></td>
      <td align="center">Opera (Stable)</td>
      <td>
        <ul>
          <li><code>opera</code> (on <code>$PATH</code>)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Opera Beta</td>
      <td>
        <ul>
          <li><code>opera-beta</code> (on <code>$PATH</code>)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="center">Opera Developer</td>
      <td>
        <ul>
          <li><code>opera-developer</code> (on <code>$PATH</code>)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Returns the first existing path found (given selected channels), or <code>null</code> if none are found.

## Usage

**Via Node.js (strict by default):**

```js
import operaLocation from "opera-location2";

// Strict (Stable only)
console.log(operaLocation());
// => "/Applications/Opera.app/Contents/MacOS/Opera" or null

// Enable fallback (Stable / Beta / Developer)
console.log(operaLocation(true));
// => first found among Stable/Beta/Developer or null
```

**Via CLI:**

```bash
npx opera-location2
# Strict (Stable only)

npx opera-location2 --fallback
# Enable cascade (Stable / Beta / Developer)
```

## Related projects

* [brave-location](https://github.com/cezaraugusto/brave-location)
* [chrome-location2](https://github.com/cezaraugusto/chrome-location2)
* [edge-location](https://github.com/cezaraugusto/edge-location)
* [firefox-location2](https://github.com/cezaraugusto/firefox-location2)
* [vivaldi-location2](https://github.com/cezaraugusto/vivaldi-location2)
* [yandex-location](https://github.com/cezaraugusto/yandex-location2)
* [librewolf-location](https://github.com/cezaraugusto/librewolf-location)
* [waterfox-location](https://github.com/cezaraugusto/waterfox-location)

## License

MIT (c) Cezar Augusto.


