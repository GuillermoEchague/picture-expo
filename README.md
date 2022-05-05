
## Instalar Expo en Local

Primero instalamos con npm explo-cli y exp (debemos de tener Node.js y npm instalados)
```bash
npm install -g expo-cli exp
```


## Inicio de proyecto
```bash
expo init picture-map-expo
```

To run your project, navigate to the directory and run one of the following yarn commands.

```bash
- cd picture-map-expo
- yarn start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- yarn android
- yarn ios # requires an iOS device or macOS for access to an iOS simulator
- yarn web
```

## Dependencias del proyecto
```bash
expo install react-native-screens react-native-safe-area-context

yarn add @react-navigation/native-stack

yarn add @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons

yarn add @react-native-community/datetimepicker

yarn add @react-navigation/native-stack

yarn add @react-native-async-storage/async-storage

yarn add @reduxjs/toolkit redux react-redux

yarn add moment
```