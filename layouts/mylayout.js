/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
export default props => (
  <ThemeProvider
    theme={{
      styles: {
        // style child elements
        h1: {
          fontSize: [5, 6, 7],
        },
      },
    }}>
    <div
      {...props}
      sx={{
        // swap colors for an inverted effect
        color: 'background',
        bg: 'primary',
        px: 3,
        py: 4,
      }}
    />
  </ThemeProvider>
)