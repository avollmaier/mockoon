export const IPCMainListenerChannels = [
  'APP_APPLY_UPDATE',
  'APP_DISABLE_ENVIRONMENT_MENU_ENTRIES',
  'APP_ENABLE_ENVIRONMENT_MENU_ENTRIES',
  'APP_DISABLE_ROUTE_MENU_ENTRIES',
  'APP_ENABLE_ROUTE_MENU_ENTRIES',
  'APP_LOGS',
  'APP_OPEN_EXTERNAL_LINK',
  'APP_QUIT',
  'APP_HIDE_WINDOW',
  'APP_SET_FAKER_OPTIONS',
  'APP_UPDATE_ENVIRONMENT',
  'APP_WRITE_CLIPBOARD',
  'APP_SHOW_FILE'
];

export const IPCMainHandlerChannels = [
  'APP_GET_MIME_TYPE',
  'APP_GET_FILENAME',
  'APP_GET_PLATFORM',
  'APP_BUILD_STORAGE_FILEPATH',
  'APP_REPLACE_FILEPATH_EXTENSION',
  'APP_OPENAPI_CONVERT_FROM',
  'APP_OPENAPI_CONVERT_TO',
  'APP_READ_CLIPBOARD',
  'APP_READ_FILE',
  'APP_READ_ENVIRONMENT_DATA',
  'APP_READ_SETTINGS_DATA',
  'APP_SHOW_OPEN_DIALOG',
  'APP_SHOW_SAVE_DIALOG',
  'APP_START_SERVER',
  'APP_STOP_SERVER',
  'APP_WRITE_FILE',
  'APP_WRITE_ENVIRONMENT_DATA',
  'APP_WRITE_SETTINGS_DATA',
  'APP_NEW_STORAGE_MIGRATION',
  'APP_GET_OS',
  'APP_UNWATCH_FILE',
  'APP_UNWATCH_ALL_FILE'
];

export const IPCRendererHandlerChannels = [
  'APP_MENU',
  'APP_SERVER_EVENT',
  'APP_UPDATE_AVAILABLE',
  'APP_CUSTOM_PROTOCOL',
  'APP_FILE_EXTERNAL_CHANGE'
];
