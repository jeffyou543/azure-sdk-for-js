let nock = require('nock');

module.exports.hash = "1818b54b393a909a195d94f6e498629c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"AKV10000: Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '97',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/12345678-1234-1234-1234-123456789012", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '385572d2-e144-4ab4-9ef5-f51fbacb68d3',
  'x-ms-request-id',
  '259d14e1-4d1f-4f64-bbc0-37ad057c8a2c',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:41 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'aa8fce92-a977-46df-8c96-c186e9c90500',
  'x-ms-ests-server',
  '2.1.12707.9 - WUS2 ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AomKxAv8XAlFq0Ght9RqH3I; expires=Sat, 28-May-2022 00:15:42 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevru0i3xJQTTqWBsck3DF4hp6dFbqiYfoBFgONmLn92JZCC2Rnw00lLmR5aJ3V6pPRVGJiCsfdC35CazlnnwaSpkXsddDXWZ2oZoulb8H3J69KZRxyC8JBiv6z9bQ5jEE_FdYynexCDJfGrUoO1tZzmFED3RBP_qe_KHkvcNRSRioAgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:15:41 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '020957b2-c200-4d96-8644-44467e013000',
  'x-ms-ests-server',
  '2.1.12707.9 - SCUS ProdSlices',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AkoGh3QrfZFDuur1iikUd4U; expires=Sat, 28-May-2022 00:15:42 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrwGev0JCDow7ERD2bumqVlruRglxYXG7JuAKTrk_SY0GuPmF25cZqNq1fSuw996KkgqsQ1qsUZOSHpo0mc9R3NpklJ06_73ytbNtH6MF1o5hLbK2jACmCdxL6oPcVOWq0bJOs5zfV8M9lndGD-lyZxyW8qN07LNxPDxVIK3rzNA0gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:15:42 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.7.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=1e820065-99ff-487b-b67e-ff672a2bfb41&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '697fd0e9-1335-4a51-9e37-e6f678951a00',
  'x-ms-ests-server',
  '2.1.12707.9 - NCUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'X-XSS-Protection',
  '0',
  'Set-Cookie',
  'fpc=AvaPdscJcFtDkIO-rJPPLRFPlvakAQAAAK7T-9kOAAAA; expires=Sat, 28-May-2022 00:15:42 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 28 Apr 2022 00:15:42 GMT',
  'Content-Length',
  '1315'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9FitKce9FW9qV81UxAERSMK8wLpFzY8J5+fHxosDS4kIHeTBI0tf5h+ad21jUNvVMb5hCeGWBfAYK/xxxz4cFpElV/kQSanSLPDHNZL2KZr8BuA36xGZ39CJTtUrFJCHxPmsN6wFt1YiYh+SOsE3OD1a5phLbVUUEQ7xWITjrvn9CgESBbKA9OJCONbAzUEfXbMv1qRfhnuZV2o+8zWT3P/cPm2Oe7QIQX/wnydTdt9VaD2g5/bnE1xy//QoPlsFslxJpP26Og+aEqHwzOHEn3a4Eq9LANvdE72n8qFYLkhGcZ5JSEvBtu4hp9bmxQZl/wCbkDSIIJRw1pdj+3AgNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBADQMlbnUZTdfoAZkwlnydwi3FfUFtduMZQLvg5Dh/R90pHvant8qv7ntGUZA0va9OuMyRDqFoCdUBs7lPGfRo8m/nPdCfOebNZEDGMxrSQ5Masp03SUpGXK60wAVVW584mKev1b1Rsy7RB4/bwWzOIN3gdUkwFg8iCLqdprQGDj/T/T/7sQ0x3SO0VSWPPhcUgN1GuEZjlXr3uydEtwwJmXccT5A+yt5PJpxTwftBktRx3klzI6F7hcI0Ue40LMD6vWIPHBkpzK6Z2MqetZA3nErDNm4DV8Ey0sBG0v3XrbIpvhEbBFNHUSmBJmi8VQJvFyeGAW/a/1xhtAqUnkcm5g=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"ee088a71ed1a452488a856d9684a00fe"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending?api-version=7.3&request_id=ee088a71ed1a452488a856d9684a00fe',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '385572d2-e144-4ab4-9ef5-f51fbacb68d3',
  'x-ms-request-id',
  '0a483e5c-241b-449d-943b-a0812da0bf07',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1775;da_age=1775;rd_age=1775;brd_age=12569;ra_notif_age=2245;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:42 GMT',
  'Content-Length',
  '1369'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9FitKce9FW9qV81UxAERSMK8wLpFzY8J5+fHxosDS4kIHeTBI0tf5h+ad21jUNvVMb5hCeGWBfAYK/xxxz4cFpElV/kQSanSLPDHNZL2KZr8BuA36xGZ39CJTtUrFJCHxPmsN6wFt1YiYh+SOsE3OD1a5phLbVUUEQ7xWITjrvn9CgESBbKA9OJCONbAzUEfXbMv1qRfhnuZV2o+8zWT3P/cPm2Oe7QIQX/wnydTdt9VaD2g5/bnE1xy//QoPlsFslxJpP26Og+aEqHwzOHEn3a4Eq9LANvdE72n8qFYLkhGcZ5JSEvBtu4hp9bmxQZl/wCbkDSIIJRw1pdj+3AgNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBADQMlbnUZTdfoAZkwlnydwi3FfUFtduMZQLvg5Dh/R90pHvant8qv7ntGUZA0va9OuMyRDqFoCdUBs7lPGfRo8m/nPdCfOebNZEDGMxrSQ5Masp03SUpGXK60wAVVW584mKev1b1Rsy7RB4/bwWzOIN3gdUkwFg8iCLqdprQGDj/T/T/7sQ0x3SO0VSWPPhcUgN1GuEZjlXr3uydEtwwJmXccT5A+yt5PJpxTwftBktRx3klzI6F7hcI0Ue40LMD6vWIPHBkpzK6Z2MqetZA3nErDNm4DV8Ey0sBG0v3XrbIpvhEbBFNHUSmBJmi8VQJvFyeGAW/a/1xhtAqUnkcm5g=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"ee088a71ed1a452488a856d9684a00fe"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'f0022ca7-af42-42fb-a20e-048fe18c5bdb',
  'x-ms-request-id',
  '1416a98d-ce8f-4304-86ea-ebf34a7722d5',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1776;da_age=1776;rd_age=1776;brd_age=12569;ra_notif_age=2246;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:42 GMT',
  'Content-Length',
  '1369'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9FitKce9FW9qV81UxAERSMK8wLpFzY8J5+fHxosDS4kIHeTBI0tf5h+ad21jUNvVMb5hCeGWBfAYK/xxxz4cFpElV/kQSanSLPDHNZL2KZr8BuA36xGZ39CJTtUrFJCHxPmsN6wFt1YiYh+SOsE3OD1a5phLbVUUEQ7xWITjrvn9CgESBbKA9OJCONbAzUEfXbMv1qRfhnuZV2o+8zWT3P/cPm2Oe7QIQX/wnydTdt9VaD2g5/bnE1xy//QoPlsFslxJpP26Og+aEqHwzOHEn3a4Eq9LANvdE72n8qFYLkhGcZ5JSEvBtu4hp9bmxQZl/wCbkDSIIJRw1pdj+3AgNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBADQMlbnUZTdfoAZkwlnydwi3FfUFtduMZQLvg5Dh/R90pHvant8qv7ntGUZA0va9OuMyRDqFoCdUBs7lPGfRo8m/nPdCfOebNZEDGMxrSQ5Masp03SUpGXK60wAVVW584mKev1b1Rsy7RB4/bwWzOIN3gdUkwFg8iCLqdprQGDj/T/T/7sQ0x3SO0VSWPPhcUgN1GuEZjlXr3uydEtwwJmXccT5A+yt5PJpxTwftBktRx3klzI6F7hcI0Ue40LMD6vWIPHBkpzK6Z2MqetZA3nErDNm4DV8Ey0sBG0v3XrbIpvhEbBFNHUSmBJmi8VQJvFyeGAW/a/1xhtAqUnkcm5g=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"ee088a71ed1a452488a856d9684a00fe"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '0',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  'adfef59d-cffc-40d8-bed6-124fd96facf7',
  'x-ms-request-id',
  'c7766863-7d8a-44aa-a575-b16db45a9fe6',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1776;da_age=1776;rd_age=1776;brd_age=12569;ra_notif_age=2246;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:42 GMT',
  'Content-Length',
  '1369'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA9FitKce9FW9qV81UxAERSMK8wLpFzY8J5+fHxosDS4kIHeTBI0tf5h+ad21jUNvVMb5hCeGWBfAYK/xxxz4cFpElV/kQSanSLPDHNZL2KZr8BuA36xGZ39CJTtUrFJCHxPmsN6wFt1YiYh+SOsE3OD1a5phLbVUUEQ7xWITjrvn9CgESBbKA9OJCONbAzUEfXbMv1qRfhnuZV2o+8zWT3P/cPm2Oe7QIQX/wnydTdt9VaD2g5/bnE1xy//QoPlsFslxJpP26Og+aEqHwzOHEn3a4Eq9LANvdE72n8qFYLkhGcZ5JSEvBtu4hp9bmxQZl/wCbkDSIIJRw1pdj+3AgNQIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBADQMlbnUZTdfoAZkwlnydwi3FfUFtduMZQLvg5Dh/R90pHvant8qv7ntGUZA0va9OuMyRDqFoCdUBs7lPGfRo8m/nPdCfOebNZEDGMxrSQ5Masp03SUpGXK60wAVVW584mKev1b1Rsy7RB4/bwWzOIN3gdUkwFg8iCLqdprQGDj/T/T/7sQ0x3SO0VSWPPhcUgN1GuEZjlXr3uydEtwwJmXccT5A+yt5PJpxTwftBktRx3klzI6F7hcI0Ue40LMD6vWIPHBkpzK6Z2MqetZA3nErDNm4DV8Ey0sBG0v3XrbIpvhEbBFNHUSmBJmi8VQJvFyeGAW/a/1xhtAqUnkcm5g=","cancellation_requested":false,"status":"completed","target":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0","request_id":"ee088a71ed1a452488a856d9684a00fe"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '973fdcb3-c110-431c-b7d5-00f49100641a',
  'x-ms-request-id',
  'be07c920-2355-48a7-81cf-1fd15fb0e17f',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1786;da_age=1786;rd_age=1786;brd_age=12579;ra_notif_age=2256;dec_lev=0;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:52 GMT',
  'Content-Length',
  '1365'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/373ae87c05b64e929b2cb72aef80c835","kid":"https://keyvault_name.vault.azure.net/keys/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/373ae87c05b64e929b2cb72aef80c835","sid":"https://keyvault_name.vault.azure.net/secrets/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/373ae87c05b64e929b2cb72aef80c835","x5t":"XLfNVWHz-lfkkJT_SxkeKUWrR5g","cer":"MIIDKDCCAhCgAwIBAgIQLAYJ7EsLR6+Gaf0K94eSgjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDEwZNeUNlcnQwHhcNMjIwNDI4MDAwNTQ5WhcNMjMwNDI4MDAxNTQ5WjARMQ8wDQYDVQQDEwZNeUNlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQD0WK0px70Vb2pXzVTEARFIwrzAukXNjwnn58fGiwNLiQgd5MEjS1/mH5p3bWNQ29UxvmEJ4ZYF8Bgr/HHHPhwWkSVX+RBJqdIs8Mc1kvYpmvwG4DfrEZnf0IlO1SsUkIfE+aw3rAW3ViJiH5I6wTc4PVrmmEttVRQRDvFYhOOu+f0KARIFsoD04kI41sDNQR9dsy/WpF+Ge5lXaj7zNZPc/9w+bY57tAhBf/CfJ1N231VoPaDn9ucTXHL/9Cg+WwWyXEmk/bo6D5oSofDM4cSfdrgSr0sA290TvafyoVguSEZxnklIS8G27iGn1ubFBmX/AJuQNIgglHDWl2P7cCA1AgMBAAGjfDB6MA4GA1UdDwEB/wQEAwIFoDAJBgNVHRMEAjAAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAfBgNVHSMEGDAWgBSpmZlMrDa+ji6vuD1GFfMpSFlasjAdBgNVHQ4EFgQUqZmZTKw2vo4ur7g9RhXzKUhZWrIwDQYJKoZIhvcNAQELBQADggEBACElMmm3ipgR7nnHgjm/o8vaOXsu7+wv9Mzout2l3ZNalcchZqRk8a5QyhAoJFYBEoD0oEBCJwkxsMqKQWOAE8LmMc6fLud66Dg8k0aSbe+MVIumGdE/bmrUOxx+RQTttnQkdJnO+WMfTE6kQxfl/wG3nyeLpOe3musIevt4EHE+danG7I6Kew4RA9lbHhX2eY5ZzokW7ez5PfhkXUDl80Dz3KWxsHFzCPL+B8zYTxOROwBHWA7+u8mEFbh3TOPaRVyiWNnnTwEgtLugq2JslcXKK3fGQLgtm4B+7gEbeUwtddqRE/HMjv8Q+F51H5dgREy6rl3HixM2K5mMV5dbnRs=","attributes":{"enabled":true,"nbf":1651104349,"exp":1682640949,"created":1651104949,"updated":1651104949,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"cn=MyCert","sans":{},"ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":12,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"AutoRenew"}}],"issuer":{"name":"Self"},"attributes":{"enabled":true,"created":1651104943,"updated":1651104943}},"pending":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/pending"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '7755b3ff-8bfc-449a-8e53-162759dd4390',
  'x-ms-request-id',
  'ef6c0da1-5db0-40b7-8c2a-4ebfb0eca0ba',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1786;da_age=1786;rd_age=1786;brd_age=12579;ra_notif_age=2256;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:52 GMT',
  'Content-Length',
  '2744'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"AKV10000: Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '97',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/12345678-1234-1234-1234-123456789012", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '2487893b-341f-4bee-832f-a15bdd731e4e',
  'x-ms-request-id',
  '5f992f2d-6b37-4280-89d2-257c96e9e4b3',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:53 GMT'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/secrets/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/')
  .query(true)
  .reply(200, {"value":"YmFzZTY0X3BsYWNlaG9sZGVy","contentType":"application/x-pkcs12","id":"https://keyvault_name.vault.azure.net/secrets/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/373ae87c05b64e929b2cb72aef80c835","managed":true,"attributes":{"enabled":true,"nbf":1651104349,"exp":1682640949,"created":1651104949,"updated":1651104949,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"kid":"https://keyvault_name.vault.azure.net/keys/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-0/373ae87c05b64e929b2cb72aef80c835"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '2487893b-341f-4bee-832f-a15bdd731e4e',
  'x-ms-request-id',
  '52661047-84d0-4796-9b3d-dce2e1b3e8f3',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1786;da_age=1786;rd_age=1786;brd_age=12579;ra_notif_age=2256;dec_lev=2;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:53 GMT',
  'Content-Length',
  '4104'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-1/import', {"value":"YmFzZTY0X3BsYWNlaG9sZGVy"})
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-1/0831fd45ad134ffdb037d8cfd41de422","kid":"https://keyvault_name.vault.azure.net/keys/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-1/0831fd45ad134ffdb037d8cfd41de422","sid":"https://keyvault_name.vault.azure.net/secrets/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-1/0831fd45ad134ffdb037d8cfd41de422","x5t":"XLfNVWHz-lfkkJT_SxkeKUWrR5g","cer":"MIIDKDCCAhCgAwIBAgIQLAYJ7EsLR6+Gaf0K94eSgjANBgkqhkiG9w0BAQsFADARMQ8wDQYDVQQDEwZNeUNlcnQwHhcNMjIwNDI4MDAwNTQ5WhcNMjMwNDI4MDAxNTQ5WjARMQ8wDQYDVQQDEwZNeUNlcnQwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQD0WK0px70Vb2pXzVTEARFIwrzAukXNjwnn58fGiwNLiQgd5MEjS1/mH5p3bWNQ29UxvmEJ4ZYF8Bgr/HHHPhwWkSVX+RBJqdIs8Mc1kvYpmvwG4DfrEZnf0IlO1SsUkIfE+aw3rAW3ViJiH5I6wTc4PVrmmEttVRQRDvFYhOOu+f0KARIFsoD04kI41sDNQR9dsy/WpF+Ge5lXaj7zNZPc/9w+bY57tAhBf/CfJ1N231VoPaDn9ucTXHL/9Cg+WwWyXEmk/bo6D5oSofDM4cSfdrgSr0sA290TvafyoVguSEZxnklIS8G27iGn1ubFBmX/AJuQNIgglHDWl2P7cCA1AgMBAAGjfDB6MA4GA1UdDwEB/wQEAwIFoDAJBgNVHRMEAjAAMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAfBgNVHSMEGDAWgBSpmZlMrDa+ji6vuD1GFfMpSFlasjAdBgNVHQ4EFgQUqZmZTKw2vo4ur7g9RhXzKUhZWrIwDQYJKoZIhvcNAQELBQADggEBACElMmm3ipgR7nnHgjm/o8vaOXsu7+wv9Mzout2l3ZNalcchZqRk8a5QyhAoJFYBEoD0oEBCJwkxsMqKQWOAE8LmMc6fLud66Dg8k0aSbe+MVIumGdE/bmrUOxx+RQTttnQkdJnO+WMfTE6kQxfl/wG3nyeLpOe3musIevt4EHE+danG7I6Kew4RA9lbHhX2eY5ZzokW7ez5PfhkXUDl80Dz3KWxsHFzCPL+B8zYTxOROwBHWA7+u8mEFbh3TOPaRVyiWNnnTwEgtLugq2JslcXKK3fGQLgtm4B+7gEbeUwtddqRE/HMjv8Q+F51H5dgREy6rl3HixM2K5mMV5dbnRs=","attributes":{"enabled":true,"nbf":1651104349,"exp":1682640949,"created":1651104953,"updated":1651104953,"recoveryLevel":"CustomizedRecoverable+Purgeable","recoverableDays":7},"policy":{"id":"https://keyvault_name.vault.azure.net/certificates/mergeCertificateName-canimportacertificatefromacertificatesnonbase64secretvalue-1/policy","key_props":{"exportable":true,"kty":"RSA","key_size":2048,"reuse_key":false},"secret_props":{"contentType":"application/x-pkcs12"},"x509_props":{"subject":"CN=MyCert","ekus":["1.3.6.1.5.5.7.3.1","1.3.6.1.5.5.7.3.2"],"key_usage":["digitalSignature","keyEncipherment"],"validity_months":13,"basic_constraints":{"ca":false}},"lifetime_actions":[{"trigger":{"lifetime_percentage":80},"action":{"action_type":"EmailContacts"}}],"issuer":{"name":"Unknown"},"attributes":{"enabled":true,"created":1651104953,"updated":1651104953}}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'x-ms-keyvault-region',
  'westus2',
  'x-ms-client-request-id',
  '9f200330-df64-492f-9829-8481e6642744',
  'x-ms-request-id',
  'e3d6bc45-78b5-48ce-a483-3c475804c875',
  'x-ms-keyvault-service-version',
  '1.9.378.1',
  'x-ms-keyvault-network-info',
  'conn_type=Ipv4;addr=131.107.147.44;act_addr_fam=InterNetwork;',
  'x-ms-keyvault-rbac-assignment-id',
  '0cc3cf84-3de1-5005-ab06-0ef4d04fa1de',
  'x-ms-keyvault-rbac-cache',
  'ra_age=1786;da_age=1786;rd_age=1786;brd_age=12579;ra_notif_age=2256;dec_lev=1;',
  'X-Content-Type-Options',
  'nosniff',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'Date',
  'Thu, 28 Apr 2022 00:15:53 GMT',
  'Content-Length',
  '2564'
]);
