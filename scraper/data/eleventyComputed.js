module.exports = {
  versions: (data) => data.bugs.versions,
  releases: (data) => data.bugs.releases,
  apis: (data) => data.bugs.rows,
  sections: () => ({
    shipped: 'Shipped',
    ot: 'Origin Trial (<a href="https://github.com/GoogleChrome/OriginTrials/blob/gh-pages/developer-guide.md">details</a>)',
    dev: 'Developer Trial - behind a flag (<a href="https://web.dev/fugu-status/#flag">details</a>)',
    started: 'Started',
    assigned: 'Assigned',
    consideration: 'Under Consideration (star and comment the bug)',
  }),
};
