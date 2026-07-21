/**
 * ═══════════════════════════════════════════════════════════════
 *  GIỚI THIỆU — Sửa nội dung trực tiếp tại đây (tiếng Việt).
 *  Ngôn ngữ khác: src/locales/{en,ja,zh,ko}/about.json
 * ═══════════════════════════════════════════════════════════════
 */

export const aboutContent = {
  intro:
    "Tôi là Backend Developer yêu thích việc biến bài toán thực tế thành sản phẩm có cấu trúc rõ ràng, dữ liệu tin cậy và trải nghiệm sử dụng hoàn chỉnh.",
  portrait: {
    title: "Không chỉ viết code, tôi xây cách sản phẩm vận hành.",
    body: "Kinh nghiệm của tôi trải dài từ Java/Spring Boot, C#/.NET và PostgreSQL đến React, cloud video, thanh toán và các hệ thống nghiệp vụ đang vận hành.",
  },
  education: {
    title: "Quá trình học tập",
    body: "Nền tảng CNTT tập trung vào lập trình hướng đối tượng, cơ sở dữ liệu và phát triển web. Trong quá trình học, tôi bổ sung kinh nghiệm thực tế qua thực tập backend và các dự án cá nhân như LearnOva Online Learning Platform.",
  },
  direction: {
    title: "Định hướng nghề nghiệp",
    body: "Phát triển sự nghiệp theo hướng Backend Developer với thế mạnh migration hệ thống, phân tích nghiệp vụ và tích hợp API. Mục tiêu ngắn hạn là tham gia các dự án chuyển đổi legacy sang .NET/Java hiện đại; dài hạn là trở thành kỹ sư hiểu sâu cả luồng nghiệp vụ lẫn kiến trúc hệ thống.",
  },
  strengths: {
    title: "Điểm mạnh",
    description:
      "Các điểm mạnh được hình thành từ công việc migration và thực tập — không phải mô tả chung chung.",
    items: [
      {
        id: "legacy",
        title: "Đọc và hiểu source legacy",
        body: "Có thể đọc source BHT-BASIC, JSP và VB.NET để truy vết luồng xử lý, điều kiện phân nhánh và điểm giao tiếp với server trước khi viết code mới.",
      },
      {
        id: "business",
        title: "Phân tích luồng nghiệp vụ",
        body: "Đối chiếu tài liệu BA, màn hình cũ và logic trong source để xác định input/output, quyền truy cập và các trường hợp đặc biệt trước khi migration.",
      },
      {
        id: "multitech",
        title: "Làm việc đa công nghệ",
        body: "Chuyển đổi linh hoạt giữa Android, VB.NET, Java/JSP, C#/.NET, PostgreSQL và Spring Boot tùy từng phạm vi dự án.",
      },
      {
        id: "verification",
        title: "Kiểm tra dữ liệu và logic",
        body: "So sánh kết quả query, file Excel xuất ra và hành vi popup/lỗi giữa hệ thống cũ và mới để phát hiện sai lệch sớm.",
      },
      {
        id: "learning",
        title: "Học công nghệ mới nhanh",
        body: "Tự học HLS streaming, AWS CloudFront, PayOS webhook và các stack mới khi dự án hoặc dự án cá nhân yêu cầu.",
      },
      {
        id: "migration",
        title: "Giữ đúng nghiệp vụ khi migration",
        body: "Ưu tiên hành vi nghiệp vụ và dữ liệu đầu ra đúng hơn việc chỉ chuyển syntax — đặc biệt với báo cáo Excel và luồng thiết bị Handy.",
      },
    ],
  },
  workStyle: {
    title: "Phong cách làm việc",
    body: "Bắt đầu bằng hiểu bài toán và luồng nghiệp vụ, sau đó mới code. Ghi chú lại điểm khác biệt giữa logic cũ/mới, cập nhật tài liệu kỹ thuật và phối hợp kiểm thử sau migration.",
  },
  interests: {
    title: "Sở thích chuyên môn",
    body: "Migration architecture, legacy code reading, API design, database mapping và xây dựng sản phẩm full-stack có luồng thanh toán và streaming thực tế.",
  },
  principles: {
    eyebrow: "Nguyên tắc làm việc",
    title: "Cách tôi tiếp cận công việc mỗi ngày.",
    description:
      "Những nguyên tắc giúp tôi học nhanh hơn, phối hợp rõ ràng hơn và tạo ra kết quả có thể kiểm chứng.",
    items: [
      {
        id: "clarity",
        title: "Làm rõ trước khi xây dựng",
        body: "Xác định yêu cầu, dữ liệu vào/ra và trường hợp đặc biệt trước khi bắt đầu triển khai.",
      },
      {
        id: "ownership",
        title: "Chịu trách nhiệm với đầu ra",
        body: "Không dừng ở việc code chạy; tôi kiểm tra dữ liệu, hành vi và ghi chú những điểm cần người tiếp theo hiểu được.",
      },
      {
        id: "growth",
        title: "Học qua phản hồi",
        body: "Chủ động tiếp nhận review, xem lại cách giải quyết và biến kiến thức mới thành cải tiến trong lần làm việc tiếp theo.",
      },
    ],
  },
  gallery: {
    eyebrow: "Phát triển chuyên môn",
    learning: "Học tập gắn liền với thực hành",
    learningBody:
      "Tôi củng cố kiến thức bằng cách đưa công nghệ vào dự án cụ thể, kiểm tra kết quả và ghi lại những điều đã học.",
    projectEyebrow: "Trong quá trình làm dự án",
    project: "Làm việc có hệ thống và trách nhiệm",
    projectBody:
      "Khi tham gia dự án, tôi ưu tiên hiểu đúng phạm vi, chia nhỏ vấn đề, trao đổi rõ ràng và kiểm chứng đầu ra trước khi hoàn thành công việc.",
  },
  timeline: [
    {
      id: "study",
      period: "Đại học",
      title: "Nền tảng CNTT & lập trình",
      body: "Học lập trình, cơ sở dữ liệu, phát triển web và hoàn thiện các dự án học tập, đồ án cá nhân.",
    },
    {
      id: "goline",
      period: "Thực tập",
      title: "GOLINE GLOBAL — Backend Developer DEV",
      body: "Tham gia Handy Terminal System Migration và Legacy JSP to C# WMS Migration: đọc source cũ, phân tích nghiệp vụ, hỗ trợ chuyển đổi chức năng và kiểm tra dữ liệu.",
    },
    {
      id: "rikai",
      period: "Thực tập",
      title: "RIKAI TECHNOLOGY — Backend Developer DEV",
      body: "Thực tập backend với Java/Spring Boot: học cấu trúc dự án, viết API, làm việc với database và tài liệu kỹ thuật.",
    },
    {
      id: "personal",
      period: "Liên tục",
      title: "Dự án cá nhân",
      body: "Xây dựng LearnOva Online Learning Platform và portfolio Developer Journey để thực hành full-stack, HLS, thanh toán và triển khai cloud.",
    },
  ],
} as const;
