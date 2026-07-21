/**
 * ═══════════════════════════════════════════════════════════════
 *  DỰ ÁN — Sửa nội dung trực tiếp trong `content` của từng project.
 *  Chỉ cần sửa file này nếu bạn dùng tiếng Việt.
 *  Ngôn ngữ khác: src/locales/{en,ja,zh,ko}/projects.json
 * ═══════════════════════════════════════════════════════════════
 */
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "learnova",
    slug: "learnova",
    title: "LearnOva Online Learning Platform",
    category: ["web", "frontend", "backend", "cloud"],
    technologies: [
      "React",
      "Vite",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "HLS.js",
      "AWS S3",
      "CloudFront",
      "MediaConvert",
      "PayOS",
      "Docker",
    ],
    image: "/images/projects/learnova.svg",
    featured: true,
    order: 1,
    beforeAfter: {
      before: ["Monolithic learning idea", "Direct video upload concept"],
      migration: ["HLS conversion", "Payment webhook", "Revenue logic"],
      after: ["HLS streaming", "CloudFront CDN", "PayOS + webhook flow"],
    },
    processStepIds: ["auth", "course", "video", "pay", "revenue"],
    architectureLayers: [
      "React Frontend",
      "Spring Boot API",
      "PostgreSQL",
      "S3 + MediaConvert + CloudFront",
      "PayOS Webhook",
    ],
    content: {
      shortDescription:
        "Nền tảng học trực tuyến cá nhân với HLS streaming, CloudFront, PayOS webhook và quản lý doanh thu/hoa hồng.",
      overview:
        "LearnOva Online Learning Platform là dự án cá nhân full-stack: quản lý khóa học, phát video HLS, thanh toán PayOS và logic doanh thu giữa nền tảng và giảng viên.",
      context:
        "Dự án cá nhân nhằm thực hành stack React + Spring Boot + PostgreSQL + AWS (S3, MediaConvert, CloudFront) và tích hợp thanh toán PayOS với webhook cập nhật trạng thái.",
      role: "Full-stack Developer — thiết kế API, frontend React, pipeline video và tích hợp thanh toán.",
      scope:
        "React Frontend → Spring Boot API → PostgreSQL → S3/MediaConvert/CloudFront → PayOS Webhook",
      architectureDescription:
        "Frontend React gọi Spring Boot API; video upload lên S3, convert HLS qua MediaConvert, phát qua CloudFront. PayOS webhook cập nhật order và kích hoạt logic doanh thu.",
      problems: [
        "Video gốc lớn, cần pipeline chuyển HLS và phân phối qua CDN.",
        "Thanh toán online cần xử lý webhook và trường hợp UI lỗi sau khi thanh toán thành công.",
        "Logic doanh thu và hoa hồng giảng viên cần rõ ràng và có thể kiểm tra.",
        "Full-stack demo cần cân bằng phạm vi tính năng và thời gian phát triển.",
        "Đa ngôn ngữ và quản lý nội dung học tập cần cấu trúc dữ liệu nhất quán.",
      ],
      goals: [
        "Xây dựng luồng đăng ký/đăng nhập và quản lý khóa học.",
        "Phát video HLS qua CloudFront sau khi convert bằng MediaConvert.",
        "Tích hợp PayOS và webhook cập nhật trạng thái thanh toán.",
        "Quản lý doanh thu và tính hoa hồng giảng viên.",
        "Triển khai demo portfolio với Docker và tài liệu rõ ràng.",
      ],
      responsibilities: [
        "Thiết kế schema PostgreSQL cho user, course, payment và revenue.",
        "Xây dựng REST API Spring Boot cho auth, course và payment.",
        "Tích hợp HLS.js trên React và pipeline upload/convert video.",
        "Cấu hình S3, MediaConvert và CloudFront cho streaming.",
        "Tích hợp PayOS và xử lý webhook cập nhật trạng thái.",
        "Implement logic doanh thu và hoa hồng giảng viên.",
        "Xử lý edge case: thanh toán thành công nhưng UI gặp lỗi.",
        "Docker hóa và chuẩn bị demo cho portfolio.",
      ],
      highlights: [
        "Video HLS + CloudFront — thực hành streaming production-like trên AWS.",
        "PayOS webhook và luồng cập nhật trạng thái thanh toán tin cậy.",
        "Logic doanh thu/hoa hồng phản ánh bài toán marketplace thực tế.",
      ],
      challenges: [
        "Pipeline MediaConvert và CDN cần cấu hình đúng quyền và URL.",
        "Webhook payment cần idempotent và xử lý retry.",
        "Đồng bộ trạng thái UI khi callback payment chậm hoặc tab đóng sớm.",
      ],
      solutions: [
        "Tách bước upload, convert và publish manifest HLS rõ ràng.",
        "Lưu payment intent và xác nhận qua webhook trước khi unlock course.",
        "Polling/refresh trạng thái order khi user quay lại sau thanh toán.",
      ],
      results: [
        "Demo portfolio có luồng mua khóa học và xem video HLS end-to-end.",
        "PayOS webhook cập nhật order và revenue đúng trạng thái.",
        "Kiến trúc full-stack có thể mở rộng thêm tính năng giảng viên.",
      ],
      learnings: [
        "Streaming không chỉ là frontend — cần hiểu storage, transcode và CDN.",
        "Payment integration phải thiết kế cho failure và duplicate webhook.",
        "Dự án cá nhân hiệu quả khi chọn bài toán gần production thật.",
      ],
      processSteps: [
        "Auth & quản lý người dùng",
        "Quản lý khóa học & nội dung",
        "Upload, HLS convert & CloudFront",
        "PayOS & webhook thanh toán",
        "Doanh thu & hoa hồng",
      ],
    },
  },
  {
    id: "handy",
    slug: "handy-terminal-migration",
    title: "Handy Terminal System Migration",
    category: ["migration", "backend"],
    technologies: [
      "Android",
      "VB.NET",
      "BHT-BASIC",
      "Keyence BT-A1000",
      "Existing Server",
      "Existing Database",
    ],
    image: "/images/projects/handy-terminal.svg",
    featured: true,
    order: 2,
    beforeAfter: {
      before: ["BHT Device", "BHT-OS", "BHT-BASIC"],
      migration: ["Business analysis", "Function conversion", "Device switch"],
      after: ["Android Device", "Keyence BT-A1000", "VB.NET Communication"],
    },
    processStepIds: ["legacy", "analysis", "convert", "pc", "test"],
    architectureLayers: [
      "Android Handy App",
      "VB.NET Communication App",
      "Existing Server / Database",
    ],
    content: {
      shortDescription:
        "Migration hệ thống Handy từ BHT-OS/BHT-BASIC sang Android + VB.NET PC communication, giữ nguyên server và database.",
      overview:
        "Handy Terminal System Migration chuyển ứng dụng thiết bị cầm tay từ nền tảng proprietary BHT sang Android trên Keyence BT-A1000, đồng thời điều chỉnh ứng dụng giao tiếp PC bằng VB.NET.",
      context:
        "Hệ thống cũ vận hành trên thiết bị BHT chuyên dụng với BHT-OS và ngôn ngữ BHT-BASIC. Ứng dụng Handy giao tiếp với PC qua ứng dụng Communication, rồi kết nối tới server và database đang được sử dụng trong sản xuất.",
      role: "Software Developer Intern — tham gia phân tích source legacy, hỗ trợ chuyển đổi chức năng và kiểm tra luồng dữ liệu.",
      scope: "Android Handy App ↔ VB.NET Communication App ↔ Existing Server / Database",
      architectureDescription:
        "Thiết bị Android Handy giao tiếp với ứng dụng VB.NET trên PC; PC app kết nối server/database hiện có. Kiến trúc giữ nguyên tầng server để giảm rủi ro migration.",
      problems: [
        "Nền tảng BHT proprietary, khó mở rộng và tích hợp công nghệ mới.",
        "Source BHT-BASIC khó bảo trì và phụ thuộc vào thiết bị cũ.",
        "Khó thay thế phần cứng khi thiết bị BHT ngừng hỗ trợ.",
        "Luồng giao tiếp Handy ↔ PC ↔ Server cần được giữ nguyên sau migration.",
        "Rủi ro sai lệch nghiệp vụ nếu chỉ chuyển code mà không đối chiếu hành vi cũ.",
      ],
      goals: [
        "Chuyển ứng dụng Handy sang Android trên thiết bị Keyence BT-A1000.",
        "Điều chỉnh ứng dụng Communication trên PC bằng VB.NET.",
        "Giữ nguyên server và database hiện có.",
        "Không thay đổi luồng nghiệp vụ và quy trình vận hành.",
        "Đảm bảo truyền/nhận dữ liệu giữa các tầng hoạt động ổn định sau migration.",
      ],
      responsibilities: [
        "Tìm hiểu source BHT-BASIC và luồng xử lý trên thiết bị cũ.",
        "Phân tích luồng truyền/nhận dữ liệu giữa Handy, PC và server.",
        "Đối chiếu hành vi hệ thống cũ với yêu cầu nghiệp vụ.",
        "Hỗ trợ chuyển đổi chức năng sang ứng dụng Android.",
        "Điều chỉnh logic giao tiếp phía PC bằng VB.NET.",
        "Kiểm tra luồng dữ liệu end-to-end sau từng chức năng migration.",
        "Đảm bảo nghiệp vụ giữ nguyên so với hệ thống trước migration.",
        "Hỗ trợ test trên thiết bị Keyence BT-A1000.",
      ],
      highlights: [
        "Không chỉ đổi ngôn ngữ — thay đổi cả thiết bị và nền tảng trong khi giữ luồng vận hành.",
        "Server và database legacy được tái sử dụng, giảm phạm vi thay đổi hạ tầng.",
        "Quy trình đối chiếu hành vi cũ trước khi chốt logic Android/VB.NET.",
      ],
      challenges: [
        "Source BHT-BASIC khó đọc và thiếu tài liệu chuẩn hóa.",
        "Đồng bộ hành vi giữa Android mới và PC app VB.NET với protocol cũ.",
        "Test phụ thuộc thiết bị Keyence thật và môi trường sản xuất.",
      ],
      solutions: [
        "Truy vết từng màn hình/chức năng trên thiết bị cũ và ghi lại input/output.",
        "Chia nhỏ migration theo luồng nghiệp vụ, verify từng bước trước khi ghép.",
        "Phối hợp test trên BT-A1000 và so sánh log dữ liệu với hệ thống cũ.",
      ],
      results: [
        "Các chức năng Handy được chuyển sang Android với hành vi khớp hệ thống cũ.",
        "Ứng dụng VB.NET PC communication hoạt động ổn định với thiết bị mới.",
        "Server/database giữ nguyên, giảm downtime và rủi ro triển khai.",
      ],
      learnings: [
        "Migration thiết bị đòi hỏi hiểu protocol và nghiệp vụ hơn là chỉ viết UI mới.",
        "Giữ tầng server giúp thu hẹp phạm vi kiểm thử khi đổi client.",
        "Ghi chép đối chiếu hành vi cũ là tài sản quan trọng cho team migration.",
      ],
      processSteps: [
        "Đọc source BHT-BASIC & thiết bị cũ",
        "Phân tích luồng nghiệp vụ",
        "Chuyển chức năng sang Android",
        "Điều chỉnh VB.NET PC communication",
        "Kiểm thử trên Keyence BT-A1000",
      ],
    },
  },
  {
    id: "wms",
    slug: "jsp-to-csharp-migration",
    title: "Legacy JSP to C# WMS Migration",
    category: ["migration", "backend"],
    technologies: [
      "Java",
      "JSP",
      "C#",
      ".NET",
      "PostgreSQL",
      "SQL",
      "Excel template",
      "Git",
    ],
    image: "/images/projects/jsp-csharp.svg",
    featured: true,
    order: 3,
    beforeAfter: {
      before: ["Java", "JSP", "Business logic in legacy source"],
      migration: ["Logic analysis", "DB mapping", "Comparison testing"],
      after: ["C#", ".NET", "Excel report generation"],
    },
    processStepIds: ["jsp", "logic", "db", "csharp", "compare", "excel"],
    architectureLayers: [
      "Legacy JSP Application",
      "Business Logic Analysis",
      "C# Application / Infrastructure",
      "PostgreSQL",
      "Excel Output",
    ],
    content: {
      shortDescription:
        "Migration chức năng WMS từ JSP sang C#/.NET, kiểm tra nghiệp vụ, dữ liệu và báo cáo Excel để đảm bảo hệ thống mới giống hệ thống cũ.",
      overview:
        "Legacy JSP to C# WMS Migration chuyển các chức năng quản lý kho từ stack Java/JSP sang C#/.NET với tách Application và Infrastructure.",
      context:
        "Hệ thống cũ dùng Java/JSP với business logic nằm trong source legacy, báo cáo Excel template và PostgreSQL. Hệ thống mới dùng C#/.NET, kiến trúc phân lớp và vẫn kết nối PostgreSQL.",
      role: "Software Developer Intern — phân tích JSP, hỗ trợ chuyển C#, kiểm tra dữ liệu và báo cáo Excel.",
      scope:
        "Legacy JSP screens → C# Application/Infrastructure → PostgreSQL → Excel report output",
      architectureDescription:
        "Luồng từ JSP legacy qua phân tích logic, mapping database, triển khai C#/.NET, so sánh kết quả và xuất Excel. PostgreSQL là nguồn dữ liệu chung giữa hai hệ thống.",
      problems: [
        "Business logic phân tán trong JSP khó truy vết và tái sử dụng.",
        "Rủi ro sai lệch khi chuyển syntax Java sang C# mà không hiểu nghiệp vụ.",
        "Báo cáo Excel phụ thuộc template và tổng hợp dữ liệu phức tạp.",
        "Phân quyền, popup lỗi và edge case khó phát hiện nếu chỉ test happy path.",
        "Cần đối chiếu liên tục giữa output hệ thống cũ và mới.",
      ],
      goals: [
        "Migration chức năng JSP sang C#/.NET theo phạm vi WMS.",
        "Giữ đúng luồng nghiệp vụ, phân quyền và xử lý lỗi.",
        "Map đúng bảng/query PostgreSQL liên quan.",
        "Đảm bảo báo cáo Excel (.xlsx) khớp kết quả hệ thống cũ.",
        "Cập nhật tài liệu nghiệp vụ và ghi chú khác biệt logic.",
      ],
      responsibilities: [
        "Đọc và phân tích source JSP cũ để xác định luồng nghiệp vụ.",
        "Xác định bảng PostgreSQL và query liên quan từng chức năng.",
        "So sánh logic giữa hệ thống cũ và hệ thống mới.",
        "Hỗ trợ chuyển đổi chức năng từ JSP sang C#.",
        "Kiểm tra điều kiện phân quyền, thông báo lỗi và popup.",
        "Kiểm tra query và dữ liệu đầu ra sau migration.",
        "Hỗ trợ tạo/kiểm tra báo cáo Excel — ví dụ 帳票_個人日報一覧 / Personal Daily Report List.",
        "Viết hoặc cập nhật tài liệu nghiệp vụ và case khác biệt logic.",
      ],
      highlights: [
        "Migration tập trung nghiệp vụ — không chỉ chuyển syntax Java → C#.",
        "Kiểm tra báo cáo Excel 帳票_個人日報一覧 / Personal Daily Report List theo nhân viên và tháng.",
        "So sánh có hệ thống giữa output cũ/mới cho query và tổng hợp dữ liệu.",
      ],
      challenges: [
        "Logic JSP lẫn trong view khiến việc tách nghiệp vụ mất thời gian.",
        "Báo cáo Excel nhiều worksheet và tổng hợp theo tháng dễ lệch số liệu.",
        "Edge case phân quyền và session khó tái hiện nếu thiếu dữ liệu test.",
      ],
      solutions: [
        "Vẽ luồng input/output và bảng DB trước khi viết C#.",
        "So sánh file Excel cũ/mới từng worksheet và tổng theo tháng.",
        "Ghi lại mọi khác biệt logic để review với mentor/BA.",
      ],
      results: [
        "Chức năng WMS migration hoạt động khớp logic nghiệp vụ cũ.",
        "Báo cáo Excel xuất đúng cấu trúc và số liệu mong đợi.",
        "Tài liệu nghiệp vụ được cập nhật phục vụ bảo trì sau migration.",
      ],
      learnings: [
        "Migration WMS cần hiểu báo cáo và aggregation, không chỉ CRUD.",
        "Comparison testing là bước bắt buộc khi thay stack backend.",
        "Ghi chú khác biệt logic giúp giảm regression sau go-live.",
      ],
      processSteps: [
        "Đọc & phân tích JSP legacy",
        "Trích xuất business logic",
        "Mapping PostgreSQL",
        "Triển khai C#/.NET",
        "So sánh hệ thống cũ/mới",
        "Kiểm tra xuất Excel",
      ],
    },
  },
];

export const projectFilters = [
  "all",
  "migration",
  "web",
  "frontend",
  "backend",
  "cloud",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((left, right) => left.order - right.order);
}

export function getAdjacentProjects(slug: string) {
  const sorted = [...projects].sort((a, b) => a.order - b.order);
  const index = sorted.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }
  return {
    previous: index > 0 ? sorted[index - 1] : null,
    next: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
