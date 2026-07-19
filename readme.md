# PROJECT RULES — PERSONAL PORTFOLIO WEBSITE

## 1. Mục tiêu dự án

Xây dựng một website portfolio cá nhân bằng React để giới thiệu:

* Thông tin cá nhân.
* Mục tiêu nghề nghiệp.
* Kỹ năng chuyên môn.
* Ngôn ngữ lập trình và công nghệ đã sử dụng.
* Kinh nghiệm thực tập tại GOLINE GLOBAL.
* Các dự án nổi bật.
* Vai trò và công việc đã thực hiện trong từng dự án.
* Quy trình xử lý và kết quả đạt được.
* Thông tin liên hệ.
* CV tải xuống.
* Giao diện song ngữ Việt Nam, tiếng Anh, tiếnh Nhật, tiếng trung quốc, hàn .

Website không được làm giống một CV dạng văn bản đơn giản. Giao diện phải có tính sáng tạo, có câu chuyện xuyên suốt, animation mượt, dễ sử dụng và thể hiện rõ cá tính của một lập trình viên Fresher.

---

# 2. Nguyên tắc bắt buộc đối với AI

## 2.1. Quy tắc thực hiện

AI phải làm dự án theo đúng thứ tự:

1. Phân tích yêu cầu.
2. Xây dựng cấu trúc dữ liệu.
3. Xây dựng cấu trúc thư mục.
4. Thiết lập router.
5. Thiết lập theme.
6. Thiết lập đa ngôn ngữ.
7. Tạo component dùng chung.
8. Tạo layout.
9. Xây dựng từng trang.
10. Thêm animation.
11. Kiểm tra responsive.
12. Kiểm tra accessibility.
13. Kiểm tra lỗi.
14. Tối ưu hiệu năng.
15. Hoàn thiện README.

Không được viết toàn bộ website trong một file.

Không được bỏ qua bước xây dựng cấu trúc dữ liệu và component dùng chung.

Không được tự ý thay đổi nội dung dự án, công nghệ hoặc vai trò của chủ portfolio.

Không được tạo dữ liệu kinh nghiệm giả.

Nếu thiếu thông tin cá nhân như email, GitHub, LinkedIn hoặc ảnh đại diện, phải sử dụng placeholder rõ ràng.

Ví dụ:

```js
email: "your-email@example.com"
github: "https://github.com/your-username"
linkedin: "https://linkedin.com/in/your-profile"
```

---

## 2.2. Quy tắc code

* Sử dụng React functional component.
* Sử dụng React Hooks.
* Mỗi component chỉ chịu trách nhiệm cho một nhóm chức năng rõ ràng.
* Không viết component quá lớn.
* Component trên khoảng 150–200 dòng phải được xem xét tách nhỏ.
* Không lặp lại markup hoặc logic.
* Không hard-code nội dung trực tiếp trong nhiều component.
* Dữ liệu cá nhân, kỹ năng và dự án phải được lưu trong file data riêng.
* Nội dung hiển thị phải lấy từ file translation hoặc file data.
* Tên component sử dụng PascalCase.
* Tên biến và hàm sử dụng camelCase.
* Không sử dụng tên biến khó hiểu như `a`, `b`, `data1`, `temp2`.
* Không sử dụng icon bằng emoji trong giao diện chính.
* Không dùng icon từ nhiều thư viện khác nhau.
* Không import toàn bộ thư viện icon.
* Chỉ import những icon thực tế được sử dụng.
* Không dùng hiệu ứng quá nhiều gây rối mắt.
* Không tạo animation làm chậm thao tác của người dùng.
* Không dùng màu chữ có độ tương phản thấp.
* Không sử dụng hình ảnh không rõ nguồn gốc.
* Không tạo button giả không có chức năng.
* Mọi link bên ngoài phải có trạng thái hover và focus.
* Link mở tab mới phải có `rel="noopener noreferrer"`.

---

# 3. Công nghệ đề xuất

## Core

* React.
* Vite.
* JavaScript hoặc TypeScript.
* React Router.
* Motion for React.
* react-i18next.
* Lucide React.
* CSS Modules, Tailwind CSS hoặc SCSS.

Ưu tiên sử dụng:

```txt
React
Vite
TypeScript
React Router
Motion for React
react-i18next
Lucide React
Tailwind CSS
```

## Công cụ bổ sung

Có thể sử dụng:

* React Helmet Async để quản lý tiêu đề và metadata.
* ESLint để kiểm tra code.
* Prettier để format code.
* EmailJS hoặc form API riêng cho trang liên hệ.
* GitHub Pages, Vercel hoặc Netlify để deploy.

Không thêm thư viện khi chưa thực sự cần thiết.

---

# 4. Ý tưởng thiết kế tổng thể

## 4.1. Concept

Concept chính:

> Developer Journey — Hành trình từ việc tìm hiểu hệ thống cũ đến xây dựng và chuyển đổi hệ thống mới.

Website phải thể hiện được điểm khác biệt của chủ portfolio:

