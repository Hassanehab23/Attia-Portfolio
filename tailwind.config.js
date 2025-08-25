module.exports = {
  darkMode: 'class', // يتيح التحكم بالوضع الداكن عبر كلاس
  content: [
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
