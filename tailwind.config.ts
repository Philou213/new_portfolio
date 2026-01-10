import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
        colors: {
          // Brand / primary actions
          main: '#34D399',        // emerald-400
          mainHover: '#10B981',   // emerald-500
          mainMuted: '#065F46',   // emerald-800

          // Text
          text: {
            primary: '#F9FAFB',   // near-white, main text
            secondary: '#D1D5DB', // gray-300, subtitles
            muted: '#9CA3AF',     // gray-400, meta / dates
            disabled: '#6B7280',  // gray-500
          },

          // Backgrounds
          bg: {
            DEFAULT: '#0B0F19',   // near-black, main background
            surface: '#111827',   // gray-900, cards / sections
            surfaceHover: '#1F2933', // slightly lighter hover
            elevated: '#020617',  // extra depth (modals)
          },

          // Borders & outlines
          border: {
            DEFAULT: '#1F2937',   // gray-800
            subtle: '#374151',    // gray-700
            focus: '#34D399',     // same as main
          },

          // States
          hover: '#E5E7EB',       // gray-200 (used on light elements only)
          danger: '#EF4444',     // red-500
          warning: '#F59E0B',    // amber-500
      }
    },
  },
}
