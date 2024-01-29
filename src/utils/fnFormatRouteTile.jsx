export function formatRouteTitle(route) {
  // Elimina el "/" y divide la ruta en segmentos
  const segments = route.split("/").filter(Boolean);

  // Toma el último valor después de los "/"
  const lastSegment = segments[segments.length - 1];

  // Reemplaza los guiones con espacios
  const formattedTitle = lastSegment.replace(/-/g, " ");

  // Capitaliza la primera letra de cada palabra
  const capitalizedTitle = formattedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedTitle;
}
