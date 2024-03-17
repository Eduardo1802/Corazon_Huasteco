export function formatRouteTitle(route) {
  const segments = route.split("/").filter(Boolean); // Elimina el "/" y divide la ruta en segmentos
  const lastSegment = segments[segments.length - 1]; // Toma el último valor después de los "/"
  const formattedTitle = lastSegment.replace(/-/g, " ");// Reemplaza los guiones con espacios
  // Capitaliza la primera letra de cada palabra
  const capitalizedTitle = formattedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return capitalizedTitle;
}