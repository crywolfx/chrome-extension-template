module.exports = function ({ version = '0.0.1', isProduction = false, isHot = false }) {
  const enableInspectHeader = !isHot || isProduction;
  const config = {
    action: {
      default_popup: 'popup.html',
    },
    background: {
      service_worker: 'background/background.js',
    },
    description: 'chrome extension template',
    host_permissions: ['<all_urls>'],
    manifest_version: 3,
    name: 'tpl',
    offline_enabled: false,
    options_page: 'options.html',
    permissions: [
      'tabs',
      'activeTab',
      'storage',
      'cookies',
      'scripting',
      'system.display',
      'tabCapture',
      'contextMenus',
      enableInspectHeader && 'declarativeNetRequest',
    ].filter(Boolean),
    content_scripts: [
      {
        matches: ['<all_urls>'],
        css: [],
        js: ['content/content.js'],
        run_at: 'document_end',
      },
    ],
    version: version,
    web_accessible_resources: [
      {
        matches: ['<all_urls>'],
        resources: [],
      },
    ],
    host_permissions: ["<all_urls>"]
  };

  if (!isHot || isProduction) {
    config.declarative_net_request = {
      rule_resources: [],
    };
  }

  return config;
};
