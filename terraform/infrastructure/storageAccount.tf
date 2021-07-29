resource "random_string" "storageName" {
  length           = 4
  special          = false
}

resource "azurerm_storage_account" "appservice-diagnostics" {
  name                     = "${var.application_name}diag${var.environment}${lower(random_string.storageName.result)}"
  resource_group_name      = var.depot_resource_group
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
}

resource "azurerm_storage_account" "storageacct" {
  name                     = "${var.application_name}sa${var.environment}"
  resource_group_name      = var.depot_resource_group
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
}

resource "azurerm_storage_container" "container" {
  name                  = var.application_name
  storage_account_name  = azurerm_storage_account.storageacct.name
  container_access_type = "private"
}