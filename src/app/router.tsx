import { lazy, Suspense, type ReactNode } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { HomePage } from "@/pages/HomePage";

const AboutPage = lazy(() =>
  import("@/pages/AboutPage").then((module) => ({ default: module.AboutPage })),
);
const SkillsPage = lazy(() =>
  import("@/pages/SkillsPage").then((module) => ({
    default: module.SkillsPage,
  })),
);
const ExperiencePage = lazy(() =>
  import("@/pages/ExperiencePage").then((module) => ({
    default: module.ExperiencePage,
  })),
);
const ProjectsPage = lazy(() =>
  import("@/pages/ProjectsPage").then((module) => ({
    default: module.ProjectsPage,
  })),
);
const ProjectDetailPage = lazy(() =>
  import("@/pages/ProjectDetailPage").then((module) => ({
    default: module.ProjectDetailPage,
  })),
);
const ContactPage = lazy(() =>
  import("@/pages/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function withSuspense(element: ReactNode) {
  return <Suspense fallback={<LoadingScreen />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "skills", element: withSuspense(<SkillsPage />) },
      { path: "experience", element: withSuspense(<ExperiencePage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      {
        path: "projects/:slug",
        element: withSuspense(<ProjectDetailPage />),
      },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "404", element: withSuspense(<NotFoundPage />) },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
]);
