/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, StyleSheet, ImageBackground ,Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh từ internet */}
      <ImageBackground
        source={{ uri: 'https://cdnphoto.dantri.com.vn/_A-bzwtgAuQWk5yQY7AmJIOrNVI=/thumb_w/1020/2024/04/16/tim-cook-2-1713207767937.png' }}
        style={styles.backgroundImage}
        imageStyle={{ opacity: 0.5 }} // Chỉ định kiểu cho hình ảnh nền
        resizeMode="cover"
       
      />

      {/* Hình ảnh từ local */}
      {/* <Image
        source={require('./img/images.jpeg')}
        style={styles.image}
        resizeMode="contain"
        onLoad={handleLoad}
        onError={handleError}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  backgroundImage: {
    width: '100%', // Chiều rộng của hình nền
    height: '100%', // Chiều cao của hình nền
    justifyContent: 'center', // Căn giữa các thành phần con theo chiều dọc
    alignItems: 'center', // Căn giữa các thành phần con theo chiều ngang
  }
});

export default App;


//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f