export function getColorFromTheme(theme, color) {
  if (theme.colors[color]) return theme.colors[color]
  return color
}
export function getColorFromAppearance(theme, appearance, weight) {
  const color = `${appearance}${weight}`
  if (theme.colors[color]) return theme.colors[color]
  return "invalid"
}
