module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'c2f8701bf4448d7b2229d049dbc71356'),
    },
  },
  logger: {
    level: "debug",
    // ログをファイルに書き出す場合
    // ファイル名やパスは自分で指定してください
    // ログディレクトリがない場合は作成してください
    // ログファイルのフォーマットは "YYYY-MM-DD-HH:mm:ss"
    // ログファイルは1日ごとに切り替わります
    logs: [
      { level: "info", path: "../logs/strapi-info.log" },
      { level: "error", path: "../logs/strapi-error.log" },
      { level: "warn", path: "../logs/strapi-warn.log" },
      { level: "debug", path: "../logs/strapi-debug.log" },
      { level: "trace", path: "../logs/strapi-trace.log" },
    ],
  },
});
