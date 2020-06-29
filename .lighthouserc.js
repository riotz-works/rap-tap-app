module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: 'dist',
      url: [
        '/rap-tap-app'
      ]
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // TODO: Eliminate the disablement rule
        'font-display':           'off',
        'maskable-icon':          'off',
        'unused-css-rules':       'off',
        'unused-javascript':      'off',
        'uses-optimized-images':  'off',
        'uses-rel-preconnect':    'off',
        'uses-responsive-images': 'off',
        'without-javascript':     'off'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
