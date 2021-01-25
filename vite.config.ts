import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';


const config: UserConfig = {
  alias: {
    '/@/': resolve(__dirname, 'src'),
  },
  plugins: [vue()]
}
export default config;