* Có kinh nghiệm đọc và phân tích hệ thống cũ.
* Từng tham gia hai dự án migration.
* Có khả năng làm việc với nhiều nền tảng.
* Biết kiểm tra nghiệp vụ trước khi chuyển đổi code.
* Biết làm việc với frontend, backend, database và hệ thống cloud.
* Có khả năng học công nghệ mới.
* Không chỉ biết viết giao diện mà còn hiểu luồng nghiệp vụ.

Phong cách thiết kế:

* Hiện đại.
* Chuyên nghiệp.
* Có chiều sâu kỹ thuật.
* Sáng tạo nhưng không màu mè.
* Dễ đọc với nhà tuyển dụng.
* Có một điểm nhấn riêng liên quan đến migration hoặc developer journey.

---

## 4.2. Ý tưởng hình ảnh

Có thể sử dụng một trong các ý tưởng sau:

### Ý tưởng A — Migration Timeline

Hiển thị hành trình:

```txt
Legacy System
    ↓
Business Analysis
    ↓
Code Migration
    ↓
Testing
    ↓
Modern Platform
```

### Ý tưởng B — Developer Workspace

Trang chủ có giao diện giống không gian làm việc của lập trình viên:

* Một card thông tin cá nhân.
* Một cửa sổ code nhỏ.
* Một timeline dự án.
* Các công nghệ bay nhẹ xung quanh.
* Terminal mini hiển thị lời giới thiệu.

### Ý tưởng C — Before / After Migration

Mỗi dự án migration có phần so sánh:

```txt
Before → Migration Process → After
```

Ví dụ:

```txt
BHT-BASIC → Android + VB.NET
JSP → C#/.NET
```

Nên kết hợp Ý tưởng A và Ý tưởng C để tạo điểm khác biệt.

---

# 5. Hệ thống màu sắc

## Light mode

```css
--background: #f7f9fc;
--surface: #ffffff;
--surface-secondary: #eef2f7;
--text-primary: #111827;
--text-secondary: #5b6472;
--primary: #2563eb;
--primary-hover: #1d4ed8;
--accent: #14b8a6;
--border: #dce3ec;
--success: #16a34a;
```

## Dark mode

```css
--background: #0b1020;
--surface: #11182b;
--surface-secondary: #172036;
--text-primary: #f8fafc;
--text-secondary: #aeb9cc;
--primary: #60a5fa;
--primary-hover: #93c5fd;
--accent: #2dd4bf;
--border: #28344d;
--success: #4ade80;
```

## Quy tắc màu

* Một màu chính.
* Một màu nhấn.
* Không dùng quá nhiều màu nổi.
* Màu primary dùng cho nút chính, active menu và link.
* Màu accent dùng để nhấn mạnh công nghệ hoặc điểm nổi bật.
* Các project card có thể có màu nhận diện riêng nhưng vẫn phải cùng hệ thống màu.
* Không sử dụng gradient quá mạnh.
* Gradient chỉ dùng cho hero, background decoration hoặc button chính.
* Phải hỗ trợ dark mode nếu đủ thời gian.
* Màu theme và ngôn ngữ phải được lưu vào localStorage.

---

# 6. Typography

Đề xuất font:

* Inter.
* Manrope.
* Plus Jakarta Sans.
* Space Grotesk cho heading.
* JetBrains Mono cho code hoặc technology label.

Quy tắc:

* Chỉ sử dụng tối đa hai font chính.
* Heading phải rõ ràng và có cấp bậc.
* Body text dễ đọc.
* Không dùng font quá nghệ thuật cho nội dung chính.
* Nội dung dài phải có line-height từ 1.5 đến 1.8.
* Không sử dụng quá nhiều chữ in hoa.
* Không làm đoạn văn quá dài.

---

# 7. Cấu trúc các trang

Website phải được chia thành các route riêng.

```txt
/
├── /about
├── /skills
├── /experience
├── /projects
├── /projects/:slug
└── /contact
```

Có thể bổ sung:

```txt
/resume
/not-found
```

---

# 8. Nội dung từng trang

## 8.1. Trang Home

Mục tiêu:

* Gây ấn tượng trong 5–10 giây đầu.
* Cho người xem biết chủ portfolio là ai.
* Cho biết định hướng nghề nghiệp.
* Dẫn người xem đến dự án nổi bật.

Nội dung:

* Ảnh đại diện hoặc developer illustration.
* Tên đầy đủ.
* Vị trí mong muốn.
* Một câu giới thiệu ngắn.
* Hai nút hành động chính.
* Các công nghệ nổi bật.
* Preview hai dự án migration.
* Số liệu nhanh.
* Nút chuyển sang trang tiếp theo.

Ví dụ hero:

```txt
Xin chào, tôi là [Tên của bạn]

Fresher Software Developer

Tôi có kinh nghiệm tham gia các dự án migration hệ thống cũ
sang nền tảng hiện đại, tập trung vào phân tích nghiệp vụ,
chuyển đổi code và đảm bảo hệ thống mới giữ đúng hành vi cũ.
```

Nút chính:

```txt
Xem dự án
Tải CV
```

Số liệu nhanh:

```txt
2 dự án migration
1 kỳ thực tập
Nhiều nền tảng đã làm việc
```

Hiệu ứng:

