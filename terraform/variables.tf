
# Azure Login Settings
variable "subscription_id" {}
variable "tenant_id" {}
variable "client_id" {}
variable "client_secret" {}
variable "client_object_id" {}

#Infrastructure Settings
variable "subscription_name" {
    type = string
}
variable "location" {
    type = string
}
variable "tfstate_storage_rg" {
    type = string
}
variable "terraform_sp_name" {
    type = string
}
variable "backup_location" {
    type = string
}
variable "network_resource_group" {
    type = string
    default = ""
}
variable "depot_resource_group" {
    type = string
}
variable "appservice_resource_group" {
    type = string
    default = ""
}
variable "database_resource_group" {
    type = string
    default = ""
}
variable "remote_state_storage_account_name" {
    type = string
}
variable "cms_storage_account_name" {
    type = string
    default = ""
}
variable "cms_storage_account_key" {
    type = string
    default = ""
}
variable "cms_storage_account_url" {
    type = string
    default = ""
}
variable "application_name" {
    type = string
}
variable "environment" {
    type = string
}
variable "vnet_id" {
    type = string
    default = ""
}
variable "vnet_id_secondary" {
    type = string
    default = ""
}
variable "subnet_id" {
    type = string
    default = ""
}
variable "subnet_id_secondary" {
    type = string
    default = ""
}
variable "public_ip_id_primary" {
    type = string
    default = ""
}
variable "public_ip_id_secondary" {
    type = string
    default = ""
}
variable "primary_public_ip_fqdn" {
    type = string
    default = ""
}
variable "secondary_public_ip_fqdn" {
    type = string
    default = ""
}
variable "application_url" {
    type = string
}
variable "primary_application_appservice_hostname"{
    type = string
    default = ""
}
variable "secondary_application_appservice_hostname" {
    type = string
    default = ""
}
variable "primary_api_appservice_hostname" {
    type = string
    default = ""
}
variable "secondary_api_appservice_hostname" {
    type = string
    default = ""
}
variable "primary_admin_appservice_hostname" {
    type = string
    default = ""
}
variable "secondary_admin_appservice_hostname" {
    type = string
    default = ""
}
variable "diagnostic_storage_account_id" {
    type = string
    default = ""
}
variable "secondary_diagnostic_storage_account_id" {
    type = string
    default = ""
}
variable "docker_registry" {
    type = string
    default = ""
}
variable "docker_container" {
    type = string
    default = ""
}
variable "api_docker_container" {
    type = string
    default = ""
}
variable "admin_docker_container" {
    type = string
    default = ""
}
variable "docker_registry_username" {
    type = string
    default = ""
}
variable "docker_registry_password" {
    type = string
    default = ""
}
variable "relative_dns_name" {
    type = string
    default = ""
}
variable "healthcheck_page" {
    type = string
}
variable "domain_wildcard" {
    type = string
}
variable "database_host" {
    type = string
    default = ""
}
variable "database_port" {
    type = number
    default = 5432
}
variable "database_login" {
    type = string
    default = ""
}
variable "database_name" {
    type = string
    default = ""
}
variable "database_server" {
    type = string
    default = ""
}
variable "database_user" {
    type = string
    default = ""
}
variable "database_pass" {
    type = string
    default = ""
}
variable "api_port" {
    type = number
    default = 1337
}
variable "strapi_admin_jwt_secret"{
    type = string
    default = ""
}
variable "keyvault_id" {
    type = string
    default = ""
}
variable "MONGO_URL" {
    type = string
    default = ""
}
variable "MONGO_DB" {
    type = string
    default = ""
}
variable "admin_app_service_plan_id" {
    type = string
    default = ""
}
variable "secondary_app_service_plan_id" {
    type = string
    default = ""
}
variable "USER_SIGNUP_FRENCH_TEMPLATE_ID" {
    type = string
    default = ""
}
variable "USER_SIGNUP_ENGLISH_TEMPLATE_ID" {
    type = string
    default = ""
}
variable "USER_UNSUBSCRIBE_FRENCH_TEMPLATE_ID" {
    type = string
    default = ""
}
variable "USER_UNSUBSCRIBE_ENGLISH_TEMPLATE_ID" {
    type = string
    default = ""
}
variable "USER_SIGNUP_ENABLED" {
    type = string
    default = "true"
}
variable "NOTIFY_BASE_API_URL" {
    type = string
    default = ""
}
variable "NOTIFY_API_KEY" {
    type = string
    default = ""
}
variable "NEXT_PUBLIC_NOTIFY_REPORT_A_PROBLEM_EMAIL" {
    type = string
    default = ""
}
variable "NOTIFY_REPORT_A_PROBLEM_TEMPLATE_ID" {
    type = string
    default = ""
}