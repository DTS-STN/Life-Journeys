output "primaryAppServiceHostname" {
  value = azurerm_app_service.app-service-primary.default_site_hostname
}
