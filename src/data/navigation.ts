export const navigationItems = [
  { id: "home", path: "/", labelKey: "navigation.home" },
  { id: "about", path: "/about", labelKey: "navigation.about" },
  { id: "skills", path: "/skills", labelKey: "navigation.skills" },
  {
    id: "experience",
    path: "/experience",
    labelKey: "navigation.experience",
  },
  { id: "projects", path: "/projects", labelKey: "navigation.projects" },
  { id: "contact", path: "/contact", labelKey: "navigation.contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

/** Map nested routes (e.g. /projects/:slug) back to the main page sequence. */
export function resolveNavigationPathname(pathname: string): string {
  if (pathname.startsWith("/projects/")) {
    return "/projects";
  }
  return pathname;
}

export function getPageNavigation(pathname: string) {
  const resolvedPath = resolveNavigationPathname(pathname);
  const currentIndex = navigationItems.findIndex(
    (item) => item.path === resolvedPath,
  );

  if (currentIndex === -1) {
    return { previous: null, next: null, current: null };
  }

  return {
    current: navigationItems[currentIndex],
    previous: currentIndex > 0 ? navigationItems[currentIndex - 1] : null,
    next:
      currentIndex < navigationItems.length - 1
        ? navigationItems[currentIndex + 1]
        : null,
  };
}

export function isNavigationPathActive(
  pathname: string,
  itemPath: string,
): boolean {
  if (itemPath === "/") {
    return pathname === "/";
  }
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}
