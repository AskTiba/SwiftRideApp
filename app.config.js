// Define environment variables
const APP_VARIANT = process.env.APP_VARIANT || 'production'; // Fallback to 'production' if undefined
const IS_DEV = APP_VARIANT === 'development';
const IS_PREVIEW = APP_VARIANT === 'preview';
const IS_PRODUCTION = process.env.NODE_ENV === 'production'; // Ensure NODE_ENV is set properly

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.asktiba.SwiftRideApp.dev';
  }
  if (IS_PREVIEW) {
    return 'com.asktiba.SwiftRideApp.preview';
  }
  return 'com.asktiba.SwiftRideApp.production';
};
const getAppName = () => {
  if (IS_DEV) {
    return 'SwiftRide';
  }
  if (IS_PREVIEW) {
    return 'SwiftRide2.0';
  }
  return 'SwiftRide3.0';
};

export default {
expo: {
updates: {
    url: "https://u.expo.dev/7c9c96c8-1a3a-41f7-b119-00a69bfd141b"
},
runtimeVersion: {
    policy: "appVersion"
},
name: getAppName(),
    slug: 'SwiftRideApp',
    version: '1.0.0',
    scheme: 'SwiftRideApp',
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-dev-launcher',
        {
          launchMode: 'most-recent',
        },
      ],
      [
        '@rnmapbox/maps',
        {
          RNMapboxMapsDownloadToken: process.env.EXPO_PUBLIC_MAPBOX_SECRET_KEY,
          RNMapboxMapsVersion: '11.0.0',
        },
      ],
      [
        'expo-location',
        {
          locationWhenInUsePermission: 'Show current location on map.',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: getUniqueIdentifier(),
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '7c9c96c8-1a3a-41f7-b119-00a69bfd141b',
      },
    },
  },
};
