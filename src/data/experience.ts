/**
 * ═══════════════════════════════════════════════════════════════
 *  KINH NGHIỆM — Sửa nội dung trong `content` của từng mục.
 *  Ngôn ngữ khác: src/locales/{en,ja,zh,ko}/experience.json
 * ═══════════════════════════════════════════════════════════════
 */
import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "goline",
    company: "GOLINE GLOBAL",
    role: "Backend Developer DEV",
    startDate: "Thực tập",
    endDate: "Hoàn thành",
    location: "Vietnam",
    technologies: [
      "C#",
      ".NET",
      "VB.NET",
      "Java",
      "JSP",
      "Android",
      "PostgreSQL",
      "SQL",
      "Git",
    ],
    content: {
      summary:
        "Tham gia hai dự án migration tại GOLINE GLOBAL: tìm hiểu hệ thống cũ, đọc tài liệu nghiệp vụ, phân tích source, so sánh logic cũ/mới, hỗ trợ chuyển đổi chức năng, kiểm tra dữ liệu và kết quả đầu ra.",
      responsibilities: [
        "Tìm hiểu hệ thống legacy (BHT-BASIC, JSP) và kiến trúc server/database hiện có.",
        "Đọc và đối chiếu tài liệu nghiệp vụ (BA) với hành vi thực tế trên màn hình cũ.",
        "Phân tích source code hiện tại để xác định luồng xử lý, điều kiện và điểm tích hợp.",
        "So sánh logic giữa hệ thống cũ và hệ thống mới trước/sau khi chuyển đổi chức năng.",
        "Hỗ trợ migration chức năng sang Android, VB.NET và C#/.NET theo phạm vi được giao.",
        "Kiểm tra dữ liệu, query PostgreSQL và kết quả xuất báo cáo Excel (.xlsx).",
        "Viết hoặc cập nhật tài liệu kỹ thuật và ghi chú khác biệt logic.",
        "Hỗ trợ kiểm tra lỗi sau migration và test trên thiết bị Keyence BT-A1000.",
      ],
    },
  },
  {
    id: "rikai",
    company: "RIKAI TECHNOLOGY",
    role: "Backend Developer DEV",
    startDate: "Thực tập",
    endDate: "Hoàn thành",
    location: "Vietnam",
    technologies: ["Java", "Spring Boot", "SQL", "Git", "REST API"],
    content: {
      summary:
        "Thực tập backend tại RIKAI TECHNOLOGY với Java/Spring Boot: làm quen cấu trúc dự án, tham gia phát triển API, truy vấn database, viết tài liệu và học quy trình làm việc nhóm.",
      responsibilities: [
        "Làm quen cấu trúc dự án Spring Boot, layer controller/service/repository.",
        "Hỗ trợ phát triển và chỉnh sửa REST API theo yêu cầu mentor.",
        "Viết và kiểm tra SQL query, mapping entity và xử lý dữ liệu cơ bản.",
        "Sử dụng Git/GitHub để quản lý branch, commit và review code nội bộ.",
        "Kiểm thử API bằng Postman và ghi lại case test đơn giản.",
        "Cập nhật tài liệu kỹ thuật và ghi chú endpoint cho các chức năng đã làm.",
      ],
    },
  },
];
