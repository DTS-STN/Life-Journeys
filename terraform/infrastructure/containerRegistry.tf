resource "azurerm_container_registry" "acr" {
  name                     = "${var.application_name}CR${var.environment}"
  resource_group_name      = var.depot_resource_group
  location                 = var.location
  sku                      = "Premium"
  admin_enabled            = true
}