* Hero xuất hiện theo stagger.
* Ảnh hoặc illustration floating nhẹ.
* Technology badge xuất hiện lần lượt.
* CTA có hover transition.
* Không dùng hiệu ứng chữ chạy liên tục gây khó đọc.

---

## 8.2. Trang About

Nội dung:

* Giới thiệu bản thân.
* Quá trình học tập.
* Định hướng nghề nghiệp.
* Điểm mạnh.
* Phong cách làm việc.
* Timeline học tập và thực tập.
* Sở thích chuyên môn.

Các điểm mạnh nên thể hiện:

* Có khả năng đọc và tìm hiểu source code cũ.
* Có khả năng phân tích luồng nghiệp vụ.
* Có khả năng chuyển đổi giữa nhiều công nghệ.
* Chủ động kiểm tra dữ liệu và logic.
* Có tinh thần học hỏi.
* Chú trọng giữ đúng nghiệp vụ khi migration.
* Có thể làm việc với tài liệu tiếng Nhật hoặc hệ thống Nhật nếu đúng với thực tế.

Không viết các câu chung chung như:

```txt
Tôi chăm chỉ.
Tôi nhiệt tình.
Tôi chịu khó.
```

Phải gắn điểm mạnh với ví dụ thực tế.

---

## 8.3. Trang Skills

Chia kỹ năng thành nhóm.

### Programming Languages

* Java.
* JavaScript.
* TypeScript nếu đã sử dụng.
* C#.
* VB.NET.
* SQL.
* BHT-BASIC ở mức đọc và phân tích nếu đúng thực tế.

### Frontend

* React.
* Vite.
* HTML.
* CSS.
* Responsive Design.
* HLS.js nếu muốn giới thiệu dự án LearnOva.

### Backend

* Spring Boot.
* C#/.NET.
* REST API.
* Webhook.
* Payment integration.

### Database

* PostgreSQL.
* Database design.
* SQL query.
* Data migration.
* Seed script.

### Tools and Platforms

* Git.
* GitHub.
* Docker.
* AWS S3.
* CloudFront.
* MediaConvert.
* PayOS.
* PayPal sandbox nếu đã hoàn thành tích hợp.
* Postman.

### Kỹ năng nghiệp vụ

* Legacy code analysis.
* System migration.
* Business logic verification.
* Debugging.
* API integration.
* Excel report generation.
* Technical documentation.

Không hiển thị phần trăm kỹ năng như:

```txt
Java 90%
React 95%
```

Trừ khi có tiêu chí đo rõ ràng.

Nên sử dụng mức độ:

```txt
Đã sử dụng trong dự án
Có kinh nghiệm thực hành
Đang học và phát triển
```

---

## 8.4. Trang Experience

Hiển thị dạng timeline.

### GOLINE GLOBAL

```txt
Vị trí: Software Developer Intern
Công ty: GOLINE GLOBAL
Thời gian: [Điền thời gian thực tập]
```

Nội dung:

* Tham gia tìm hiểu hệ thống cũ.
* Đọc tài liệu nghiệp vụ.
* Phân tích source code hiện tại.
* So sánh logic cũ và logic mới.
* Tham gia migration chức năng.
* Kiểm tra dữ liệu và kết quả đầu ra.
* Làm việc với C#, VB.NET, Java/JSP, PostgreSQL hoặc công nghệ phù hợp từng dự án.
* Viết hoặc cập nhật tài liệu kỹ thuật.
* Hỗ trợ kiểm tra lỗi sau migration.

Timeline không được chỉ ghi tên công ty và thời gian. Phải thể hiện được đã thực sự làm những gì.

---

## 8.5. Trang Projects

Trang này hiển thị toàn bộ dự án.

Mỗi project card phải có:

* Tên dự án.
* Loại dự án.
* Mô tả ngắn.
* Vai trò.
* Công nghệ chính.
* Điểm nổi bật.
* Hình minh họa.
* Nút xem chi tiết.
* Link GitHub hoặc demo nếu có.

Bộ lọc:

```txt
Tất cả
Migration
Web Application
Frontend
Backend
Cloud
```

Bộ lọc phải có animation mượt nhưng không làm thay đổi layout đột ngột.

---

# 9. Các dự án phải đưa vào portfolio

## 9.1. Project 1 — BHT-BASIC to Android Migration

### Tên đề xuất

```txt
Handy Terminal System Migration
```

### Mô tả ngắn

Migration hệ thống thiết bị Handy từ nền tảng BHT-OS sử dụng BHT-BASIC sang ứng dụng Android, đồng thời điều chỉnh ứng dụng giao tiếp trên PC bằng VB.NET.

### Bối cảnh

Hệ thống cũ sử dụng:

* Thiết bị chuyên dụng BHT.
* Hệ điều hành BHT-OS.
* Ngôn ngữ BHT-BASIC.

Các vấn đề:

* Nền tảng proprietary.
* Khó mở rộng.
* Khó bảo trì.
* Phụ thuộc vào thiết bị cũ.
* Khó thay thế phần cứng.

### Mục tiêu

