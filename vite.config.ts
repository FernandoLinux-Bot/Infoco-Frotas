import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Por padrão, o plugin react() processa apenas arquivos .tsx e .jsx.
  // Precisamos instruir o Vite a também processar nossos arquivos de dados .ts que contêm sintaxe JSX.
  // A configuração do esbuild abaixo força o loader 'tsx' para esses arquivos específicos.
  esbuild: {
    loader: 'tsx',
    // The 'include' option for esbuild expects a regular expression.
    // The previous array of globs was incorrect. This regex ensures that
    // .ts files with JSX (like in src/data) are processed correctly.
    include: /src\/.*\.(ts|tsx)$/,
    exclude: [],
  },
  plugins: [react()],
})
