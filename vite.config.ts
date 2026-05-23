import { cpSync, existsSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const resumeSrc = resolve(__dirname, 'Resume/Resume.pdf')
const resumeDest = resolve(__dirname, 'public/resume/Resume.pdf')

function copyResume(): Plugin {
  const copy = () => {
    if (!existsSync(resumeSrc)) return
    mkdirSync(resolve(__dirname, 'public/resume'), { recursive: true })
    cpSync(resumeSrc, resumeDest)
  }
  return {
    name: 'copy-resume',
    buildStart: copy,
    configureServer: copy,
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyResume()],
})
