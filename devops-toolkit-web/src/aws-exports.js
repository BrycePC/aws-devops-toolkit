/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  "aws_project_region": "ap-southeast-2",
  "aws_cognito_region": "ap-southeast-2",
  "aws_user_pools_id": "{USERPOOL_ID}",
  "aws_user_pools_web_client_id": "{USERPOOL_WEBCLIENTID}",
  "oauth": {
    "domain": "{AUTH_SUBDOMAIN}.auth.ap-southeast-2.amazoncognito.com",
    "scope": [
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin"
    ],
    "redirectSignIn": "https://{BASE_URL}/login/",
    "redirectSignOut": "https://{BASE_URL}/login/",
    "responseType": "code"
  },
  "federationTarget": "COGNITO_USER_POOLS",
  "aws_cognito_username_attributes": [
    "EMAIL"
  ],
  "aws_cognito_social_providers": [],
  "aws_cognito_signup_attributes": [
    "EMAIL",
    "FAMILY_NAME",
    "GIVEN_NAME"
  ],
  "aws_cognito_mfa_configuration": "ON",
  "aws_cognito_mfa_types": [
    "TOTP"
  ],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": "12",
    "passwordPolicyCharacters": [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS"
    ]
  },
  "aws_cognito_verification_mechanisms": [
    "EMAIL"
  ],
  "aws_cloud_logic_custom": [
    {
      "name": "AdminQueries",
      "endpoint": "https://{REDUNDANT_API}.execute-api.ap-southeast-2.amazonaws.com/dev",
      "region": "ap-southeast-2"
    }
  ]
};


export default awsmobile;