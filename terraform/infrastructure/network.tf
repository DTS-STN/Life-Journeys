resource "azurerm_virtual_network" "appservice_vnet" {
  name                = "appservice_vnet-${var.environment}"
  resource_group_name = var.network_resource_group
  location            = var.location
  address_space       = ["10.254.0.0/16"]
}

resource "azurerm_subnet" "frontend" {
  name                 = "subnet-frontend-${var.environment}"
  resource_group_name  = var.network_resource_group
  virtual_network_name = azurerm_virtual_network.appservice_vnet.name
  address_prefixes     = ["10.254.0.0/24"]
  service_endpoints    = ["Microsoft.Web"]
}


resource "azurerm_public_ip" "appgateway_publicip_primary" {
  name                = "appgateway_publicip_primary-${var.environment}"
  resource_group_name = var.network_resource_group
  location            = var.location
  allocation_method   = "Static"
  sku                 = "Standard"
  domain_name_label   = "${var.application_name}-ip-fqdn-${var.environment}"
}


