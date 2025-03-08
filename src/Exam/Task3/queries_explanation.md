# Giải thích các truy vấn SQL trong Task 3

## 1. Lấy danh sách người dùng đã tạo ít nhất 3 đơn hàng
### 🔍 **Mô tả**
Truy vấn này lấy danh sách các người dùng có tối thiểu 3 đơn hàng.

### 🔄 **Giải pháp**
- Dùng `JOIN` giữa bảng `Users` và `Orders` qua `user_id`.
- Nhóm theo `user_id` và dùng `COUNT(o.id)` đế đ\u1ebm số lượng đơn hàng.
- Lọc những người có tối thiểu 3 đơn hàng bằng `HAVING total_orders >= 3`.

----------------------------------------------------------------------------

## 2. Tìm 5 sản phẩm bán chạy nhất (doanh thu cao nhất)
### 🔍 **Mô tả**
Lấy danh sách 5 sản phẩm có tổng doanh thu cao nhất (giá x số lượng bán).

### 🔄 **Giải pháp**
- Dùng `JOIN` giữa `Products` và `Orders`.
- Nhóm theo `product_id`, tính tổng doanh thu bằng `SUM(o.amount * p.price)`.
- Sắp xếp theo doanh thu `ORDER BY total_sales DESC` và lấy 5 sản phẩm đầu tiên `LIMIT 5`.

----------------------------------------------------------------------------

## 3. Tính số tiền đặt hàng trung bình theo tháng trong năm 2023
### 🔍 **Mô tả**
Tính số tiền trung bình của đơn hàng trong từng tháng của năm 2023.

### 🔄 **Giải pháp**
- Lọc các đơn hàng trong năm 2023 bằng `WHERE YEAR(order_date) = 2023`.
- Nhóm theo tháng `GROUP BY MONTH(order_date)`.
- Tính trung bình giá trị đơn hàng bằng `AVG(o.amount)`.

----------------------------------------------------------------------------


## 4. Tìm người dùng đã mua sắm tất cả danh mục sản phẩm
### 🔍 **Mô tả**
Truy vấn này tìm những người dùng đã mua sắm tất cả các danh mục sản phẩm hiện có trong hệ thống.

### 🔄 **Giải pháp**
- `JOIN` giữa `Users`, `Orders`, và `Products` để xác định danh mục mà người dùng đã mua.
- Nhóm theo `user_id`, sử dụng `COUNT(DISTINCT p.category)`.
- So sánh số danh mục người dùng mua với tổng số danh mục hiện có.

----------------------------------------------------------------------------


