/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';




function App(): React.JSX.Element {

  return (
       <View style={styles.container}>
     <Text 
     style={styles.textStyle}
     numberOfLines={3}
     ellipsizeMode="clip"
// head: Dấu hiệu lược bỏ (...) sẽ được thêm vào đầu của văn bản. Điều này có nghĩa là các từ cuối cùng của văn bản sẽ được hiển thị, trong khi phần đầu của văn bản sẽ bị thu gọn.
// middle: Dấu hiệu lược bỏ sẽ được đặt ở giữa văn bản. Nói cách khác, phần đầu và cuối của văn bản sẽ được hiển thị, nhưng phần ở giữa sẽ bị lược bỏ và thay thế bằng ....
// tail: Đây là giá trị mặc định. Dấu hiệu lược bỏ được thêm vào cuối văn bản. Phần đầu của văn bản sẽ được hiển thị đầy đủ, trong khi phần cuối cùng sẽ bị cắt bỏ nếu vượt quá số dòng cho phép.
// clip: Không có dấu hiệu lược bỏ được thêm vào. Văn bản sẽ đơn giản là bị cắt bỏ ở đúng điểm kết thúc của dòng cuối cùng có thể hiển thị, mà không có dấu ... thể hiện sự lược bỏ.
     onPress={() => Alert.alert('Bạn đã nhấn vào văn bản!') }
     > 
           Đây là một ví dụ về cách sử dụng thành phần Text trong React Native. Nhấn vào đây để thấy tương tác.
      </Text>
     
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
       flex: 1, // Cho phép thẻ View sử dụng toàn bộ không gian màn hình
       justifyContent: 'center',
       alignContent:'center',
      backgroundColor: '#97b2de',
  },

  textStyle: {
    backgroundColor: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },

  
});

export default App;

//https://chat.openai.com/c/ad5080fe-ab1c-4622-bffc-90e185b7de7f