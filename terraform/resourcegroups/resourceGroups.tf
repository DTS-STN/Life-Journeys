resource "azurerm_resource_group" "network" {
  name = var.network_resource_group
  location = var.location
}

resource "azurerm_resource_group" "appService" {
  name = var.appservice_resource_group
  location = var.location
}

resource "azurerm_resource_group" "depot" {
  name = var.depot_resource_group
  location = var.location
}