* Chuyển ứng dụng Handy sang Android.
* Sử dụng thiết bị Keyence BT-A1000.
* Điều chỉnh ứng dụng Communication trên PC.
* Giữ nguyên Server và Database.
* Không làm thay đổi nghiệp vụ hiện tại.

### Phạm vi hệ thống

```txt
Android Handy App
        ↕
VB.NET Communication App
        ↕
Existing Server / Database
```

### Vai trò

```txt
Software Developer Intern
```

### Công việc thực hiện

* Tìm hiểu source BHT-BASIC.
* Phân tích luồng xử lý trên thiết bị cũ.
* Đối chiếu hành vi của hệ thống cũ.
* Hỗ trợ chuyển đổi chức năng sang Android.
* Điều chỉnh logic giao tiếp phía PC bằng VB.NET.
* Kiểm tra luồng truyền và nhận dữ liệu.
* Đảm bảo nghiệp vụ giữ nguyên sau migration.
* Hỗ trợ test trên thiết bị Keyence BT-A1000.

### Công nghệ

* Android.
* VB.NET.
* BHT-BASIC.
* Keyence BT-A1000.
* Existing Server.
* Existing Database.

### Điểm nổi bật phải thể hiện

Đây không chỉ là chuyển đổi ngôn ngữ lập trình mà là quá trình thay đổi thiết bị và nền tảng, trong khi vẫn phải giữ đúng luồng vận hành hiện có.

### Visual riêng cho dự án

Hiển thị sơ đồ:

```txt
Before
BHT Device + BHT-BASIC

Migration
Business analysis + Function conversion

After
Android Device + VB.NET Communication
```

---

## 9.2. Project 2 — JSP to C# Migration

### Tên đề xuất

```txt
Legacy JSP to C# WMS Migration
```

### Mô tả ngắn

Migration các chức năng của hệ thống quản lý kho từ JSP sang C#/.NET, đồng thời kiểm tra nghiệp vụ, dữ liệu và kết quả xuất báo cáo để đảm bảo hệ thống mới hoạt động giống hệ thống cũ.

### Bối cảnh

Hệ thống cũ:

* Java.
* JSP.
* Business logic nằm trong source cũ.
* Báo cáo sử dụng Excel template.
* Database PostgreSQL.

Hệ thống mới:

* C#.
* .NET.
* Phân tách Application và Infrastructure.
* PostgreSQL.
* Excel report generation.

### Công việc thực hiện

* Đọc và phân tích source JSP cũ.
* Xác định luồng xử lý nghiệp vụ.
* Xác định các bảng database liên quan.
* So sánh logic giữa hệ thống cũ và hệ thống mới.
* Hỗ trợ chuyển đổi chức năng từ JSP sang C#.
* Kiểm tra điều kiện phân quyền.
* Xử lý thông báo lỗi và popup.
* Kiểm tra query và dữ liệu đầu ra.
* Hỗ trợ tạo báo cáo Excel.
* Kiểm tra dữ liệu tổng hợp theo nhân viên và theo tháng.
* Kiểm tra các trường hợp logic mới khác logic cũ.
* Viết hoặc cập nhật tài liệu nghiệp vụ.

### Chức năng tiêu biểu

```txt
帳票_個人日報一覧
Personal Daily Report List
```

Đầu vào:

* Session ID.
* Nhân viên cần xuất báo cáo.
* Tháng cần xuất báo cáo.

Đầu ra:

* File Excel `.xlsx`.
* Một worksheet cho mỗi nhân viên.
* Dữ liệu công việc theo ngày.
* Tổng hợp dữ liệu theo tháng.

### Công nghệ

* Java.
* JSP.
* C#.
* .NET.
* PostgreSQL.
* SQL.
* Excel template.
* Git.

### Điểm nổi bật phải thể hiện

* Không chỉ chuyển syntax từ Java sang C#.
* Phải hiểu logic nghiệp vụ cũ.
* Phải kiểm tra sự khác biệt giữa hai hệ thống.
* Phải giữ đúng kết quả tính toán và dữ liệu xuất báo cáo.
* Phải xử lý các trường hợp dữ liệu đặc biệt.

### Visual riêng cho dự án

Hiển thị luồng:

```txt
Legacy JSP
    ↓
Business Logic Analysis
    ↓
Database Mapping
    ↓
C# Implementation
    ↓
Comparison Testing
    ↓
Excel Output
```

---

## 9.3. Project 3 — LearnOva Course Platform

Chỉ đưa vào nếu muốn giới thiệu đồ án cá nhân.

### Tên đề xuất

```txt
LearnOva Online Learning Platform
```

### Mô tả

Nền tảng bán khóa học trực tuyến hỗ trợ quản lý người dùng, khóa học, video, thanh toán, doanh thu và nội dung học tập.

### Công nghệ

* React.
* Vite.
* Java.
* Spring Boot.
* PostgreSQL.
* HLS.js.
* AWS S3.
* AWS CloudFront.
* AWS MediaConvert.
* PayOS.
* PayPal nếu đã tích hợp hoàn chỉnh.
* Docker.

### Chức năng nổi bật

