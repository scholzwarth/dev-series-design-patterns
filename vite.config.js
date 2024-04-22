import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import process from 'process'; // Import the 'process' module

dotenv.config(); 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

const testConfig = process.env.REACT_APP_OPENAI_API_KEY;