/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    const compilerConfig = {
      styledComponents: true,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        // prod 환경에서 testid 속성 제거
        reactRemoveProperties: { properties: ['^data-testid$'] },
      };
    }

    return compilerConfig;
  })(),
  async rewrites() {
    return [
      {
        // cors 프록시 설정
        source: `${process.env.NEXT_PUBLIC_API_BASE_PATH}/:match*`,
        destination: `${process.env.API_BASE_URL}/:match*`,
      },
    ];
  },
};

module.exports = nextConfig;
