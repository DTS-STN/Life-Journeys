output "appServiceRgName" {
  value = azurerm_resource_group.appService.name
}
output "networkRgName" {
  value = azurerm_resource_group.network.name
}
output "location" {
  value = azurerm_resource_group.appService.location
}
