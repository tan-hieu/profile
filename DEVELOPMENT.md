# Personal Portfolio — Developer Journey

Website portfolio cá nhân (Fresher Backend Developer) theo concept **Developer Journey**: từ hệ thống legacy → phân tích nghiệp vụ → migration → nền tảng hiện đại.

## Stack

- React 19 + Vite + TypeScript
- React Router
- Motion for React
- react-i18next (vi / en / ja / zh / ko)
- Lucide React
- Tailwind CSS 4

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:5173

```bash
npm run build
npm run preview
```

## Cấu trúc chính

- `src/data/` — profile, skills, experience, projects
- `src/locales/` — bản dịch theo namespace
- `src/pages/` — các route
- `src/components/` — UI dùng chung + theo trang

## Điểm nhận diện

1. Migration Journey Timeline (Home)
2. Before / Migration / After (Project detail)
3. Interactive Technology Map (Skills)

## Cập nhật thông tin cá nhân

Sửa `src/data/profile.ts` (tên, email, GitHub, LinkedIn, avatar, CV).

Nội dung mô tả nằm trong `src/locales/*/`.

## Routes

`/`, `/about`, `/skills`, `/experience`, `/projects`, `/projects/:slug`, `/contact`