* Đăng ký và đăng nhập.
* Quản lý khóa học.
* Phát video HLS.
* Thanh toán khóa học.
* Webhook cập nhật trạng thái thanh toán.
* Quản lý doanh thu.
* Tính hoa hồng giảng viên.
* Quản lý người dùng.
* Hỗ trợ song ngữ.
* Quản lý nội dung học tập.

### Điểm khác biệt

* Video được chuyển đổi sang HLS.
* Sử dụng CloudFront để phân phối nội dung.
* Có quy trình thanh toán và webhook.
* Xử lý trường hợp người dùng thanh toán thành công nhưng giao diện gặp lỗi.
* Có logic quản lý doanh thu giữa nền tảng và giảng viên.

Không ghi một chức năng là hoàn thành nếu chức năng đó vẫn đang trong quá trình phát triển.

---

# 10. Trang Project Detail

Mỗi dự án phải có route riêng:

```txt
/projects/handy-terminal-migration
/projects/jsp-to-csharp-migration
/projects/learnova
```

Cấu trúc trang chi tiết:

1. Project hero.
2. Tổng quan.
3. Bối cảnh.
4. Vấn đề.
5. Mục tiêu.
6. Vai trò.
7. Phạm vi công việc.
8. Công nghệ.
9. Kiến trúc hệ thống.
10. Quy trình xử lý.
11. Những khó khăn.
12. Cách giải quyết.
13. Kết quả.
14. Điều học được.
15. Dự án tiếp theo và trước đó.

Mỗi project detail phải kể được một câu chuyện:

```txt
Problem → Analysis → Solution → Result → Learning
```

Không chỉ trình bày một danh sách công nghệ.

---

# 11. Trang Contact

Nội dung:

* Email.
* GitHub.
* LinkedIn.
* Số điện thoại nếu muốn công khai.
* Địa điểm ở mức thành phố hoặc quốc gia.
* Form liên hệ.
* Trạng thái gửi form.
* Nút tải CV.

Các trường form:

```txt
Họ tên
Email
Chủ đề
Nội dung
```

Validation:

* Không để trống trường bắt buộc.
* Kiểm tra email hợp lệ.
* Hiển thị lỗi ngay dưới input.
* Button có trạng thái loading.
* Không cho gửi nhiều lần liên tiếp.
* Hiển thị thông báo thành công hoặc thất bại.

---

# 12. Header và Navigation

Header phải có:

* Logo hoặc tên viết tắt.
* Menu chính.
* Nút đổi ngôn ngữ.
* Nút đổi theme.
* Nút tải CV.
* Mobile menu.

Menu:

```txt
Home
About
Skills
Experience
Projects
Contact
```

Quy tắc:

* Menu active phải được làm nổi bật.
* Header sticky.
* Khi cuộn trang, header có background blur nhẹ.
* Mobile menu phải đóng khi chuyển route.
* Nhấn Escape phải đóng mobile menu.
* Khi mở menu mobile phải hạn chế scroll phía sau.
* Logo nhấn vào phải về trang Home.

---

# 13. Điều hướng giữa các trang

Mỗi trang phải có:

* Nút Previous.
* Nút Next.
* Tên trang trước.
* Tên trang tiếp theo.
* Icon mũi tên.
* Hỗ trợ bàn phím.

Thứ tự:

```txt
Home
→ About
→ Skills
→ Experience
→ Projects
→ Contact
```

Ở cuối trang:

```txt
← Trang trước                Trang tiếp theo →
```

Chuyển trang phải:

* Cập nhật URL.
* Scroll về đầu trang.
* Có page transition.
* Không reload toàn bộ website.
* Giữ nguyên theme.
* Giữ nguyên ngôn ngữ.
* Không làm layout nhảy bất thường.

---

# 14. Animation Rules

Sử dụng Motion for React.

## Page transition

Mỗi trang:

```txt
Initial:
opacity: 0
y: 16

Animate:
opacity: 1
y: 0

Exit:
opacity: 0
y: -12
```

Thời gian:

```txt
0.25s đến 0.5s
```

Không làm animation chuyển trang quá lâu.

## Section animation

Khi section xuất hiện trong viewport:

* Fade in.
* Di chuyển nhẹ từ dưới lên.
* Stagger cho danh sách.
* Chỉ chạy một lần nếu hợp lý.

## Card animation

Hover:

* Nâng card từ 4px đến 8px.
* Shadow tăng nhẹ.
* Border đổi sang màu primary.
* Hình ảnh zoom rất nhẹ.

Không xoay card quá mạnh.

## Button animation

* Hover scale tối đa khoảng 1.02–1.04.
* Tap scale khoảng 0.97–0.99.
* Transition ngắn và mượt.

## Quy tắc accessibility

Phải hỗ trợ:

```css
@media (prefers-reduced-motion: reduce)
```

Khi người dùng bật reduced motion:

* Tắt animation phức tạp.
* Tắt parallax.
* Giảm duration.
* Không dùng auto-moving background.

---

# 15. Đa ngôn ngữ

Website phải hỗ trợ:

```txt
vi
en
```

Sử dụng `react-i18next`.

Cấu trúc:

