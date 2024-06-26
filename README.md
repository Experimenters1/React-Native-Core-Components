# React-Native-Core-Components
## React Native Core Components
### Tạo một dự án React Native mới
Bạn có thể bắt đầu bằng cách tạo một dự án React Native mới và cài đặt TypeScript: <br>
```bash
npx react-native init SignUpProject --template react-native-template-typescript
cd SignUpProject

```
https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native <br>

+ ) **View:** Cơ bản và linh hoạt, dùng để tổ chức layout cho ứng dụng.
+ ) **Text:** Dùng để hiển thị văn bản. Bất kỳ nội dung văn bản nào trong **React Native** phải được bao bọc bởi một thành phần **Text.**
+ ) **Image:** Cho phép bạn hiển thị hình ảnh từ một **URL** hoặc tài nguyên nội bộ.
+ ) **Button:** Cung cấp một cách dễ dàng để thực hiện một hành động khi người dùng tương tác.
+ ) **TouchableOpacity:** Cho phép các thành phần khác trở nên tương tác, với hiệu ứng làm mờ khi được nhấn.
+ ) **FlatList:** Hiệu quả cho việc hiển thị danh sách lớn hoặc thường xuyên thay đổi, với khả năng tái sử dụng các thành phần mục để tối ưu hiệu suất.

### 1. ScrollView
![image](https://github.com/Experimenters1/React-Native-Core-Components/assets/64000769/5ad4182e-3256-47f6-81e3-9d5ae4a0632c) <br>
+ ) **Mục đích: ScrollView** dùng để hiển thị một lượng nội dung hạn chế mà có thể không vừa với màn hình và người dùng có thể cuộn để xem thêm. Nó có thể chứa các thành phần khác nhau không chỉ giới hạn ở danh sách.
+ ) **Hiệu suất:** Không phù hợp để hiển thị số lượng lớn các thành phần hay dữ liệu vì nó tải tất cả các thành phần ngay từ đầu, có thể gây chậm và tốn bộ nhớ.
+ ) **Sử dụng:** Thường được sử dụng khi bạn cần cuộn qua một số lượng hạn chế các thành phần hoặc nội dung phức tạp không có cấu trúc lặp lại.

### 2. FlatList



