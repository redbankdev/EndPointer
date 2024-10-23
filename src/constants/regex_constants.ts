export const REL_REGEX = /["']((\/|(\w+\/))[\w./\-_?=&]*)["']/g;
export const ABS_REGEX = /(https?:\/\/[^\s'"){}(]+)/g;
export const CLASS_REGEX = {
    "APIEndpoint": "(/api/|/v[0-9]+/|\\bapi\\b)(?!\\.(jpg|png|gif|css|js)\\b)",
    "AuthenticationEndpoint": "(/auth/|/login|/logout|/signin|/signup|/register|/forgot-password|/reset-password)",
    "DataTransfer": "(/data/|/transfer/|/sync/|/import|/export)",
    "DatabaseOperation": "(/db/|/query/|/sql/|/graphql)",
    "AdminPanel": "(/admin/|/dashboard/|/manage/|/control/|/panel/)",
    "UserDataAccess": "(/user/|/profile/|/account/|/settings/)",
    "PaymentProcessing": "(/payment/|/checkout/|/billing/|/invoice/|/cart/)",
    "FileAccess": "(/file/|/download/|/upload/|/document/|/attachment/)",
    "LegacyEndpoint": "(/legacy/|/old/|/deprecated/|/archive/)",
    "DynamicContent": "(/dynamic/|/load/|/fetch/|/render/)",
    "WebSocket": "(wss?:\\/\\/|/socket/|/ws/)",
    "InternalNetwork": "(//[^/]+\\.internal\\.|//10\\.|//172\\.(1[6-9]|2[0-9]|3[0-1])\\.|//192\\.168\\.)",
    "ThirdPartyIntegration": "(/connect/|/oauth/|/integrate/|/webhook/)",
    "DebugEndpoint": "(/debug/|/test/|/dev/|/staging/)",
    "PotentiallyVulnerable": "(/exec/|/eval/|/cmd/|/shell/|/ping/|/proxy/)",
    "SensitiveData": "(/backup/|/log/|/config/|/setup/|/install/)",
    "UnsecuredAPI": "(/api/.*\\?(.*&)?key=|/open-api/)",
    "ParameterizedEndpoint": "(/.*\\?.*=.*&?)",
    "NonStandardPort": "(:\\d{2,5}(?!/))(?!:80|:443\\b)",
    "Base64EncodedSegment": "(/[a-zA-Z0-9+/]{20,}={0,2}(?:/|$))"
  }