const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const httpsURL = value => {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; } catch { return ''; }
};
export const downloadableAssets = release => (release.assets || []).filter(asset =>
  httpsURL(asset.url) && !/\.(?:sha\d*|txt|sig|asc)$|debug|symbols|dependencies|runtime-py|shader-translator|(?:^|-)update\.json$/i.test(asset.name)
);
// Discontinued projects retain an explicitly labeled snapshot rather than a live release claim.
export const releaseCopyFor = (project, t) => ({ ...t, ...project?.archiveCopy?.[t.lang] });
export const latestRelease = data => data?.releases?.find(release => !release.caution && httpsURL(release.url));
const isNightly = release => /nightly/i.test(`${release.tag_name || release.tag || ''} ${release.name || release.title || ''}`);
export const releaseDataFor = (project, data) => data && project?.releaseOptions?.excludeNightly
  ? { ...data, releases: (data.releases || []).filter(release => !isNightly(release)) }
  : data;

export function renderLatestCommit(data, t, fallback) {
  const commit = data?.latestCommit;
  const date = commit?.committedAt || fallback?.activityDate;
  const url = httpsURL(commit?.url) || httpsURL(fallback?.repo ? `${fallback.repo}/commits` : '');
  if (!date || !url || !Number.isFinite(Date.parse(date))) return '';
  return `${esc(t.lastCommit)}: <a href="${esc(url)}" target="_blank" rel="noopener noreferrer"><time datetime="${esc(date)}">${esc(date.slice(0, 10))}</time></a>`;
}

export function renderLatestRelease(data, t, downloadHref) {
  const latest = latestRelease(data);
  const version = latest ? `<span>${esc(t.latestRelease)}:</span> <a href="${esc(downloadHref || latest.url)}" data-latest-release>${esc(latest.tag || latest.title)}</a>${latest.prerelease ? ` <span class="release-preview">${esc(t.prerelease)}</span>` : ''}` : '';
  const checkedAt = Date.parse(data?.fetchedAt);
  const checked = Number.isFinite(checkedAt) ? `<span class="release-checked">${esc(t.lastChecked)}: <time datetime="${esc(data.fetchedAt)}">${new Date(checkedAt + 8 * 60 * 60 * 1000).toISOString().replace('T', ' ').slice(0, 16)} UTC+8</time></span>` : '';
  return version + checked;
}

export function renderReleaseSnapshot(data, t) {
  return `${esc(t.releaseNote)}${data?.fetchedAt ? ` ${esc(t.snapshot)}: <time datetime="${esc(data.fetchedAt)}">${esc(data.fetchedAt.replace('T', ' ').slice(0, 16))} UTC</time>.` : ''}`;
}

export function renderReleaseList(data, t, { showAssets = true, showLinks = true } = {}) {
  if (!data?.releases?.length) return `<p class="empty-release">${esc(t.noReleases)}</p>`;
  const external = (url, text, cls = '') => `<a class="${cls}" href="${esc(httpsURL(url))}" target="_blank" rel="noopener noreferrer">${text}<span aria-hidden="true"> ↗</span></a>`;
  return data.releases.map((r, i) => {
    const assets = downloadableAssets(r);
    const launcherLinks = showLinks && !r.caution ? (r.launcherDownloads || []).filter(link =>
      httpsURL(link.url) && ['windows', 'linux', 'windows-portable'].includes(link.kind)
    ) : [];
    const launchers = launcherLinks.length ? `<ul class="asset-list launcher-downloads">${launcherLinks.map(link =>
      `<li>${external(link.url, `<span>${esc(t[link.kind === 'windows' ? 'launcherWindows' : link.kind === 'linux' ? 'launcherLinux' : 'launcherPortable'])}</span>`)}</li>`
    ).join('')}</ul>` : '';
    const links = `${launchers}${showLinks ? external(r.url, esc(t.releasePage), 'text-link') : ''}${showLinks && showAssets && !r.caution && assets.length ? `<ul class="asset-list">${assets.map(a => `<li>${external(a.url, `<span>${esc(a.name)}</span>`)}<span>${a.size ? `${(a.size / 1024 / 1024).toFixed(1)} MB` : ''}</span></li>`).join('')}</ul>` : showLinks && showAssets && !r.caution && !launcherLinks.length ? `<p class="fineprint">${esc(t.noAssets)}</p>` : ''}`;
    // No expandable empty panel for archived versions whose original downloads are gone.
    const info = `<div><h3>${esc(r.title)}</h3><span class="release-date">${r.publishedAt ? esc(r.publishedAt.slice(0, 10)) : ''}</span> ${r.prerelease ? `<span class="evidence focused">${esc(t.prerelease)}</span>` : ''}</div>`;
    const caution = r.caution ? `<p class="release-caution">${esc(t.blocked)}</p>` : '';
    return showLinks ? `<details class="release" ${i === 0 ? 'open' : ''}><summary>${info}<span class="release-toggle" aria-hidden="true">+</span></summary>${caution}${links}</details>` : `<article class="release">${info}${caution}</article>`;
  }).join('');
}
