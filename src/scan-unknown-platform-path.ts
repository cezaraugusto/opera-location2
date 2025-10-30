import which from 'which';

type WhichLike = { sync: (cmd: string) => string };
type Deps = { which?: WhichLike };

export default function scanUnknownPlatform(
  allowFallback = false,
  deps?: Deps,
) {
  const w = deps?.which ?? which;
  const stable = ['opera'];
  const fallbacks = ['opera-beta', 'opera-developer'];
  const candidates = allowFallback ? [...stable, ...fallbacks] : stable;

  for (const cmd of candidates) {
    try {
      const resolved = w.sync(cmd);
      if (resolved) return resolved;
    } catch (_) {}
  }

  return null;
}