```txt
src/
└── locales/
    ├── vi/
    │   ├── common.json
    │   ├── home.json
    │   ├── about.json
    │   ├── skills.json
    │   ├── experience.json
    │   ├── projects.json
    │   └── contact.json
    └── en/
        ├── common.json
        ├── home.json
        ├── about.json
        ├── skills.json
        ├── experience.json
        ├── projects.json
        └── contact.json
```

Quy tắc:

* Không viết cả tiếng Việt và tiếng Anh trực tiếp trong JSX.
* Mọi text giao diện phải lấy qua translation key.
* Không dịch tên công nghệ.
* Không dịch tên công ty.
* Không dịch tên sản phẩm.
* Tên dự án có thể giữ nguyên và dịch phần mô tả.
* Ngôn ngữ được lưu vào localStorage.
* Khi tải lại trang phải giữ ngôn ngữ đã chọn.
* Button ngôn ngữ phải hiển thị rõ `VI` và `EN`.
* Thuộc tính `lang` của HTML phải được cập nhật.
* Tiêu đề trang và metadata phải đổi theo ngôn ngữ.

Ví dụ:

```json
{
  "navigation": {
    "home": "Trang chủ",
    "about": "Giới thiệu",
    "skills": "Kỹ năng",
    "experience": "Kinh nghiệm",
    "projects": "Dự án",
    "contact": "Liên hệ"
  }
}
```

---

# 16. Icon Rules

Sử dụng Lucide React.

Icon đề xuất:

```txt
Home
User
Code2
BriefcaseBusiness
FolderKanban
Mail
Github
Linkedin
Download
Languages
Sun
Moon
ArrowLeft
ArrowRight
ExternalLink
Database
Server
Monitor
Smartphone
Cloud
GitBranch
FileSpreadsheet
Terminal
Menu
X
```

Quy tắc:

* Chỉ dùng một bộ icon.
* Icon phải có cùng stroke width.
* Icon phải có `aria-hidden` nếu chỉ dùng để trang trí.
* Button chỉ có icon phải có `aria-label`.
* Kích thước phổ biến:

  * 16px cho text nhỏ.
  * 20px cho button.
  * 24px cho section heading.
  * 32px đến 40px cho feature card.
* Không dùng icon thay thế hoàn toàn cho text ở các chức năng quan trọng.
* Không dùng emoji thay icon kỹ thuật.

---

# 17. Cấu trúc thư mục

```txt
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
│
├── assets/
│   ├── images/
│   ├── illustrations/
│   ├── projects/
│   └── resume/
│
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Badge.tsx
│   │   ├── IconButton.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── PageTransition.tsx
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MainLayout.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageNavigation.tsx
│   │
│   ├── home/
│   ├── about/
│   ├── skills/
│   ├── experience/
│   ├── projects/
│   └── contact/
│
├── data/
│   ├── profile.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── projects.ts
│   └── navigation.ts
│
├── hooks/
│   ├── useTheme.ts
│   ├── useLanguage.ts
│   ├── useScrollToTop.ts
│   └── useReducedMotion.ts
│
├── i18n/
│   └── index.ts
│
├── locales/
│   ├── vi/
│   └── en/
│
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── SkillsPage.tsx
│   ├── ExperiencePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
│
├── styles/
│   ├── globals.css
│   ├── variables.css
│   └── animations.css
│
├── types/
│   ├── project.ts
│   ├── skill.ts
│   └── experience.ts
│
├── utils/
│   ├── constants.ts
│   └── helpers.ts
│
└── main.tsx
```

---

# 18. Data Model

## Profile

```ts
export interface Profile {
  fullName: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  avatar: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
}
```

## Skill

```ts
export interface Skill {
  id: string;
  name: string;
  category:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "cloud"
    | "tool"
    | "business";
  icon?: string;
  usageLevel:
    | "project"
    | "practical"
    | "learning";
  featured?: boolean;
}
```

## Experience

```ts
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
}
```

## Project

```ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  category: string[];
  role: string;
  technologies: string[];
  responsibilities: string[];
  highlights: string[];
  challenges: string[];
  solutions: string[];
  learnings: string[];
  image: string;
  gallery?: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  order: number;
}
```

---

# 19. Responsive Rules

Các breakpoint tham khảo:

```txt
Mobile: dưới 640px
Tablet: từ 640px
Laptop: từ 1024px
Desktop: từ 1280px
Large desktop: từ 1536px
```

Quy tắc:

* Thiết kế mobile-first.
* Không xuất hiện horizontal scroll.
* Header mobile phải dễ thao tác.
* Button phải đủ lớn để nhấn.
* Card chuyển từ nhiều cột sang một cột.
* Timeline phải hiển thị tốt trên mobile.
* Technology badge phải tự xuống hàng.
* Project detail không được quá rộng.
* Paragraph nên giới hạn chiều rộng để dễ đọc.
* Hình ảnh phải có kích thước responsive.
* Không đặt chiều cao cố định gây cắt nội dung.
* Test ít nhất ở:

  * 375px.
  * 768px.
  * 1024px.
  * 1440px.

---

# 20. Accessibility Rules

Bắt buộc:

