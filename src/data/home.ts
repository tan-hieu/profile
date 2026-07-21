/**
 * ═══════════════════════════════════════════════════════════════
 *  TRANG CHỦ — Sửa nội dung trực tiếp tại đây (tiếng Việt).
 *  Ngôn ngữ khác: src/locales/{en,ja,zh,ko}/home.json
 * ═══════════════════════════════════════════════════════════════
 */

export const homeContent = {
  role: "Backend Developer",
  intro:
    "Tôi xây dựng sản phẩm backend và full-stack, từ thiết kế API, dữ liệu, thanh toán, video streaming đến phân tích và hiện đại hóa hệ thống đang vận hành.",
  stats: [
    { value: "3+", label: "Dự án sản phẩm & hệ thống" },
    { value: "3+", label: "Dự án cá nhân & portfolio" },
    { value: "6+", label: "Nền tảng & stack đã làm việc" },
  ],
  journey: {
    title: "Cách tôi phát triển một sản phẩm",
    description:
      "Một quy trình xuyên suốt từ hiểu bài toán đến xây dựng, kiểm chứng và cải tiến sản phẩm.",
    steps: [
      "Hiểu bài toán",
      "Thiết kế giải pháp",
      "Xây dựng",
      "Kiểm chứng",
      "Cải tiến",
    ],
  },
  capabilities: {
    eyebrow: "Tôi có thể đóng góp",
    title: "Từ nền tảng kỹ thuật đến một sản phẩm hoàn chỉnh.",
    description:
      "Ba nhóm năng lực tôi tập trung phát triển và đã đưa vào các dự án thực tế hoặc sản phẩm cá nhân.",
    items: [
      {
        title: "Backend & dữ liệu",
        body: "Thiết kế API, xử lý nghiệp vụ, làm việc với PostgreSQL và tổ chức code để hệ thống dễ kiểm tra, mở rộng và bảo trì.",
      },
      {
        title: "Tư duy sản phẩm",
        body: "Nhìn chức năng trong toàn bộ hành trình người dùng, kết nối frontend, backend, thanh toán và nội dung thay vì chỉ hoàn thành một API riêng lẻ.",
      },
      {
        title: "Triển khai & kiểm chứng",
        body: "Kiểm tra dữ liệu đầu ra, xử lý webhook, luồng cloud và đối chiếu hành vi để sản phẩm vận hành đúng trong điều kiện thực tế.",
      },
    ],
  },
  story: {
    eyebrow: "Con người phía sau sản phẩm",
    title: "Tò mò với bài toán, nghiêm túc với từng chi tiết.",
    body: "Tôi thích tìm hiểu cách một hệ thống thực sự vận hành, biến yêu cầu thành luồng xử lý rõ ràng và từng bước hoàn thiện sản phẩm.",
    action: "Xem câu chuyện của tôi",
  },
  gallery: {
    workspace: "Không gian làm việc",
    project: "Một khoảnh khắc cùng dự án",
  },
  closing: {
    title: "Sẵn sàng cho những bài toán tiếp theo.",
    body: "Tôi mong muốn tham gia một đội ngũ nơi mình có thể tiếp tục phát triển năng lực backend, đóng góp vào sản phẩm thực tế và học hỏi từ những kỹ sư giàu kinh nghiệm.",
    action: "Trao đổi với tôi",
  },
  featured: {
    title: "Dự án nổi bật",
    description:
      "Sản phẩm full-stack mới cùng các dự án hiện đại hóa hệ thống đã tham gia trong môi trường thực tế.",
  },
} as const;
