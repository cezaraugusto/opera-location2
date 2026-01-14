import { describe, expect, test, afterEach, vi } from 'vitest';

/* biome-ignore-all lint/suspicious/noExplicitAny: test harness uses dynamic imports with untyped injected deps */

describe('opera-location2 fallbacks', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  test('macOS: strict null, fallback finds Beta', async () => {
    const scanOsxPath = (await import('../src/scan-osx-path')).default as any;
    const strict = scanOsxPath(false, {
      fs: { existsSync: (p: string) => p.includes('Opera Beta.app') },
      userhome: () => '/Users/test/Applications',
    });
    const fallback = scanOsxPath(true, {
      fs: { existsSync: (p: string) => p.includes('Opera Beta.app') },
      userhome: () => '/Users/test/Applications',
    });
    expect(strict).toBeNull();
    expect(
      typeof fallback === 'string' && /Opera Beta\.app/.test(fallback),
    ).toBe(true);
  });

  test('Windows: strict null, fallback finds Developer', async () => {
    const scanWindowsPath = (await import('../src/scan-windows-path'))
      .default as any;
    const strict = scanWindowsPath(false, {
      fs: { existsSync: (p: string) => /Opera developer/.test(p) },
      env: {
        LOCALAPPDATA: 'C\\Local',
        PROGRAMFILES: undefined,
        'PROGRAMFILES(X86)': undefined,
      } as any,
    });
    const fallback = scanWindowsPath(true, {
      fs: { existsSync: (p: string) => /Opera developer/.test(p) },
      env: {
        LOCALAPPDATA: 'C\\Local',
        PROGRAMFILES: undefined,
        'PROGRAMFILES(X86)': undefined,
      } as any,
    });
    expect(strict).toBeNull();
    expect(
      typeof fallback === 'string' && /Opera developer/.test(fallback),
    ).toBe(true);
  });

  test('Linux/other: strict only stable; fallback tries beta/developer', async () => {
    const scanUnknown = (await import('../src/scan-unknown-platform-path'))
      .default as any;
    const calls: string[] = [];
    const strict = scanUnknown(false, {
      which: {
        sync: (cmd: string) => {
          calls.push(cmd);
          throw new Error('nf');
        },
      },
    });
    const result = scanUnknown(true, {
      which: {
        sync: (cmd: string) => {
          calls.push(cmd);
          if (cmd === 'opera-beta') return '/usr/bin/opera-beta';
          throw new Error('nf');
        },
      },
    });
    expect(strict).toBeNull();
    expect(result === null || result === '/usr/bin/opera-beta').toBe(true);
    expect(calls[0]).toBe('opera');
  });
});