* Sử dụng semantic HTML.
* Chỉ có một `h1` chính trên mỗi trang.
* Heading theo đúng thứ tự.
* Hình ảnh có `alt`.
* Button phải là thẻ `button`.
* Link điều hướng phải là thẻ link.
* Có focus-visible rõ ràng.
* Có thể điều hướng bằng bàn phím.
* Form có label.
* Error form có liên kết với input.
* Modal hoặc mobile menu phải quản lý focus.
* Màu chữ và nền phải đủ tương phản.
* Không truyền đạt thông tin chỉ bằng màu sắc.
* Hỗ trợ reduced motion.

---

# 21. Performance Rules

* Lazy-load các route không phải trang Home.
* Lazy-load hình ảnh dự án.
* Dùng WebP hoặc AVIF nếu phù hợp.
* Không tải ảnh quá lớn.
* Không import toàn bộ icon library.
* Không tạo animation chạy liên tục không cần thiết.
* Hạn chế re-render.
* Không dùng video background dung lượng lớn.
* Có fallback khi ảnh lỗi.
* Không để console error.
* Không để warning React.
* Tối ưu build production.
* Kiểm tra Lighthouse.

Mục tiêu tham khảo:

```txt
Performance: từ 85 trở lên
Accessibility: từ 90 trở lên
Best Practices: từ 90 trở lên
SEO: từ 90 trở lên
```

---

# 22. SEO Rules

Mỗi trang phải có:

* Title riêng.
* Description riêng.
* Open Graph title.
* Open Graph description.
* Open Graph image nếu có.
* Canonical URL khi deploy.
* Favicon.
* Sitemap nếu có domain chính thức.
* `robots.txt`.

Ví dụ title:

```txt
[Tên] | Fresher Software Developer
About | [Tên]
Projects | [Tên]
Handy Terminal Migration | [Tên]
JSP to C# Migration | [Tên]
```

---

# 23. Flow thực hiện bắt buộc

## Phase 1 — Khởi tạo

* Tạo React Vite project.
* Cài dependencies.
* Cấu hình TypeScript.
* Cấu hình ESLint.
* Cấu hình alias import.
* Tạo structure thư mục.
* Tạo global CSS.
* Tạo CSS variables.

Kết quả cần có:

* Project chạy được.
* Không có lỗi console.
* Router hoạt động.
* Theme variables hoạt động.

---

## Phase 2 — Dữ liệu

* Tạo profile data.
* Tạo skills data.
* Tạo experience data.
* Tạo projects data.
* Tạo type/interface.
* Không viết UI trước khi dữ liệu đã có cấu trúc.

Kết quả cần có:

* Có thể thêm dự án mới chỉ bằng cách thêm object.
* Không cần sửa nhiều component khi thêm dữ liệu.

---

## Phase 3 — Layout

* Header.
* Desktop navigation.
* Mobile navigation.
* Footer.
* Container.
* Page transition.
* Page navigation.
* Scroll to top.

Kết quả cần có:

* Chuyển route không reload.
* Menu active đúng.
* Mobile menu hoạt động.
* Previous/Next đúng thứ tự.

---

## Phase 4 — Đa ngôn ngữ

* Cấu hình i18next.
* Tạo file `vi`.
* Tạo file `en`.
* Tạo language switcher.
* Lưu language vào localStorage.
* Cập nhật `html lang`.

Kết quả cần có:

* Đổi ngôn ngữ không reload.
* Nội dung toàn website đổi đồng bộ.
* Không còn text giao diện hard-code trong JSX.

---

## Phase 5 — Trang Home và About

* Hero.
* Introduction.
* Technology preview.
* Featured projects.
* Personal journey.
* Strengths.
* Timeline.

Kết quả cần có:

* Người xem hiểu chủ portfolio là ai.
* Người xem biết điểm mạnh về migration.
* CTA dẫn đúng trang.

---

## Phase 6 — Skills và Experience

* Nhóm kỹ năng.
* Skill card.
* Experience timeline.
* Responsibility list.
* Technology badges.

Kết quả cần có:

* Không sử dụng phần trăm kỹ năng không có căn cứ.
* Kinh nghiệm phải gắn với công việc cụ thể.

---

## Phase 7 — Projects

* Project listing.
* Filter.
* Featured project.
* Project detail.
* Architecture diagram.
* Previous/Next project.

Kết quả cần có:

* Có ít nhất hai dự án migration.
* Mỗi dự án có câu chuyện rõ ràng.
* Nội dung thể hiện vai trò thực tế.
* Có phần Before/Migration/After.

---

## Phase 8 — Contact

* Contact information.
* Contact form.
* Validation.
* Loading state.
* Success state.
* Error state.

Kết quả cần có:

* Form dễ sử dụng.
* Có thể dùng bàn phím.
* Không gửi dữ liệu rỗng.

---

## Phase 9 — Animation

* Page transition.
* Section reveal.
* Card hover.
* Stagger list.
* Reduced motion.

Kết quả cần có:

* Animation mượt.
* Không gây chóng mặt.
* Không làm chậm thao tác.
* Không ảnh hưởng mobile.

---

## Phase 10 — Hoàn thiện

* Responsive test.
* Accessibility test.
* SEO.
* Performance.
* Error handling.
* Not Found page.
* README.
* Deployment.

