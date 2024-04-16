module.exports = {
  // 根目录为 true
  root: true,
  // 指定环境为浏览器
  env: { browser: true, es2020: true },
  // 扩展
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  // 忽略
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // 解析器选项
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // 设置
  settings: { react: { version: '18.2' } },
  // 插件
  plugins: ['react-refresh'],
  // 规则
  rules: {
    // 'react/jsx-no-target-blank' 关闭
    'react/jsx-no-target-blank': 'off',
    // 'react-refresh/only-export-components' 警告，允许常量导出
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
