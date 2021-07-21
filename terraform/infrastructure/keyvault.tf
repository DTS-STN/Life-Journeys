resource "azurerm_key_vault" "keyvault" {
  name                        = "${var.application_name}-Keyvault-${var.environment}"
  location                    = var.location
  resource_group_name         = var.depot_resource_group
  tenant_id                   = var.tenant_id

  sku_name = "standard"

  access_policy {
    tenant_id    = var.tenant_id
    object_id    = var.client_object_id
    key_permissions = [
      "Get",
      "List",
      "Create",
      "Delete"
    ]
    secret_permissions = [
      "Get",
      "List",
      "Set",
      "Delete", 
      "Purge"
    ]
  } 
}

resource "azurerm_key_vault_secret" "terraform-pass" {
  name     = "terraform-pass"
  value    = var.client_secret
  key_vault_id = azurerm_key_vault.keyvault.id
}