---

# 24. Quy tắc làm việc của AI theo từng lần trả lời

Mỗi lần thực hiện, AI phải trả lời theo cấu trúc:

```txt
1. Mục tiêu của bước hiện tại
2. File sẽ tạo hoặc sửa
3. Nội dung triển khai
4. Code hoàn chỉnh
5. Cách kiểm tra
6. Kết quả mong đợi
7. Bước tiếp theo
```

AI không được:

* Viết code chưa hoàn chỉnh rồi yêu cầu người dùng tự nối.
* Bỏ qua import.
* Dùng component chưa được tạo.
* Dùng package chưa được cài.
* Ghi đường dẫn file không thống nhất.
* Tự đổi cấu trúc thư mục giữa chừng.
* Tự đổi thiết kế sau khi đã thống nhất.
* Xóa chức năng cũ khi bổ sung chức năng mới.
* Sửa file không liên quan.
* Thêm dữ liệu giả không được yêu cầu.
* Chuyển sang bước tiếp theo khi bước hiện tại còn lỗi.

---

# 25. Definition of Done

Dự án chỉ được xem là hoàn thành khi đạt đủ:

## Chức năng

* Có đầy đủ các route.
* Menu hoạt động.
* Previous/Next hoạt động.
* Chuyển trang không reload.
* Chuyển ngôn ngữ hoạt động.
* Theme được lưu.
* Project filter hoạt động.
* Project detail hoạt động.
* Contact form validation hoạt động.
* CV download hoạt động.
* External link hoạt động.

## Giao diện

* Giao diện thống nhất.
* Màu sắc dễ nhìn.
* Typography rõ ràng.
* Icon đồng bộ.
* Responsive mobile, tablet và desktop.
* Có empty state hoặc fallback phù hợp.
* Không có layout shift nghiêm trọng.

## Animation

* Có page transition.
* Có section reveal.
* Có hover state.
* Có reduced motion.
* Animation không quá chậm.

## Code

* Không có console error.
* Không có React warning.
* Không có import thừa.
* Không có code trùng lặp lớn.
* Dữ liệu tách khỏi component.
* Translation tách khỏi component.
* Component có trách nhiệm rõ ràng.
* Build production thành công.

## Nội dung

* Giới thiệu rõ bản thân.
* Có kinh nghiệm tại GOLINE GLOBAL.
* Có dự án BHT-BASIC sang Android.
* Có dự án JSP sang C#.
* Có vai trò rõ trong từng dự án.
* Có công nghệ rõ trong từng dự án.
* Có khó khăn và cách giải quyết.
* Không phóng đại kinh nghiệm.
* Không ghi chức năng chưa hoàn thành là đã hoàn thành.

---

# 26. Prompt khởi động cho AI

Hãy xây dựng website Personal Portfolio bằng React theo toàn bộ Project Rules đã cung cấp.

Yêu cầu thực hiện theo từng phase, không viết toàn bộ dự án trong một lần.

Bắt đầu với Phase 1:

1. Khởi tạo kiến trúc dự án.
2. Đề xuất dependency cần cài.
3. Tạo cấu trúc thư mục.
4. Cấu hình router cơ bản.
5. Cấu hình global theme.
6. Tạo layout khung.
7. Giải thích rõ từng file.
8. Đưa lệnh chạy và cách kiểm tra.

Trước khi viết code, hãy liệt kê:

* Các file sẽ tạo.
* Các package sẽ cài.
* Vai trò của từng package.
* Kết quả mong đợi sau Phase 1.

Không triển khai nội dung các trang chi tiết trong Phase 1.

Sau khi hoàn thành Phase 1, hãy dừng lại ở phần tổng kết và chỉ rõ Phase 2 cần làm gì.

---

# 27. Prompt tiếp tục cho từng phase

Khi chuyển sang phase tiếp theo, sử dụng mẫu:

```txt
Tiếp tục thực hiện Phase [số phase] theo Project Rules.

Trước khi sửa code:
- Kiểm tra cấu trúc hiện tại.
- Không xóa chức năng đã hoạt động.
- Liệt kê file sẽ tạo hoặc sửa.
- Giải thích mục tiêu của từng thay đổi.

Sau khi sửa code:
- Kiểm tra import.
- Kiểm tra route.
- Kiểm tra responsive.
- Kiểm tra console.
- Đưa cách chạy thử.
- Liệt kê tiêu chí xác nhận phase đã hoàn thành.
```

---

# 28. Yêu cầu sáng tạo cuối cùng

Website phải có ít nhất ba đặc điểm nhận diện riêng:

1. Migration Journey Timeline.
2. Before/After comparison trong project detail.
3. Interactive technology map hoặc system flow.

Có thể thêm:

* Terminal introduction.
* Animated code snippets.
* Interactive architecture diagram.
* Project case-study layout.
* Scroll progress indicator.
* Cursor glow nhẹ trên desktop.
* Animated grid background rất nhẹ.
* Shared-element transition giữa project card và project detail.

Các hiệu ứng sáng tạo phải hỗ trợ nội dung, không được làm người xem mất tập trung khỏi thông tin cá nhân và dự án.
