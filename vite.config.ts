import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The esbuild configuration has been moved to the top level. This is the correct syntax in Vite.
  // The 'esbuild' option is not a valid property for the `react()` plugin, which caused the error.
  esbuild: {
    // The 'tsx' loader rule instructs Vite to process files with JSX.
    // This is necessary for the files in `src/data` that use `React.createElement`.
    loader: 'tsx',
    // 'include' restricts this rule only to .ts files within the `src/data` folder,
    // ensuring that other .ts files are not affected.
    include: /src\/data\/.*\.ts$/,
  },
})
