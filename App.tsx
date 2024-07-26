/**
 * MaxOut App Mobile
 * Create by Twinger .jsc
 * @author
 * @lehoi2195@gmail.com
 */

// if (_currentFrame) {
//   layer.contentsScale = self.animatedImageScale;
//   layer.contents = (__bridge id)_currentFrame.CGImage;
// } else {
//   [super displayLayer:layer];
// }

import { Alert, BackHandler, ActivityIndicator, StyleSheet, View, Image } from 'react-native';
import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import store, { persistor } from '@src/store';
import { Provider } from 'react-redux';
import Modal from 'react-native-modal';

import LoadingPersist from '@screens/authentication/SplashScreen';
import AppContainer from '@src/navigation/AppContainer';
import { Color, Fonts, FontSize } from '@themes';
import FastImage from 'react-native-fast-image';
import { images } from '@src/assets/images';
import { scale, vScale } from '@src/common';
import { Block, Text } from '@components';

console.disableYellowBox = true;

const App = () => {
  const [updating, setUpdate] = useState(false);

  useEffect(() => {
    const listImage = [images.bgDefault, images.splash];
    const uris: any[] = listImage.map((image) => ({
      uri: Image.resolveAssetSource(image).uri,
    }));
    FastImage.preload(uris);
  }, []);

  useEffect(() => {
    SplashScreen.hide();
    codePush.checkForUpdate().then((update) => {
      if (!update) {
        console.log('The app is up to date!');
      } else {
        setUpdate(true);
      }
    });

    codePush.sync(
      {},
      (status) => {
        switch (status) {
          case codePush.SyncStatus.UPDATE_INSTALLED:
            setUpdate(false);
            break;
          case codePush.SyncStatus.UP_TO_DATE:
            setUpdate(false);
            break;
          case codePush.SyncStatus.UPDATE_IGNORED:
            setUpdate(false);
            break;
          case codePush.SyncStatus.UNKNOWN_ERROR:
            setUpdate(false);
            break;
          default:
            setUpdate(false);
            break;
        }
      },
      undefined,
      undefined,
    );
  }, []);

  // Back android exit app
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Thông báo', 'Bạn có chắc chắn muốn thoát ứng dụng?', [
        {
          text: 'Hủy',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'Đồng ý', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<LoadingPersist />} persistor={persistor}>
          <Suspense fallback={<LoadingPersist />}>
            <AppContainer />
          </Suspense>
        </PersistGate>
      </Provider>

      <Modal
        backdropOpacity={0}
        isVisible={updating}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        style={styles.wrapperModal}>
        <Block
          pd={16}
          pdVertical={24}
          borderRadius={8}
          alignSelf={'center'}
          bgColor={Color.backgroundBlur}
          style={styles.modal}>
          <ActivityIndicator color={Color.black} size={'small'} />
          <Text text={'Đang cập nhật dữ liệu'} mgTop={16} fWeight={'500'} />
        </Block>
      </Modal>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  wrapperModal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    marginTop: 10,
  },
  modal: {
    shadowColor: Color.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 1.5,
    elevation: 2,
  },
});

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: false,
};
const CodePush = codePush(codePushOptions)(App);
export default CodePush;
